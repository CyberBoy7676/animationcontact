alert("open on PC or laptop for seeing better animation . See text hover animation also.")
const textEl = document.querySelector(".rubber-band");
if (textEl) {
    const text = textEl.textContent;
    const swap = text.replace(/\s/g, '');
    const letters = swap.split("");
    const makeSpan = (letter) => `<span class="rubber-span">${letter}</span>`;
    let html = '';

    letters.forEach((letter) => (html += makeSpan(letter)));
    textEl.innerHTML = html;
}

const spans = document.querySelectorAll(".rubber-span");
spans.forEach((element) => {
    element.addEventListener("mouseover", () => 
        element.classList.add("animated", "rubberBand")
    );
});
spans.forEach((element) => {
    element.addEventListener('mouseout', () => 
        setTimeout(() => {
            element.classList.remove("animated", "rubberBand");

        }, 1000)
    );
});


