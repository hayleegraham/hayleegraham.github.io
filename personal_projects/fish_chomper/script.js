//Canvas Set Up:

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
ctx.font = '50px Georgia';

let score = 0;
let gameFrame = 0;
let gameSpeed = 1;
let gameOver = false;

//Mouse Interactivity:

//gets information about canvas size relative to browser window size
let canvasPosition = canvas.getBoundingClientRect();

//global variable for mouse location
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}

//update mouse x and y values on mousedown event
canvas.addEventListener('mousedown', function(event){
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
})

canvas.addEventListener('mouseup', function(event){
    mouse.click = false;
})

const screamSound = document.createElement('audio');
screamSound.src = 'assets/audio/scream.wav';

const gameOverSound = document.createElement('audio');
gameOverSound.src = 'assets/audio/GameOver.wav';

//Create Player Character:

const playerLeft = new Image();
playerLeft.src = 'assets/sprites/shark_left.png';
const playerRight = new Image();
playerRight.src = 'assets/sprites/shark_right.png';

class Player{
    //blank player character blueprint
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.radius = 50;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.spriteWidth = 608;
        this.spriteHeight = 372;
    }
    //allow player character to move
    //calculate distance from last mouse location to current mouse locataion & update
    update() {
        //animate sprite by cycling thru spritesheet 
        if(gameFrame % 5 == 0) {  //every 5 frames
            this.frame++;
            if(this.frame >= 12) this.frame = 0;
            if(this.frame == 3 || this.frame == 7 || this.frame == 11) {
                this.frameX = 0;
            }else{
                this.frameX++;
            }
            if(this.frame < 3) this.frameY = 0;
            else if(this.frame < 7) this.frameY = 1;
            else if(this.frame < 11) this.frameY = 2;
            else this.frameY = 0;
        }
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;

        //calcualte angle for player rotation
        let theta = Math.atan2(dy, dx);
        this.angle = theta;

        if(mouse.x != this.x) {
            this.x -= dx/15;  //divide by number to make player movement slower
        }
        if(mouse.y != this.y) {
            this.y -= dy/15; 
        }
    }
    draw() {
        //draw line between player and mouse location
        if(mouse.click) {
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        //create circle for player character
        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        //allow player sprite to rotate
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        //draw player sprite left & right facing
        if(this.x >= mouse.x){
            ctx.drawImage(playerLeft, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 0 - 85, 0 - 85, this.spriteWidth/2.5, this.spriteHeight/2.5);
        }else {
            ctx.drawImage(playerRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 0 - 85, 0 - 85, this.spriteWidth/2.5, this.spriteHeight/2.5);
        }
        ctx.restore();
    }
}
//create player
const player = new Player();

//Create Fish to Catch:


const fishImageLeftPurple = new Image();
fishImageLeftPurple.src = 'assets/sprites/purple_fish_left.png';
const fishImageRightYellow = new Image();
fishImageRightYellow.src = 'assets/sprites/yellow_fish_right.png';
const fishArray = [];

class Fish {
    constructor(){
        this.image = Math.random() <= 0.5 ? 'image1' : 'image2'; //randomly chooses between sounds (roughly 50/50 odds)
        if(this.image == 'image1') this.x = canvas.width + 200;
        else this.x = 0;
        this.y = Math.random() * (canvas.height - 150) + 90;
        this.radius = 60;
        this.speed = Math.random() * 5 + 1;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 498;
        this.spriteHeight = 327;
        this.counted = false;
        this.distance;
        
    }
    draw(){
        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        if(this.image == 'image1'){
            ctx.drawImage(fishImageLeftPurple, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 75, this.y - 55, this.spriteWidth/3, this.spriteHeight/3);
        }else{
            ctx.drawImage(fishImageRightYellow, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 75, this.y - 55, this.spriteWidth/3, this.spriteHeight/3);
        }
    }
    update(){
        if(this.image == 'image1'){
            this.x -= this.speed;
        } else {
            this.x += this.speed; 
        }
        
        //animate sprite by cycling thru spritesheet 
        if(gameFrame % 5 == 0) {  //every 5 frames
            this.frame++;
            if(this.frame >= 12) this.frame = 0;
            if(this.frame == 3 || this.frame == 7 || this.frame == 11) {
                this.frameX = 0;
            }else{
                this.frameX++;
            }
            if(this.frame < 3) this.frameY = 0;
            else if(this.frame < 7) this.frameY = 1;
            else if(this.frame < 11) this.frameY = 2;
            else this.frameY = 0;
        }
        //detect collision
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);
    }
}

