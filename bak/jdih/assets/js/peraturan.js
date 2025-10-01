const { createApp, ref, computed, watch, onMounted } = Vue;

createApp({
    setup() {
        // Reactive variables
        const searchQuery = ref("");
        const data = ref([]);
        const filteredData = ref([]);
        const selectedTipe = ref("Peraturan");
        const selectedJenis = ref("Peraturan Daerah");
        const selectedTahun = ref("");
        const tipeOptions = ref([]);
        const filteredJenis = ref([]);
        const tahunOptions = ref([]);
        const showResults = ref(false);
        const warningMessage = ref(false);
        const loading = ref(false);
        const error = ref(false);

        const currentPage = ref(1);
        const itemsPerPage = 10;

        // Fetch data from API
        const fetchData = async () => {
            loading.value = true;
            error.value = false;
            try {
                const response = await axios.get("https://api-splp.layanan.go.id:443/jdih_deli_serdang/1.0/produk-hukum?tahun=semua&jenis_id=semua&tipe_id=semua&limit=1000&cari=");
                data.value = response.data.data;

                if (data.value && data.value.length > 0) {
                    // Sort data by year (descending)
                    data.value.sort((a, b) => b.tahun_pengundangan - a.tahun_pengundangan);
                    filteredData.value = data.value;

                    // Populate Tipe and Tahun filter options
                    const uniqueTipes = [...new Set(data.value.map(item => item.tipe))];
                    tipeOptions.value = uniqueTipes.map(tipe => ({ id: tipe, name: tipe }));

                    const uniqueTahun = [...new Set(data.value.map(item => item.tahun_pengundangan))].sort((a, b) => b - a);
                    tahunOptions.value = uniqueTahun;

                    updateJenisOptions();
                } else {
                    error.value = true;
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                error.value = true;
            } finally {
                loading.value = false;
            }
        };

        // Filter data based on search query, Tipe, Jenis, and Tahun
        const filterData = () => {
            filteredData.value = data.value.filter(item => {
                const matchesSearchQuery = item.judul.toLowerCase().includes(searchQuery.value.toLowerCase());
                const matchesTipe = selectedTipe.value ? item.tipe === selectedTipe.value : true;
                const matchesJenis = selectedJenis.value ? item.jenis === selectedJenis.value : true;
                const matchesTahun = selectedTahun.value ? item.tahun_pengundangan == selectedTahun.value : true;

                return matchesSearchQuery && matchesTipe && matchesJenis && matchesTahun;
            });
            
            currentPage.value = 1;
        };

        // Search function
        const searchData = () => {
            if (searchQuery.value.length >= 3 || searchQuery.value === "") {
                showResults.value = true;
                warningMessage.value = false;
                filterData();
            } else {
                warningMessage.value = true;
            }
        };

        // Reset filters
        const resetFilters = () => {
            searchQuery.value = "";
            selectedTipe.value = "";
            selectedJenis.value = "";
            selectedTahun.value = "";
            showResults.value = false;
            warningMessage.value = false;
            filteredData.value = [];
            error.value = false;
        };

        // Update Jenis options based on selected Tipe
        const updateJenisOptions = () => {
            const filteredItems = data.value.filter(item => item.tipe === selectedTipe.value);
            const uniqueJenis = [...new Set(filteredItems.map(item => item.jenis))];
            filteredJenis.value = uniqueJenis.map(jenis => ({ id: jenis, name: jenis }));
        };

        // Paginated data for table
        const paginatedData = computed(() => {
            const start = (currentPage.value - 1) * itemsPerPage;
            return filteredData.value.slice(start, start + itemsPerPage);
        });

        // Total pages for pagination
        const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage));

        // Change page for pagination
        const changePage = (page) => {
            if (page >= 1 && page <= totalPages.value) {
                currentPage.value = page;
            }
        };

        // Watchers for filters
        watch(selectedTipe, () => {
            updateJenisOptions();
            filterData();
        });

        watch(selectedJenis, filterData);
        watch(selectedTahun, filterData);

        // Fetch data on component mount
        onMounted(() => {
            fetchData().then(() => {
                // Tunggu hingga data selesai dimuat, lalu jalankan pencarian otomatis
                searchData();
            });
        });
        
        return {
            searchQuery,
            filteredData,
            tipeOptions,
            filteredJenis,
            tahunOptions,
            selectedTipe,
            selectedJenis,
            selectedTahun,
            filterData,
            resetFilters,
            searchData,
            showResults,
            warningMessage,
            loading,
            error,
            paginatedData,
            totalPages,
            currentPage,
            changePage,
        };
    }
}).mount("#peraturan");
