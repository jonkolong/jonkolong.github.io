const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const regulations = ref([]);
        const loading = ref(true);
        const error = ref(null);

        const fetchRegulations = async () => {
            try {
                const response = await axios.get('https://jonkolong.github.io/jdih/public/data/peraturan.json');
                // Filter hanya untuk jenis "Peraturan Daerah"
                regulations.value = response.data.Peraturan.filter(item => item.jenis === 'Peraturan Bupati');
            } catch (err) {
                error.value = 'Terjadi kesalahan saat mengambil data.';
                console.error(err);
            } finally {
                loading.value = false;
            }
        };

        onMounted(fetchRegulations);

        return {
            regulations,
            loading,
            error
        };
    }
}).mount('#filter');
