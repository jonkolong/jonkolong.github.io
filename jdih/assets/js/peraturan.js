const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const peraturans = ref([]); // Menyimpan data JSON

    const fetchData = async () => {
      try {
        const response = await axios.get('https://jonkolong.github.io/jdih/public/data/peraturan.json'); // Lokasi file JSON
        peraturans.value = response.data["Peraturan Bupati"]; // Simpan data ke peraturanBupati
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    onMounted(() => {
      fetchData(); // Ambil data saat komponen dimuat
    });

    return {
      peraturans
    };
  }
}).mount('#peraturan');
