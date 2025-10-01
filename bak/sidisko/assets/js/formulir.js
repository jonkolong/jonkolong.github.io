const { createApp, ref } = Vue;

createApp({
  setup() {
    const currentStep = ref(1);
    const completedSteps = ref([]);
    const formData = ref({
      name: '',
      email: '',
      address: '',
      city: '',
      phone: '',
      comments: ''
    });

    const goToStep = (step) => {
      if (step === 1 || completedSteps.value.includes(step - 1)) {
        currentStep.value = step;
      }
    };

    const nextStep = () => {
      if (currentStep.value === 1 && formData.value.name && formData.value.email) {
        completedSteps.value.push(1);
        currentStep.value++;
      } else if (currentStep.value === 2 && formData.value.address && formData.value.city) {
        completedSteps.value.push(2);
        currentStep.value++;
      } else {
        alert("Isi semua field yang diperlukan sebelum melanjutkan.");
      }
    };

    const prevStep = () => {
      if (currentStep.value > 1) currentStep.value--;
    };

    const handleSubmit = () => {
      alert('Form submitted!\n' + JSON.stringify(formData.value, null, 2));
    };

    return {
      currentStep,
      completedSteps,
      formData,
      goToStep,
      nextStep,
      prevStep,
      handleSubmit
    };
  }
}).mount('#formulir');
