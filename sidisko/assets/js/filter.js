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
    const rating = ref(0);

    const menuLayanan = {
      Aplikasi: ["Pengembangan Aplikasi", "Pembangunan Aplikasi"],
      Jaringan: ["Instalasi Jaringan", "Koneksi Internet"],
      "Pusat Data": ["Pemakaian Nama Subdomain", "Perubahan Nama Subdomain"],
      Reservasi: ["Pendampingan Virtual Meeting", "Pembuatan Ruang Virtual Meeting"],
    };

    const icons = ["fa-face-frown", "fa-face-meh", "fa-face-smile", "fa-face-grin", "fa-face-grin-stars"];

    const setRating = (value) => {
      rating.value = value;
    };

    const getIconClass = (index) => {
      // Mengembalikan kelas berdasarkan kondisi rating yang dipilih
      return {
        'fa-regular': true,                         // Selalu menggunakan fa-solid
        [icons[index]]: true,                      // Menambahkan ikon sesuai indeks
    
        // Warna berdasarkan rating yang dipilih
        'text-danger-emphasis': rating.value === 1 && index === 0,                         // Merah untuk rating 1 saja
        'text-danger': rating.value === 2 && index <= 1,                        // Oranye untuk rating 1 dan 2
        'text-warning': rating.value === 3 && index <= 2,                        // Kuning untuk rating 1, 2, dan 3
        'text-success': rating.value === 4 && index <= 3,                        // Hijau untuk rating 1, 2, 3, dan 4
        'text-primary': rating.value === 5,                                      // Biru (primary) untuk semua rating jika 5 terpilih
    
        'text-secondary': 
          (rating.value === 1 && index >= 1) ||                                  // Warna abu-abu untuk rating >= 2 saat rating 1 dipilih
          (rating.value === 2 && index >= 2) ||                                  // Warna abu-abu untuk rating >= 3 saat rating 2 dipilih
          (rating.value === 3 && index >= 3) ||                                  // Warna abu-abu untuk rating >= 4 saat rating 3 dipilih
          (rating.value === 4 && index >= 4)                                     // Warna abu-abu untuk rating 5 saat rating 4 dipilih
      };
    };

    const confirmRating = () => {
      // Tampilkan konfirmasi pemberian rating
      const confirmation = confirm(`Anda memberikan rating ${rating.value} pada tiket ini. Apakah Anda yakin?`);
      
      if (confirmation) {
        // Logika untuk menyimpan rating, jika diperlukan
        console.log(`Rating ${rating.value} telah diberikan.`);
        // Di sini Anda bisa menambahkan logika untuk menyimpan rating ke server atau melakukan tindakan lainnya
      } else {
        console.log("Pemberian rating dibatalkan.");
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('https://jonkolong.github.io/sidisko/public/data/tickets.json');
        tickets.value = response.data;
      } catch (error) {
        console.error("Error mengambil data:", error);
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

    console.log(filteredTickets.value);
    console.log(tickets.value);

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
      rating,
      icons,
      setRating,
      getIconClass,
      confirmRating,
      totalPages, // Mengembalikan total halaman untuk pagination
    };
  }
}).mount('#filter');
