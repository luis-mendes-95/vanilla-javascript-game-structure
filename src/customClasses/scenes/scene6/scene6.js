import { Background } from "../../../engine/background/background.js";
import { ClickDebug } from "../../../engine/debug/clickDebug.js";
import { DebugMovement } from "../../../engine/debug/movementDebug.js";
import { Sprite } from "../../../engine/sprite/sprite.js";
import { Sound } from "../../../engine/sound/sound.js";
import { Image } from "../../../engine/image/image.js";
import { Keyboard } from "../../../engine/hud/keyboard/keyboard.js";
import { NumericKeyboard } from "../../../engine/hud/numKeyboard/numKeyboard.js";
import { Scene2 } from "../scene2/scene2.js";

/**EASY MODE -> FRUIT COLLECTING */
export class Scene6 {

    constructor(game) {

        /**THIS SCENE SETUP */
        (()=>{

            this.game = game;
            this.startGame = false;
            this.width = this.game.width;
            this.height = this.game.height;
            this.musicPlaying = false;
            this.savedGame = localStorage.getItem('AkemiFazendaSavedGame') || null;
            this.calledNextScene = false;
            this.enterNextScene = false;

            /**ANSWERS*/
            this.correctAnswer = false;
            this.wrongAnswer = false;
            this.stolenFruits = false;

            /**KEYBOARD CONTROL */
            this.showKeyboard = false;

            /**RANDOM FRUIT (6 FRUITS) */
            this.randomFruit = Math.floor(Math.random() * 6);

            /**FRUITS TO DRAG */
            (()=>{
                this.fruits = [];
                this.fruitsLocations = [
                    {x: this.game.width * 0.07, y: this.game.height * 0.52},
                    {x: this.game.width * 0.32, y: this.game.height * 0.5},
                    {x: this.game.width * 0.18, y: this.game.height * 0.5},
                    {x: this.game.width * 0.45, y: this.game.height * 0.51},
                    {x: this.game.width * 0.58, y: this.game.height * 0.51}
                ];
                this.fruitsToDrag = 0;
                this.choosedVegetable = 0;
                this.fruitsInBasket = [];

                /**RANDOM NUMBER BETWEEN 1 AND 9 */
                this.fruitsToDrag = Math.floor(Math.random() * 5) + 1;

                /**RANDOM NUMBER BETWEEN 0 AND 5 */
                this.choosedVegetable = Math.floor(Math.random() * 6);
                //this.choosedVegetable = 5;

            })();


            /**FULLSCREEN FUNCTIONS */
            this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
            this.handleFullScreenTouchEnd = this.handleFullScreenTouchEnd.bind(this);
        })();

        /** GAME ASSETS */
        (()=>{

            /**BACKGROUND IMAGE*/
            this.backgroundScene1 = document.getElementById('gameFrame');
            /**CLOUD IMAGE*/
            this.cloudImage = document.getElementById('cloud1');
            /**GAME BACKGROUND*/
            this.gameBackground = document.getElementById('gameBackground');
            /**DIALOGUE IMAGE */
            this.dialogueBox = document.getElementById('dialogueBox');
            /**BUTTON CONTINUE */
            this.buttonContinue = document.getElementById('buttonStart');
            /**BUTTON CONFIRM */
            this.buttonConfirm = document.getElementById('buttonConfirm');
            /**AKEMI GIRL */
            this.akemiImages = document.getElementsByClassName('akemi');
            /**BACKGROUND BUTTON PANEL */
            this.farmSign = document.getElementById('farmSign');
            /**BASKET */
            this.basket = document.getElementById('basket');
            /**FENCE */
            this.fence0 = document.getElementById('fence');
            /**GROUNDS */
            this.ground10 = document.getElementById('ground1');
            this.ground20 = document.getElementById('ground2');
            this.ground30 = document.getElementById('ground3');
            this.ground40 = document.getElementById('ground4');
            this.ground50 = document.getElementById('ground5');
            /**PRODUCTS QTY */
            this.productsQty = document.getElementById('productQty');
            /**FIGURES AREA */
            this.figuresArea = document.getElementById('figuresArea');
            /**ENEMY -> BIRD */
            this.birdImage = document.getElementById('bird');
            /**ENEMY -> TOUPEIRA */
            this.toupeiraImage = document.getElementById('toupeira');
            /**LADYBIRD */
            this.ladybird = document.getElementById('ladybird');

            /**SCORES */
            (()=>{
                /**SCORE 1 */
                this.score1 = document.getElementById('score1');
                /**SCORE 2 */
                this.score2 = document.getElementById('score2');
                /**SCORE 3 */
                this.score3 = document.getElementById('score3');
            })();

            /**FRUITS*/
            (()=>{
                /**TREES */
                this.appleImage = document.getElementById('apple');
                this.pera = document.getElementById('pera');
                this.manga = document.getElementById('manga');
                this.laranja = document.getElementById('laranja');
                this.limao = document.getElementById('limao');
                this.caju = document.getElementById('caju');

                /**VEGETABLES */
                this.abobora = document.getElementById('abobora');
                this.alface = document.getElementById('alface');
                this.beterraba = document.getElementById('beterraba');
                this.cenoura = document.getElementById('cenoura');
                this.tomate = document.getElementById('tomate');


            })();

            

        })();

        /** BACKGROUNDS */
        (()=>{

            /**GAME BACKGROUND -> BEIGE PART AND BASKET */
            (()=>{
                this.background = new Background(
                    this,
                    0,
                    0,
                    this.game.width,
                    this.game.height,
                    'blue',
                    10,
                    0,
                    0,
                    [this.gameBackground],
                    true
                );
            })();

            /**NEXT GAME BACKGROUND -> BEIGE PART AND BASKET */
            (()=>{
                this.nextBackground = new Background(
                    this,
                    this.game.width,
                    0,
                    this.game.width,
                    this.game.height,
                    'blue',
                    10,
                    0,
                    0,
                    [this.gameBackground],
                    true
                );
            })();

            /**NATURE PART AND SKY */
            (()=>{
                this.backgroundGameFrame = new Background(
                    this,
                    0,
                    0,
                    this.game.width,
                    this.game.height * 0.7,
                    'blue',
                    10,
                    0,
                    0,
                    [this.backgroundScene1],
                    true
                );
            })();
        })();

        /** CLOUDS */
        (()=>{

        this.cloud1 = new Image(
            this.game,
            this.width * 0.1,
            this.height * 0.05,
            this.width * 0.15,
            this.game.height * 0.15,
            0,
            this.cloudImage,
            0.9,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        this.cloud2 = new Image(
            this.game,
            this.width * 0.7,
            this.height * 0.05,
            this.width * 0.12,
            this.game.height * 0.12,
            0,
            this.cloudImage,
            0.7,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        this.cloud3 = new Image(
            this.game,
            this.width * 0.6,
            this.height * 0.05,
            this.width * 0.1,
            this.game.height * 0.1,
            0,
            this.cloudImage,
            0.5,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        this.cloud4 = new Image(
            this.game,
            this.width * 0.9,
            this.height * 0.05,
            this.width * 0.08,
            this.game.height * 0.08,
            0,
            this.cloudImage,
            0.3,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );

        this.cloud5 = new Image(
            this.game,
            this.width * 0.5,
            this.height * 0.05,
            this.width * 0.06,
            this.game.height * 0.06,
            0,
            this.cloudImage,
            0.4,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            false
        );
        })();

        /**SCENE ELEMENTS */
        (()=>{

            /**AKEMI GIRL */
            (()=>{
                /**AKEMI POINTING */
                this.imageAkemi = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.09), /**X */
                    (this.height * 0.25), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.75), /**HEIGHT */
                    0, /**ROTATION */
                    this.akemiImages[5],  /**IMAGE */
                    0, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "font1942", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.5), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                );

                /**AKEMI CORRECT ANSWER */
                this.imageAkemiCorrect = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.09), /**X */
                    (this.height * 0.25), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.75), /**HEIGHT */
                    0, /**ROTATION */
                    this.akemiImages[5],  /**IMAGE */
                    0, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "font1942", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.5), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                );

