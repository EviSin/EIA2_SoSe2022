"use strict";
var L10_Strand;
(function (L10_Strand) {
    /* In Zusammenarbeit mit Linda Bentz und Anna-Lena Jörger */
    let moveables = [];
    L10_Strand.num = 0.5;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        if (!canvas)
            return;
        L10_Strand.crc2 = canvas.getContext("2d");
        let bay = L10_Strand.crc2.canvas.height * L10_Strand.num;
        let posBay = { x: 0, y: bay };
        drawSky();
        drawSand();
        drawWater();
        drawSun({ x: 650, y: 100 });
        drawBay(posBay, -80, 400, "brown", "brown");
        L10_Strand.imageData = L10_Strand.crc2.getImageData(0, 0, L10_Strand.crc2.canvas.width, L10_Strand.crc2.canvas.height);
        createPeople();
        createClouds();
        createBirds();
        createShip();
        window.setInterval(update, 20);
    }
    function drawSky() {
        let gradient = L10_Strand.crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#7BCDDF");
        gradient.addColorStop(1, "#1874CD");
        L10_Strand.crc2.fillStyle = gradient;
        L10_Strand.crc2.fillRect(0, 0, L10_Strand.crc2.canvas.width, 300);
    }
    function drawSand() {
        let gradient = L10_Strand.crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0.5, "#d5ba8c");
        gradient.addColorStop(0.7, "#d8b475");
        gradient.addColorStop(0.9, "#ad7b24");
        gradient.addColorStop(1.0, "#94681d");
        L10_Strand.crc2.beginPath();
        L10_Strand.crc2.fillStyle = gradient;
        L10_Strand.crc2.fillRect(0, 300, L10_Strand.crc2.canvas.width, 500);
    }
    function drawWater() {
        let gradient = L10_Strand.crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0.5, "#197580");
        gradient.addColorStop(0.7, "#2f8b96");
        gradient.addColorStop(0.9, "#56c1cd");
        gradient.addColorStop(1.0, "#74e1ee");
        L10_Strand.crc2.beginPath();
        L10_Strand.crc2.fillStyle = gradient;
        L10_Strand.crc2.fillRect(0, 300, L10_Strand.crc2.canvas.width, 150);
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 300;
        let gradient = L10_Strand.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
        gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
        gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
        L10_Strand.crc2.save();
        L10_Strand.crc2.translate(_position.x, _position.y);
        L10_Strand.crc2.fillStyle = gradient;
        L10_Strand.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_Strand.crc2.fill();
        L10_Strand.crc2.restore();
    }
    function drawBay(_position, _min, _max, _colorLow, _colorHigh) {
        L10_Strand.crc2.beginPath();
        L10_Strand.crc2.strokeStyle = "#5c3c18";
        L10_Strand.crc2.lineWidth = 2;
        let gradient = L10_Strand.crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0.5, "#6e471b");
        gradient.addColorStop(0.7, "#5c3c18");
        gradient.addColorStop(0.9, "#472f13");
        gradient.addColorStop(1.0, "#422a0f");
        L10_Strand.crc2.fillStyle = gradient;
        L10_Strand.crc2.moveTo(_min - 15000, _max + 100);
        L10_Strand.crc2.lineTo(_min + 10, _max - 220);
        L10_Strand.crc2.lineTo(_min + 180, _max - 100);
        L10_Strand.crc2.lineTo(_min + 300, _max + 90);
        L10_Strand.crc2.lineTo(_min + 30, _max + 400);
        L10_Strand.crc2.fillStyle = gradient;
        L10_Strand.crc2.fill();
        L10_Strand.crc2.stroke();
        L10_Strand.crc2.closePath();
    }
    function createPeople() {
        let people = new L10_Strand.People();
        moveables.push(people);
    }
    function createBirds() {
        for (let i = 0; i < 10; i++) {
            let bird = new L10_Strand.Bird(0.8);
            moveables.push(bird);
        }
    }
    function createClouds() {
        let cloud = new L10_Strand.Cloud();
        moveables.push(cloud);
    }
    function createShip() {
        let ship = new L10_Strand.Ship();
        moveables.push(ship);
    }
    function update() {
        L10_Strand.crc2.fillRect(0, 0, L10_Strand.crc2.canvas.width, L10_Strand.crc2.canvas.height);
        L10_Strand.crc2.putImageData(L10_Strand.imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(L10_Strand || (L10_Strand = {}));
//# sourceMappingURL=Beach.js.map