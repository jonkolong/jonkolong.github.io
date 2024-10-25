const { createApp } = Vue;

createApp({
    data() {
        return {
            peraturan: [],
            idData: 1 // Ganti dengan ID yang diinginkan
        };
    },
    mounted() {
        this.getPeraturanById();
    },
    methods: {
        getPeraturanById() {
            axios.get('https://jonkolong.github.io/jdih/public/data/peraturan.json')
                .then(response => {
                    const peraturanList = response.data.data; // Pastikan untuk menggunakan data yang benar
                    this.peraturan = peraturanList.filter(peraturan => peraturan.id === this.idData);
                })
                .catch(error => {
                    console.error("Terjadi kesalahan:", error);
                });
        }
    }
}).mount('#filter');
