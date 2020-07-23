var Engine = Matter.Engine;
World = Matter.World;
Events = Matter.Events;
Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0; 
var ground;
var particle = null;

function setup() {
    createCanvas(800, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height - 15, width, 30);

    for (var k = 0; k <= width; k = k + 80) {
         divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
    }


    for (var j = 75; j <= width; j = j + 50) {
       plinkos.push(new Plinko(j, 75, 10));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {
       plinkos.push(new Plinko(j, 175, 10));
    }

    for (var j = 75; j <= width; j = j + 50) {
       plinkos.push(new Plinko(j, 275, 10));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {
       plinkos.push(new Plinko(j, 375, 10));
    }
}

function draw() {
    background("black");

    Engine.update(engine);

    fill(255);
    textSize(20)

    text("Score : " + score, 20, 30);

    divisionScores();

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    ground.display();
 
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }

    if (particle !== null) {
        particle.display();
        playerScore();
    }
}

function divisionScores() {
    text("50", 30, 530);
    text("50", 750, 530);
    text("100", 100, 530);
    text("100", 660, 530);
    text("150", 180, 530);
    text("150", 580, 530);
    text("200", 260, 530);
    text("200", 500, 530);
    text("250", 340, 530);
    text("250", 420, 530);
}

function mousePressed() {
    particle = new Particle(mouseX, 10, 10);
    particle.display();
}

function playerScore() {
    if (particle !== null) {
        if (particle.body.position.y > 530) {
            if (particle.body.position.x < 80) {
                if (particle.body.position.x > 0) {
                    console.log("if statement 1");
                    score = score + 50;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 160) {
                if (particle.body.position.x > 80) {
                    console.log("if statement 2");
                    score = score + 100;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 240) {
                if (particle.body.position.x > 160) {
                    console.log("if statement 3");
                    score = score + 150;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 320) {
                if (particle.body.position.x > 240) {
                    console.log("if statement 4");
                    score = score + 200;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 400) {
                if (particle.body.position.x > 320) {
                    console.log("if statement 5");
                    score = score + 250;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 480) {
                if (particle.body.position.x > 400) {
                    console.log("if statement 6");
                    score = score + 250;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 560) {
                if (particle.body.position.x > 480) {
                    console.log("if statement 7");
                    score = score + 200;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 640) {
                if (particle.body.position.x > 560) {
                    console.log("if statement 8");
                    score = score + 150;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 720) {
                if (particle.body.position.x > 640) {
                    console.log("if statement 9");
                    score = score + 100;
                    particle = null;
                }
            }
            else if (particle.body.position.x < 800) {
                if (particle.body.position.x > 720) {
                    console.log("if statement 10");
                    score = score + 50;
                    particle = null;
                }
            }
        }
    }
}