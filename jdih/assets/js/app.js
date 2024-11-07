const { createApp, ref, computed, watch, onMounted } = Vue;

createApp({
    setup() {
        // Existing reactive references
        const data = ref([]);
        const selectedTipe = ref('');
        const selectedJenis = ref('');
        const selectedTahun = ref('');
        const keyword = ref('');
        const itemsPerPage = ref(6);
        const currentPage = ref(1);
        const isSearched = ref(false);
        const documentIcons = ref({});
        const visitorStats = ref({ todayVisitors: 0, last7DaysVisitors: 0, last30DaysVisitors: 0 }); // Structured visitor stats

        // Login state variables
        const username = ref('');
        const isLoggedIn = ref(false);

        // Existing options for filtering
        const tipeOptions = ref([]);
        const jenisOptions = ref([]);

        // Function to fetch data from produk-hukum API
        const fetchData = async () => {
            try {
                const hukumResponse = await axios.get('https://website.kickymaulana.com/api/produk-hukum?tahun=semua&jenis_id=semua&tipe_id=semua&limit=10&cari=');
                data.value = hukumResponse.data.data;

                console.log("Hukum Data fetched:", data.value);

                tipeOptions.value = [...new Set(data.value.map(item => item.tipe).filter(tipe => tipe))];

                const iconResponse = await axios.get('https://website.kickymaulana.com/api/produk-hukum-tipe');
                iconResponse.data.data.forEach(item => {
                    documentIcons.value[item.tipe] = item.icon;
                });

                console.log("Document Icons fetched:", documentIcons.value);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                alert('Gagal mengambil data. Silakan coba lagi nanti.');
            }
        };

        // New function to fetch visitor statistics
        const fetchVisitorStats = async () => {
            try {
                const response = await axios.get('https://website.kickymaulana.com/api/statistik-pengunjung');
                visitorStats.value = response.data.data;
                console.log("Visitor Statistics fetched:", visitorStats.value);
            } catch (error) {
                console.error('Failed to fetch visitor statistics:', error);
                alert('Gagal mengambil statistik pengunjung. Silakan coba lagi nanti.');
            }
        };

        // New function to fetch login status
        const fetchLoginStatus = async () => {
            try {
                const response = await axios.get('http://localhost:5500/jdih/public/data/login.json');
                isLoggedIn.value = response.data.data.sudahlogin;
                if (isLoggedIn.value) {
                    username.value = response.data.data.nama;
                }
                console.log("Login status fetched:", isLoggedIn.value);
            } catch (error) {
                console.error('Failed to fetch login status:', error);
            }
        };

        // Function to trigger search
        const searchData = () => {
            isSearched.value = true;
            currentPage.value = 1;
        };

        // Existing computed and methods for filtering and pagination
        const uniqueTahun = computed(() => {
            const years = data.value.map(item => item.tahun_pengundangan);
            return [...new Set(years)].sort((a, b) => b - a);
        });

        const filteredData = computed(() => {
            let filtered = data.value;

            if (keyword.value) {
                filtered = filtered.filter(item => item.judul.toLowerCase().includes(keyword.value.toLowerCase()));
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

            filtered = filtered.map(item => {
                if (item.jenis === 'Peraturan Bupati') {
                    return { ...item, teuBadan: item.teuBadan.replace(/Kabupaten\s*/i, '') };
                }
                return item;
            });

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
            if (page >= 1 && page <= totalPages.value) {
                currentPage.value = page;
            }
        };

        watch(selectedTipe, (newTipe) => {
            jenisOptions.value = [...new Set(data.value.filter(item => item.tipe === newTipe).map(item => item.jenis))];
            selectedJenis.value = '';
        });

        const totalPeraturan = computed(() => data.value.filter(item => item.tipe === 'Peraturan').length);
        const totalMonografi = computed(() => data.value.filter(item => item.tipe === 'Monografi').length);
        const totalArtikel = computed(() => data.value.filter(item => item.tipe === 'Artikel').length);
        const totalPutusan = computed(() => data.value.filter(item => item.tipe === 'Putusan').length);

        // Fetch data on component mount
        onMounted(() => {
            fetchData();
            fetchVisitorStats(); // Fetch visitor statistics
            fetchLoginStatus(); // Fetch login status
        });

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
            documentIcons,
            visitorStats, // Make visitorStats available for template
            username,
            isLoggedIn
        };
    },
}).mount('#app');
