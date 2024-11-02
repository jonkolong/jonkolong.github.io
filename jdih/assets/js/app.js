const { createApp, ref, computed, watch } = Vue;

createApp({
    setup() {
        const data = ref([]);
        const selectedTipe = ref('');
        const selectedJenis = ref('');
        const selectedTahun = ref('');
        const keyword = ref('');
        const itemsPerPage = ref(6);
        const currentPage = ref(1);
        const isSearched = ref(false);

        const tipeOptions = ref([]);
        const jenisOptions = ref([]);
        const uniqueTahun = computed(() => {
            const years = data.value.map(item => item.tahun_pengundangan);
            return [...new Set(years)];
        });

        const fetchData = async () => {
            try {
                const response = await axios.get('https://website.kickymaulana.com/api/produk-hukum?tahun=semua&jenis_id=semua&cari=');
                data.value = response.data.data;

                // Extract unique types from JSON data
                tipeOptions.value = [...new Set(data.value.map(item => item.tipe))];
            } catch (error) {
                console.error('Gagal mengambil data:', error);
            }
        };

        const searchData = () => {
            isSearched.value = true;
            currentPage.value = 1;
        };

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

        const changePage = (page) => {
            if (page < 1 || page > totalPages.value) return;
            currentPage.value = page;
        };

        watch(selectedTipe, (newTipe) => {
            // Filter jenisOptions based on selectedTipe
            jenisOptions.value = [...new Set(data.value
                .filter(item => item.tipe === newTipe)
                .map(item => item.jenis)
            )];
            selectedJenis.value = ''; // Reset jenis when tipe changes
        });

        fetchData();

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
