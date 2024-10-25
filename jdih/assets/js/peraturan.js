const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const peraturanBupati = ref([]); // Menyimpan data JSON

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5500/jdih/public/data/peraturan.json'); // Lokasi file JSON
        peraturanBupati.value = response.data["Peraturan Bupati"]; // Simpan data ke peraturanBupati
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    onMounted(() => {
      fetchData(); // Ambil data saat komponen dimuat
    });

    return {
      peraturanBupati
    };
  }
}).mount('#peraturan');
