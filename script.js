// NAV TOGGLE ZA MOBITEL
const navToggle = document.getElementById("navToggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

// GLATKI SCROLL S HERO GUMBA
const heroBtn = document.getElementById("heroBtn");
const timelineSection = document.getElementById("timeline");

heroBtn.addEventListener("click", () => {
    timelineSection.scrollIntoView({ behavior: "smooth" });
});

// "PRIKAŽI VIŠE" U TIMELINEU
const toggleButtons = document.querySelectorAll(".toggle-more");

toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const parent = btn.closest(".timeline-item");
        const moreText = parent.querySelector(".timeline-more");

        if (moreText.style.display === "block") {
            moreText.style.display = "none";
            btn.textContent = "Prikaži više";
        } else {
            moreText.style.display = "block";
            btn.textContent = "Prikaži manje";
        }
    });
});

// KONZOLE – PRIKAZ INFORMACIJA
const consoleButtons = document.querySelectorAll(".console-card");
const consoleInfo = document.getElementById("consoleInfo");

const consolesData = {
    atari2600: {
        name: "Atari 2600",
        year: "1977.",
        desc: "Jedna od prvih masovno popularnih kućnih konzola. Poznata po igrama kao što su Space Invaders i Pitfall!.",
        img: "img/atari2600.jpg"
    },
    nes: {
        name: "Nintendo Entertainment System (NES)",
        year: "1983.",
        desc: "Konzola koja je revitalizirala tržište videoigara. Donijela je klasike poput Super Mario Bros. i The Legend of Zelda.",
        img: "img/nes.jpg"
    },
    snes: {
        name: "Super Nintendo Entertainment System (SNES)",
        year: "1990.",
        desc: "Naprednija 16-bitna konzola s bogatom bibliotekom igara, npr. Super Metroid, Chrono Trigger i The Legend of Zelda: A Link to the Past.",
        img: "img/snes.jpg"
    },
    megadrive: {
        name: "Sega Mega Drive / Genesis",
        year: "1988.",
        desc: "Segin odgovor Nintendu, poznat po Sonic the Hedgehog serijalu i agresivnom marketingu.",
        img: "img/megadrive.jpg"
    },
    n64: {
        name: "Nintendo 64",
        year: "1996.",
        desc: "Konzola koja je snažno gurala 3D svjetove, s naslovima poput Super Mario 64, The Legend of Zelda: Ocarina of Time i GoldenEye 007.",
        img: "img/n64.jpg"
    },
    ps1: {
        name: "Sony PlayStation (PS1)",
        year: "1994.",
        desc: "Prva Sonyjeva konzola koja je popularizirala CD medije i donijela serijale kao što su Final Fantasy i Resident Evil.",
        img: "img/ps1.jpg"
    },
    ps2: {
        name: "Sony PlayStation 2",
        year: "2000.",
        desc: "Najprodavanija konzola svih vremena. Uz veliku ponudu igara služila je i kao pristupačan DVD player.",
        img: "img/ps2.jpg"
    },
    gamecube: {
        name: "Nintendo GameCube",
        year: "2001.",
        desc: "Kompaktna konzola s mini-diskovima i naslovima poput Super Smash Bros. Melee i Metroid Prime.",
        img: "img/gamecube.jpg"
    },
    xbox: {
        name: "Microsoft Xbox",
        year: "2001.",
        desc: "Microsoftov ulazak na tržište konzola, prepoznatljiv po serijalu Halo i integriranom tvrdome disku.",
        img: "img/xbox.jpg"
    },
    xbox360: {
        name: "Microsoft Xbox 360",
        year: "2005.",
        desc: "Jedan od ključnih igrača ere HD igara, s naglaskom na online uslugu Xbox Live i multiplayer.",
        img: "img/xbox360.jpg"
    },
    ps4: {
        name: "Sony PlayStation 4",
        year: "2013.",
        desc: "Konzola fokusirana na snažan hardver i bogatu biblioteku ekskluziva, uz naglasak na streaming i online usluge.",
        img: "img/ps4.jpg"
    },
    switch: {
        name: "Nintendo Switch",
        year: "2017.",
        desc: "Hibridna konzola koja kombinira kućno i prijenosno igranje, poznata po fleksibilnosti i serijalima poput The Legend of Zelda i Mario Kart.",
        img: "img/switch.jpg"
    }
};

consoleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-console");
        const data = consolesData[key];

        if (!data) return;

        consoleInfo.innerHTML = `
            <h3>${data.name}</h3>
            <p><strong>Godina izlaska:</strong> ${data.year}</p>
            <p>${data.desc}</p>
        `;
    });
});

