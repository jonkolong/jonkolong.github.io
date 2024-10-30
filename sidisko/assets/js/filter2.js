const { createApp, ref, onMounted, computed } = Vue;

createApp({
  setup() {
    const tickets = ref([]); // Untuk menyimpan data tiket
    const searchQuery = ref(""); // Untuk menyimpan input pencarian

    // Fungsi untuk mengambil data menggunakan Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jonkolong.github.io/sidisko/public/data/tiket.json');
        tickets.value = response.data; // Menyimpan data ke dalam tickets
        console.log(tickets.value); // Cek data di console
      } catch (error) {
        console.error("Error mengambil data:", error);
      }
    };

    // Mengambil data saat komponen di-mount
    onMounted(() => {
      fetchData();
    });

    // Computed property untuk memfilter tiket berdasarkan pencarian
    const filteredTickets = computed(() => {
      return tickets.value.filter(ticket => {
        return ticket.layanan.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
               ticket.keterangan.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
    });

    return { tickets, searchQuery, filteredTickets }; // Mengembalikan semua variabel yang dibutuhkan di template
  }
}).mount("#filter");
