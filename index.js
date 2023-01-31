/***les bouttons***/
let buttonPlay = document.querySelector('#start');
let buttonInstructions = document.querySelector('#instructions');
let buttonRestart = document.querySelector('#restart');
let buttonRetour = document.querySelector('#retour');
let buttonRetourInstruc = document.querySelector('#retourInstruc');
let buttonRetourWin = document.querySelector('#winretour');
//let buttonRestartWin = document.querySelector('#restartWin');
/***les balises html***/
const canvas = document.querySelector('canvas');
let h1 = document.querySelector('h1');
//h2 du lose
let lose = document.querySelector('#lose');
//h2 du win
let youWin = document.querySelector('#youWin')
/****les super div qui prennent tout l'affichage***/
//accueil
let pres = document.querySelector('#pres');
//page finale du loose
let end = document.querySelector('#end');
//page finale du win
let win = document.querySelector('#win');
//page instruction
let instructions = document.querySelector('#instruc');

/***les div****/
//le score pendant la partie
let nscore = document.querySelector('#score');
//le score final
let endScore = document.querySelector('#endScore');
//affichage de la page finale
let endScreen = document.getElementById('endScreen');
let endScoreWin =  document.querySelector('#endScoreWin')

let form =  document.querySelector('#form1')




//Commencer le jeu
buttonPlay.addEventListener('click', displaCanva);

function displaCanva() {
    canvas.hidden = false;  
    buttonRetour.hidden = false;
    pres.hidden = true;
    end.hidden = false;
    win.hidden = true;
    init()
}

//retour à la page d'accueil
buttonRetour.addEventListener('click', pageAcueil);

function pageAcueil() {
    canvas.hidden = true;
    end.hidden = true;
    pres.hidden = false;
    win.hidden = true;
    form.hidden = true;
   
    audiolose.pause();
    music.play()
    

}
//Faire apparaitre les instructions

buttonInstructions.addEventListener('click', pageInstructions);

function pageInstructions() {
    pres.hidden = true;
    buttonRetourInstruc.hidden = false;
    buttonRetour.hidden = true;
    instructions.hidden = false;
    endScreen.hidden = true;
    win.hidden = true;
    form.hidden = true;
    audiolose.pause();
    music.play()
  

}
//Bouton retour des instructions à la page d'acceuil
buttonRetourInstruc.addEventListener('click', pageAcueil);

function pageAcueil() {
    canvas.hidden = true;
    end.hidden = true;
    pres.hidden = false;
    instructions.hidden = true;
    buttonInstructions.hidden = false;
    buttonRetourInstruc.hidden = true;
    win.hidden = true;
    form.hidden = true;
    audiolose.pause();
    music.play()
    

}
//Bouton restar quand on a perdu
buttonRestart.addEventListener('click', restart);

function restart() {
    canvas.hidden = false;
    pres.hidden = true;
    buttonRetour.hidden = false;
    endScreen.hidden = true;
    buttonRestart.hidden = true;
    lose.hidden = true;
    form.hidden = true;
    audiolose.pause();
    music.play()

    init();

}
// buttonRestartWin.addEventListener('click', restartwin);

// function restartwin() {
//     canvas.hidden = false;
//     pres.hidden = true;
//     buttonRetourWin.hidden = false;
//     endScreen.hidden = true;
//     buttonRestart.hidden = true;
//     lose.hidden = true;
//      win.hidden = true;
//     //buttonRestartWin.hidden = true;
//     youWin.hidden = true;
//     win.hidden = true;
//     form.hidden = true;

//     music.play()

//     init();

// }
/***************************************************GAME*****************************************************************/
const c = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 700;


const gravity = 0.5;
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 2
        }
        this.width = 30;
        this.height = 30;
        const image = new Image();
        image.src = 'img/foxy.png';
        image.onload = () => {
            this.image = image;
            this.width = 100;
            this.height = 100;

        }


    }
    draw() {
        c.drawImage(this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        );
    }
    update() {
        if (this.image) {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            if (this.position.y + this.height + this.velocity.y <= canvas.height)
                this.velocity.y += gravity;

        }
    }
}
class Platform {
    constructor({ x, y }) {
        this.position = {
            x,
            y
        };
        const image = new Image();
        image.src = 'img/platform-1.png';
        image.onload = () => {
            this.image = image;
            this.width = image.width;
            this.height = image.height;

        }

    }

