// app.js: Skrip utama Vue.js
const { createApp, defineComponent, onMounted, ref } = Vue;

// Komponen Header
const HeaderComponent = defineComponent({
  template: `<div>Loading...</div>`, // Placeholder sementara
  setup() {
    const template = ref('');

    onMounted(async () => {
      template.value = await loadTemplate('./components/header.html');
    });

    return { template };
  },
  render() {
    return Vue.h('div', { innerHTML: this.template });
  }
});

// Komponen Header
const StatusTiketComponent = defineComponent({
  template: `<div>Loading...</div>`, // Placeholder sementara
  setup() {
    const template = ref('');

    onMounted(async () => {
      template.value = await loadTemplate('./components/status-tiket.html');
    });

    return { template };
  },
  render() {
    return Vue.h('div', { innerHTML: this.template });
  }
});

// Komponen Footer
const FooterComponent = defineComponent({
  template: `<div>Loading...</div>`, // Placeholder sementara
  setup() {
    const template = ref('');

    onMounted(async () => {
      template.value = await loadTemplate('./components/footer.html');
    });

    return { template };
  },
  render() {
    return Vue.h('div', { innerHTML: this.template });
  }
});

// Inisialisasi aplikasi Vue
const app = createApp({
  components: {
    'header-component': HeaderComponent,
    'status-tiket-component': StatusTiketComponent,
    'footer-component': FooterComponent,
  },
});

app.mount('#app');
