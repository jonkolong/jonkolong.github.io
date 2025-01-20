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
    const isFilterVisible = ref(false); // Untuk menyimpan status visibilitas filter
    const selectedJenisAplikasi = ref("");
    const selectedSektorLayanan = ref("");
    const selectedUrusan = ref("");
    const selectedBidangUrusan = ref("");
    const selectedSasaranPengguna = ref("");

    const menuLayanan = {
      "Aplikasi": ["Pendaftaran Aplikasi", "Pendaftaran Website", "Pengembangan Aplikasi", "Pembangunan Aplikasi", "Pengembangan Website", "Pembangunan Website"],
      "Jaringan": ["Instalasi Jaringan", "Koneksi Internet", "Penyesuaian Bandwidth"],
      "Pusat Data": ["Permintaan VPS", "Penyesuaian VPS", "Pendaftaran Subdomain", "Perubahan Subdomain"],
      "Media": ["Kerjasama Media"],
      "Reservasi": ["Pendampingan Virtual Meeting", "Ruang Virtual Meeting", "Narasumber", "Kunjungan Kerja", "Bimbingan Teknis"],
    };

    // const baseUrl = "https://jonkolong.github.io/"; // Ganti dengan URL yang sesuai
    const baseUrl = "http://localhost:5500/"; // Ganti dengan URL yang sesuai

    // Daftar URL untuk layanan
    const layananUrls = {
      "Pendaftaran Aplikasi": baseUrl + "sidisko/tiket/pendaftaran-aplikasi.html",
      "Pendaftaran Website": baseUrl + "sidisko/tiket/pendaftaran-website.html",
      "Pengembangan Aplikasi": baseUrl + "sidisko/tiket/pengembangan-aplikasi.html",
      "Pembangunan Aplikasi": baseUrl + "sidisko/tiket/pembangunan-aplikasi.html",
      "Pengembangan Website": baseUrl + "sidisko/tiket/pengembangan-website.html",
      "Pembangunan Website": baseUrl + "sidisko/tiket/pembangunan-website.html",
      "Instalasi Jaringan": baseUrl + "sidisko/tiket/instalasi-jaringan.html",
      "Koneksi Internet": baseUrl + "sidisko/tiket/koneksi-internet.html",
      "Penyesuaian Bandwidth": baseUrl + "sidisko/tiket/bandwidth.html",
      "Permintaan VPS": baseUrl + "sidisko/tiket/permintaan-vps.html",
      "Penyesuaian VPS": baseUrl + "sidisko/tiket/penyesuaian-vps.html",
      "Pendaftaran Subdomain": baseUrl + "sidisko/tiket/pendaftaran-subdomain.html",
      "Perubahan Subdomain": baseUrl + "sidisko/tiket/perubahan-subdomain.html",
      "Kerjasama Media": baseUrl + "sidisko/tiket/kerjasama-media.html",
      "Pendampingan Virtual Meeting": baseUrl + "sidisko/tiket/pendampingan-virtual-meeting",
      "Ruang Virtual Meeting": baseUrl + "sidisko/tiket/ruang-virtual-meeting",
      "Narasumber": baseUrl + "sidisko/tiket/narasumber.html",
      "Kunjungan Kerja": baseUrl + "sidisko/tiket/kunjungan-kerja.html",
      "Bimbingan Teknis": baseUrl + "sidisko/tiket/pendampingan-bimtek.html"
    };

    // Data bidang urusan sesuai dengan urusan yang dipilih
    const bidangUrusanData = {
      "urusan1": ["Kecamatan"],
      "urusan2": ["Kesatuan Bangsa dan Politik"],
      "urusan3": ["Sekretariat Daerah", "Sekretariat DPRD"],
      "urusan4": ["Inspektorat Daerah"],
      "urusan5": [
        "Pengelolaan Perbatasan", 
        "Keuangan", 
        "Perencanaan", 
        "Kepegawaian", 
        "Penelitian dan Pengembangan",
        "Pendidikan dan Pelatihan"
      ],
      "urusan6": [
        "Pekerjaan Umum dan Penataan Ruang",
        "Perumahan dan Kawasan Permukiman",
        "Kesehatan",
        "Sosial",
        "Ketentraman dan Ketertiban Umum Serta Perlindungan Masyarakat"
      ],
      "urusan7": [
        "Kehutanan",
        "Transmigrasi",
        "Periwisata",
        "Perdagangan",
        "Pertanian",
        "Kelautan dan Perikanan",
        "Perindustrian",
        "Energi dan Sumber Daya Mineral"
      ],
      "urusan8": [
        "Pemberdayaan Perempuan dan Perlindungan Anak",
        "Perpustakaan",
        "Kearsipan",
        "Pertanahan",
        "Pangan",
        "Kebudayaan",
        "Perhubungan",
        "Penanaman Modal",
        "Tenaga Kerja",
        "Koperasi, Usaha Kecil dan Menengah",
        "Pengendalian Penduduk dan Keluarga Berencana",
        "Lingkungan Hidup",
        "Kepemudaan dan Olahraga",
        "Administrasi Kependudukan dan Pencatatan Sipil",
        "Komunikasi dan Informatika",
        "Pemberdayaan Masyarakat dan Desa",
        "Persandian"
      ]
    };

    // Filter bidang urusan berdasarkan urusan yang dipilih
    const filteredBidangUrusan = computed(() => {
      return selectedUrusan.value ? bidangUrusanData[selectedUrusan.value] || [] : [];
    });

    const updateSelectedOptions = () => {
      if (selectedJenisAplikasi.value === 'layanan publik') {
        selectedSektorLayanan.value = '';
        selectedUrusan.value = '';
        selectedBidangUrusan.value = '';
        selectedSasaranPengguna.value = 'masyarakat'; // Auto-select sasaran pengguna
      } else if (selectedJenisAplikasi.value === 'administrasi pemerintahan') {
        selectedSektorLayanan.value = '';
        selectedSasaranPengguna.value = 'asn'; // Auto-select sasaran pengguna
      }
    };

    const updateBidangUrusan = () => {
      selectedBidangUrusan.value = '';
    };

    const fetchData = async () => {
      try {
        const response = await axios.get( baseUrl + 'sidisko/public/data/tickets.json');
        tickets.value = response.data;
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    // Mengosongkan pilihan layanan saat menu berubah
    const updateSelectedLayanan = () => {
      selectedLayanan.value = "";
    };

    // Filter layanan berdasarkan menu yang dipilih
    const filteredLayanan = computed(() => {
      return selectedMenu.value ? menuLayanan[selectedMenu.value] : [];
    });

    // Fungsi konfirmasi layanan
    const konfirmasiLayanan = () => {
      if (selectedLayanan.value && layananUrls[selectedLayanan.value]) {
        window.location.href = layananUrls[selectedLayanan.value];
      } else {
        alert("Pilih layanan yang valid.");
      }
    };

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

    const toggleFilter = () => {
      isFilterVisible.value = !isFilterVisible.value;
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
      konfirmasiLayanan,
      formatTanggal,
      totalPages,
      isFilterVisible,
      toggleFilter,
      selectedJenisAplikasi,
      selectedSektorLayanan,
      selectedUrusan,
      selectedBidangUrusan,
      selectedSasaranPengguna,
      filteredBidangUrusan,
      updateSelectedOptions,
      updateBidangUrusan,
    };
  }
}).mount('#filter');