    draw() {
        if (this.image) {
            c.drawImage(this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );
        }
    }
}
class PlatformSmall {
    constructor({ x, y }) {
        this.position = {
            x,
            y
        };
        const image = new Image();
        image.src = 'img/platform-1.png';
        image.onload = () => {
            this.image = image;
            this.width = 100;
            this.height = 80;

        }

    }

    draw() {
        if (this.image) {
            c.drawImage(this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );
        }
    }
}
class CubeHeart {
    constructor({ x, y }) {
        this.position = {
            x,
            y
        };
        const image = new Image();
        image.src = 'img/coeur.png';
        image.onload = () => {
            this.image = image;
            this.width = image.width;
            this.height = image.height;

        }

    }

    draw() {
        if (this.image) {
            c.drawImage(this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );
        }
    }
}
class CubeFeuille {
    constructor({ x, y }) {
        this.position = {
            x,
            y
        };
        const image = new Image();
        image.src = 'img/feuille.png';
        image.onload = () => {
            this.image = image;
            this.width = image.width;
            this.height = image.height;

        }

    }

    draw() {
        if (this.image) {
            c.drawImage(this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );
        }
    }
}
class CubePierre {
    constructor({ x, y }) {
        this.position = {
            x,
            y
        };
        const image = new Image();
        image.src = 'img/pierre.png';
        image.onload = () => {
            this.image = image;
            this.width = image.width;
            this.height = image.height;

        }

    }

    draw() {
        if (this.image) {
            c.drawImage(this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );
        }
    }
}
let player = new Player();
let point = [];
let heart = [];
let feuille = [];
let pierre = [];
let platforms = [];
let platformSmall = [];
const music = new Audio('audio/music.wav');
const audio = new Audio('audio/point.wav');
const audiolose = new Audio('audio/fin.mp3');
music.play;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
};

let scrollOffset = 0;

