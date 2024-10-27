const app = Vue.createApp({
  data() {
    return {
      searchQuery: '',
      sortOption: 'newest',
      peraturans: []
    };
  },
  computed: {
    sortedAndFilteredPeraturans() {
      // Filter items to show only "Peraturan Daerah"
      return this.peraturans
        .filter(item => item.jenis === 'Peraturan Daerah')
        .sort((a, b) => {
          if (this.sortOption === 'newest') {
            return b.tahun_pengundangan - a.tahun_pengundangan;
          } else if (this.sortOption === 'oldest') {
            return a.tahun_pengundangan - b.tahun_pengundangan;
          }
          return 0;
        });
    }
  },
  mounted() {
    axios.get('https://jonkolong.github.io/jdih/public/data/peraturan.json')
      .then(response => {
        this.peraturans = response.data;
        console.log('Fetched data:', this.peraturans);  // Log the data to check if it’s being fetched correctly
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
});

app.mount('#filter');
