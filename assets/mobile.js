// Akses data berdasarkab tag
const tagH1 = document.getElementsByTagName('small')
console.log(tagH1[0].innerHTML)

// Akses data berdasarkan id
const idDeskripsi = document.getElementById('deskripsi')
console.log(idDeskripsi.innerText)

// Akses data berdasarkan class
const classTanggal = document.getElementsByClassName('tanggal')
console.log(classTanggal[0].textContent)

// Akses data menggunakan querySelector
const dataDeskripsi = document.querySelector('#deskripsi')
console.log(dataDeskripsi.textContent)

const dataLi = document.querySelectorAll('.list-group-item')
console.log(dataLi[4].textContent)

// styling element
const dataP = document.querySelector('p')
// console.log(dataP.innerHTML)
dataP.style.background = 'grey'
dataP.style.borderBottom = '4px solid red'

// pengaturan class
const dataSmall = document.querySelector('small')
dataSmall.classList.add('bg-warning')
console.log(dataSmall.className)

const dataUl = document.querySelector('ul')
// dataUl.classList.remove('list-group')
console.log(dataUl.className)

// function dStyle() = dataUl {
//     dataUl
// }

const dataH1 = document.querySelector('h1')
dataH1.classList.toggle('bg-danger')

// Penambahan dan pengurangan element
const dataPenulis = document.createElement('div')
dataPenulis.textContent = 'penulis: Jon Kolong'
dataH1.after(dataPenulis)

// dataP.remove()

// modify attribute element
dataSmall.setAttribute('style','color:red')
console.log(dataSmall.getAttribute('style'))

// <a href="https://jonkolong.github.io" class="btn btn-primary">jonkolong@github</a>
const dataLink = document.createElement('a')
dataLink.setAttribute('href','https://jonkolong.github.io')
dataLink.setAttribute('class','btn btn-primary my-2')
dataLink.setAttribute('target','_none')
dataLink.textContent = 'jonkolong@github'
dataPenulis.after(dataLink)

function toggleTheme() {
    const htmlElement = document.documentElement; // Mengambil elemen <html>
    const themeButton = document.querySelector('button'); // Mengambil elemen tombol
    const themeIcon = themeButton.querySelector('i'); // Mengambil ikon di dalam tombol

    // Mengecek apakah tema saat ini adalah 'dark'
    if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
      // Mengubah tema menjadi 'light'
      htmlElement.setAttribute('data-bs-theme', 'light');

      // Mengubah tombol menjadi 'btn-light' dan ikon menjadi 'bi-sun-fill'
      themeButton.classList.remove('btn-dark','bg-info');
      themeButton.classList.add('btn-light','bg-warning');
      themeIcon.classList.remove('bi-moon-fill');
      themeIcon.classList.add('bi-sun-fill');
    } else {
      // Mengubah tema menjadi 'dark'
      htmlElement.setAttribute('data-bs-theme', 'dark');

      // Mengubah tombol menjadi 'btn-dark' dan ikon menjadi 'bi-moon-fill'
      themeButton.classList.remove('btn-light','bg-warning');
      themeButton.classList.add('btn-dark','bg-info');
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-fill');
    }
  }
