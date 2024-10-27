const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const regulations = ref([]);
        const loading = ref(true);
        const error = ref(null);

        const fetchRegulations = async () => {
            try {
                const response = await axios.get('https://jonkolong.github.io/jdih/public/data/peraturan.json');
                // Filter data untuk hanya menampilkan Peraturan Daerah
                regulations.value = response.data.Peraturan.filter(item => item.jenis === 'Peraturan Daerah');
                console.log(regulations.value); // Debugging: lihat data yang diambil
            } catch (err) {
                error.value = 'Terjadi kesalahan saat mengambil data.';
                console.error(err); // Debugging: lihat kesalahan di konsol
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