                /**AKEMI WRONG ANSWER */
                this.imageAkemiWrong = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.09), /**X */
                    (this.height * 0.25), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.75), /**HEIGHT */
                    0, /**ROTATION */
                    this.akemiImages[1],  /**IMAGE */
                    0, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "font1942", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.5), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                );

                
                /**AKEMI WRONG ANSWER */
                this.imageLadybugStolen = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.0), /**X */
                    (this.height * 0.165), /**Y */
                    (this.game.width * 0.34), /**WIDTH */
                    (this.game.height * 0.84), /**HEIGHT */
                    0, /**ROTATION */
                    this.ladybird,  /**IMAGE */
                    0, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "font1942", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.5), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                );

            })();

            /**BASKET */
            (()=>{
                this.basket = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.71), /**X */
                    (this.height * 0.04), /**Y */
                    (this.game.width * 0.28), /**WIDTH */
                    (this.game.height * 0.66), /**HEIGHT */
                    0, /**ROTATION */
                    this.basket,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "font1942", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.5), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                );
            })();

            /**FRUIT INDICATOR */
            (()=>{

                /**PANEL*/
                (()=>{

                    this.fruitIndicator = new Image(
                        this.game, /**GAME */
                        (this.game.width * 0.25), /**X */
                        (this.height * 0.73), /**Y */
                        (this.game.width * 0.22), /**WIDTH */
                        (this.game.height * 0.22), /**HEIGHT */
                        0, /**ROTATION */
                        this.score1,  /**IMAGE */
                        1, /**OPACITY */
                        null, /**TEXT */
                        (this.height * 0.1), /**TEXT SPACING */
                        "PatrickHand", /**TEXT FONT */
                        "bold", /**FONT WEIGHT */
                        (this.height * 0.06), /**FONT SIZE */
                        (this.game.width * 0.365), /**TEXT X */
                        (this.height * 1.50), /**TEXT Y */
                        "black", /**TEXT COLOR */
                        true, /**MOUSE HOVER */
                        null, /**TEXTS ALIGN -> ROW OR COLUMN */
                        `${this.fruitsToDrag}`, /**UNIQUE TEXT */
                        (this.game.width * 0.285), // UNIQUE TEXT X
                        (this.game.height * 0.82), // UNIQUE TEXT Y
                        false, // CURSOR VISIBLE (added to match constructor parameters)
                        0, // TEXT OFFSET X (added to match constructor parameters)
                        0, // TEXT OFFSET Y (added to match constructor parameters)
                        true // HOVER SCALE (added to match constructor parameters)
                    );

                    let currentVegetableImage = null;
                    let currentWidth = null;
                    let currentHeight = null;
                    let currentY = null;
                    let currentX = null;

                    if(this.choosedVegetable === 0){

                        /**ABÓBORA */
                        currentVegetableImage = this.abobora;
                        currentHeight = this.game.height * 0.12;
                        currentWidth = this.game.width * 0.08;
                        currentY = this.game.height * 0.78;
                        currentX = this.game.width * 0.33;

                    } else if (this.choosedVegetable === 1){

                        /**ALFACE */
                        currentVegetableImage = this.alface;
                        currentHeight = this.game.height * 0.12;
                        currentWidth = this.game.width * 0.08;
                        currentY = this.game.height * 0.78;
                        currentX = this.game.width * 0.33;

                    } else if (this.choosedVegetable === 2){

                        /**BETERRABA*/
                        currentVegetableImage = this.beterraba;
                        currentHeight = this.game.height * 0.15;
                        currentWidth = this.game.width * 0.035;
                        currentY = this.game.height * 0.765;
                        currentX = this.game.width * 0.35;

                    } else if (this.choosedVegetable === 3){

                        /**CENOURA */
                        currentVegetableImage = this.cenoura;
                        currentHeight = this.game.height * 0.15;
                        currentWidth = this.game.width * 0.05;
                        currentY = this.game.height * 0.765;
                        currentX = this.game.width * 0.34;

                    } else if (this.choosedVegetable === 4){

                        currentVegetableImage = this.alface;
                        currentHeight = this.game.height * 0.12;
                        currentWidth = this.game.width * 0.08;
                        currentY = this.game.height * 0.78;
                        currentX = this.game.width * 0.33;

                    } else if (this.choosedVegetable === 5){

                        /**ABÓBORA */
                        currentVegetableImage = this.abobora;
                        currentHeight = this.game.height * 0.12;
                        currentWidth = this.game.width * 0.08;
                        currentY = this.game.height * 0.78;
                        currentX = this.game.width * 0.33;

                    }

                    this.fruitToCatch = new Image(
                        this.game, /**GAME */
                        currentX, /**X */
                        currentY, /**Y */
                        currentWidth, // WIDTH
                        currentHeight, // HEIGHT
                        0, /**ROTATION */
                        currentVegetableImage,  /**IMAGE */
                        1, /**OPACITY */
                        null, /**TEXT */
                        (this.height * 0.1), /**TEXT SPACING */
                        "PatrickHand", /**TEXT FONT */
                        "bold", /**FONT WEIGHT */
                        (this.height * 0.06), /**FONT SIZE */
                        (this.game.width * 0.365), /**TEXT X */
                        (this.height * 1.50), /**TEXT Y */
                        "black", /**TEXT COLOR */
                        true, /**MOUSE HOVER */
                        null, /**TEXTS ALIGN -> ROW OR COLUMN */
                        `${this.fruitsToDrag}`, /**UNIQUE TEXT */
                        (this.game.width * 0.285), // UNIQUE TEXT X
                        (this.game.height * 0.82), // UNIQUE TEXT Y
                        false, // CURSOR VISIBLE (added to match constructor parameters)
                        0, // TEXT OFFSET X (added to match constructor parameters)
                        0, // TEXT OFFSET Y (added to match constructor parameters)
                        true // HOVER SCALE (added to match constructor parameters)
                    );


                })();



            })();

            /**DIALOGUE BOXES*/
            (()=>{
                /**DIALOGUE BOX 1 */
                this.dialogueBox1 = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.3), /**X */
                    (this.height * 0.28), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.35), /**HEIGHT */
                    0, /**ROTATION */
                    this.dialogueBox,  /**IMAGE */
                    0, /**OPACITY */
                    [
                        ``,
                        `${this.game.playerName}, ME AJUDE COLETANDO`, /**TEXT 1 */
                        `                     OS VEGETAIS NA QUANTIDADE MOSTRADA ABAIXO!  `, /**TEXT 2 */
                        `                    CLIQUE EM UM DELES E ARRASTE PARA A CESTA!  `
                    ], /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "patrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.04), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    "column", /**TEXTS ALIGN -> ROW OR COLUMN */
                    null, /**UNIQUE TEXT */
                    null, /**UNIQUE TEXT X */
                    null, /**UNIQUE TEXT Y */
                    false, /**TEXT CURSOR VISIBLE */
                    0, /**TEXT OFFSET X */
                    0, /**TEXT OFFSET Y */
                );

                /**DIALOGUE BOX 2 */
                this.dialogueBox2 = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.3), /**X */
                    (this.height * 0.28), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.35), /**HEIGHT */
                    0, /**ROTATION */
                    this.dialogueBox,  /**IMAGE */
                    0, /**OPACITY */
                    [
                        ``,
                        `                MAS TOME CUIDADO COM AS TOUPEIRAS!`,
                        `                  ELAS PODEM ROUBAR OS VEGETAIS DA HORTA!  `,
                    ], /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "patrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.04), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    "column", /**TEXTS ALIGN -> ROW OR COLUMN */
                    null, /**UNIQUE TEXT */
                    null, /**UNIQUE TEXT X */
                    null, /**UNIQUE TEXT Y */
                    false, /**TEXT CURSOR VISIBLE */
                    0, /**TEXT OFFSET X */
                    -15, /**TEXT OFFSET Y */
                );

                /**DIALOGUE BOX 3 */
                this.dialogueBox3 = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.3), /**X */
                    (this.height * 0.28), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.35), /**HEIGHT */
                    0, /**ROTATION */
                    this.dialogueBox,  /**IMAGE */
                    0, /**OPACITY */
                    [
                        ``,
                        `                OH NÃO, ${this.game.playerName}!`,
                        `                  VOCÊ NÃO PEGOU EXATAMENTE O QUE EU PEDI!   `,
                    ], /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "patrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.04), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    "column", /**TEXTS ALIGN -> ROW OR COLUMN */
                    null, /**UNIQUE TEXT */
                    null, /**UNIQUE TEXT X */
                    null, /**UNIQUE TEXT Y */
                    false, /**TEXT CURSOR VISIBLE */
                    0, /**TEXT OFFSET X */
                    -15, /**TEXT OFFSET Y */
                );

                /**DIALOGUE BOX 4 */
                this.dialogueBox4 = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.3), /**X */
                    (this.height * 0.28), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.35), /**HEIGHT */
                    0, /**ROTATION */
                    this.dialogueBox,  /**IMAGE */
                    0, /**OPACITY */
                    [
                        ``,
                        `                PARABÉNS, ${this.game.playerName}!`,
                        `                      VOCÊ PEGOU TODOS OS VEGETAIS NA QUANTIDADE CERTA!    `,
                    ], /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "patrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.04), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    "column", /**TEXTS ALIGN -> ROW OR COLUMN */
                    null, /**UNIQUE TEXT */
                    null, /**UNIQUE TEXT X */
                    null, /**UNIQUE TEXT Y */
                    false, /**TEXT CURSOR VISIBLE */
                    0, /**TEXT OFFSET X */
                    -15, /**TEXT OFFSET Y */
                );

                /**DIALOGUE BOX 3 */
                this.dialogueBoxStolen = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.3), /**X */
                    (this.height * 0.28), /**Y */
                    (this.game.width * 0.30), /**WIDTH */
                    (this.game.height * 0.35), /**HEIGHT */
                    0, /**ROTATION */
                    this.dialogueBox,  /**IMAGE */
                    0, /**OPACITY */
                    [
                        ``,
                        `                   AS TOUPEIRAS ROUBARAM OS VEGETAIS!`,
                        `                   PARA AFUGENTÁ-LAS, CLIQUE SOBRE ELES!  `,
                    ], /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "patrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.04), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    "column", /**TEXTS ALIGN -> ROW OR COLUMN */
                    null, /**UNIQUE TEXT */
                    null, /**UNIQUE TEXT X */
                    null, /**UNIQUE TEXT Y */
                    false, /**TEXT CURSOR VISIBLE */
                    0, /**TEXT OFFSET X */
                    -15, /**TEXT OFFSET Y */
                );
                
            })();

            /**FULL SCREEN BUTTON */
            (()=>{
                this.buttonFullScreen = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.01), /**X */
                    (this.height * 0.9), /**Y */
                    (this.game.width * 0.15), /**WIDTH */
                    (this.game.height * 0.1), /**HEIGHT */
                    0, /**ROTATION */
                    this.farmSign,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.05), /**TEXT SPACING */
                    "PatrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.03), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.45), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                    "🖥 TELA CHEIA", /**UNIQUE TEXT */
                    (this.game.width * 0.032), /**UNIQUE TEXT X */
                    (this.height * 0.96), /**UNIQUE TEXT Y */
                );
            })();

            /**CONTINUE BUTTONS*/
            (()=>{
                /**CONTINUE BUTTON 1 */
                this.continueButton1 = new Image(
                    this.game, /**GAME */
                    (this.game.width * 1), /**X */
                    (this.height * 1.155), /**Y */
                    (this.game.width * 0.2), /**WIDTH */
                    (this.game.height * 0.3), /**HEIGHT */
                    -20, /**ROTATION */
                    this.buttonContinue,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "PatrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.height * 0.06), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                    "CONTINUAR", /**UNIQUE TEXT */
                    (this.game.width * 1.025), // UNIQUE TEXT X
                    (this.game.height * 1.265), // UNIQUE TEXT Y
                    false, // CURSOR VISIBLE (added to match constructor parameters)
                    0, // TEXT OFFSET X (added to match constructor parameters)
                    0, // TEXT OFFSET Y (added to match constructor parameters)
                    true // HOVER SCALE (added to match constructor parameters)
                );

                /**CONTINUE BUTTON 2 */
                this.continueButton2 = new Image(
                    this.game, // GAME
                    (this.game.width * 1), // X
                    (this.height * 1.155), // Y
                    (this.game.width * 0.2), // WIDTH
                    (this.game.height * 0.3), // HEIGHT
                    -20, // ROTATION
                    this.buttonContinue, // IMAGE
                    1, // OPACITY
                    "", // TEXT (null changed to empty string to match constructor parameter types)
                    (this.height * 0.1), // TEXT SPACING
                    "PatrickHand", // TEXT FONT
                    "bold", // FONT WEIGHT
                    (this.height * 0.06), // FONT SIZE
                    (this.game.width * 0.365), // TEXT X
                    (this.height * 1.50), // TEXT Y
                    "black", // TEXT COLOR
                    true, // MOUSE HOVER
                    "", // TEXTS ALIGN -> ROW OR COLUMN (null changed to empty string to match constructor parameter types)
                    "CONTINUAR", // UNIQUE TEXT
                    (this.game.width * 1.025), // UNIQUE TEXT X
                    (this.game.height * 1.265), // UNIQUE TEXT Y
                    false, // CURSOR VISIBLE (added to match constructor parameters)
                    0, // TEXT OFFSET X (added to match constructor parameters)
                    0, // TEXT OFFSET Y (added to match constructor parameters)
                    true // HOVER SCALE (added to match constructor parameters)
                );

                /**CONTINUE BUTTON 3 */
                this.continueButton3 = new Image(
                    this.game, // GAME
                    (this.game.width * 1), // X
                    (this.height * 1.155), // Y
                    (this.game.width * 0.2), // WIDTH
                    (this.game.height * 0.3), // HEIGHT
                    -20, // ROTATION
                    this.buttonContinue, // IMAGE
                    1, // OPACITY
                    "", // TEXT (null changed to empty string to match constructor parameter types)
                    (this.height * 0.1), // TEXT SPACING
                    "PatrickHand", // TEXT FONT
                    "bold", // FONT WEIGHT
                    (this.height * 0.06), // FONT SIZE
                    (this.game.width * 0.365), // TEXT X
                    (this.height * 1.50), // TEXT Y
                    "black", // TEXT COLOR
                    true, // MOUSE HOVER
                    "", // TEXTS ALIGN -> ROW OR COLUMN (null changed to empty string to match constructor parameter types)
                    "CONTINUAR", // UNIQUE TEXT
                    (this.game.width * 1.025), // UNIQUE TEXT X
                    (this.game.height * 1.265), // UNIQUE TEXT Y
                    false, // CURSOR VISIBLE (added to match constructor parameters)
                    0, // TEXT OFFSET X (added to match constructor parameters)
                    0, // TEXT OFFSET Y (added to match constructor parameters)
                    true // HOVER SCALE (added to match constructor parameters)
                );
            })();

            /**RESTART BUTTON */
            (()=>{
                this.restartButton = new Image(
                    this.game, // GAME
                    (this.game.width * 1), // X
                    (this.height * 1.155), // Y
                    (this.game.width * 0.2), // WIDTH
                    (this.game.height * 0.3), // HEIGHT
                    -20, // ROTATION
                    this.buttonContinue, // IMAGE
                    1, // OPACITY
                    "", // TEXT (null changed to empty string to match constructor parameter types)
                    (this.height * 0.1), // TEXT SPACING
                    "PatrickHand", // TEXT FONT
                    "bold", // FONT WEIGHT
                    (this.height * 0.06), // FONT SIZE
                    (this.game.width * 0.365), // TEXT X
                    (this.height * 1.50), // TEXT Y
                    "black", // TEXT COLOR
                    true, // MOUSE HOVER
                    "", // TEXTS ALIGN -> ROW OR COLUMN (null changed to empty string to match constructor parameter types)
                    "REINICIAR", // UNIQUE TEXT
                    (this.game.width * 1.036), // UNIQUE TEXT X
                    (this.game.height * 1.265), // UNIQUE TEXT Y
                    false, // CURSOR VISIBLE (added to match constructor parameters)
                    0, // TEXT OFFSET X (added to match constructor parameters)
                    0, // TEXT OFFSET Y (added to match constructor parameters)
                    true // HOVER SCALE (added to match constructor parameters)
                );
            })();

            /**CONFIRM BUTTON*/
            (()=>{
                this.confirmButton = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.79), /**X */
                    (this.height * 0.88), /**Y */
                    (this.game.width * 0.13), /**WIDTH */
                    (this.game.height * 0.1), /**HEIGHT */
                    0, /**ROTATION */
                    this.buttonConfirm,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "PatrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.height * 0.06), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                    "CONTINUAR", /**UNIQUE TEXT */
                    (this.game.width * 1.025), // UNIQUE TEXT X
                    (this.game.height * 1.265), // UNIQUE TEXT Y
                    false, // CURSOR VISIBLE (added to match constructor parameters)
                    0, // TEXT OFFSET X (added to match constructor parameters)
                    0, // TEXT OFFSET Y (added to match constructor parameters)
                    true // HOVER SCALE (added to match constructor parameters)
                );
            })();

            /**SHOW KEYBOARD BUTTON */
            (()=>{
                this.buttonShowKeyboard = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.55), /**X */
                    (this.height * 1.1), /**Y */
                    (this.game.width * 0.15), /**WIDTH */
                    (this.game.height * 0.1), /**HEIGHT */
                    0, /**ROTATION */
                    this.farmSign,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "PatrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.03), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                    "⌨ TECLADO", /**UNIQUE TEXT */
                    (this.game.width * 0.58), /**UNIQUE TEXT X */
                    (this.height * 1.16), /**UNIQUE TEXT Y */
                );
            })();

            /**HIDE KEYBOARD BUTTON */
            (()=>{
                this.buttonHideKeyboard = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.55), /**X */
                    (this.height * 1.1), /**Y */
                    (this.game.width * 0.15), /**WIDTH */
                    (this.game.height * 0.1), /**HEIGHT */
                    0, /**ROTATION */
                    this.farmSign,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "PatrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.game.height * 0.03), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    true, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                    "⌨ ESCONDER", /**UNIQUE TEXT */
                    (this.game.width * 0.58), /**UNIQUE TEXT X */
                    (this.height * 1.16), /**UNIQUE TEXT Y */
                );
            })();

            /**KEYBOARD*/
            (()=>{
                this.keyboard = new NumericKeyboard(
                    this.game,  /**GAME */
                    this.game.width * 0.25, /**X */
                    this.game.height * 1.1, /**Y */
                    "PatrickHand", /**FONT */
                    5, /**MAX LENGTH */
                );
            })();

            /**PRODUCTS QTY */
            (()=>{
                this.productsQtyIndicator = new Image(
                    this.game, /**GAME */
                    (this.game.width * 0.73), /**X */
                    (this.height * 0.73), /**Y */
                    (this.game.width * 0.23), /**WIDTH */
                    (this.game.height * 0.15), /**HEIGHT */
                    0, /**ROTATION */
                    this.productsQty,  /**IMAGE */
                    1, /**OPACITY */
                    null, /**TEXT */
                    (this.height * 0.1), /**TEXT SPACING */
                    "PatrickHand", /**TEXT FONT */
                    "bold", /**FONT WEIGHT */
                    (this.height * 0.06), /**FONT SIZE */
                    (this.game.width * 0.365), /**TEXT X */
                    (this.height * 1.50), /**TEXT Y */
                    "black", /**TEXT COLOR */
                    false, /**MOUSE HOVER */
                    null, /**TEXTS ALIGN -> ROW OR COLUMN */
                    "", /**UNIQUE TEXT */
                    (this.game.width * 0.805), // UNIQUE TEXT X
                    (this.game.height * 0.84), // UNIQUE TEXT Y
                    true, // CURSOR VISIBLE (added to match constructor parameters)
                    0, // TEXT OFFSET X (added to match constructor parameters)
                    0, // TEXT OFFSET Y (added to match constructor parameters)
                    false // HOVER SCALE (added to match constructor parameters)
                );
                

            })();

            /**FENCE | VEGETABLES*/
            (()=>{

                /**FENCE*/
                (()=>{
                    this.fence = new Image(
                        this.game, /**GAME */
                        (this.game.width * 0.01), /**X */
                        (this.height * 0.20), /**Y */
                        (this.game.width * 0.70), /**WIDTH */
                        (this.game.height * 0.25), /**HEIGHT */
                        0, /**ROTATION */
                        this.fence0,  /**IMAGE */
                        1, /**OPACITY */
                        null, /**TEXT */
                        (this.height * 0.1), /**TEXT SPACING */
                        "font1942", /**TEXT FONT */
                        "bold", /**FONT WEIGHT */
                        (this.game.height * 0.5), /**FONT SIZE */
                        (this.game.width * 0.365), /**TEXT X */
                        (this.height * 1.50), /**TEXT Y */
                        "black", /**TEXT COLOR */
                        true, /**MOUSE HOVER */
                        null, /**TEXTS ALIGN -> ROW OR COLUMN */
                    );
                })();

                /**GROUNDS*/
                (()=>{


                    /**GROUND 1 */
                    (()=>{
                        this.ground1 = new Image(
                            this.game, /**GAME */
                            (this.game.width * 0.01), /**X */
                            (this.height * 0.39), /**Y */
                            (this.game.width * 0.75), /**WIDTH */
                            (this.game.height * 0.15), /**HEIGHT */
                            0, /**ROTATION */
                            this.ground40,  /**IMAGE */
                            1, /**OPACITY */
                            null, /**TEXT */
                            (this.height * 0.1), /**TEXT SPACING */
                            "font1942", /**TEXT FONT */
                            "bold", /**FONT WEIGHT */
                            (this.game.height * 0.5), /**FONT SIZE */
                            (this.game.width * 0.365), /**TEXT X */
                            (this.height * 1.50), /**TEXT Y */
                            "black", /**TEXT COLOR */
                            true, /**MOUSE HOVER */
                            null, /**TEXTS ALIGN -> ROW OR COLUMN */
                        );
                    })();

                    /**GROUND 2 */
                    (()=>{
                        this.ground2 = new Image(
                            this.game, /**GAME */
                            (this.game.width * 0.01), /**X */
                            (this.height * 0.45), /**Y */
                            (this.game.width * 0.75), /**WIDTH */
                            (this.game.height * 0.15), /**HEIGHT */
                            0, /**ROTATION */
                            this.ground30,  /**IMAGE */
                            1, /**OPACITY */
                            null, /**TEXT */
                            (this.height * 0.1), /**TEXT SPACING */
                            "font1942", /**TEXT FONT */
                            "bold", /**FONT WEIGHT */
                            (this.game.height * 0.5), /**FONT SIZE */
                            (this.game.width * 0.365), /**TEXT X */
                            (this.height * 1.50), /**TEXT Y */
                            "black", /**TEXT COLOR */
                            true, /**MOUSE HOVER */
                            null, /**TEXTS ALIGN -> ROW OR COLUMN */
                        );
                    })();

                    /**GROUND 3 */
                    (()=>{
                        this.ground3 = new Image(
                            this.game, /**GAME */
                            (this.game.width * 0.01), /**X */
                            (this.height * 0.52), /**Y */
                            (this.game.width * 0.75), /**WIDTH */
                            (this.game.height * 0.15), /**HEIGHT */
                            0, /**ROTATION */
                            this.ground20,  /**IMAGE */
                            1, /**OPACITY */
                            null, /**TEXT */
                            (this.height * 0.1), /**TEXT SPACING */
                            "font1942", /**TEXT FONT */
                            "bold", /**FONT WEIGHT */
                            (this.game.height * 0.5), /**FONT SIZE */
                            (this.game.width * 0.365), /**TEXT X */
                            (this.height * 1.50), /**TEXT Y */
                            "black", /**TEXT COLOR */
                            true, /**MOUSE HOVER */
                            null, /**TEXTS ALIGN -> ROW OR COLUMN */
                        );
                    })();

                    /**GROUND 4 */
                    (()=>{
                        this.ground4 = new Image(
                            this.game, /**GAME */
                            (this.game.width * 0.01), /**X */
                            (this.height * 0.59), /**Y */
                            (this.game.width * 0.75), /**WIDTH */
                            (this.game.height * 0.15), /**HEIGHT */
                            0, /**ROTATION */
                            this.ground10,  /**IMAGE */
                            1, /**OPACITY */
                            null, /**TEXT */
                            (this.height * 0.1), /**TEXT SPACING */
                            "font1942", /**TEXT FONT */
                            "bold", /**FONT WEIGHT */
                            (this.game.height * 0.5), /**FONT SIZE */
                            (this.game.width * 0.365), /**TEXT X */
                            (this.height * 1.50), /**TEXT Y */
                            "black", /**TEXT COLOR */
                            true, /**MOUSE HOVER */
                            null, /**TEXTS ALIGN -> ROW OR COLUMN */
                        );
                    })();
                })();

                /**FRUITS */
                (()=>{

                    //DYNAMIC FRUITS CREATION
                    (()=>{

                        if(this.choosedVegetable === 0){
                            for(let i = 0; i < 5; i++){
                                this.createVegetable(this.abobora, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedVegetable === 1){
                            for(let i = 0; i < 5; i++){
                                this.createVegetable(this.alface, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedVegetable === 2){
                            for(let i = 0; i < 5; i++){
                                this.createVegetable(this.beterraba, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedVegetable === 3){
                            for(let i = 0; i < 5; i++){
                                this.createVegetable(this.cenoura, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedVegetable === 4){
                            for(let i = 0; i < 5; i++){
                                this.createVegetable(this.alface, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedVegetable === 5){
                            for(let i = 0; i < 5; i++){
                                this.createVegetable(this.abobora, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }


                    })();

                })();


                
            })();

        })();

        /** ENEMY DATA */
        (()=>{

            this.toupeiras = [];

            /**TOUPEIRA SPRITE*/
            (()=>{
                
                setInterval(() => {
                    if(this.toupeiras.length === 0 && this.startGame){
                        let currentToupeira = new Sprite(
                            [
                                this.toupeiraImage, /** FLYING */
                            ], /** IMAGE */
                            this.game, /** GAME */
                            212, /** SPRITE WIDTH */
                            280, /** SPRITE HEIGHT */
                            this.game.height * 0.0015, /** SIZE X */
                            this.game.height * 0.0015, /** SIZE Y */
                            (this.game.width * 0.5), /** DESTINY X */
                            (this.game.canvas.height * 1.01), /** DESTINY Y */
                            2, /** MAX FRAME X */
                            0, /** MAX FRAME Y */
                            75, /** FRAME SPEED */
                            0, /** ROTATION */
                            false, /** PLAYER CONTROL */
                            true, /** MOUSE HOVER */
                            0, /**HOVER SCALE */
                            0, /**SCALE TO HOVER */
                            0, /**SCALE SPEED */
                        );
                        this.toupeiras.push(currentToupeira);
                    }
                }, 2000);
                
                
            })();

            /**BIRD TARGET FUNCTIONS*/
            (()=>{
                this.toupeiraPunched= false;
                this.justGrabbed = false;

                /**NUMBER BETWEEN 0 AND 8 */
                this.currentTarget = Math.floor(Math.random() * 5);
            })();

        })();

        setInterval(() => {

                
        }, 2000);


    }

    update(deltaTime) {



        /**ENEMY MOVEMENT AND CATCHING */
        (()=>{


            /**TOUPEIRA MOVEMENT */
            (()=>{

                if(this.fruits[this.currentTarget]){
                    if(this.fruits[this.currentTarget].isGrabbed ||
                        this.fruits[this.currentTarget].collidesWith(this.basket) ||
                        this.fruits[this.currentTarget].x < 0 - this.fruits[this.currentTarget].width ){
                         this.currentTarget = Math.floor(Math.random() * 5);
                     }
                }

                if(!this.protectFruit){
                    this.protectFruit = false;
                }


               for(let i = 0; i < this.toupeiras.length; i++){

                if(this.fruits[this.currentTarget].y > this.game.height * 1){
                    this.currentTarget = Math.floor(Math.random() * 5);
                };

                /**IF CURRENT TARGET FRUIT NOT COLLIDING WITH BASKET */
                if(this.fruits[this.currentTarget]){
                    if(!this.fruits[this.currentTarget].collidesWith(this.basket) && !this.toupeiraPunched){

                        if(!this.justGrabbed && this.fruits[this.currentTarget].y < this.game.height * 0.9){
                            this.toupeiras[i].moveTo(this.fruitsLocations[this.currentTarget].x, this.fruitsLocations[this.currentTarget].y - 175, 5);
                        } else {
                            this.toupeiras[i].moveTo(this.fruitsLocations[this.currentTarget].x, this.game.height * 1.16, 3);
                        }
    
                        if(this.toupeiras[i].collidesWith(this.fruits[this.currentTarget])){
                            this.fruits[this.currentTarget].draggedRight = true;
                            this.fruits[this.currentTarget].moveTo(this.toupeiras[i].x + 50, this.toupeiras[i].y + 145, 3.5);
                            setTimeout(() => {
                                this.justGrabbed = true;
                            }, 2500);
                        }
    
                        /**IF BIRD GO AWAY FROM CANVAS, IT WILL BE DELETED */
                        if(this.toupeiras[i].y > this.game.height * 1.06){
                            this.toupeiras.splice(i, 1);
                            this.currentTarget = Math.floor(Math.random() * 5);
                            while(this.fruits[this.currentTarget].y > this.game.height * 0.9)
                                {
                                    this.currentTarget = Math.floor(Math.random() * 5);
                                };
                            this.justGrabbed = false;
                        }
                    } else {
                        this.toupeiras[i].moveTo(this.game.width * -0.5, this.game.height * 1.2 - 125, 10);
                    }
                }
            
               };



            })();

        })();

        /**FRUITS RETURNING TO ITS PLACES */
        (()=>{

            for(let i = 0; i < this.fruits.length; i++){
                if(this.toupeiras[0]){
                    if(this.fruits[i].draggedRight && !this.toupeiras[0].collidesWith(this.fruits[i]) && !this.fruits[i].collidesWith(this.basket) && this.fruits[i].y < this.game.height){
                        this.fruits[i].draggedRight = false;
                    }
                }
            }

        })();

        /**IN THE CASE BIRD STOLE ENOUGH FRUITS TO LOSE */
        (()=>{
            if(!this.stolenFruits){
                this.stolenFruits = [];
            }
            this.stoleLimit = (this.fruits.length - this.fruitsToDrag) - this.stolenFruits.length;
            
            console.log(this.stolenFruits);
            for(let i = 0; i < this.fruits.length; i++){
                if(this.fruits[i].y > this.game.height * 0.95) {
                    
                    if(!this.stolenFruits.includes(this.fruits[i])){
                        this.stolenFruits.push(this.fruits[i]);
                        
                        
                        if(this.stoleLimit <= 0) {
                            this.fruitsStolen = true;
                        }
                    }
                }
            }
        })();


        /** ELEMENTS APPEARING | ELEMENTS DISAPPEARING */
        (() => {
            if (!this.calledNextScene) {

                if(this.game.currentStage === 1){
                    this.imageAkemi.fadeIn(0.01);
                    this.dialogueBox1.fadeIn(0.01);
                    this.continueButton1.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));
                } else {
                    this.calledNextScene = true;
                }

                




            } else {

                if(!this.startGame){
                    if(this.game.currentStage === 1){
                        this.dialogueBox1.fadeOut(0.01);
                        this.dialogueBox2.fadeIn(0.01);
        
                        this.continueButton1.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                        this.continueButton2.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));
                    } else {
                        this.startGame = true;
                    }
                } else {
                    this.dialogueBox1.fadeOut(0.01);
                    this.dialogueBox2.fadeOut(0.01);

                    if(!this.fruitsStolen){
                        this.dialogueBoxStolen.fadeOut(0.01);
                        this.imageLadybugStolen.fadeOut(0.01);
                    }
                    
                    this.continueButton1.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                    this.continueButton2.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                    this.imageAkemi.fadeOut(0.01);  
                    this.imageAkemi.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));

                    if(!this.showKeyboard){
                        this.buttonShowKeyboard.moveTo(this.game.width * 0.55, this.game.height * 0.9, (this.game.speed * 0.15));
                        this.buttonHideKeyboard.moveTo(this.game.width * 0.55, this.game.height * 1.1, (this.game.speed * 0.15));
                        this.keyboard.moveTo(this.game.width * 0.30, this.game.height * 1.1, (this.game.speed * 0.8));
                    } else {
                        this.buttonShowKeyboard.moveTo(this.game.width * 0.55, this.game.height * 1.1, (this.game.speed * 0.15));
                        this.buttonHideKeyboard.moveTo(this.game.width * 0.55, this.game.height * 0.9, (this.game.speed * 0.15));
                        this.keyboard.moveTo(this.game.width * 0.30, this.game.height * 0.2, (this.game.speed * 0.8));
                    }

                    if(this.correctAnswer){

                        if(this.enterNextScene){
                            this.toupeiras.splice(0, this.toupeiras.length);
                            this.imageAkemiCorrect.fadeOut(0.01);
                            this.dialogueBox4.fadeOut(0.01);
                            this.continueButton3.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                            this.background.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.fence.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.fruitIndicator.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.fruitToCatch.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.productsQtyIndicator.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.buttonFullScreen.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.buttonShowKeyboard.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.buttonHideKeyboard.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.keyboard.moveTo(this.game.width * -1, this.game.height * 1.2, (this.game.speed * 1));
                            this.ground1.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.ground2.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.ground3.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.ground4.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.fence.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.confirmButton.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            for(let i = 0; i < this.fruitsInBasket.length; i++){
                                this.fruitsInBasket[i].fadeOut(0.05);
                            }
                            for(let i = 0; i < this.fruits.length; i++){
                                this.fruits[i].fadeOut(0.05);
                            }
                            this.basket.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.nextBackground.moveTo(this.game.width * 0, this.game.height * 0, (this.game.speed * 1));
                        } else {
                            this.imageAkemiCorrect.fadeIn(0.01);
                            this.dialogueBox4.fadeIn(0.01);
                            this.continueButton3.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));
                            this.showKeyboard = false;
                        }


                       
                    } else if (this.wrongAnswer){
                        this.imageAkemiWrong.fadeIn(0.01);
                        this.dialogueBox3.fadeIn(0.01);
                        this.restartButton.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));
                        this.confirmButton.moveTo(this.game.width * 0.79, this.game.height * 1.155, (this.game.speed * 0.15));
                    } else if (this.fruitsStolen){
                        this.showKeyboard = false;
                        this.toupeiras.splice(0, this.toupeiras.length);
                        this.imageLadybugStolen.fadeIn(0.01); /**JOANINHA */
                        this.dialogueBoxStolen.fadeIn(0.01); /**DIALOGO JOANINHA */
                        this.restartButton.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));
                        this.confirmButton.moveTo(this.game.width * 0.79, this.game.height * 1.155, (this.game.speed * 0.15));
                    } else {
                        this.imageAkemiCorrect.fadeOut(0.01);
                        this.imageAkemiWrong.fadeOut(0.01);
                        this.dialogueBox3.fadeOut(0.01);
                        this.dialogueBox4.fadeOut(0.01);
                        this.restartButton.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                        this.confirmButton.moveTo(this.game.width * 0.79, this.game.height * 0.88, (this.game.speed * 0.15));
                    }



                }




            }
        })();

        /** MANAGE CLOUDS MOVEMENT */
        (() => {
            if (this.cloud1.x > this.game.canvas.width) {
                this.cloud1.x = 0 - this.cloud1.width;
            } else {
                this.cloud1.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.045));
            }
            if (this.cloud2.x > this.game.canvas.width) {
                this.cloud2.x = 0 - this.cloud2.width;
            } else {
                this.cloud2.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.035));
            }
            if (this.cloud3.x > this.game.canvas.width) {
                this.cloud3.x = 0 - this.cloud3.width;
            } else {
                this.cloud3.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.05));
            }
            if (this.cloud4.x > this.game.canvas.width) {
                this.cloud4.x = 0 - this.cloud4.width;
            } else {
                this.cloud4.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.025));
            }
            if (this.cloud5.x > this.game.canvas.width) {
                this.cloud5.x = 0 - this.cloud5.width;
            } else {
                this.cloud5.moveTo(this.game.canvas.width * 1.1, this.game.canvas.height * 0.05, (this.game.speed * 0.015));
            }
        })();

        /** HANDLE CLICKS */
        (() => {

            /**ENEMY CLICK */
            (()=>{
                for(let i = 0; i < this.toupeiras.length; i++){
                    if(this.toupeiras[i].isMouseClicking() && !this.game.isDraggingImage || this.toupeiras[i].isTouchOver() && !this.game.isDraggingImage){

                        this.toupeiraPunched = true;
                        setTimeout(() => {
                            this.toupeiraPunched = false;
                        }, 2000);

                        for(let j = 0; j < this.fruits.length; j++){
                            if(this.fruits[j]){
                                if(this.fruits[j].collidesWith(this.toupeiras[i])){
                                    if(this.fruits[this.currentTarget]){
                                        this.fruits[this.currentTarget].draggedRight = false;
                                    }
                                    this.protectFruit = true;
                                    
                                    setTimeout(() => {
                                        this.protectFruit = false;
                                    }, 1500);
                                }
                            }
                        }

                    }
                }
            })();

            /**FRUITS CLICKING */
            (()=>{
                for(let i = 0; i < this.fruits.length; i++){
                    if(this.fruits[i].isMouseClicking() && !this.game.isDraggingImage || this.fruits[i].isTouchOver() && !this.game.isDraggingImage){
                        this.fruits[i].draggedRight = false;
                    }
                }
            })();

            /**CONTINUE BUTTON 1 */
            (()=>{
                if(this.continueButton1.isMouseClicking() || this.continueButton1.isTouchOver()){

                    window.addEventListener('click', ()=>{
                        this.calledNextScene = true;
                    });

                    window.addEventListener('touchend', ()=>{
                        this.calledNextScene = true;
                    });

                }
            })();

            /**CONTINUE BUTTON 2 */
            (()=>{
                if(this.continueButton2.isMouseClicking() || this.continueButton2.isTouchOver()){

                    window.addEventListener('click', ()=>{
                        this.startGame = true;
                    });

                    window.addEventListener('touchend', ()=>{
                        this.startGame = true;
                    });

                }
            })();

            /**CONTINUE BUTTON 3 */
            (()=>{
                if(this.continueButton3.isMouseClicking() || this.continueButton3.isTouchOver()){

                    this.enterNextScene = true;
                    this.game.input.mouse.clicked = false;
                }
            })();

            /**FULL SCREEN BUTTON */
            (()=>{
                if (this.buttonFullScreen.isTouchOver() || this.buttonFullScreen.isMouseClicking()) {
                    window.addEventListener('click', this.handleFullScreenClick);
                    window.addEventListener('touchend', this.handleFullScreenTouchEnd);
                }
            })();

            /**SHOW AND HIDE KEYBOARD BUTTONS SCREEN BUTTON */
            (()=>{

                if (this.buttonShowKeyboard.isTouchOver() || this.buttonShowKeyboard.isMouseClicking()) {
                        this.showKeyboard = true;
                }

                if (this.buttonHideKeyboard.isTouchOver() || this.buttonHideKeyboard.isMouseClicking()) {
                        this.showKeyboard = false;
                }

            })();

            /**CONFIRM BUTTON*/
            (()=>{
                if(this.confirmButton.isTouchOver() || this.confirmButton.isMouseClicking()){
                    if(this.startGame && this.keyboard.currentInput.length > 0){

                        this.game.input.mouse.clicked = false;
                        this.game.input.touches = [];

                        if(this.fruitsInBasket.length === parseInt(this.keyboard.currentInput) &&
                            this.fruitsInBasket.length === this.fruitsToDrag){
                            this.correctAnswer = true;


                        } else {
                            this.wrongAnswer = true;
                            this.showKeyboard = false;

                            
                        }

                        this.startGame = false;
                        this.toupeiras.splice(0, this.toupeiras.length);


                        
                    }
                }
            })();

            /**RESTART BUTTON */
            (() => {
                if (this.restartButton.isTouchOver() || this.restartButton.isMouseClicking()) {

                    this.restart = true;

                    this.fruitsInBasket = [];
                    
                    this.keyboard.currentInput = "";
                    this.showKeyboard = false;
                    this.toupeiras.splice(0, this.toupeiras.length);

                    this.stolenFruits = [];

                    /**RETURN BASKET FRUITS TO THE TREE */
                    for (let i = 0; i < this.fruits.length; i++) {
                        this.fruits[i].dropped = false;
                        this.fruits[i].draggedRight = false;
                    }

                    this.correctAnswer = false;
                    this.wrongAnswer = false;
                    this.fruitsStolen = false;
                    this.stoleLimit = (this.fruits.length - this.fruitsToDrag) - this.stolenFruits.length;
                   

                    

                    setTimeout(() => {
                        this.restart = false;
                    }, 500);
                    
                    //this.game.input.mouse.clicked = false;
                }
            })();

            /**PRODUCT QTY INDICATOR */
            (()=>{
                if(this.productsQtyIndicator.isTouchOver() && this.startGame){
                    this.showKeyboard = !this.showKeyboard;
                    this.game.input.touches = [];
                }
            })();





        })();

        /** UPDATING ELEMENTS */
        (() => {

            this.imageAkemi.update(deltaTime);
            this.dialogueBox1.update(deltaTime);
            this.dialogueBox2.update(deltaTime);
            this.continueButton1.update(deltaTime);
            this.continueButton2.update(deltaTime);
            this.continueButton3.update(deltaTime);
            this.buttonFullScreen.update(deltaTime);
            this.restartButton.update();
            this.keyboard.canType = false;
            
            /**toupeiras */
            (()=>{
                for(let i = 0; i < this.toupeiras.length; i++){
                    if(this.startGame){
                        this.toupeiras[i].update(deltaTime);
                    }
                };
            })();




            if(this.startGame){
                this.keyboard.canType = true;
                this.productsQtyIndicator.uniqueText = this.keyboard.currentInput;
                this.confirmButton.update(deltaTime);
                this.productsQtyIndicator.update(deltaTime);
                this.productsQtyIndicator.startBlinkingCursor();
                this.buttonShowKeyboard.update(deltaTime);
                this.buttonHideKeyboard.update(deltaTime);
                this.keyboard.update(deltaTime);

            }

            /**FRUITS*/
            (()=>{
                if(this.startGame && !this.fruitsStolen && !this.correctAnswer && !this.wrongAnswer){
                    for(let i = 0; i < this.fruits.length; i++){
                        this.fruits[i].update(deltaTime);
                        this.fruits[i].draggable = true;
                    }
                } else {
                    for(let i = 0; i < this.fruits.length; i++){
                        this.fruits[i].draggable = false;
                    }
                }
            })();

        })();

        /**CHANGING SCENE */
        if (this.calledNextScene && this.background.x <= -this.game.width) {
            this.changeScene();
        }
        
        /**HANDLE PUSHING FRUITS TO THE BASKET */
        (() => {

            /**CHECK IF THERE'S ANY FRUITS BEING DROPPED IN THE BASKET OR OUTSIDE*/
            if (this.startGame) {

                for (let i = 0; i < this.fruits.length; i++) {

                    if (this.fruits[i].collidesWith(this.basket) && this.fruits[i].dropped && !this.wrongAnswer && !this.restart) {
                        // Verifica se a fruta já está no array fruitsInBasket
                        const isFruitAlreadyInBasket = this.fruitsInBasket.some(fruitInBasket => fruitInBasket === this.fruits[i]);
                        if (!isFruitAlreadyInBasket) {
                            this.fruits[i].draggedRight = true;
                            this.fruitsInBasket.push(this.fruits[i]);
                        }
                        // Marca a fruta como não soltável novamente para evitar duplicatas
                        this.fruits[i].dropped = false;
                        
                    } 

                }

                for (let i = 0; i < this.fruitsInBasket.length; i++) {

                    if(!this.fruitsInBasket[i].collidesWith(this.basket)){
                        if(this.fruitsInBasket[i].dropped){
                           
                            /**TAKE IT OUT FROM FRUITS IN BASKET ARRAY AND RETURN TO ITS ORIGINAL POSITION */
                            this.fruitsInBasket[i].dropped = false;
                            this.fruitsInBasket[i].draggedRight = false;
                            this.fruitsInBasket.splice(i, 1);
                        }
                    }
                        
                    

                }


            }


            /**MOVE THE FRUITS TO EACH BASKET POSITION */
            (()=>{
                if(!this.correctAnswer && !this.wrongAnswer && !this.restart){

                    console.log("dae porra" + this.choosedVegetable);
                    for(let i = 0; i < this.fruitsInBasket.length; i++){

                        if(i === 0){
                            let currentX = this.game.width * 0.74;
                            let currentY = this.game.height * 0.15;

                            if(this.choosedVegetable == 3){
                                currentX *= 1.02;
                            }

                            if(this.choosedVegetable == 2){
                                currentX *= 1.02;
                            }

                            this.fruitsInBasket[i].moveTo(currentX, currentY, (this.game.speed * 0.4));
                        }
    
                        if(i === 1){
                            let currentX = this.game.width * 0.805;
                            let currentY = this.game.height * 0.15;

                            if(this.choosedVegetable == 3){
                                currentX *= 1.02;
                            }

                            if(this.choosedVegetable == 2){
                                currentX *= 1.02;
                            }

                            this.fruitsInBasket[i].moveTo(currentX, currentY, (this.game.speed * 0.4));
                        }
    
                        if(i === 2){
                            let currentX = this.game.width * 0.87;
                            let currentY = this.game.height * 0.15;

                            if(this.choosedVegetable == 3){
                                currentX *= 1.02;
                            }

                            if(this.choosedVegetable == 2){
                                currentX *= 1.02;
                            }

                            this.fruitsInBasket[i].moveTo(currentX, currentY, (this.game.speed * 0.4));
                        }
    
                        if(i === 3){
                            let currentX = this.game.width * 0.74;
                            let currentY = this.game.height * 0.31;

                            if(this.choosedVegetable == 3){
                                currentX *= 1.02;
                            }

                            if(this.choosedVegetable == 2){
                                currentX *= 1.02;
                            }

                            this.fruitsInBasket[i].moveTo(currentX, currentY, (this.game.speed * 0.4));
                        }
    
                        if(i === 4){
                            let currentX = this.game.width * 0.805;
                            let currentY = this.game.height * 0.31;

                            if(this.choosedVegetable == 3){
                                currentX *= 1.02;
                            }

                            if(this.choosedVegetable == 2){
                                currentX *= 1.02;
                            }

                            this.fruitsInBasket[i].moveTo(currentX, currentY, (this.game.speed * 0.4));
                        }
    
                        if(i === 5){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.89, this.game.height * 0.31, (this.game.speed * 0.4));
                        }
    
                        if(i === 6){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.76, this.game.height * 0.47, (this.game.speed * 0.4));
                        }
    
                        if(i === 7){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.825, this.game.height * 0.47, (this.game.speed * 0.4));
                        }
    
                        if(i === 8){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.89, this.game.height * 0.47, (this.game.speed * 0.4));
                        }
    
                    }
                }
            })();
        


        })();
       
    }

    draw(ctx, scene) {

        /** PAINT CANVAS BLUE WITH GRADIENT TO WHITE */
        (()=>{
            let grd = ctx.createLinearGradient(0, 0, 0, this.game.height);
            grd.addColorStop(0, '#87CEEB');
            grd.addColorStop(1, 'lightgray');
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, this.game.width, this.game.height);
        })();

        /** BACKGROUNDS DRAWING | CLOUDS DRAWING | TREE DRAWING | ENEMIES*/
        (()=>{
            this.backgroundGameFrame.draw(this.game.ctx, 0);

            /** CLOUDS DRAWING */
            (()=>{
                this.cloud1.draw(ctx, 0);
                this.cloud2.draw(ctx, 0);
                this.cloud3.draw(ctx, 0);
                this.cloud4.draw(ctx, 0);
                this.cloud5.draw(ctx, 0);
            })();

            /**FENCE / VEGETABLES DRAWING */
            this.fence.draw(ctx, 0);
            this.ground1.draw(ctx, 0);
            this.ground2.draw(ctx, 0);
            this.ground3.draw(ctx, 0);
            

            /**ENEMIES */
            (()=>{
                for(let i = 0; i < this.toupeiras.length; i++){
                    if(this.startGame
                        //this.toupeiras[i].x > (this.game.width * 0.5) ||
                        //this.toupeiras[i].x < (this.game.width * 0.1)
                        )
                        {
                         this.toupeiras[i].draw(ctx, 0);
                     }
                }

            })();

            /**TREE FRUITS */
            for(let i = 0; i < this.fruits.length; i++){
                if(this.fruits[i].x < (this.game.width * 0.8)){
                    this.fruits[i].draw(ctx, 0);
                }
            }

            this.ground4.draw(ctx, 0);
            this.background.draw(this.game.ctx, 0);
            
            this.nextBackground.draw(this.game.ctx, 0);

        })();

        /**FRUIT INDICATOR */
        this.fruitIndicator.draw(ctx, 0);

        /**CONFIRM BUTTON DRAWING */
        (()=>{
            this.confirmButton.draw(ctx, 0);
        })();

        /**FULL SCREEN BUTTON DRAWING */
        (()=>{
            this.buttonFullScreen.draw(ctx, 0);
        })();

        /**BUTTONS KEYBOARD */
        (()=>{
            this.buttonShowKeyboard.draw(ctx, 0);
            this.buttonHideKeyboard.draw(ctx, 0);
        })();

        /**PRODUCT QTY INDICATOR DRAWING */
        (()=>{
            this.productsQtyIndicator.draw(ctx, 0);
        })();

        /**CONTINUE BUTTON DRAWING */
        (()=>{
            this.continueButton1.draw(ctx, 0);
            this.continueButton2.draw(ctx, 0);
            this.continueButton3.draw(ctx, 0);
        })();

        /**RESTART BUTTON DRAWING */
        (()=>{
            this.restartButton.draw(ctx, 0);
        })();


        /**BASKET DRAWING*/
        this.basket.draw(ctx, 0);

        /**FRUITS*/
        (()=>{

            /**TREE FRUITS */
            for(let i = 0; i < this.fruits.length; i++){
                if(this.fruits[i].x > (this.game.width * 0.65)){
                    this.fruits[i].draw(ctx, 0);
                }
            }



            /**FRUITS TO CATCH INDICATOR */
            this.fruitToCatch.draw(ctx, 0);
            


        })();



        /**AKEMI GIRL DRAWING */
        (()=>{
            this.imageAkemi.draw(ctx, 0);
            this.imageAkemiCorrect.draw(ctx, 0);
            this.imageAkemiWrong.draw(ctx, 0);
            this.imageLadybugStolen.draw(ctx, 0);
        })();

        /**DIALOGUE BOXES DRAWING*/
        (()=>{
            this.dialogueBox1.draw(ctx, 0);
            this.dialogueBox2.draw(ctx, 0);
            this.dialogueBox3.draw(ctx, 0);
            this.dialogueBox4.draw(ctx, 0);
            this.dialogueBoxStolen.draw(ctx, 0);
        })();

        /**KEYBOARD DRAWING */
        (()=>{

                this.keyboard.draw(ctx, 0);

        })();

        /**ENEMIES */
        (()=>{
            for(let i = 0; i < this.toupeiras.length; i++){
                if(this.startGame &&
                    this.toupeiras[i].x < (this.game.width * 0.5) &&
                    this.toupeiras[i].x > (this.game.width * 0.1)){
                     //this.toupeiras[i].draw(ctx, 0);
                 }
            };
        })();

        



    }

    playSound() {
        this.musicMenu.play();
    }

    changeScene() {

        
        if(this.game.currentStage === 2){
            this.game.stagesDone.push("VEGETABLES");
            
        } else {
            this.game.currentStage += 1;
        }

        


        if(this.game.stagesDone.includes("VEGETABLES")){
            this.game.currentStage = 0;
            this.game.changeScene(Scene2);
        } else {
            this.game.changeScene(Scene6);
        }
    }

    createVegetable(fruit, x, y){

        let currentHeight = null;
        let currentWidth = null;

        if(fruit === this.abobora){
            currentHeight = this.game.height * 0.15;
            currentWidth = this.game.width * 0.1;
        }

        if(fruit === this.alface){
            currentHeight = this.game.height * 0.13;
            currentWidth = this.game.width * 0.09;
        }

        if(fruit === this.beterraba){
            currentHeight = this.game.height * 0.22;
            currentWidth = this.game.width * 0.05;
        }

        if(fruit === this.cenoura){
            currentHeight = this.game.height * 0.2;
            currentWidth = this.game.width * 0.06;
        }

        if(fruit === this.tomate){
            currentHeight = this.game.height * 0.1;
            currentWidth = this.game.width * 0.07;
        }





        const currentFruit = new Image(
            this.game, // GAME
            x, // X
            y, // Y
            currentWidth, // WIDTH
            currentHeight, // HEIGHT
            0, // ROTATION
            fruit,  // IMAGE
            1, // OPACITY
            null, // TEXT
            (this.height * 0.1), // TEXT SPACING
            "PatrickHand", // TEXT FONT
            "bold", // FONT WEIGHT
            (this.height * 0.06), // FONT SIZE
            (this.game.width * 0.365), // TEXT X
            (this.height * 1.50), // TEXT Y
            "black", // TEXT COLOR
            true, // MOUSE HOVER
            null, // TEXTS ALIGN -> ROW OR COLUMN
            ``, // UNIQUE TEXT
            (this.game.width * 0.285), // UNIQUE TEXT X
            (this.game.height * 0.82), // UNIQUE TEXT Y
            false, // CURSOR VISIBLE (added to match constructor parameters)
            0, // TEXT OFFSET X (added to match constructor parameters)
            0, // TEXT OFFSET Y (added to match constructor parameters)
            true, // HOVER SCALE (added to match constructor parameters)
            1.5, // SCALE TO HOVER
            0.15, // SCALE SPEED
            true, // DRAGGABLE
            25, /**GRAB RELEASE SPEED */
        );

        this.fruits.push(currentFruit);

        return currentFruit;
    }

    handleFullScreenClick() {
        this.game.toggleFullScreen();
        window.removeEventListener('click', this.handleFullScreenClick);
        this.game.input.mouse.clicked = false;
    }

    handleFullScreenTouchEnd() {
        this.game.toggleFullScreen();
        window.removeEventListener('touchend', this.handleFullScreenTouchEnd);
        this.game.input.mouse.clicked = false;
    }


}