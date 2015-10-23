// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

var amy = new Enemy(-90, 320, 200);
// amy.move();
var ben = new Enemy(-100, 200, 100);
// ben.move();
var pam = new Enemy(-100, 120, 500);
// amy.move();
var dan = new Enemy(-120, 70, 300);
// ben.move();

Enemy.prototype.move = function(x, y, speed) {
    this.x += this.x++;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function(){
    if(this.x >= 570){
        this.x = -90;
        this.y = y;
        this.speed = Math.random()*1000;
    };
};

// Now write your own Player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    if(this.y < 50) {
        this.x = 200;
        this.y = 420;
    }else{};
};

// var playerReset = function(player){
//     player.x = 200;
//     player.y = 420;
// };


Player.prototype.update = function(dt){
};

Player.prototype.render = function(x, y){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction){
    if(direction === "up") {
        this.y -= 90;
    }
       if(direction === "down") {
        this.y += 90;
    }
        if(direction ==="left") {
        this.x -= 101;
    }
        if(direction ==="right") {
        this.x += 101;
    }
    // else {
    //     direction = this.x;
    //     direction = this.y;
    // };
};

Player.prototype.reset = function(x, y){
    if(this.y < 50) {
        this.x = 200;
        this.y = 420;
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [];
allEnemies.push(amy, ben, pam, dan);

var player = new Player(200, 420);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
