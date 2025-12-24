function handleMenu() {
    const dialog = document.getElementById("nav-dialog");
    dialog.classList.toggle("hidden");
}

const lines = [
    { el: document.getElementById("line-1"), dir: 1, start: -150 },
    { el: document.getElementById("line-2"), dir: -1, start: -200 },
    { el: document.getElementById("line-3"), dir: 1, start: -150 },
];

let lastScrollY = window.scrollY;

// Initial setup
lines.forEach(({ el, start }) => {
    if (!el) return;

    el.dataset.x = start;
    el.style.transform = `translateX(${start}px)`;
    el.style.transition = "transform 0.3s ease-out";
    el.style.willChange = "transform";
});

function animate() {
    const scrollY = window.scrollY;
    const delta = scrollY - lastScrollY;
    lastScrollY = scrollY;

    lines.forEach(({ el, dir }) => {
        if (!el) return;

        let current = parseFloat(el.dataset.x);
        current += delta * 0.1 * dir;

        el.dataset.x = current;
        el.style.transform = `translateX(${current}px)`;
    });

    requestAnimationFrame(animate);
}

animate();
