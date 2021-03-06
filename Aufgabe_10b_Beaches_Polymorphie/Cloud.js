"use strict";
var L10_Strand;
(function (L10_Strand) {
    class Cloud extends L10_Strand.Moveable {
        position;
        velocity;
        size;
        particlePositions = [];
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Strand.Vector(50, 100);
            this.velocity = new L10_Strand.Vector(30, 0);
            if (_size)
                this.size = _size;
            else
                this.size = new L10_Strand.Vector(270, 75);
            for (let drawn = 0; drawn < 50; drawn++) {
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                let position = new L10_Strand.Vector(x, y);
                this.particlePositions.push(position);
            }
        }
        draw() {
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L10_Strand.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_Strand.crc2.save();
            L10_Strand.crc2.translate(this.position.x, this.position.y);
            L10_Strand.crc2.fillStyle = gradient;
            for (let drawn of this.particlePositions) {
                L10_Strand.crc2.save();
                L10_Strand.crc2.translate(drawn.x, drawn.y);
                L10_Strand.crc2.fill(particle);
                L10_Strand.crc2.restore();
            }
            L10_Strand.crc2.restore();
        }
    }
    L10_Strand.Cloud = Cloud;
})(L10_Strand || (L10_Strand = {}));
//# sourceMappingURL=Cloud.js.map