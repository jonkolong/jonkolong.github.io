const { createApp, ref, onMounted, computed } = Vue;

createApp({
  setup() {
    const tickets = ref([]);
    const searchQuery = ref("");
    const selectedStatus = ref("");
    const selectedUnitKerja = ref("");
    const selectedMenu = ref("");
    const selectedLayanan = ref("");
    const itemsPerPage = ref(6);
    const currentPage = ref(1);
    const sortOrder = ref("latest");

    const menuLayanan = {
      "Aplikasi": ["Pengembangan Aplikasi", "Pembangunan Aplikasi"],
      "Jaringan": ["Instalasi Jaringan", "Koneksi Internet"],
      "Pusat Data": ["Pendaftaran Subdomain", "Perubahan Subdomain"],
      "Reservasi": ["Pendampingan Virtual Meeting", "Ruang Virtual Meeting", "Narasumber", "Kunjungan Kerja", "Pendampingan Bimtek"],
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('https://jonkolong.github.io/sidisko/public/data/tickets.json');
        tickets.value = response.data;
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    const updateSelectedLayanan = () => {
      selectedLayanan.value = "";
    };

    const filteredLayanan = computed(() => {
      return selectedMenu.value ? menuLayanan[selectedMenu.value] : [];
    });

    const formatTanggal = (tanggal) => {
      const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      const date = new Date(tanggal);
      const day = String(date.getDate()).padStart(2, '0');
      const month = bulan[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    };

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
        return sortOrder.value === "latest" ? dateB - dateA : dateA - dateB;
      });
    });

    const totalPages = computed(() => Math.ceil(filteredTickets.value.length / itemsPerPage.value));

    const paginatedTickets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredTickets.value.slice(start, end);
    });

    const changePage = (page) => {
      if (page < 1 || page > totalPages.value) return;
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
      formatTanggal,
      totalPages,
    };
  }
}).mount('#filter');
