/* Zusammenarbeit mit Anna-Lena Jörger */
var L08_1_GenerativeKunst;
(function (L08_1_GenerativeKunst) {
    let crc2;
    let color;
    let saturation;
    let lightness;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let gradient = crc2.createLinearGradient(50, 100, 150, 400);
        color = Math.round(Math.random() * 400);
        gradient.addColorStop(0, "hsl(" + color + "," + "80%, " + "90%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 2000, 1000);
        for (let index = 0; index < 20; index++) {
            let randomnumber1 = Math.floor(Math.random() * 800);
            let randomnumber2 = Math.floor(Math.random() * 600);
            drawingcircle(randomnumber1, randomnumber2);
            drawingline(randomnumber1, randomnumber2);
            drawingtriangle(randomnumber1, randomnumber2);
            drawingbubble(randomnumber1, randomnumber2);
        }
    }
    function drawingcircle(_randomnumber1, _randomnumber2) {
        color = Math.round(Math.random() * 50);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 100);
        let radius = Math.round(Math.random() * 60);
        _randomnumber1 = Math.random() * 800;
        _randomnumber1 = Math.random() * 600;
        crc2.beginPath();
        crc2.arc(_randomnumber1, _randomnumber2, radius, 0, Math.PI * 2);
        crc2.fillStyle = "hsl(" + color + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.fill();
        crc2.closePath();
    }
    function drawingline(_randomnumber1, _randomnumber2) {
        color = Math.round(Math.random() * 500);
        saturation = Math.round(Math.random() * 140);
        lightness = Math.round(Math.random() * 120);
        crc2.beginPath();
        crc2.lineTo(_randomnumber1 + 400, _randomnumber2 + 30);
        crc2.lineTo(_randomnumber1, _randomnumber2 + 400);
        crc2.strokeStyle = "hsl(" + color + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.stroke();
    }
    function drawingtriangle(_randomnumber1, _randomnumber2) {
        color = Math.round(Math.random() * 300);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 70);
        crc2.beginPath();
        crc2.moveTo(_randomnumber1, _randomnumber2);
        crc2.lineTo(_randomnumber1, _randomnumber2 + 200);
        crc2.lineTo(_randomnumber1 + 100, _randomnumber2 + 20);
        crc2.closePath();
        crc2.lineWidth = 4;
        crc2.stroke();
    }
    function drawingbubble(_randomnumber1, _randomnumber2) {
        color = Math.round(Math.random() * 500);
        saturation = Math.round(Math.random() * 90);
        lightness = Math.round(Math.random() * 100);
        let radius = Math.floor(Math.random() * 60);
        _randomnumber1 = Math.random() * 800;
        _randomnumber1 = Math.random() * 600;
        crc2.beginPath();
        crc2.arc(_randomnumber1, _randomnumber2, radius, 0, Math.PI * 2);
        crc2.strokeStyle = "hsl(" + color + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.lineWidth = 1.5;
        crc2.stroke();
        crc2.closePath();
    }
})(L08_1_GenerativeKunst || (L08_1_GenerativeKunst = {}));
//# sourceMappingURL=skript_art.js.map