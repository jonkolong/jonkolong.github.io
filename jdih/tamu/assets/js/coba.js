const { createApp } = Vue;

createApp({
    data() {
        return {
            tipeOptions: [], // Untuk menyimpan data tipe
            jenisOptions: [], // Untuk menyimpan data jenis
            tahunOptions: [], // Untuk menyimpan daftar tahun
            selectedTipe: 'semua',
            selectedJenis: 'semua',
            selectedTahun: 'semua',
            produk: [],
        };
    },
    computed: {
        filteredProduk() {
            return this.produk.filter(item => {
                const matchesTipe = this.selectedTipe === 'semua' || item.tipe_id === this.selectedTipe;
                const matchesJenis = this.selectedJenis === 'semua' || item.jenis_id === this.selectedJenis;
                const matchesTahun = this.selectedTahun === 'semua' || item.tahun_pengundangan === this.selectedTahun;
                return matchesTipe && matchesJenis && matchesTahun;
            });
        },
    },
    methods: {
        async fetchData() {
            const urlProduk = `https://website.kickymaulana.com/api/produk-hukum?tahun=semua&jenis_id=${this.selectedJenis}&tipe_id=${this.selectedTipe}&limit=10&cari=`;
            try {
                const response = await axios.get(urlProduk);
                this.produk = response.data.data;
            } catch (error) {
                console.error("Error fetching produk hukum:", error);
            }
        },
        async fetchTipe() {
            try {
                const response = await axios.get('https://website.kickymaulana.com/api/produk-hukum-tipe');
                this.tipeOptions = response.data.data; // Sesuaikan dengan struktur respons API
            } catch (error) {
                console.error("Error fetching tipe:", error);
            }
        },
        async fetchJenis() {
            // Anda harus menyesuaikan URL ini sesuai dengan API yang mengembalikan data jenis
            const urlJenis = 'https://website.kickymaulana.com/api/produk-hukum-jenis';
            try {
                const response = await axios.get(urlJenis);
                this.jenisOptions = response.data.data; // Sesuaikan dengan struktur respons API
            } catch (error) {
                console.error("Error fetching jenis:", error);
            }
        },
        async fetchTahun() {
            // Contoh pengambilan tahun yang tersedia. Sesuaikan dengan logika Anda
            const tahunSet = new Set();
            this.produk.forEach(item => {
                tahunSet.add(item.tahun_pengundangan);
            });
            this.tahunOptions = Array.from(tahunSet).sort();
        },
    },
    async created() {
        await Promise.all([this.fetchTipe(), this.fetchJenis(), this.fetchData()]);
        this.fetchTahun(); // Ambil tahun setelah produk diambil
    },
}).mount('#app');
