const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

// Variabel untuk menghitung jumlah klik tombol "No"
let noClickCount = 0;

// Efek ketika tombol "No" ditekan
noBtn.addEventListener('click', function() {
    noClickCount++;
    // Membesarkan tombol "Yes" dengan setiap klik "No"
    yesBtn.style.transform = `scale(${1 + noClickCount * 0.2})`; // Meningkatkan ukuran tombol secara bertahap

    // Menjaga tombol "Yes" agar tidak terlalu besar dari ukuran layar
    if (noClickCount > 10) { // Atur batasan jumlah klik yang bisa diperbolehkan
        yesBtn.style.transform = 'scale(5)';
    }

    // Menghilangkan tombol "No" tetapi tombol "Yes" tetap terlihat
    noBtn.style.display = 'none';
});

// Efek ketika tombol "Yes" ditekan
yesBtn.addEventListener('click', function() {
    // Menghilangkan kedua tombol
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    // Menampilkan pesan dan gambar hadiah
    message.classList.remove('hidden');
});
