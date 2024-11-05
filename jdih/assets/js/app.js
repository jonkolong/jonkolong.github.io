const { createApp, ref, computed, watch } = Vue;

createApp({
    setup() {
        // Define reactive references
        const data = ref([]);
        const selectedTipe = ref('');
        const selectedJenis = ref('');
        const selectedTahun = ref('');
        const keyword = ref('');
        const itemsPerPage = ref(6);
        const currentPage = ref(1);
        const isSearched = ref(false);
        const documentIcons = ref({});

        // Define options for filtering
        const tipeOptions = ref([]);
        const jenisOptions = ref([]);

        // Compute unique years from data, sorted from newest to oldest
        const uniqueTahun = computed(() => {
            const years = data.value.map(item => item.tahun_pengundangan);
            return [...new Set(years)].sort((a, b) => b - a); // Sort in descending order
        });

        // Function to fetch data from API
        const fetchData = async () => {
            try {
                // Fetch hukum data
                const hukumResponse = await axios.get('https://website.kickymaulana.com/api/produk-hukum?tahun=semua&jenis_id=semua&tipe_id=semua&limit=10&cari=');
                data.value = hukumResponse.data.data;

                // Log for debugging
                console.log("Hukum Data fetched:", data.value);

                // Check if 'status' exists for each item
                data.value.forEach(item => {
                    if (!item.status) {
                        console.warn("Item tidak memiliki status:", item);
                    }
                });

                // Extract unique tipe options from hukum data
                tipeOptions.value = [...new Set(data.value.map(item => item.tipe).filter(tipe => tipe))];

                // Fetch document types and icons
                const iconResponse = await axios.get('https://website.kickymaulana.com/api/produk-hukum-tipe');
                iconResponse.data.data.forEach(item => {
                    documentIcons.value[item.tipe] = item.icon; // Assuming `icon` is the field that contains the icon URL
                });

                console.log("Document Icons fetched:", documentIcons.value);

            } catch (error) {
                console.error('Failed to fetch data:', error);
                alert('Gagal mengambil data. Silakan coba lagi nanti.');
            }
        };

        // Function to trigger search and reset pagination
        const searchData = () => {
            isSearched.value = true;
            currentPage.value = 1;
        };

        // Computed property to filter data based on search criteria
        const filteredData = computed(() => {
            let filtered = data.value;

            // Filter berdasarkan keyword, tipe, jenis, dan tahun
            if (keyword.value) {
                filtered = filtered.filter(item => 
                    item.judul.toLowerCase().includes(keyword.value.toLowerCase())
                );
            }
            if (selectedTipe.value) {
                filtered = filtered.filter(item => item.tipe === selectedTipe.value);
            }
            if (selectedJenis.value) {
                filtered = filtered.filter(item => item.jenis === selectedJenis.value);
            }
            if (selectedTahun.value) {
                filtered = filtered.filter(item => item.tahun_pengundangan === selectedTahun.value);
            }

            // Hilangkan kata 'Kabupaten' pada teuBadan jika jenis adalah 'Peraturan Bupati'
            filtered = filtered.map(item => {
                if (item.jenis === 'Peraturan Bupati') {
                    return {
                        ...item,
                        teuBadan: item.teuBadan.replace(/Kabupaten\s*/i, '') // Menghilangkan 'Kabupaten' (case-insensitive)
                    };
                }
                return item;
            });

            // Pagination
            const start = (currentPage.value - 1) * itemsPerPage.value;
            return filtered.slice(start, start + itemsPerPage.value);
        });

        // Computed property to calculate total pages based on filtered data
        const totalPages = computed(() => {
            const filtered = data.value.filter(item => {
                return (
                    (!keyword.value || item.judul.toLowerCase().includes(keyword.value.toLowerCase())) &&
                    (!selectedTipe.value || item.tipe === selectedTipe.value) &&
                    (!selectedJenis.value || item.jenis === selectedJenis.value) &&
                    (!selectedTahun.value || item.tahun_pengundangan === selectedTahun.value)
                );
            });
            return Math.ceil(filtered.length / itemsPerPage.value);
        });

        // Function to handle page change
        const changePage = (page) => {
            if (page >= 1 && page <= totalPages.value) {
                currentPage.value = page;
            }
        };

        // Watcher to update jenisOptions based on selectedTipe
        watch(selectedTipe, (newTipe) => {
            jenisOptions.value = [...new Set(data.value
                .filter(item => item.tipe === newTipe)
                .map(item => item.jenis)
            )];
            selectedJenis.value = ''; // Reset jenis when tipe changes
        });

        // Computed properties to calculate totals for each document type
        const totalPeraturan = computed(() => {
            return data.value.filter(item => item.tipe === 'Peraturan').length;
        });

        const totalMonografi = computed(() => {
            return data.value.filter(item => item.tipe === 'Monografi').length;
        });

        const totalArtikel = computed(() => {
            return data.value.filter(item => item.tipe === 'Artikel').length;
        });

        const totalPutusan = computed(() => {
            return data.value.filter(item => item.tipe === 'Putusan').length;
        });

        // Call fetchData on component mount to load data
        fetchData();

        // Return reactive data and functions to the template
        return {
            selectedTipe,
            selectedJenis,
            selectedTahun,
            keyword,
            data,
            filteredData,
            totalPages,
            currentPage,
            uniqueTahun,
            fetchData,
            searchData,
            changePage,
            isSearched,
            itemsPerPage,
            tipeOptions,
            jenisOptions,
            totalPeraturan,
            totalMonografi,
            totalArtikel,
            totalPutusan,
            documentIcons
        };
    },
}).mount('#app');
