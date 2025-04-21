document.addEventListener('DOMContentLoaded', function () {
    const materials = [
        { title: "Pengantar Workshop", category: "argumentative", filename: "01-pengantar-ws.html" },
        { title: "Rangkaian Kegiatan", category: "argumentative", filename: "02-rangkaian-kegiatan.html" },
        { title: "Jenis Teks Akademik", category: "argumentative", filename: "03-presentasi-ws-jenis-teks-ok.html" },
        { title: "Tiga Pendekatan", category: "argumentative", filename: "04-tiga-pendekatan.html" },
        { title: "Pemahaman Struktural", category: "argumentative", filename: "05-pemahaman-struktural-ok.html" },
        { title: "Strategi Membaca dengan AI", category: "argumentative", filename: "06-strategi-membaca-dg-ai.html" },
        { title: "Definisi & Konsep Utama", category: "argumentative", filename: "07-definisi-konsep-utama.html" }
    ];

    const gridContainer = document.querySelector('.content-grid');
    gridContainer.innerHTML = '';

    materials.forEach(material => {
        const card = document.createElement('article');
        card.className = `content-card ${material.category}`;

        card.innerHTML = `
            <a href="contents/${material.filename}">
            <h3>📘 ${material.title}</h3>
        </a>
    `;


        gridContainer.appendChild(card);
    });
});
