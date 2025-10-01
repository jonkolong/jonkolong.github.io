const { createApp, ref, computed, watch, onMounted } = Vue;

createApp({
  setup() {
    const data = ref([]);
    const selectedTipe = ref('');
    const selectedJenis = ref('');
    const selectedTahun = ref('');
    const keyword = ref('');
    const isSearched = ref(false);

    const tipeOptions = ref([]);
    const jenisOptions = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-splp.layanan.go.id/jdih_deli_serdang/1.0/produk-hukum');
        data.value = response.data.data;

        // Ambil opsi tipe unik
        tipeOptions.value = [...new Set(data.value.map(item => item.tipe))];
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    const filteredData = computed(() => {
      let filtered = data.value;

      if (keyword.value) {
        filtered = filtered.filter(item =>
          item.judul.toLowerCase().includes(keyword.value.toLowerCase())
        );
      }
      if (selectedTipe.value) {
        filtered = filtered.filter(item => item.tipe === selectedTipe.value);
      }
      if (selectedJenis.value) {
        filtered = filtered.filter(item => item.jenis === selectedJenis.value);
      }
      if (selectedTahun.value) {
        filtered = filtered.filter(item => item.tahun_pengundangan === selectedTahun.value);
      }
      return filtered;
    });

    const uniqueTahun = computed(() => {
      return [...new Set(data.value.map(item => item.tahun_pengundangan))].sort((a, b) => b - a);
    });

    const searchData = () => {
      isSearched.value = true;
    };

    watch(selectedTipe, (newTipe) => {
      jenisOptions.value = [...new Set(data.value.filter(item => item.tipe === newTipe).map(item => item.jenis))];
      selectedJenis.value = '';
    });

    onMounted(() => {
      fetchData();
    });

    return {
      keyword,
      selectedTipe,
      selectedJenis,
      selectedTahun,
      isSearched,
      tipeOptions,
      jenisOptions,
      uniqueTahun,
      filteredData,
      searchData
    };
  }
}).mount('#app');
