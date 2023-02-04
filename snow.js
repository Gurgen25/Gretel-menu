const canvas = document.getElementById("canvas"),
    btn = document.querySelector("button"),
    context = canvas.getContext("2d"),
    size_min = 0.1,
    size_max = 0.7,
    snowCount = 5,
    snowColor = 'white';

let left_right = 0,
    left_right2 = 0,
    snowSped = 0.4,
    balls = [],
    images = ['./fons/1.jpg', './fons/2.jpg', './fons/3.jpg', './fons/4.jpg', './fons/5.jpg', './fons/6.jpg', './fons/7.jpg', './fons/8.jpg', './fons/9.jpg', './fons/10.jpg', './fons/11.jpg'];

let img_i = 0
if (localStorage.getItem('fon') !== null) {
    img_i = Number(localStorage.getItem('fon'))
}

function changeImg() {
    canvas.style.backgroundImage = `url(${images[img_i]})`
    img_i++
    localStorage.setItem('fon', img_i)
    if (img_i >= images.length) {
        img_i = 0
        localStorage.setItem('fon', img_i)
    }
}
changeImg()

// tarmacnel
function update() {
    balls.forEach(function (ball) {
        ball.update();
    });
}
// nkarel
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(function (ball) {
        ball.draw();
    });
}
// anvej ptuyt
function loop() {
    requestAnimationFrame(loop);
    update();
    draw();

    // add snow
    bols()
}
loop();

function bols() {
    for (let i = 0; i < snowCount; i++) {
        const ball = new Ball();
        balls.push(ball);
    }

    left_right = random(-0.2, 0.2)
    left_right += left_right2
}

function Ball() {
    this.r = random(size_min, size_max);
    this.x = random((this.r) - 200, (canvas.width - this.r) + 200);
    this.y = 0

    this.xDelta = left_right;
    this.yDelta = snowSped;

    this.color = snowColor;

    this.update = function () {
        this.x += this.xDelta;
        this.y += this.yDelta;
    };

    this.draw = function () {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fill();
    };
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}