function handleFish() {

    //add new fish to array every 150 frames
    if(gameFrame % 100 == 0) {
        fishArray.push(new Fish());
    }
    //loop thru array to display moving fish
    for(let i = 0; i < fishArray.length; i++) {
        fishArray[i].update();
        fishArray[i].draw();
        
        
        //remove fish from array once they move out of canvas field
        if(fishArray[i].y < 0 - fishArray[i].radius * 2) {
            fishArray.splice(i, 1);
            i--;
        }else if(fishArray[i].distance < fishArray[i].radius + player.radius) {  //test is collision has occurred
                //increase score & remove fish for every collision
                if(!fishArray[i].counted) {
                    screamSound.play();
                    score++;
                    fishArray[i].counted = true;
                    fishArray.splice(i, 1);
                    i--;
                }
            }
    }
}

//Create Puffer Fish Enemies:

const pufferFishArray = [];
const pufferFishImage = new Image();
pufferFishImage.src = 'assets/sprites/puffer_fish_left.png';


//50% odds = Math.random() <+ 0.5 ? 'option1' : 'option2';
class pufferFish {
    constructor() {
        this.x = Math.random() * canvas.width;  //random number between 0 & canvas width
        this.y = canvas.height + 100 + Math.random() * canvas.height; //random number between 600 and 1000
        this.radius = 50;
        this.speed = Math.random() * 5 + 1; //random number between 0 & 6
        this.distance;  //use to measure distance between player & fish
        this.counted = false;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.spriteWidth = 727;
        this.spriteHeight = 691;
    }
    update() {
        this.y -= this.speed;  //makes fish move up to new y location based on random speed
        //animate sprite by cycling thru spritesheet 
        if(gameFrame % 5 == 0) {  //every 5 frames
            this.frame++;
            if(this.frame >= 12) this.frame = 0;
            if(this.frame == 3 || this.frame == 7 || this.frame == 11) {
                this.frameX = 0;
            }else{
                this.frameX++;
            }
            if(this.frame < 3) this.frameY = 0;
            else if(this.frame < 7) this.frameY = 1;
            else if(this.frame < 11) this.frameY = 2;
            else this.frameY = 0;
        }
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy); //use pythagorean theorem to calculate distance between center of circles (player & fish)
    }
    draw() {
        // ctx.fillStyle = 'blue';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();
        ctx.drawImage(pufferFishImage, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 60, this.y - 58, this.spriteWidth/6, this.spriteHeight/6);
    }
}

//Create Repeating Backgrounds

const background = new Image();
background.src = 'assets/backgrounds/background1.png';
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

function handleBackground() {
    BG.x1-= gameSpeed;
    if(BG.x1 < - BG.width) {
        BG.x1 = BG.width;
    }
    BG.x2-= gameSpeed;
    if(BG.x2 < - BG.width) {
        BG.x2 = BG.width;
    }
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}
function handleGameOver() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.strokeText('GAME OVER! Your Score: ' + score, 110, 250);
    ctx.fillStyle = 'white';
    ctx.fillText('GAME OVER! Your Score: ' + score, 110, 250);
    gameOver = true;
    gameOverSound.play();
}

function handlePufferFish() {
    //add new fish to array every 150 frames
    if(gameFrame % 250 == 0) {
        pufferFishArray.push(new pufferFish());
    }
    //loop thru array to display moving fish
    for(let i = 0; i < pufferFishArray.length; i++) {
        pufferFishArray[i].draw();
        pufferFishArray[i].update();
        
        //remove fish from array once they move out of canvas field
        if(pufferFishArray[i].y < 0 - pufferFishArray[i].radius * 2) {
            pufferFishArray.splice(i, 1);
            i--;
        }else if(pufferFishArray[i].distance < pufferFishArray[i].radius + player.radius) {  //test is collision has occurred
                handleGameOver();
            }
    }
}

//Create Animation Loop:

function animate() {
    //clear drawings everytime function is called to eliminate trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleBackground();
    //create player sprite & movement line
    player.draw();
    //update player location
    player.update();
    handleFish();
    handlePufferFish();
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 50);
    //increase game frame for each function call
    gameFrame++;
    //create loop recursion (function calls itself)
    if (!gameOver) requestAnimationFrame(animate);
}
animate();

//update canvas position when window is resized
window.addEventListener('resize', function(){
    canvasPosition = canvas.getBoundingClientRect();
})