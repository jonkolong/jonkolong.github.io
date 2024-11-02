const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const data = ref([]);
        const selectedTipe = ref('');
        const selectedJenis = ref('');
        const selectedTahun = ref('');
        const keyword = ref(''); // Tambahan untuk kata kunci pencarian
        const itemsPerPage = ref(6); // Default jumlah hasil per halaman
        const currentPage = ref(1);
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

            // Filter berdasarkan kata kunci
            if (keyword.value) {
                filtered = filtered.filter(item => 
                    item.judul.toLowerCase().includes(keyword.value.toLowerCase())
                );
            }
            // Filter berdasarkan tipe
            if (selectedTipe.value) {
                filtered = filtered.filter(item => item.tipe === selectedTipe.value);
            }
            // Filter berdasarkan jenis
            if (selectedJenis.value) {
                filtered = filtered.filter(item => item.jenis === selectedJenis.value);
            }
            // Filter berdasarkan tahun
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

        const uniqueTahun = computed(() => {
            const years = data.value.map(item => item.tahun_pengundangan);
            return [...new Set(years)]; // Mendapatkan tahun yang unik
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
            itemsPerPage // Mengembalikan itemsPerPage untuk diakses di template
        };
    },
}).mount('#app');
