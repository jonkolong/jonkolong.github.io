const { createApp, ref, onMounted } = Vue;

    createApp({
      setup() {
        const hours = ref('');
        const minutes = ref('');
        const seconds = ref('');
        const day = ref('');
        const month = ref('');
        const year = ref('');

        const updateTime = () => {
          const now = new Date();

          // Format waktu
          hours.value = String(now.getHours()).padStart(2, '0');
          minutes.value = String(now.getMinutes()).padStart(2, '0');
          seconds.value = String(now.getSeconds()).padStart(2, '0');

          // Format tanggal
          day.value = String(now.getDate()).padStart(2, '0');
          month.value = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
          year.value = now.getFullYear();
        };

        onMounted(() => {
          updateTime();
          setInterval(updateTime, 1000); // Update setiap detik
        });

        return {
          hours,
          minutes,
          seconds,
          day,
          month,
          year
        };
      }
    }).mount('#app');