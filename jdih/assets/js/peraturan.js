const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const peraturanBupati = ref([]); // State untuk menyimpan data JSON

    // Ambil data dari file JSON lokal menggunakan Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5500/jdih/public/data/peraturan.json'); // Lokasi file JSON
        console.log("Data yang diambil:", response.data); // Debugging log
        peraturanBupati.value = response.data["Peraturan Bupati"]; // Simpan data ke peraturanBupati
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    onMounted(() => {
      fetchData(); // Ambil data ketika komponen di-mount
    });

    return {
      peraturanBupati
    };
  }
}).mount('#peraturan'); // Ganti 'app' dengan 'peraturan'
