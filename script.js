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
            parseFloat(el.dataset.x || 0) + delta * 0.25 * dir;

        el.dataset.x = current;
        el.style.transform = `translateX(${current}px)`;
    });

    requestAnimationFrame(animate);
}

animate();

// const lines = document.querySelectorAll('[data-line]');

// function setupIntersectionObserver(element, isLTR, speed) {
//     let initialTranslate = isLTR ? -200 : 200;

//     const observer = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//             window.addEventListener('scroll', scrollHandler);
//         } else {
//             window.removeEventListener('scroll', scrollHandler);
//         }
//     });

//     observer.observe(element);

//     function scrollHandler() {
//         const rectTop = element.getBoundingClientRect().top;
//         const translateX = (window.innerHeight - rectTop) * speed;

//         const finalTranslate = isLTR
//             ? translateX + initialTranslate
//             : -(translateX + initialTranslate);

//         element.style.transform = `translateX(${finalTranslate}px)`;
//     }
// }

// // Apply to all lines automatically
// lines.forEach((line) => {
//     const direction = line.dataset.direction;
//     setupIntersectionObserver(line, direction === 'ltr', 0.15);
// });


// const lines = [
//     { el: document.getElementById("line-1"), dir: 1 },
//     { el: document.getElementById("line-2"), dir: -1 },
//     { el: document.getElementById("line-3"), dir: 1 },
// ];

// let lastScrollY = window.scrollY;
// let currentX = [0, 0, 0];

// function animate() {
//     const scrollY = window.scrollY;
//     const delta = scrollY - lastScrollY;
//     lastScrollY = scrollY;

//     lines.forEach((line, index) => {
//         if (!line.el) return;

//         currentX[index] += delta * 0.3 * line.dir;

//         line.el.style.transform = `translateX(${currentX[index]}px)`;
//         line.el.style.willChange = "transform";
//     });

//     requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);