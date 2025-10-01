const { createApp, ref, computed, watch } = Vue;

createApp({
    setup() {
        // Define reactive references
        const data = ref([]);
        const selectedTipe = ref('Peraturan'); // Locked to 'Peraturan Perundang-undangan'
        const selectedJenis = ref('Peraturan Daerah'); // Locked to 'Peraturan Bupati'
        const selectedTahun = ref('');
        const keyword = ref('');
        const itemsPerPage = ref(6);
        const currentPage = ref(1);
        const isSearched = ref(false);

        // Define options for filtering (for display purposes only)
        const tipeOptions = ref(['Peraturan']); // Locked options
        const jenisOptions = ref(['Peraturan Daerah']); // Locked options

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

            // Filter based on locked criteria and keyword
            filtered = filtered.filter(item => 
                item.tipe === selectedTipe.value &&
                item.jenis === selectedJenis.value
            );

            if (keyword.value) {
                filtered = filtered.filter(item => 
                    item.judul.toLowerCase().includes(keyword.value.toLowerCase())
                );
            }

            // Remove 'Kabupaten' from teuBadan if the type is 'Peraturan Bupati'
            filtered = filtered.map(item => {
                if (item.jenis === 'Peraturan Bupati') {
                    return {
                        ...item,
                        teuBadan: item.teuBadan.replace(/Kabupaten\s*/i, '') // Remove 'Kabupaten' (case-insensitive)
                    };
                }
                return item;
            });

            // Sort filtered results by tahun_pengundangan in descending order
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
