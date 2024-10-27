const { createApp, ref, computed, onMounted } = Vue;

createApp({
    setup() {
        const regulations = ref([]);
        const searchQuery = ref('');
        const sortOption = ref('newest');
        const errorMessage = ref('');

        // Fungsi untuk mengambil data
        const fetchRegulations = async () => {
            try {
                const response = await axios.get('https://jonkolong.github.io/jdih/public/data/peraturan.json');
                regulations.value = response.data;
            } catch (error) {
                errorMessage.value = 'Terjadi kesalahan saat mengambil data: ' + error.message;
            }
        };

        // Ambil data saat komponen di-mount
        onMounted(() => {
            fetchRegulations();
        });

        // Menghitung peraturan yang terfilter dan tersortir
        const sortedAndFilteredPeraturans = computed(() => {
            let filtered = regulations.value.filter(item => {
                return item.judul.toLowerCase().includes(searchQuery.value.toLowerCase());
            });

            // Sortir
            if (sortOption.value === 'newest') {
                filtered.sort((a, b) => b.tahun_pengundangan - a.tahun_pengundangan);
            } else if (sortOption.value === 'oldest') {
                filtered.sort((a, b) => a.tahun_pengundangan - b.tahun_pengundangan);
            } else if (sortOption.value === 'valid') {
                filtered = filtered.filter(item => item.status === 'berlaku');
            } else if (sortOption.value === 'invalid') {
                filtered = filtered.filter(item => item.status !== 'berlaku');
            }

            return filtered;
        });

        return { regulations, searchQuery, sortOption, sortedAndFilteredPeraturans, errorMessage };
    }
}).mount('#filter');
