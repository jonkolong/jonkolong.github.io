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
        
        // Compute unique years
        const uniqueTahun = computed(() => {
            const years = data.value.map(item => item.tahun_pengundangan);
            return [...new Set(years)];
        });

        // Function to fetch data from API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://website.kickymaulana.com/api/produk-hukum?tahun=semua&jenis_id=semua&tipe_id=semua&limit=10&cari=');
                data.value = response.data.data; // Assign data to reactive variable
                
                console.log("Data fetched:", data.value); // Log full data response for debugging

                // Check and log the 'tipe' field to verify its presence in data
                tipeOptions.value = [...new Set(data.value.map(item => item.tipe).filter(tipe => tipe))];
                
                console.log("Extracted Tipe Options:", tipeOptions.value); // Log extracted tipe options
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        // Function to trigger search
        const searchData = () => {
            isSearched.value = true;
            currentPage.value = 1;
        };

        // Computed property to filter data based on search criteria
        const filteredData = computed(() => {
            let filtered = data.value;

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

        // Function to change pages
        const changePage = (page) => {
            if (page < 1 || page > totalPages.value) return;
            currentPage.value = page;
        };

        // Watch selectedTipe and update jenisOptions based on it
        watch(selectedTipe, (newTipe) => {
            jenisOptions.value = [...new Set(data.value
                .filter(item => item.tipe === newTipe)
                .map(item => item.jenis)
            )];
            selectedJenis.value = ''; // Reset jenis when tipe changes
        });

        // Call fetchData to load data on mount
        fetchData();

        // Return reactive data and functions to use in the template
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
