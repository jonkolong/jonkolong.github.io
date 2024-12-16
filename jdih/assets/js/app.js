const app = Vue.createApp({
  setup() {
    const hukumData = Vue.ref([]);
    const selectedTipe = Vue.ref('semua');
    const selectedJenis = Vue.ref('semua');
    const selectedTahun = Vue.ref('semua');
    const selectedLimit = Vue.ref(10);
    const tipeList = Vue.ref([]);
    const jenisList = Vue.ref([]);
    const tahunList = Vue.ref([]);
    const jenisByTipe = Vue.ref({});
    const limitOptions = Vue.ref([5, 10, 20, 50, 100]);

    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jdih.deliserdangkab.go.id/api/produk-hukum?limit=500&tahun=semua&jenis_id=semua&tipe_id=semua&page=1');
        hukumData.value = response.data.data;

        // Menyusun daftar tipe, jenis, dan tahun
        tipeList.value = [...new Set(response.data.data.map(item => item.tipe))];
        tahunList.value = [...new Set(response.data.data.map(item => item.tahun_pengundangan))].sort((a, b) => b - a);

        // Membuat mapping jenis berdasarkan tipe
        response.data.data.forEach(item => {
          if (!jenisByTipe.value[item.tipe]) {
            jenisByTipe.value[item.tipe] = new Set();
          }
          jenisByTipe.value[item.tipe].add(item.jenis);
        });

        // Menyusun daftar jenis untuk semua tipe
        jenisList.value = [...new Set(response.data.data.map(item => item.jenis))];
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Menyaring jenis berdasarkan tipe yang dipilih
    const filteredJenis = Vue.computed(() => {
      if (selectedTipe.value === 'semua') {
        return jenisList.value;
      }
      return Array.from(jenisByTipe.value[selectedTipe.value] || []);
    });

    // Menyaring data berdasarkan tipe, jenis, dan tahun yang dipilih
    const filteredData = Vue.computed(() => {
      return hukumData.value.filter(item => {
        const matchesTipe = selectedTipe.value === 'semua' || item.tipe === selectedTipe.value;
        const matchesJenis = selectedJenis.value === 'semua' || item.jenis === selectedJenis.value;
        const matchesTahun = selectedTahun.value === 'semua' || item.tahun_pengundangan === parseInt(selectedTahun.value);
        return matchesTipe && matchesJenis && matchesTahun;
      });
    });

    // Membatasi jumlah data yang ditampilkan
    const paginatedData = Vue.computed(() => {
      return filteredData.value.slice(0, selectedLimit.value);
    });

    // Fungsi yang dipanggil saat tipe berubah
    const onTipeChange = () => {
      selectedJenis.value = 'semua';
    };

    // Panggil fungsi fetchData ketika komponen pertama kali dibuat
    Vue.onMounted(() => {
      fetchData();
    });

    return {
      hukumData,
      selectedTipe,
      selectedJenis,
      selectedTahun,
      selectedLimit,
      tipeList,
      jenisList,
      tahunList,
      limitOptions,
      filteredJenis,
      filteredData,
      paginatedData,
      onTipeChange
    };
  },
});

app.mount('#app');
