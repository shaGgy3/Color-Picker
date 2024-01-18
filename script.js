const btn = document.querySelector(".button");
const hexCodes = Array.from(document.querySelectorAll(".col-lg-3"));
const codePlace = Array.from(document.querySelectorAll("#hexCode"));

btn.addEventListener("click", changeColor);

function changeColor(event) {
    const hex_number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    for (let i = 0; i < hexCodes.length; i++) {
        let hexCode = '';
        for (let j = 0; j < 6; j++) {
            let randomIndex = Math.floor(Math.random() * hex_number.length);
            hexCode += hex_number[randomIndex];
        }

        codePlace[i].innerHTML = `Hex Code #${hexCode}`;
        hexCodes[i].style.backgroundColor = `#${hexCode}`;
    }
}
