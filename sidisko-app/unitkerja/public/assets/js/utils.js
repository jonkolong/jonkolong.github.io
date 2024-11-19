// utils.js: Fungsi utilitas
async function loadTemplate(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Gagal memuat template dari ${url}`, error);
      return `<div class="alert alert-danger">Gagal memuat komponen dari ${url}.</div>`;
    }
  }
  