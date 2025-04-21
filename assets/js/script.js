document.addEventListener('DOMContentLoaded', function() {
    // Daftar materi (nanti bisa digenerate dari file di folder contents)
    const materials = [
        {
            title: "Dasar-dasar Pendekatan Literasi Akademik Berbantuan AI",
            description: "Pengantar tentang integrasi AI dalam literasi akademik",
            category: "argumentative",
            filename: "07-pengantar-WS.html"
        },
        // Tambahkan materi lain di sini atau generate dari folder
    ];

    const gridContainer = document.querySelector('.content-grid');
    
    // Kosongkan container (hapus contoh yang ada)
    gridContainer.innerHTML = '';
    
    // Buat kartu untuk setiap materi
    materials.forEach(material => {
        const card = document.createElement('article');
        card.className = `content-card ${material.category}`;
        
        card.innerHTML = `
            <a href="contents/${material.filename}">
                <h3>${material.title}</h3>
                <p>${material.description}</p>
            </a>
        `;
        
        gridContainer.appendChild(card);
    });
});