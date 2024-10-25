const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const peraturanBupati = ref([]); // State untuk menyimpan data JSON
    const currentPeraturan = ref({}); // State untuk menyimpan data item yang akan ditampilkan di modal

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

    // Fungsi untuk membuka modal dan menetapkan data item yang dipilih
    const showModal = (item) => {
      currentPeraturan.value = item;
      // Gunakan Bootstrap modal untuk membuka modal secara programatis
      const modal = new bootstrap.Modal(document.getElementById('perbupModal1'));
      modal.show();
    };

    onMounted(() => {
      fetchData(); // Ambil data ketika komponen di-mount
    });

    return {
      peraturanBupati,
      currentPeraturan,
      showModal
    };
  }
}).mount('#peraturan'); // Targetkan elemen dengan id "peraturan"
