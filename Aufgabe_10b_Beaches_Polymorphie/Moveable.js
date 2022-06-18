"use strict";
var L10_Strand;
(function (L10_Strand) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Strand.Vector(0, 0);
            this.velocity = new L10_Strand.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Strand.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Strand.crc2.canvas.height;
            if (this.position.x > L10_Strand.crc2.canvas.width)
                this.position.x -= L10_Strand.crc2.canvas.width;
            if (this.position.y > L10_Strand.crc2.canvas.height)
                this.position.y -= L10_Strand.crc2.canvas.height;
        }
        draw() { }
    }
    L10_Strand.Moveable = Moveable;
})(L10_Strand || (L10_Strand = {}));
//# sourceMappingURL=Moveable.js.map