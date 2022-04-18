"use strict";
var L03_Memory;
(function (L03_Memory) {
    // Ich habe den Browser "Microsoft Edge" und den Bildschrim eines durchschnittlichen Laptops benutzt (falls die Memorys versetzt aussehen)
    let feld = document.querySelector("div#form");
    feld.addEventListener("change", handlechange);
    document.getElementById("start")?.addEventListener("click", go);
    let paar = document.querySelector("input#kartenpaare");
    let size = document.querySelector("input#kartengröße");
    let backColor = document.querySelector("input#hintergrundfarbe");
    let fontColor = document.querySelector("input#schriftfarbe");
    let fontText = document.getElementById("title");
    let tempSize = "";
    let tempColor = "";
    let cardNr = 0;
    let activeCards = [];
    let activeCardsName = [];
    let doneCards = [];
    function handlechange(_event) {
        let target = _event.target;
        if (target.type == "radio") {
            console.log(target.value);
            fontText.style.fontFamily = target.value;
        }
        if (Number(size.value) == 0) {
            tempSize = "small";
        }
        else if (Number(size.value) == 4) {
            tempSize = "big";
        }
        else {
            tempSize = "medium";
        }
        if (target.type == "select-one") {
            if (target.value == "black") {
                tempColor = "FrontBlack";
            }
            else if (target.value == "white") {
                tempColor = "FrontWhite";
            }
            else if (target.value == "blue") {
                tempColor = "FrontBlue";
            }
            else if (target.value == "red") {
                tempColor = "FrontRed";
            }
        }
    }
    function go(_event) {
        cardNr = Number(paar.value);
        document.body.style.backgroundColor = backColor.value;
        fontText.style.color = fontColor.value;
        feld.innerHTML = "";
        handleLoad();
    }
    function handleLoad() {
        let memoryArray1 = ["pics/boyflying.jpg", "pics/girlcloudy.png", "pics/boynature.jpg", "pics/girlcloud.jpg", "pics/girlflying.jpg", "pics/mansky.jpg", "pics/girlspace.jpg", "pics/girlumbrella.jpg", "pics/girlwindow.jpg", "pics/handmoon.jpg", "pics/heart.jpg", "pics/mandessert.jpg", "pics/manfish.jpg", "pics/manlight.jpg", "pics/moonboy.jpg"];
        let memoryArray2 = ["pics/boyflying.jpg", "pics/girlcloudy.png", "pics/boynature.jpg", "pics/girlcloud.jpg", "pics/girlflying.jpg", "pics/mansky.jpg", "pics/girlspace.jpg", "pics/girlumbrella.jpg", "pics/girlwindow.jpg", "pics/handmoon.jpg", "pics/heart.jpg", "pics/mandessert.jpg", "pics/manfish.jpg", "pics/manlight.jpg", "pics/moonboy.jpg"];
        let customArray1 = memoryArray1.slice(0, cardNr);
        let customArray2 = memoryArray2.slice(0, cardNr);
        for (let i = cardNr; i >= 1; i--) {
            let min = 0;
            let max = i - 1;
            let coincidenceblock1 = Math.floor(Math.random() * (max - min + 1)) + min;
            let coincidenceblock2 = Math.floor(Math.random() * (max - min + 1)) + min;
            let tempDiv = document.createElement("div");
            let tempImg = document.createElement("img");
            tempDiv.classList.add("divboxFront", tempSize.toString(), tempColor.toString());
            tempDiv.appendChild(tempImg);
            tempImg.setAttribute("src", customArray1[coincidenceblock1]);
            tempImg.classList.add("back", tempSize.toString());
            tempImg.setAttribute("name", customArray1[coincidenceblock1]);
            tempImg.setAttribute("id", customArray1[coincidenceblock1]);
            document.getElementById("box")?.appendChild(tempDiv);
            customArray1.splice(coincidenceblock1, 1);
            let tempDiv2 = document.createElement("div");
            let tempImg2 = document.createElement("img");
            tempDiv2.classList.add("divboxFront", tempSize.toString(), tempColor.toString());
            tempDiv2.appendChild(tempImg2);
            tempImg2.setAttribute("src", customArray2[coincidenceblock2]);
            tempImg2.classList.add("back", tempSize.toString());
            tempImg2.setAttribute("name", customArray2[coincidenceblock2]);
            tempImg2.setAttribute("id", customArray2[coincidenceblock2]);
            document.getElementById("box")?.appendChild(tempDiv2);
            customArray2.splice(coincidenceblock2, 1);
        }
        let pics = document.querySelectorAll("img");
        for (let i = 0; i < cardNr * 2; i++) {
            pics[i].addEventListener("click", Frontclass);
        }
    }
    let time = 0;
    setInterval(timer, 1000);
    function timer() {
        time++;
    }
    function Frontclass(_event) {
        let elem = _event.target;
        if (activeCards.length < 2) {
            elem.classList.remove("back");
            elem.classList.add("front");
            elem.removeEventListener("click", Frontclass);
            let nameOf = String(elem.getAttribute("name"));
            activeCardsName.push(nameOf);
            activeCards.push(elem);
        }
        if (activeCards.length == 2) {
            setTimeout(removeElement1, 800);
            setTimeout(Backclass, 1500);
        }
    }
    function Backclass() {
        for (let i = 0; activeCards.length > i; i++) {
            activeCards[i].classList.remove("front");
            activeCards[i].classList.add("back");
            activeCards[i].addEventListener("click", Frontclass);
        }
        activeCards = [];
        activeCardsName = [];
    }
    function removeElement1() {
        if (activeCardsName[0] == activeCardsName[1]) {
            let rem1 = document.getElementsByName(activeCardsName[0]);
            rem1[0].classList.remove("front");
            rem1[0].classList.add("gone");
            rem1[0].parentElement?.classList.remove("divboxFront", tempColor.toString());
            rem1[0].parentElement?.classList.add("divboxBack");
            doneCards.push(rem1[0]);
            rem1[1].classList.remove("front");
            rem1[1].classList.add("gone");
            rem1[1].parentElement?.classList.remove("divboxFront", tempColor.toString());
            rem1[1].parentElement?.classList.add("divboxBack");
            doneCards.push(rem1[1]);
            activeCards = [];
            activeCardsName = [];
        }
        if (doneCards.length == cardNr * 2) {
            alert("You won! Your time was: " + time + " sec");
        }
    }
})(L03_Memory || (L03_Memory = {}));
//# sourceMappingURL=Memory_Skript.js.map