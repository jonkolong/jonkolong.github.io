const { ref, onMounted, createApp } = Vue;

createApp({
  setup() {
    const metadata = ref([]);
    const selectedPeraturan = ref(null);

    onMounted(() => {
      axios.get('https://jonkolong.github.io/jdih/public/data/peraturan.json')
        .then(response => {
          metadata.value = response.data; // Simpan seluruh data
          if (metadata.value.length > 0) {
            selectedPeraturan.value = metadata.value[0]; // Pilih peraturan pertama secara default
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    });

    const selectPeraturan = (peraturan) => {
      selectedPeraturan.value = peraturan; // Set peraturan yang dipilih
    };

    return { metadata, selectedPeraturan, selectPeraturan };
  }
}).mount('#filter');