function init() {
    audiolose.pause();
    music.play();
    
    player = new Player();

    heart = [new CubeHeart({ x: randomIntFromInterval(250, 1000), y: randomIntFromInterval(90, 300) }),
    new CubeHeart({ x:randomIntFromInterval(250, 6000), y: randomIntFromInterval(90, 300) }),
    new CubeHeart({ x:randomIntFromInterval(250, 6000), y: randomIntFromInterval(90, 300) }),
    new CubeHeart({ x:randomIntFromInterval(6000, 1000), y: randomIntFromInterval(90, 300) })];

    feuille = [new CubeFeuille({ x: randomIntFromInterval(250, 1000), y: 130 }),
    new CubeFeuille({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubeFeuille({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubeFeuille({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubeFeuille({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubeFeuille({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubeFeuille({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) })];

    pierre = [new CubePierre({ x:randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubePierre({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubePierre({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubePierre({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) }),
    new CubePierre({ x: randomIntFromInterval(250, 10000), y: randomIntFromInterval(90, 300) })];

    platforms = [new Platform({
        x: -1, y: 600
    }), new Platform({ x:randomIntFromInterval(200, 500), y: randomIntFromInterval(100, 300) }),
    new Platform({ x: randomIntFromInterval(550, 1000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x:randomIntFromInterval(1050, 2000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x: randomIntFromInterval(2050, 3000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x:randomIntFromInterval(3050, 4000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x:randomIntFromInterval(4050, 5000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x:randomIntFromInterval(5050, 6000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x:randomIntFromInterval(6050, 7000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x:randomIntFromInterval(7050, 8000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x:randomIntFromInterval(8050, 9000), y: randomIntFromInterval(100, 600) }),
    new Platform({ x:randomIntFromInterval(9050, 10000), y: randomIntFromInterval(100, 600) })];

    platformSmall = [new PlatformSmall({ x: randomIntFromInterval(1000, 2000), y: randomIntFromInterval(100, 300) }),
        new PlatformSmall({ x: randomIntFromInterval(2000, 4000), y: randomIntFromInterval(100, 300) }),
        new PlatformSmall({ x: randomIntFromInterval(4000, 8000), y: randomIntFromInterval(100, 300) }),
        new PlatformSmall({ x: randomIntFromInterval(8000, 10000), y: randomIntFromInterval(100, 300) })];



    score = 0;
    scrollOffset = 0;
    endScreen.hidden = true;
}

let score = 0;
//console.log(score)
function animate() {
    
    requestAnimationFrame(animate);
    
    //*************************background***************//
    let background = new Image();
    background.src = 'img/back.jpg'
    c.drawImage(background,
        0,
        0,
        1200,
        700,
    );
    /************************fin background*****************/
    platforms.forEach(platform => {
        platform.draw();
    })
    platformSmall.forEach(platformSmalls => {
        platformSmalls.draw();
    })

    player.update();

    heart.forEach(hearts => {
        hearts.draw()
    })
    feuille.forEach(feuilles => {
        feuilles.draw()
    })
    pierre.forEach(pierres => {
        pierres.draw()
    })
    //déplacement des objets

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5;

    } else if (
        (keys.left.pressed && player.position.x > 100) ||
        (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -5;

    } else {
        player.velocity.x = 0;

        if (keys.right.pressed) {
            scrollOffset += 5;

            platforms.forEach(platform => {
                platform.position.x -= 5;
            });
            heart.forEach(hearts => {
                hearts.position.x -= 5;
            });
            feuille.forEach(feuilles => {
                feuilles.position.x -= 5;
            });
            pierre.forEach(pierres => {
                pierres.position.x -= 5;
            });
            platformSmall.forEach(platformSmalls => {
                platformSmalls.position.x -= 5;
            });


        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= 5;
            platforms.forEach(platform => {
                platform.position.x += 5;
            });
            platformSmall.forEach(platformSmalls => {
                platformSmalls.position.x += 5;
            });
            heart.forEach(hearts => {
                hearts.position.x += 5;
            });
            feuille.forEach(feuilles => {
                feuilles.position.x += 5;
            });
            pierre.forEach(pierres => {
                pierres.position.x += 5;
            });


        }
    }

    //colision de la plateforme
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0;
        }
    });
    platformSmall.forEach(platformSmalls => {
        if (player.position.y + player.height <= platformSmalls.position.y && player.position.y + player.height + player.velocity.y >= platformSmalls.position.y && player.position.x + player.width >= platformSmalls.position.x && player.position.x <= platformSmalls.position.x + platformSmalls.width
        ) {
            player.velocity.y = 0;
        }
    });

    //colision carrés
    heart.forEach(hearts => {
        if (player.position.y <= hearts.position.y && player.position.y + player.height + player.velocity.y >= hearts.position.y && player.position.x + player.width >= hearts.position.x && player.position.x <= hearts.position.x + hearts.width) {
            hearts.position.y = 50000
            score +=2
            music.pause();
            audio.play();
       
        }
        music.play();

    })
    feuille.forEach(feuilles => {
        if (player.position.y <= feuilles.position.y && player.position.y + player.height + player.velocity.y >= feuilles.position.y && player.position.x + player.width >= feuilles.position.x && player.position.x <= feuilles.position.x + feuilles.width) {
            feuilles.position.y = 50000
            score +=1;
            music.pause();
            audio.play();

        }

    })
    music.play();
    pierre.forEach(pierres => {
        if (player.position.y <= pierres.position.y && player.position.y + player.height + player.velocity.y >= pierres.position.y && player.position.x + player.width >= pierres.position.x && player.position.x <= pierres.position.x + pierres.width) {
            pierres.position.y = 50000
            score -=1;
            music.pause();
            audio.play();

        }

    })
    music.play();
   //console.log(score)
    nscore.innerHTML = "score :" + score
    //colision en haut
    if (player.position.y <= canvas.height && player.position.y < 0) {
        player.velocity.y += 5;
    }


    //win condition
    if (scrollOffset > 10000) {
        console.log('you win');
        player.velocity.x = 0;
        player.velocity.y = 0;
        end.hidden = true;
        win.hidden = false;
        //buttonRestartWin.hidden = false;
        canvas.hidden = true;
        form.hidden = false;
        youWin.innerHTML = "Tu as gagné! <br> Ton score est de :" +score;
        //endScoreWin.innerHTML = "score :" + score;
        //console.log(score)


    }


    //loose condition
    if (player.position.y > canvas.height) {
        console.log('you loose');
        music.pause();
        audiolose.play();
        endScreen.hidden = false;
        lose.hidden = false;
        buttonRestart.hidden = false;
        canvas.hidden = true;
        form.hidden = false;
        


        // init();
    }
}
init();
animate();

addEventListener('keydown', ({ keyCode }) => {
    // console.log(keyCode)
    switch (keyCode) {
        case 81:
            keys.left.pressed = true;
            break;
        case 68:
            keys.right.pressed = true;
            break;
        case 90:
            player.velocity.y -= 12;
            break;
        case 40:
            break;

    }
})
addEventListener('keyup', ({ keyCode }) => {
    // console.log(keyCode)
    switch (keyCode) {
        case 81:
            keys.left.pressed = false;
            break;
        case 68:
            keys.right.pressed = false;

            break;
        case 90:

            break;
        case 40:
            break;

    }
})