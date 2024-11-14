const { createApp, ref, onMounted } = Vue;

    const app = createApp({
        setup() {
            // State to store data
            const username = ref('');
            const isLoggedIn = ref(false);
            const loading = ref(true);

            // Fetch data using Axios
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:5500/jdih/public/data/login.json');
                    // Accessing the correct fields based on your provided JSON structure
                    isLoggedIn.value = response.data.data.sudahlogin;
                    if (isLoggedIn.value) {
                        username.value = response.data.data.nama;
                    }
                } catch (error) {
                    console.error("Error fetching data: ", error);
                } finally {
                    loading.value = false;
                }
            };

            // Fetch data when component is mounted
            onMounted(() => {
                fetchData();
            });

            return {
                username,
                isLoggedIn,
                loading
            };
        }
    });

    app.mount('#login');