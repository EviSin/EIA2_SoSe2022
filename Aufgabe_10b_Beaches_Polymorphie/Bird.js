"use strict";
var L10_Strand;
(function (L10_Strand) {
    class Bird extends L10_Strand.Moveable {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Strand.Vector(200, 400);
            this.velocity = new L10_Strand.Vector(-100, -50);
            this.velocity.random(120, 100);
            this.position.random(-200, 400);
        }
        draw() {
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.moveTo(this.position.x + 369, this.position.y + 264);
            L10_Strand.crc2.bezierCurveTo(this.position.x + 377, this.position.y + 233, this.position.x + 417, this.position.y + 235, this.position.x + 422, this.position.y + 263);
            L10_Strand.crc2.bezierCurveTo(this.position.x + 420, this.position.y + 233, this.position.x + 472, this.position.y + 235, this.position.x + 472, this.position.y + 263);
            L10_Strand.crc2.lineWidth = 5;
            L10_Strand.crc2.strokeStyle = "#000000";
            L10_Strand.crc2.stroke();
        }
    }
    L10_Strand.Bird = Bird;
})(L10_Strand || (L10_Strand = {}));
//# sourceMappingURL=Bird.js.map