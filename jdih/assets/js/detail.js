const { createApp, ref, computed, onMounted } = Vue;

createApp({
  setup() {
    // Reactive reference for product detail
    const productDetail = ref(null);

    // Computed property to modify 'teuBadan' if the 'jenis' is 'Peraturan Bupati'
    const modifiedTeuBadan = computed(() => {
      if (productDetail.value && productDetail.value.jenis === 'Peraturan Bupati') {
        return productDetail.value.teuBadan.replace(/Kabupaten\s*/i, '');
      }
      return productDetail.value ? productDetail.value.teuBadan : '';
    });

    // Function to format the date
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();

      return `${day} ${month} ${year}`;
    };

    // Function to fetch product detail data
    const fetchData = async (dataId) => {
      try {
        const response = await axios.get(`https://website.kickymaulana.com/api/produk-hukum-detail?data=${dataId}`);
        productDetail.value = response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Lifecycle hook for fetching data when the component is mounted
    onMounted(() => {
      const dataId = new URLSearchParams(window.location.search).get("data");
      if (dataId) {
        fetchData(dataId);
      } else {
        console.error("Parameter 'data' tidak ditemukan di URL");
      }
    });

    // Return reactive references, computed properties, and the formatDate function to the template
    return {
      productDetail,
      modifiedTeuBadan,
      formatDate
    };
  }
}).mount('#app');
