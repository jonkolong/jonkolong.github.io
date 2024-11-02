const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const data = ref([]);
        const selectedTipe = ref('');
        const selectedJenis = ref('');
        const selectedTahun = ref('');
        const currentPage = ref(1);
        const itemsPerPage = 5;
        const isSearched = ref(false); // Flag untuk menandai pencarian telah dilakukan

        const fetchData = async () => {
            try {
                const response = await axios.get('https://website.kickymaulana.com/api/produk-hukum?tahun=semua&jenis_id=semua&cari=');
                data.value = response.data.data;
            } catch (error) {
                console.error('Gagal mengambil data:', error);
            }
        };

        const searchData = () => {
            isSearched.value = true; // Set flag pencarian menjadi true
            currentPage.value = 1; // Reset ke halaman pertama saat mencari
        };

        const filteredData = computed(() => {
            let filtered = data.value;

            if (selectedTipe.value) {
                filtered = filtered.filter(item => item.tipe === selectedTipe.value);
            }
            if (selectedJenis.value) {
                filtered = filtered.filter(item => item.jenis === selectedJenis.value);
            }
            if (selectedTahun.value) {
                filtered = filtered.filter(item => item.tahun_pengundangan === selectedTahun.value);
            }

            const start = (currentPage.value - 1) * itemsPerPage;
            return filtered.slice(start, start + itemsPerPage);
        });

        const totalPages = computed(() => {
            const filtered = filteredData.value;
            return Math.ceil(filtered.length / itemsPerPage);
        });

        const changePage = (page) => {
            if (page < 1 || page > totalPages.value) return;
            currentPage.value = page;
        };

        const uniqueTahun = computed(() => {
            const years = data.value.map(item => item.tahun_pengundangan);
            return [...new Set(years)]; // Mendapatkan tahun yang unik
        });

        fetchData();

        return {
            selectedTipe,
            selectedJenis,
            selectedTahun,
            data,
            filteredData,
            totalPages,
            currentPage,
            uniqueTahun,
            fetchData,
            searchData,
            changePage,
            isSearched // Mengembalikan flag pencarian
        };
    },
}).mount('#app');
