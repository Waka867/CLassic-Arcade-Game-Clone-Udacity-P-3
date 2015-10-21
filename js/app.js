// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;
    // this.speed = speed;
    // var obj = {};
    // return obj;


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};



var move = function() {
    this.loc++;
};



// var amy = Enemy(1);
// amy.move();
// var ben = Enemy(9);
// ben.move();
// var pam = Enemy(4);
// amy.move();
// var dan = Enemy(2);
// ben.move();



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own Player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y){
    var x = x;
    var y = y;
    Player.handleInput = function(){
    };

    this.sprite = 'images/char-boy.png';
    Player.render = function(){
    };
};

Player.prototype.update = function(dt){

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for(var i = 0; i <= 4; i++) {
    pushEnemy = new Enemy();
};

var player = new Player();


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
