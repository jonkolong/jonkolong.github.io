const { ref, createApp } = Vue;

  createApp({
    setup() {
      const stars = ref([1, 2, 3, 4, 5]);
      const currentRating = ref(0);
      const hoverRating = ref(0);

      // Set the rating permanently when clicking
      const setRating = (rating) => {
        currentRating.value = rating;
      };

      // Set the hover rating temporarily
      const hoverRatingFn = (rating) => {
        hoverRating.value = rating;
      };

      return { stars, currentRating, hoverRating, setRating, hoverRatingFn };
    }
  }).mount('#tiket');