/*In Zusammenarbeit mit Anna-Lena Jörger & Linda Bentz*/
namespace Strand {
    
        export class Background {
    
            constructor() {
    
                this.drawSky(0, 0, "#88d1CF");
                this.drawWater(0, 0);
                this.drawSand(0, 110);
                this.drawSun(560, 120, "#FFFF00", "#FFDF00"); 
                this.drawPerson();
                this.drawBay(-100, 420, "#5c3c18");
            }
    
    
            //Wasser
            drawWater(_x: number, _y: number): void {
    
                var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
                gradient.addColorStop(0.5, "#197580");
                gradient.addColorStop(0.7, "#2f8b96");
                gradient.addColorStop(0.9, "#56c1cd");
                gradient.addColorStop(1.0, "#74e1ee");
                crc2.beginPath();
                crc2.strokeStyle = gradient;
                crc2.fillStyle = gradient;
                crc2.moveTo(_x, _y + 400);
                crc2.lineTo(_x + 1280, _y + 400);
                crc2.lineTo(_x + 1280, _y + 720);
                crc2.lineTo(_x - 1280, _y + 720);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
    
            // Strand/Sand
            drawSand(_x: number, _y: number): void {
        
                var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
                gradient.addColorStop(0.5, "#d5ba8c");
                gradient.addColorStop(0.7, "#d8b475");
                gradient.addColorStop(0.9, "#ad7b24");
                gradient.addColorStop(1.0, "#94681d");
                crc2.beginPath();
                crc2.strokeStyle = gradient;
                crc2.fillStyle = gradient;
                crc2.moveTo(_x, _y + 400);
                crc2.lineTo(_x + 1280, _y + 400);
                crc2.lineTo(_x + 1280, _y + 720);
                crc2.lineTo(_x - 1280, _y + 720);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
    
            //Himmel
            drawSky(_x: number, _y: number, _strokeColor: string): void {
                var gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
                gradient.addColorStop(0, "#7BCDDF");
                gradient.addColorStop(1, "#1874CD");
                crc2.beginPath();
                crc2.strokeStyle = _strokeColor;
                crc2.fillStyle = gradient;
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 1280, _y);
                crc2.lineTo(_x + 1280, _y + 400);
                crc2.lineTo(_x - 1280, _y + 400);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
    
    
            // Sonne
            drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
    
                let r1: number = 40;
                let r2: number = 300;
                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
                gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
                gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
                gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
                gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
    
                crc2.save();
                crc2.translate(_x, _y);
    
                crc2.fillStyle = gradient;
                crc2.arc(0, 0, r2, 0, 2 * Math.PI);
                crc2.fill();
    
                crc2.restore();
            }
    
    
            //Personen
            drawPerson(): void {
                //Person1
                crc2.beginPath();
                crc2.fillStyle = "#40b90a";
                crc2.fillRect(410, 610, 10, 25);
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "#d4a985";
                crc2.arc(415, 605, 6, 0, 2 * Math.PI);
                crc2.fill();
                //Person2
                crc2.beginPath();
                crc2.fillStyle = "#81F7BE";
                crc2.fillRect(950, 650, 10, 20);
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "#46301d";
                crc2.arc(955, 645, 6, 0, 2 * Math.PI);
                crc2.fill();
                //Person3
                crc2.beginPath();
                crc2.fillStyle = "#952509";
                crc2.fillRect(390, 600, 10, 20);
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "#8e6037";
                crc2.arc(395, 595, 6, 0, 2 * Math.PI);
                crc2.fill();
                //Person4 
                crc2.beginPath();
                crc2.fillStyle = "#A9A9F5";
                crc2.fillRect(70, 680, 15, 30);
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "#dec8b5";
                crc2.arc(77.5, 675, 6, 0, 2 * Math.PI);
                crc2.fill();
                //Person5 im Wasser 
                crc2.beginPath();
                crc2.fillStyle = "#c9d4c4";
                crc2.fillRect(300, 480, 7, 10);
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "#8c6013";
                crc2.arc(303.5, 476, 4, 0, 2 * Math.PI);
                crc2.fill();
            }
    
            
            //Bucht
            drawBay(_x: number, _y: number, _fillColor: string): void {
                crc2.beginPath();
                crc2.fillStyle = _fillColor;
                crc2.strokeStyle = "#5c3c18";
                crc2.lineWidth = 2;
                var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
                gradient.addColorStop(0.5, "#6e471b");
                gradient.addColorStop(0.7, "#5c3c18");
                gradient.addColorStop(0.9, "#472f13");
                gradient.addColorStop(1.0, "#422a0f");
                crc2.fillStyle = gradient;
                crc2.moveTo(_x - 15000, _y + 100);
                crc2.lineTo(_x + 10, _y - 220);
                crc2.lineTo(_x + 180, _y - 100);
                crc2.lineTo(_x + 300, _y + 90);
                crc2.lineTo(_x + 30, _y + 400);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
            }
    
        } 
    }