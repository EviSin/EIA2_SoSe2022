"use strict";
/*In Zusammenarbeit mit Anna-Lena Jörger & Linda Bentz*/
var Strand;
(function (Strand) {
    class Background {
        constructor() {
            this.drawSky(0, 0, "#88d1CF");
            this.drawWater(0, 0);
            this.drawSand(0, 110);
            this.drawSun(560, 120, "#FFFF00", "#FFDF00");
            this.drawPerson();
            this.drawBay(-100, 420, "#5c3c18");
        }
        //Wasser
        drawWater(_x, _y) {
            var gradient = Strand.crc2.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.5, "#197580");
            gradient.addColorStop(0.7, "#2f8b96");
            gradient.addColorStop(0.9, "#56c1cd");
            gradient.addColorStop(1.0, "#74e1ee");
            Strand.crc2.beginPath();
            Strand.crc2.strokeStyle = gradient;
            Strand.crc2.fillStyle = gradient;
            Strand.crc2.moveTo(_x, _y + 400);
            Strand.crc2.lineTo(_x + 1280, _y + 400);
            Strand.crc2.lineTo(_x + 1280, _y + 720);
            Strand.crc2.lineTo(_x - 1280, _y + 720);
            Strand.crc2.closePath();
            Strand.crc2.stroke();
            Strand.crc2.fill();
        }
        // Strand/Sand
        drawSand(_x, _y) {
            var gradient = Strand.crc2.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.5, "#d5ba8c");
            gradient.addColorStop(0.7, "#d8b475");
            gradient.addColorStop(0.9, "#ad7b24");
            gradient.addColorStop(1.0, "#94681d");
            Strand.crc2.beginPath();
            Strand.crc2.strokeStyle = gradient;
            Strand.crc2.fillStyle = gradient;
            Strand.crc2.moveTo(_x, _y + 400);
            Strand.crc2.lineTo(_x + 1280, _y + 400);
            Strand.crc2.lineTo(_x + 1280, _y + 720);
            Strand.crc2.lineTo(_x - 1280, _y + 720);
            Strand.crc2.closePath();
            Strand.crc2.stroke();
            Strand.crc2.fill();
        }
        //Himmel
        drawSky(_x, _y, _strokeColor) {
            var gradient = Strand.crc2.createLinearGradient(0, 300, 0, 10);
            gradient.addColorStop(0, "#7BCDDF");
            gradient.addColorStop(1, "#1874CD");
            Strand.crc2.beginPath();
            Strand.crc2.strokeStyle = _strokeColor;
            Strand.crc2.fillStyle = gradient;
            Strand.crc2.moveTo(_x, _y);
            Strand.crc2.lineTo(_x + 1280, _y);
            Strand.crc2.lineTo(_x + 1280, _y + 400);
            Strand.crc2.lineTo(_x - 1280, _y + 400);
            Strand.crc2.closePath();
            Strand.crc2.stroke();
            Strand.crc2.fill();
        }
        // Sonne
        drawSun(_x, _y, _strokeColor, _fillColor) {
            let r1 = 40;
            let r2 = 300;
            let gradient = Strand.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
            gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
            Strand.crc2.save();
            Strand.crc2.translate(_x, _y);
            Strand.crc2.fillStyle = gradient;
            Strand.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Strand.crc2.fill();
            Strand.crc2.restore();
        }
        //Personen
        drawPerson() {
            //Person1
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#40b90a";
            Strand.crc2.fillRect(410, 610, 10, 25);
            Strand.crc2.fill();
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#d4a985";
            Strand.crc2.arc(415, 605, 6, 0, 2 * Math.PI);
            Strand.crc2.fill();
            //Person2
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#81F7BE";
            Strand.crc2.fillRect(950, 650, 10, 20);
            Strand.crc2.fill();
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#46301d";
            Strand.crc2.arc(955, 645, 6, 0, 2 * Math.PI);
            Strand.crc2.fill();
            //Person3
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#952509";
            Strand.crc2.fillRect(390, 600, 10, 20);
            Strand.crc2.fill();
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#8e6037";
            Strand.crc2.arc(395, 595, 6, 0, 2 * Math.PI);
            Strand.crc2.fill();
            //Person4 
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#A9A9F5";
            Strand.crc2.fillRect(70, 680, 15, 30);
            Strand.crc2.fill();
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#dec8b5";
            Strand.crc2.arc(77.5, 675, 6, 0, 2 * Math.PI);
            Strand.crc2.fill();
            //Person5 im Wasser 
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#c9d4c4";
            Strand.crc2.fillRect(300, 480, 7, 10);
            Strand.crc2.fill();
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#8c6013";
            Strand.crc2.arc(303.5, 476, 4, 0, 2 * Math.PI);
            Strand.crc2.fill();
        }
        //Bucht
        drawBay(_x, _y, _fillColor) {
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = _fillColor;
            Strand.crc2.strokeStyle = "#5c3c18";
            Strand.crc2.lineWidth = 2;
            var gradient = Strand.crc2.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.5, "#6e471b");
            gradient.addColorStop(0.7, "#5c3c18");
            gradient.addColorStop(0.9, "#472f13");
            gradient.addColorStop(1.0, "#422a0f");
            Strand.crc2.fillStyle = gradient;
            Strand.crc2.moveTo(_x - 15000, _y + 100);
            Strand.crc2.lineTo(_x + 10, _y - 220);
            Strand.crc2.lineTo(_x + 180, _y - 100);
            Strand.crc2.lineTo(_x + 300, _y + 90);
            Strand.crc2.lineTo(_x + 30, _y + 400);
            Strand.crc2.fill();
            Strand.crc2.stroke();
            Strand.crc2.closePath();
        }
    }
    Strand.Background = Background;
})(Strand || (Strand = {}));
//# sourceMappingURL=Background.js.map