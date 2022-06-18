namespace L10_Strand {

    /* In Zusammenarbeit mit Linda Bentz und Anna-Lena Jörger */

    interface Vector {
        x: number;
        y: number;
    }

    export let imageData: ImageData;
    let moveables: Moveable[] = [];

    export let crc2: CanvasRenderingContext2D;
    export let num: number = 0.5;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d")!;

        let bay: number = crc2.canvas.height * num;
        let posBay: Vector = { x: 0, y: bay };

        drawSky();
        drawSand();
        drawWater();
        drawSun({ x: 650, y: 100 });
        drawBay(posBay, -80, 400, "brown", "brown");
        
        

        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        createPeople();
        createClouds();
        createBirds();
        createShip();

        window.setInterval(update, 20);
    }

    function drawSky(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#7BCDDF");
        gradient.addColorStop(1, "#1874CD");
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 300);
    }


    function drawSand(): void {
    
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0.5, "#d5ba8c");
        gradient.addColorStop(0.7, "#d8b475");
        gradient.addColorStop(0.9, "#ad7b24");
        gradient.addColorStop(1.0, "#94681d");
        crc2.beginPath();
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 300, crc2.canvas.width, 500);
    }

    function drawWater(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0.5, "#197580");
        gradient.addColorStop(0.7, "#2f8b96");
        gradient.addColorStop(0.9, "#56c1cd");
        gradient.addColorStop(1.0, "#74e1ee");
        crc2.beginPath();
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 300, crc2.canvas.width, 150);
    }


    function drawSun(_position: Vector): void {
        let r1: number = 40;
        let r2: number = 300;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
        gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
        gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }

    function drawBay(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        crc2.beginPath();
        crc2.strokeStyle = "#5c3c18";
        crc2.lineWidth = 2;
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0.5, "#6e471b");
        gradient.addColorStop(0.7, "#5c3c18");
        gradient.addColorStop(0.9, "#472f13");
        gradient.addColorStop(1.0, "#422a0f");
        crc2.fillStyle = gradient;
        crc2.moveTo(_min - 15000, _max + 100);
        crc2.lineTo(_min + 10, _max - 220);
        crc2.lineTo(_min + 180, _max - 100);
        crc2.lineTo(_min + 300, _max + 90);
        crc2.lineTo(_min + 30, _max + 400);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }

   

    function createPeople(): void {
            let people: People = new People();
            moveables.push(people);
    }

    function createBirds(): void {
        for (let i: number = 0; i < 10; i++) {
            let bird: Bird = new Bird(0.8);
            moveables.push(bird);
        }
    }
    function createClouds(): void {
        let cloud: Cloud = new Cloud();
        moveables.push(cloud);
    }

    function createShip(): void {
        let ship: Ship = new Ship();
        moveables.push(ship);
    }

    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }

}