import { Background } from "../../../engine/background/background.js";
import { ClickDebug } from "../../../engine/debug/clickDebug.js";
import { DebugMovement } from "../../../engine/debug/movementDebug.js";
import { Sprite } from "../../../engine/sprite/sprite.js";
import { Sound } from "../../../engine/sound/sound.js";
import { Image } from "../../../engine/image/image.js";
import { Keyboard } from "../../../engine/hud/keyboard/keyboard.js";
import { NumericKeyboard } from "../../../engine/hud/numKeyboard/numKeyboard.js";

/**EASY MODE -> FRUIT COLLECTING */
export class Scene3 {

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

            /**KEYBOARD CONTROL */
            this.showKeyboard = false;

            /**RANDOM FRUIT (6 FRUITS) */
            this.randomFruit = Math.floor(Math.random() * 6);

            /**FRUITS TO DRAG */
            (()=>{
                this.fruits = [];
                this.fruitsLocations = [
                    {x: this.game.width * 0.27, y: this.game.height * 0.09},
                    {x: this.game.width * 0.32, y: this.game.height * 0.16},
                    {x: this.game.width * 0.25, y: this.game.height * 0.2},
                    {x: this.game.width * 0.26, y: this.game.height * 0.45},
                    {x: this.game.width * 0.31, y: this.game.height * 0.31},
                    {x: this.game.width * 0.38, y: this.game.height * 0.35},
                    {x: this.game.width * 0.39, y: this.game.height * 0.24},
                    {x: this.game.width * 0.39, y: this.game.height * 0.12},
                    {x: this.game.width * 0.24, y: this.game.height * 0.32},
                ];
                this.fruitsToDrag = 0;
                this.choosedFruit = 0;
                this.fruitsInBasket = [];

                /**RANDOM NUMBER BETWEEN 1 AND 9 */
                this.fruitsToDrag = Math.floor(Math.random() * 9) + 1;

                /**RANDOM NUMBER BETWEEN 0 AND 5 */
                this.choosedFruit = Math.floor(Math.random() * 6);
                //this.choosedFruit = 5;

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
            /**TREE */
            this.mainTree0 = document.getElementById('mainTree');
            /**PRODUCTS QTY */
            this.productsQty = document.getElementById('productQty');
            /**FIGURES AREA */
            this.figuresArea = document.getElementById('figuresArea');
            /**ENEMY -> BIRD */
            this.birdImage = document.getElementById('bird');

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
                this.appleImage = document.getElementById('apple');
                this.pera = document.getElementById('pera');
                this.manga = document.getElementById('manga');
                this.laranja = document.getElementById('laranja');
                this.limao = document.getElementById('limao');
                this.caju = document.getElementById('caju');
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

                    let currentFruitImage = null;
                    if(this.choosedFruit === 0){
                        currentFruitImage = this.appleImage;
                    } else if (this.choosedFruit === 1){
                        currentFruitImage = this.pera;
                    } else if (this.choosedFruit === 2){
                        currentFruitImage = this.manga;
                    } else if (this.choosedFruit === 3){
                        currentFruitImage = this.laranja;
                    } else if (this.choosedFruit === 4){
                        currentFruitImage = this.limao;
                    } else if (this.choosedFruit === 5){
                        currentFruitImage = this.caju;
                    }

                    this.fruitToCatch = new Image(
                        this.game, /**GAME */
                        (this.game.width * 0.345), /**X */
                        (this.height * 0.79), /**Y */
                        (this.game.width * 0.05), // WIDTH
                        (this.game.height * 0.1), // HEIGHT
                        0, /**ROTATION */
                        currentFruitImage,  /**IMAGE */
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
                        `               AS FRUTAS NA QUANTIDADE MOSTRADA ABAIXO!  `, /**TEXT 2 */
                        `                    CLIQUE EM UMA DELAS E ARRASTE PARA A CESTA!  `
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
                        `                MAS TOME CUIDADO COM AS AVES!`,
                        `                  ELAS PODEM ROUBAR AS FRUTAS DO POMAR!  `,
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
                        `                      VOCÊ PEGOU TODAS AS FRUTAS NA QUANTIDADE CERTA!    `,
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
                    true, /**MOUSE HOVER */
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

            /**TREES | FRUITS*/
            (()=>{

                /**MAIN TREE*/
                (()=>{
                    this.mainTree = new Image(
                        this.game, /**GAME */
                        (this.game.width * 0.19), /**X */
                        (this.height * 0.05), /**Y */
                        (this.game.width * 0.30), /**WIDTH */
                        (this.game.height * 0.75), /**HEIGHT */
                        0, /**ROTATION */
                        this.mainTree0,  /**IMAGE */
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

                /**FRUITS */
                (()=>{

                    //DYNAMIC FRUITS CREATION
                    (()=>{

                        if(this.choosedFruit === 0){
                            for(let i = 0; i < 9; i++){
                                this.createFruit(this.appleImage, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedFruit === 1){
                            for(let i = 0; i < 9; i++){
                                this.createFruit(this.pera, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedFruit === 2){
                            for(let i = 0; i < 9; i++){
                                this.createFruit(this.manga, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedFruit === 3){
                            for(let i = 0; i < 9; i++){
                                this.createFruit(this.laranja, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedFruit === 4){
                            for(let i = 0; i < 9; i++){
                                this.createFruit(this.limao, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }

                        if(this.choosedFruit === 5){
                            for(let i = 0; i < 9; i++){
                                this.createFruit(this.caju, this.fruitsLocations[i].x, this.fruitsLocations[i].y);
                            }
                        }



                    })();

                })();


                
            })();

        })();

        /** ENEMY DATA */
        (()=>{

            this.birds = [];
            this.birdsStartLocations = [
                {x: this.game.width * 1.5, y: this.game.height * 0.5},
                {x: this.game.width * 3, y: this.game.height * 0.5},
                {x: this.game.width * 4.5, y: this.game.height * 0.5},
                {x: this.game.width * 6, y: this.game.height * 0.5},
                {x: this.game.width * 7.5, y: this.game.height * 0.5},
                {x: this.game.width * 9, y: this.game.height * 0.5},
                {x: this.game.width * 10.5, y: this.game.height * 0.5},
                {x: this.game.width * 12, y: this.game.height * 0.5},
                {x: this.game.width * 13.5, y: this.game.height * 0.5},
            ];

            /**BIRD SPRITE*/
            (()=>{
                
                for(let i = 0; i < this.fruits.length; i++){
                    let currentBird = new Sprite(
                        [
                            this.birdImage, /** FLYING */
                        ], /** IMAGE */
                        this.game, /** GAME */
                        100, /** SPRITE WIDTH */
                        135, /** SPRITE HEIGHT */
                        this.game.height * 0.0015, /** SIZE X */
                        this.game.height * 0.0015, /** SIZE Y */
                        this.birdsStartLocations[i].x, /** DESTINY X */
                        (this.game.canvas.height * 0.5), /** DESTINY Y */
                        5, /** MAX FRAME X */
                        0, /** MAX FRAME Y */
                        75, /** FRAME SPEED */
                        0, /** ROTATION */
                        false /** PLAYER CONTROL */
                    );
                    this.birds.push(currentBird);
                }
                
            })();

            /**BIRD TARGET FUNCTIONS*/
            (()=>{
                this.birdCatched = false;

            })();

        })();

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

    update(deltaTime) {

        /**ENEMY MOVEMENT AND CATCHING */
        (()=>{


            /**BIRD MOVEMENT */
            (()=>{

                if(this.startGame){
                    for(let i = 0; i < this.fruits.length; i++){

                        /**IF FRUIT IS NOT INSIDE BASKET, BIRD WILL REACH THE FRUIT */
                        if(!this.fruits[i].collidesWith(this.basket)){
                            this.birds[i].moveTo(this.fruitsLocations[i].x, (this.fruitsLocations[i].y - 125), 15);
                        
                        /**IF FRUIT IS INSIDE THE BASKET, BIRD WILL GO AWAY */
                        } else {
                            this.birds[i].moveTo(this.game.width * -1.5, this.birds[i].y, 15);
                        }
                    }
                }


            })();

        })();


        /** ELEMENTS APPEARING | ELEMENTS DISAPPEARING */
        (() => {
            if (!this.calledNextScene) {

                this.imageAkemi.fadeIn(0.01);
                this.dialogueBox1.fadeIn(0.01);

                this.continueButton1.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));




            } else {

                if(!this.startGame){
                    this.dialogueBox1.fadeOut(0.01);
                    this.dialogueBox2.fadeIn(0.01);
    
                    this.continueButton1.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                    this.continueButton2.moveTo(this.game.width * 0.8, this.game.height * 0.8, (this.game.speed * 0.15));
                } else {
                    this.dialogueBox1.fadeOut(0.01);
                    this.dialogueBox2.fadeOut(0.01);
                    
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
                            this.imageAkemiCorrect.fadeOut(0.01);
                            this.dialogueBox4.fadeOut(0.01);
                            this.continueButton3.moveTo(this.game.width * 1, this.game.height * 1.155, (this.game.speed * 0.15));
                            this.background.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.mainTree.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.fruitIndicator.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.fruitToCatch.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.productsQtyIndicator.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.buttonFullScreen.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.buttonShowKeyboard.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.buttonHideKeyboard.moveTo(this.game.width * -1, this.game.height * 1, (this.game.speed * 1));
                            this.keyboard.moveTo(this.game.width * -1, this.game.height * 1.2, (this.game.speed * 1));
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
                        
                    }
                }
            })();

            /**RESTART BUTTON */
            (()=>{
                if(this.restartButton.isTouchOver() || this.restartButton.isMouseClicking()){
                    this.game.input.mouse.clicked = false;
                    this.game.input.touches = [];
                    this.restart();
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
            this.keyboard.canType = false;
            for(let i = 0; i < this.fruits.length; i++){
                this.birds[i].update(deltaTime);
            }


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

            if(this.wrongAnswer){
                this.restartButton.update();
            }

            /**FRUITS*/
            (()=>{
                if(this.startGame && !this.showKeyboard){
                    for(let i = 0; i < this.fruits.length; i++){
                        this.fruits[i].update(deltaTime);
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

                    if (this.fruits[i].collidesWith(this.basket) && this.fruits[i].dropped && !this.wrongAnswer) {
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
                if(!this.correctAnswer && !this.wrongAnswer){

                    for(let i = 0; i < this.fruitsInBasket.length; i++){

                        if(i === 0){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.76, this.game.height * 0.15, (this.game.speed * 0.4));
                        }
    
                        if(i === 1){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.825, this.game.height * 0.15, (this.game.speed * 0.4));
                        }
    
                        if(i === 2){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.89, this.game.height * 0.15, (this.game.speed * 0.4));
                        }
    
                        if(i === 3){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.76, this.game.height * 0.31, (this.game.speed * 0.4));
                        }
    
                        if(i === 4){
                            this.fruitsInBasket[i].moveTo(this.game.width * 0.825, this.game.height * 0.31, (this.game.speed * 0.4));
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

            /**MAIN TREE DRAWING */
            this.mainTree.draw(ctx, 0);

            /**ENEMIES */
            (()=>{
                for(let i = 0; i < this.fruits.length; i++){
                    if(this.startGame &&
                        this.birds[i].x > (this.game.width * 0.5) ||
                        this.birds[i].x < (this.game.width * 0.1)){
                         this.birds[i].draw(ctx, 0);
                     }
                }

            })();

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
                this.fruits[i].draw(ctx, 0);
            }

            /**FRUITS TO CATCH INDICATOR */
            this.fruitToCatch.draw(ctx, 0);


        })();



        /**AKEMI GIRL DRAWING */
        (()=>{
            this.imageAkemi.draw(ctx, 0);
            this.imageAkemiCorrect.draw(ctx, 0);
            this.imageAkemiWrong.draw(ctx, 0);
        })();

        /**DIALOGUE BOXES DRAWING*/
        (()=>{
            this.dialogueBox1.draw(ctx, 0);
            this.dialogueBox2.draw(ctx, 0);
            this.dialogueBox3.draw(ctx, 0);
            this.dialogueBox4.draw(ctx, 0);
        })();

        /**KEYBOARD DRAWING */
        (()=>{

                this.keyboard.draw(ctx, 0);

        })();

        /**ENEMIES */
        (()=>{
            for(let i = 0; i < this.fruits.length; i++){
                if(this.startGame &&
                    this.birds[i].x < (this.game.width * 0.5) &&
                    this.birds[i].x > (this.game.width * 0.1)){
                     this.birds[i].draw(ctx, 0);
                 }
            };
        })();



    }

    playSound() {
        this.musicMenu.play();
    }

    changeScene() {
        this.game.changeScene(Scene3);
    }

    restart(){
        this.fruitsInBasket = [];
        this.keyboard.currentInput = "";

        setTimeout(() => {
            this.correctAnswer = false;
            this.wrongAnswer = false;
        }, 500);

        /**RETURN BASKET FRUITS TO THE TREE */
        for(let i = 0; i < this.fruits.length; i++){
            this.fruits[i].dropped = false;
            this.fruits[i].draggedRight = false;
        }
    }

    createFruit(fruit, x, y){

        const currentFruit = new Image(
            this.game, // GAME
            x, // X
            y, // Y
            (this.game.width * 0.05), // WIDTH
            (this.game.height * 0.1), // HEIGHT
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


}