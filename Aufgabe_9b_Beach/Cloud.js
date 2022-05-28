"use strict";
/* In Zusammenarbeit mit Anna-Lena Jörger und Linda Bentz */
var Strand;
(function (Strand) {
    class Cloud {
        x;
        y;
        speed;
        drawCloud1() {
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#FFFFFF";
            Strand.crc2.arc(this.x + 10, this.y + 110, 25, 0, 2 * Math.PI);
            Strand.crc2.arc(this.x + 50, this.y + 105, 40, 0, 2 * Math.PI);
            Strand.crc2.arc(this.x + 90, this.y + 100, 35, 0, 2 * Math.PI);
            Strand.crc2.arc(this.x + 130, this.y + 100, 25, 0, 2 * Math.PI);
            Strand.crc2.closePath();
            Strand.crc2.fill();
        }
        drawCloud2() {
            Strand.crc2.beginPath();
            Strand.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            Strand.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI);
            Strand.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI);
            Strand.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            Strand.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            Strand.crc2.closePath();
            Strand.crc2.fillStyle = "#FFFFFF";
            Strand.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * (+0.5);
        }
    }
    Strand.Cloud = Cloud;
})(Strand || (Strand = {}));
//# sourceMappingURL=Cloud.js.map