function handleMenu() {
    const dialog = document.getElementById("nav-dialog");
    dialog.classList.toggle("hidden");
}

const lines = [
    { el: document.getElementById("line-1"), dir: 1 },
    { el: document.getElementById("line-2"), dir: -1 },
    { el: document.getElementById("line-3"), dir: 1 },
];

let lastScrollY = window.scrollY;

// Apply smooth transition once
lines.forEach(({ el }) => {
    if (el) {
        el.style.transition = "transform 0.3s ease-out";
        el.style.willChange = "transform";
    }
});

function animate() {
    const scrollY = window.scrollY;
    const delta = scrollY - lastScrollY;
    lastScrollY = scrollY;

    lines.forEach(({ el, dir }) => {
        if (!el) return;

        const current =
            parseFloat(el.dataset.x || 0) + delta * 0.15 * dir;

        el.dataset.x = current;
        el.style.transform = `translateX(${current}px)`;
    });

    requestAnimationFrame(animate);
}

animate();