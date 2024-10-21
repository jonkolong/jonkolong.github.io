const { createApp, ref } = Vue;

createApp({
  setup() {
    const keywords = ref('');
    const tentang = ref('');
    const nomor = ref('');
    const tahun = ref('');
    const tag = ref('');
    const selectedTipe = ref('');
    const selectedJenis = ref('');
    const yearError = ref('');

    const tipeOptions = ref(['Peraturan', 'Monografi Hukum', 'Artikel', 'Putusan']);
    const jenisOptions = ref([]);

    const jenisByTipe = {
      'Peraturan': ['Peraturan Daerah (Perda)', 'Peraturan Bupati (Perbup)', 'Surat Keputusan', 'Perjanjian Kerja Sama'],
      'Monografi Hukum': ['Buku Hukum', 'Naskah Akademik'],
      'Artikel': ['Artikel Hukum', 'Kliping Koran', 'Jurnal Hukum'],
      'Putusan': ['Putusan']
    };

    const updateJenis = () => {
      selectedJenis.value = '';
      jenisOptions.value = jenisByTipe[selectedTipe.value] || [];
    };

    // Validasi hanya angka dan panjang tahun
    const validateYear = () => {
        const yearValue = parseInt(tahun.value);
        if (isNaN(yearValue) || yearValue < 1900 || yearValue > new Date().getFullYear()) {
          yearError.value = 'Masukkan tahun yang valid (1900 hingga saat ini)';
        } else {
          yearError.value = '';
        }
      };

    const resetForm = () => {
      keywords.value = '';
      tentang.value = '';
      nomor.value = '';
      tahun.value = '';
      tag.value = '';
      selectedTipe.value = '';
      selectedJenis.value = '';
      jenisOptions.value = [];
      yearError.value = '';
    };

    return {
      keywords,
      tentang,
      nomor,
      tahun,
      tag,
      selectedTipe,
      selectedJenis,
      yearError,
      tipeOptions,
      jenisOptions,
      updateJenis,
      validateYear,
      resetForm
    };
  }
}).mount('#app');
