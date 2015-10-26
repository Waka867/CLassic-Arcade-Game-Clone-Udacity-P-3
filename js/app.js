/* Enemy class constructor */
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

/* Enemy class instance creation */
var amy = new Enemy(-90, 320, 200);
var ben = new Enemy(-100, 220, 100);
var pam = new Enemy(-100, 140, 500);
var dan = new Enemy(-120, 70, 300);


Enemy.prototype.move = function(x, y, speed) {
    this.x += this.x++;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    /* You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers. */
    this.x += this.speed * dt;
    this.reset();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function(dt){
    if(this.x >= 570){
        this.x = -90;
        this.speed = Math.random()*1000;
        if(this.speed <= 200) { /* This if statement keeps the bugs from moving too slowly */
            this.speed += 100;
        };
    };
};

// Now write your own Player class. This class requires an update(), render() and a handleInput() method.

/* Player class constructor */
var Player = function(x, y){
    this.x = x;
    this.y = y;
    this.score = 0;
    this.sprite = 'images/char-boy.png';
};

//  Initial player score value
// Player.score = 0;

/* Player update function */
Player.prototype.update = function(dt){
    this.reset();
    if(this.y < 40) {
        this.x = 200;
        this.y = 420;
        this.score += 1;
    };
};

Player.prototype.render = function(x, y){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/* Player keyboard input handler */
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
};

Player.prototype.reset = function(x, y){
    // if(this.y < 40) {
    //     this.x = 200;
    //     this.y = 420;
    // };
    /* The following if statements limit players from leaving the game board */
    if(this.y > 420) {
        this.y = 420;
    };
    if(this.x < 5){
        this.x = 5;
    };
    if(this.x > 400){
        this.x = 400;
    };
};

// Player.prototype.scoreevent = function(){

// };


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/* Enemy and player instantiation */
var allEnemies = [];
allEnemies.push(amy, ben, pam, dan);

var player = new Player(200, 420);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

/* Player keyboard input listener */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        /* These are for wasd movement */
        87: 'up',
        83: 'down',
        65: 'left',
        68: 'right'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
