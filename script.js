// Ambil semua gambar screenshot
const screenshots = document.querySelectorAll('.screenshot-thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.close-btn');

// Tampilkan pop-up gambar ketika gambar diklik
screenshots.forEach(image => {
    image.addEventListener('click', (e) => {
        const imageSrc = e.target.getAttribute('data-src');
        lightboxImage.src = imageSrc;
        lightbox.style.display = 'flex'; // Tampilkan lightbox
        document.body.style.overflow = 'hidden'; // Mencegah scrolling
    });
});

// Tutup pop-up ketika tombol close diklik
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Sembunyikan lightbox
    document.body.style.overflow = ''; // Kembalikan scrolling
});

// Tutup pop-up ketika area di luar gambar diklik
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none'; // Sembunyikan lightbox
        document.body.style.overflow = ''; // Kembalikan scrolling
    }
});
