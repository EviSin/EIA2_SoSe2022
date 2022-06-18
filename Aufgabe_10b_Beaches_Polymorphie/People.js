"use strict";
var L10_Strand;
(function (L10_Strand) {
    class People extends L10_Strand.Moveable {
        draw() {
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#40b90a";
            L10_Strand.crc2.fillRect(410, 610, 10, 25);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#d4a985";
            L10_Strand.crc2.arc(415, 605, 6, 0, 2 * Math.PI);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#81F7BE";
            L10_Strand.crc2.fillRect(950, 650, 10, 20);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#46301d";
            L10_Strand.crc2.arc(955, 645, 6, 0, 2 * Math.PI);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#952509";
            L10_Strand.crc2.fillRect(390, 600, 10, 20);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#8e6037";
            L10_Strand.crc2.arc(395, 595, 6, 0, 2 * Math.PI);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#A9A9F5";
            L10_Strand.crc2.fillRect(70, 680, 15, 30);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#dec8b5";
            L10_Strand.crc2.arc(77.5, 675, 6, 0, 2 * Math.PI);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#c9d4c4";
            L10_Strand.crc2.fillRect(300, 480, 7, 10);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#8c6013";
            L10_Strand.crc2.arc(303.5, 476, 4, 0, 2 * Math.PI);
            L10_Strand.crc2.fill();
        }
    }
    L10_Strand.People = People;
})(L10_Strand || (L10_Strand = {}));
//# sourceMappingURL=People.js.map