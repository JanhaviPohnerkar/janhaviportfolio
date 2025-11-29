const specialties = [
    "Embedded Systems",
    "Robotics Engineering",
    "Signal Processing",
    "Computer Vision",
    "IoT & Automation"
];

let idx = 0;
let charIdx = 0;
let deleting = false;

function typeSpecialty() {
    const el = document.getElementById("typing-specialty");
    const word = specialties[idx];

    if (!deleting) {
        el.textContent = word.slice(0, charIdx++);
        if (charIdx > word.length) {
            deleting = true;
            setTimeout(typeSpecialty, 1000);
            return;
        }
    } else {
        el.textContent = word.slice(0, charIdx--);
        if (charIdx < 0) {
            deleting = false;
            idx = (idx + 1) % specialties.length;
        }
    }
    setTimeout(typeSpecialty, 120);
}

window.onload = typeSpecialty;
