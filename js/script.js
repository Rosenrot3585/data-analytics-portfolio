function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll('.lang').forEach(el => {
        el.classList.remove('visible');
        setTimeout(() => el.style.display = 'none', 200);
    });

    setTimeout(() => {
        document.querySelectorAll('.' + lang).forEach(el => {
            el.style.display = 'block';
            setTimeout(() => el.classList.add('visible'), 10);
        });
    }, 200);

    // botón activo
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelector(`.lang-switch button[onclick="setLanguage('${lang}')"]`).classList.add('active');
}

// idioma inicial
const savedLang = localStorage.getItem("lang") || "es";
setLanguage(savedLang);