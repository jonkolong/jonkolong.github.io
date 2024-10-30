const { createApp, ref, onMounted, computed } = Vue;

createApp({
  setup() {
    const tickets = ref([]); // Untuk menyimpan data tiket
    const searchQuery = ref(""); // Untuk menyimpan input pencarian
    const selectedStatus = ref(""); // Untuk menyimpan status yang dipilih
    const selectedUnitKerja = ref(""); // Untuk menyimpan unit kerja yang dipilih
    const selectedMenu = ref(""); // Untuk menyimpan menu yang dipilih
    const selectedLayanan = ref(""); // Untuk menyimpan layanan yang dipilih
    const itemsPerPage = ref(6); // Jumlah tiket per halaman
    const currentPage = ref(1); // Halaman saat ini
    const sortOrder = ref("latest"); // Opsi sortir

    // Layanan yang berhubungan dengan setiap menu
    const menuLayanan = {
      Aplikasi: ["Pengembangan Aplikasi", "Pembangunan Aplikasi"],
      Jaringan: ["Instalasi Jaringan", "Koneksi Internet"],
      "Pusat Data": ["Pemakaian Nama Subdomain", "Perubahan Nama Subdomain"],
      Reservasi: ["Pendampingan Virtual Meeting", "Pembuatan Ruang Virtual Meeting"],
    };

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

    // Mengupdate layanan berdasarkan menu yang dipilih
    const updateSelectedLayanan = () => {
      selectedLayanan.value = ""; // Reset layanan yang dipilih
    };

    // Computed property untuk mendapatkan layanan berdasarkan menu yang dipilih
    const filteredLayanan = computed(() => {
      return selectedMenu.value ? menuLayanan[selectedMenu.value] : [];
    });

    // Fungsi untuk memformat tanggal menjadi DD NamaBulan YYYY
    const formatTanggal = (tanggal) => {
      const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      const date = new Date(tanggal);
      const day = String(date.getDate()).padStart(2, '0'); // Menambahkan leading zero
      const month = bulan[date.getMonth()]; // Mengambil nama bulan
      const year = date.getFullYear(); // Mengambil tahun
      return `${day} ${month} ${year}`; // Mengembalikan format yang diinginkan
    };

    // Computed property untuk memfilter tiket berdasarkan pencarian, status, unit kerja, menu, dan layanan
    const filteredTickets = computed(() => {
      return tickets.value.filter(ticket => {
        const matchesSearch = ticket.layanan.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          ticket.keterangan.toLowerCase().includes(searchQuery.value.toLowerCase());

        const matchesStatus = selectedStatus.value ? ticket.status === selectedStatus.value : true;
        const matchesUnitKerja = selectedUnitKerja.value ? ticket.unitKerja === selectedUnitKerja.value : true;
        const matchesMenu = selectedMenu.value ? ticket.menu === selectedMenu.value : true;
        const matchesLayanan = selectedLayanan.value ? ticket.layanan === selectedLayanan.value : true;

        return matchesSearch && matchesStatus && matchesUnitKerja && matchesMenu && matchesLayanan;
      }).sort((a, b) => {
        const dateA = new Date(a.tanggalTiket);
        const dateB = new Date(b.tanggalTiket);
        return sortOrder.value === "latest" ? dateB - dateA : dateA - dateB; // Sort by date
      });
    });

    // Pagination
    const totalPages = computed(() => Math.ceil(filteredTickets.value.length / itemsPerPage.value));

    const paginatedTickets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredTickets.value.slice(start, end);
    });

    // Fungsi untuk mengubah halaman
    const changePage = (page) => {
      if (page < 1 || page > totalPages.value) return; // Cek batas halaman
      currentPage.value = page;
    };

    return {
      tickets,
      searchQuery,
      selectedStatus,
      selectedUnitKerja,
      selectedMenu,
      selectedLayanan,
      itemsPerPage,
      currentPage,
      sortOrder,
      filteredLayanan,
      filteredTickets,
      paginatedTickets,
      changePage,
      updateSelectedLayanan,
      formatTanggal, // Menambahkan fungsi formatTanggal
    };
  }
}).mount('#filter');