// TOP 5 IGARA – PRIKAZ INFORMACIJA
const gameButtons = document.querySelectorAll(".game-item");
const gameInfo = document.getElementById("gameInfo");

const gamesData = {
    aoe2: {
        title: "Age of Empires II",
        reason: "RTS klasik s vremenski besprijekornim balansom frakcija, dubokim makro/micro igranjem i legendarnim kampanjama."
    },
    zeldaoot: {
        title: "The Legend of Zelda: Ocarina of Time",
        reason: "Postavila je standard za 3D akcijsko-avanturističke igre: nezaboravni dungeoni, glazba i dizajn svjetova."
    },
    acbrotherhood: {
        title: "Assassin's Creed: Brotherhood",
        reason: "Najbolja Ezio avantura: otvoreni Rim, regrutiranje Brotherhooda i fluidan stealth/parkour vrhunac rane serije."
    },
    gtav: {
        title: "Grand Theft Auto V",
        reason: "Jedna od najambicioznijih igara svih vremena: ogroman svijet i sloboda igranja."
    },
    gowr: {
        title: "God of War: Ragnarok",
        reason: "Emocionalni vrhunac nordijske sage s raskošnom prezentacijom i brutalnim, slojevitim borbenim sustavom."
    }
};

gameButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const key = btn.dataset.game;
        const data = gamesData[key];

        gameInfo.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.reason}</p>
        `;
    });
});

// KVIZ – PROVJERA REZULTATA
const quizSubmitBtn = document.getElementById("quizSubmit");
const quizResult = document.getElementById("quizResult");

const quizAnswers = {
    q1: "a", // Halo: Combat Evolved
    q2: "b", // FromSoftware
    q3: "c", // Tetris je puzzle
    q4: "b", // PS1 1994.
    q5: "c"  // Vice City
};

if (quizSubmitBtn) {
    quizSubmitBtn.addEventListener("click", () => {
        let score = 0;
        const total = Object.keys(quizAnswers).length;

        for (const qId in quizAnswers) {
            const selected = document.querySelector(`input[name="${qId}"]:checked`);
            if (selected && selected.value === quizAnswers[qId]) {
                score++;
            }
        }

        let message = `Rezultat: ${score} / ${total}. `;

        if (score === total) {
            message += "Savršen rezultat! 🏆";
        } else if (score === total - 1) {
            message += "Odlično, samo malo fali do savršenstva!";
        } else {
            message += "Nema veze, probaj još jednom – možda ćeš ovaj put pogoditi više.";
        }

        quizResult.textContent = message;
    });
}

// MODAL GALERIJA KONZOLA
const galleryModal = document.getElementById("galleryModal");
const openGalleryBtn = document.getElementById("openGalleryBtn");
const modalCloseBtn = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalDesc = document.getElementById("modalDesc");

const prevConsoleBtn = document.getElementById("prevConsole");
const nextConsoleBtn = document.getElementById("nextConsole");

const galleryOrder = [
    "atari2600",
    "nes",
    "snes",
    "megadrive",
    "n64",
    "ps1",
    "ps2",
    "gamecube",
    "xbox",
    "xbox360",
    "ps4",
    "switch"
];

let currentConsoleIndex = 0;

function showConsoleInModal(key) {
    const data = consolesData[key];
    if (!data) return;

    modalImage.src = data.img || "";
    modalImage.alt = data.name;
    modalTitle.textContent = data.name;
    modalYear.textContent = `Godina izlaska: ${data.year}`;
    modalDesc.textContent = data.desc;
}

function openModalAtIndex(index) {
    currentConsoleIndex = index;
    const key = galleryOrder[currentConsoleIndex];
    showConsoleInModal(key);
    galleryModal.classList.add("show");
}

function closeModal() {
    galleryModal.classList.remove("show");
}

if (openGalleryBtn) {
    openGalleryBtn.addEventListener("click", () => {
        openModalAtIndex(0);
    });
}

if (prevConsoleBtn && nextConsoleBtn) {
    prevConsoleBtn.addEventListener("click", () => {
        currentConsoleIndex =
            (currentConsoleIndex - 1 + galleryOrder.length) % galleryOrder.length;
        showConsoleInModal(galleryOrder[currentConsoleIndex]);
    });

    nextConsoleBtn.addEventListener("click", () => {
        currentConsoleIndex =
            (currentConsoleIndex + 1) % galleryOrder.length;
        showConsoleInModal(galleryOrder[currentConsoleIndex]);
    });
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
}

if (galleryModal) {
    galleryModal.addEventListener("click", (e) => {
        if (e.target === galleryModal) {
            closeModal();
        }
    });
}

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
