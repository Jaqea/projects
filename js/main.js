window.onload = function() {
    var oCanvas = document.getElementById('canvas');
    var oClintWidth = document.documentElement.clientWidth;
    var oClintHeight = document.documentElement.clientHeight;
    oCanvas.width = oClintWidth;
    oCanvas.height = oClintHeight;
    var ctx = canvas.getContext('2d');

    var oP = document.querySelector('p');
    var num = 30;
    var balls = [];

    function randomNum(min, max) {
        var randomNum = Math.ceil(Math.random() * (max - min) + min) //[0,1)
        return randomNum;
    }

    function randomColor() {
        return 'rgb(' + randomNum(0, 255) + ',' + randomNum(0, 255) + ',' + randomNum(0, 255) + ')';
    }

    function fixedBall(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.makeFixedBall = function() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
                ctx.lineWidth = 4;
                ctx.strokeStyle = this.color;
                ctx.stroke();
            },
            this.move = function(left, top, right, bottom) {
                if (this.x <= 0)
                    return
                if (this.x >= oClintWidth)
                    return
                if (this.y <= 0)
                    return
                if (this.y >= oClintHeight)
                    return
                this.x -= left;
                this.x += right;
                this.y -= top;
                this.y += bottom;
            }
    }
    var ofixedBall = new fixedBall(randomNum(15, oClintWidth - 15), randomNum(15, oClintHeight - 15), randomNum(10, 18), randomColor());

    function boundBall(x, y, speedX, speedY, r, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.r = r;
        this.color = color;
        this.makeBoundBall = function() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
            },
            this.move = function() {
                if (this.x - this.r <= 0)
                    this.speedX = -(this.speedX);
                if (this.x + this.r >= oClintWidth)
                    this.speedX = -(this.speedX);
                if (this.y - this.r <= 0)
                    this.speedY = -(this.speedY);
                if (this.y + this.r >= oClintHeight)
                    this.speedY = -(this.speedY);
                this.x += this.speedX;
                this.y += this.speedY;
            },
            this.changeColor = function() {
                for (var i = 0; i < balls.length; i++) {
                    var distanceX = balls[i].x - this.x;
                    var distanceY = balls[i].y - this.y;
                    if (this != balls[i])
                        if (Math.sqrt(distanceX * distanceX + distanceY * distanceY) <= (balls[i].r + this.r)) {
                            this.color = randomColor();
                        }
                }
            },
            this.clearBoundBall = function() {
                if (this.r) {
                    var distanceX = ofixedBall.x - this.x;
                    var distanceY = ofixedBall.y - this.y;
                    if (Math.sqrt(distanceX * distanceX + distanceY * distanceY) <= ofixedBall.r + this.r) {
                        this.r = 0;
                        num--;
                        oP.innerHTML = '还剩' + num + '个球';
                    }
                }
            }
    }

    function bound() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, oClintWidth, oClintHeight);
        ofixedBall.makeFixedBall();
        while (balls.length < 30) {
            var oBoundBall = new boundBall(randomNum(15, oClintWidth - 15), randomNum(15, oClintHeight - 15), randomNum(-10, 10), randomNum(-10, 10), randomNum(10, 18), randomColor());
            balls.push(oBoundBall);
        }
        for (var i = 0; i < balls.length; i++) {
            balls[i].makeBoundBall();
            balls[i].move();
            balls[i].changeColor();
            balls[i].clearBoundBall();
        }
        requestAnimationFrame(bound)
    }
    bound();

    window.onkeydown = function(e) {
        var event = e || window.event;
        switch (event.keyCode) {
            case 37: //左
                ofixedBall.move(15, 0, 0, 0);
                break;
            case 38: //上
                ofixedBall.move(0, 15, 0, 0);
                break;
            case 39: //右
                ofixedBall.move(0, 0, 15, 0);
                break;
            case 40: //下
                ofixedBall.move(0, 0, 0, 15);
                break;
        }
    }
}