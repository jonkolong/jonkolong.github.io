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
                const response = await axios.get('https://website.kickymaulana.com/api/produk-hukum?tahun=semua&jenis_id=semua&tipe_id=semua&limit=10&cari=');
                data.value = response.data.data;
                
                console.log("Data fetched:", data.value);

                // Extract unique tipe and jenis options from data
                tipeOptions.value = [...new Set(data.value.map(item => item.tipe).filter(tipe => tipe))];
                jenisOptions.value = [...new Set(data.value.map(item => item.jenis).filter(jenis => jenis))];
                
                console.log("Extracted Tipe Options:", tipeOptions.value);
                console.log("Extracted Jenis Options:", jenisOptions.value);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                alert('Gagal mengambil data. Silakan coba lagi nanti.');
            }
        };

        // Function to trigger search and reset pagination
        const searchData = () => {
            isSearched.value = true;
            currentPage.value = 1; // Reset pagination to the first page
        };

        // Computed property to filter data based on search criteria
        const filteredData = computed(() => {
            let filtered = data.value;

            // Filter based on keyword, tipe, jenis, and tahun
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

            // Sort by tahun_pengundangan in descending order
            filtered.sort((a, b) => b.tahun_pengundangan - a.tahun_pengundangan);

            // Pagination
            const start = (currentPage.value - 1) * itemsPerPage.value;
            return filtered.slice(start, start + itemsPerPage.value);
        });

        // Computed property to calculate total pages based on filtered data
        const totalPages = computed(() => {
            return Math.ceil(filteredData.value.length / itemsPerPage.value);
        });

        // Function to handle page change
        const changePage = (page) => {
            if (page >= 1 && page <= totalPages.value) {
                currentPage.value = page;
            }
        };

        // Watcher to update jenisOptions based on selectedTipe
        watch(selectedTipe, (newTipe) => {
            if (newTipe) {
                jenisOptions.value = [...new Set(data.value
                    .filter(item => item.tipe === newTipe)
                    .map(item => item.jenis)
                )];
            } else {
                jenisOptions.value = [...new Set(data.value.map(item => item.jenis))];
            }
            selectedJenis.value = ''; // Reset jenis when tipe changes
        });

        // Call fetchData on component mount to load data
        fetchData().then(() => {
            searchData(); // Automatically trigger search after fetching data
        });

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
            jenisOptions
        };
    },
}).mount('#app');
