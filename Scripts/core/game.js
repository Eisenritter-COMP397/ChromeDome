/*
    Name: George Zhou, Arielle Mueller
    Version: v2.1
    Last_Modification: Dec 11, 2019
*/
/// <reference path="_reference.ts"/>
// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas"); // HTML Canvas
    var stage; // Stage
    var assetManager; // Asset Manager
    var assetManifest; // Asset Manifest
    var currentScene; // Current Scence
    var currentState; // Current State
    var keyboardManager; // Keyboard Manager
    var textureAtlasData; // Texture Data
    var textureAtlas; // CreateJS Sprite Sheet
    textureAtlasData = {
        "images": [
            "./Assets/Sprites/TextureAtlas.png"
        ],
        "framerate": 20,
        "frames": [
            [1, 1, 152, 256, 0, -52, 0],
            //Player
            [1, 259, 166, 250, 0, 83, 125],
            [155, 1, 128, 254, 0, -64, -2],
            [169, 257, 248, 253, 0, -4, -1],
            [285, 1, 150, 237, 0, -53, -11],
            [419, 240, 128, 236, 0, -64, -10],
            [419, 478, 40, 30, 0, -44, -49],
            [437, 1, 239, 232, 0, -13, -12],
            [461, 478, 12, 26, 0, -58, -51],
            [475, 478, 12, 26, 0, 0, 0],
            [489, 478, 12, 26, 0, 0, 0],
            [503, 478, 12, 26, 0, 0, 0],
            [517, 478, 12, 26, 0, 0, 0],
            [531, 478, 12, 26, 0, 0, 0],
            [545, 478, 12, 26, 0, 0, 0],
            [549, 235, 128, 229, 0, -64, -22],
            [559, 466, 22, 42, 0, -53, -43],
            [583, 466, 42, 40, 0, 21, 20],
            //MediumShell
            [627, 466, 18, 40, 0, 9, 20],
            [647, 466, 44, 38, 0, -42, -45],
            [678, 1, 92, 224, 0, 0, 0],
            [679, 227, 86, 207, 0, 0, 0],
            [679, 436, 54, 24, 0, -37, -52],
            [693, 462, 30, 48, 0, -49, -40],
            [725, 462, 56, 46, 0, -36, -41],
            [767, 227, 120, 204, 0, -68, -26],
            [783, 433, 14, 78, 0, -57, -25],
            [799, 433, 19, 76, 0, -54, -26],
            [820, 433, 75, 70, 0, 0, 0],
            [772, 1, 194, 198, 0, -31, -29],
            [889, 201, 116, 194, 0, -70, -46],
            [889, 397, 56, 34, 0, -36, -47],
            // DummyEnemy
            [897, 433, 75, 70, 0, 37.5, 35],
            [968, 1, 164, 186, 0, -46, -35],
            [974, 397, 98, 98, 0, 39, 126],
            // Player Turret
            [1007, 189, 76, 185, 0, 38, 130],
            [1074, 376, 108, 124, 0, -74, -66],
            [1085, 189, 74, 184, 0, 0, 0],
            [1134, 1, 79, 183, 0, 0, 0],
            [1161, 186, 70, 174, 0, 0, 0],
            [1184, 362, 65, 146, 0, 0, 0],
            [1215, 1, 146, 152, 0, -55, -52],
            [1363, 1, 75, 70, 0, 0, 0],
            [1363, 73, 75, 70, 0, 0, 0],
            [1363, 145, 75, 70, 0, 0, 0],
            [1233, 217, 86, 143, 0, 0, 0],
            [1233, 155, 48, 54, 0, -40, -37],
            [1283, 155, 48, 54, 0, -40, -37],
            [1333, 155, 24, 50, 0, -52, -39],
            [1333, 207, 22, 64, 0, -53, -32],
            [1357, 217, 82, 86, 0, -87, -85],
            [1321, 273, 16, 50, 0, 0, 0],
            [1339, 273, 16, 50, 0, 0, 0],
            [1357, 305, 70, 84, 0, -29, -22],
            [1429, 305, 13, 52, 0, -57, -38],
            [1251, 362, 98, 96, 0, -15, -16],
            [1251, 460, 16, 50, 0, 0, 0],
            [1269, 460, 16, 50, 0, 0, 0],
            [1287, 460, 16, 50, 0, 0, 0],
            [1305, 460, 56, 46, 0, -36, -41],
            [1363, 391, 70, 84, 0, -29, -22]
        ],
        "animations": {
            "Tank1Hull_f": { "frames": [0] },
            "Player": { "frames": [1] },
            "Tank1Hull_g": { "frames": [2] },
            "Explosion": { "frames": [17, 50, 36, 41, 33, 29, 7, 3] },
            "Tank1Hull_b": { "frames": [4] },
            "Tank1Hull_c": { "frames": [5] },
            "Smoke": { "frames": [23, 6, 22] },
            "Light_Shell": { "frames": [8] },
            "bulletBeige": { "frames": [9] },
            "bulletBlue": { "frames": [10] },
            "bulletGreen": { "frames": [11] },
            "bulletRed": { "frames": [12] },
            "bulletSilver": { "frames": [13] },
            "bulletYellow": { "frames": [14] },
            "Tank1Hull_e": { "frames": [15] },
            "Granade_Shell": { "frames": [16] },
            "MediumShell": { "frames": [18] },
            "FlashA": { "frames": [46, 53, 34, 19, 24] },
            "Tank1Gun_b": { "frames": [20] },
            "Tank1Gun_g": { "frames": [21] },
            "Tank1Hull_h": { "frames": [25] },
            "Laser": { "frames": [26] },
            "Plasma": { "frames": [27] },
            "tankBeige": { "frames": [28] },
            "Tank1Hull_d": { "frames": [30] },
            "Shotgun_Shells": { "frames": [31] },
            "DummyEnemy": { "frames": [32] },
            "PlayerTurret": { "frames": [35] },
            "Tank1Gun_e": { "frames": [37] },
            "Tank1Gun_d": { "frames": [38] },
            "Tank1Gun_c": { "frames": [39] },
            "Tank1Gun_h": { "frames": [40] },
            "tankBlue": { "frames": [42] },
            "tankGreen": { "frames": [43] },
            "tankRed": { "frames": [44] },
            "Tank1Gun_f": { "frames": [45] },
            "Flash_B": { "frames": [47, 60, 55, 48, 59] },
            "Heavy_Shell": { "frames": [49] },
            "barrelBeige": { "frames": [51] },
            "DummyEnemyBarrel": { "frames": [52] },
            "Sniper_Shell": { "frames": [54] },
            "barrelBlue": { "frames": [56] },
            "barrelGreen": { "frames": [57] },
            "barrelRed": { "frames": [58] }
        }
    };
    assetManifest = [
        // Logo Element
        { id: "Logo", src: "./Assets/UI/logo.png" },
        // Backgrounds
        { id: "UIBackground", src: "./Assets/Game/Background/ChromeDomeStartBG.png" },
        { id: "level1bg", src: "./Assets/Game/Background/background_grass.png" },
        { id: "level2bg", src: "./Assets/Game/Background/chromedome_background.png" },
        { id: "level3bg", src: "./Assets/Game/Background/background_desert.png" },
        // Foreground
        { id: "FlameEffect", src: "./Assets/FlameEffect.png" },
        // Button
        { id: "ButtonBackground", src: "./Assets/UI/Controls/ChromeDomeButtonBG.png" },
        // SFX
        { id: "ButtonSelected", src: "./Assets/SFX/ButtonSound.mp3" },
        { id: "MainGunFire", src: "./Assets/SFX/MainGunFire.mp3" },
        { id: "NewGameButton", src: "./Assets/newgame.png" },
        { id: "ExitGameButton", src: "./Assets/ExitGameButton.png" },
        { id: "ReadyButton", src: "./Assets/ready_button.png" },
        // Game Objects
        { id: "Player", src: "./Assets/TankBlue.png" },
        { id: "startmusic", src: "./Assets/Music/opening.mp3" },
        { id: "level1bgm", src: "./Assets/Music/level1.mp3" },
        { id: "level2bgm", src: "./Assets/Music/level2.mp3" },
        { id: "level3bgm", src: "./Assets/Music/level3.mp3" },
        { id: "gameoverbgm", src: "./Assets/Music/gameover.mp3" },
        { id: "Enemy", src: "./Assets/TankRed.png" },
        { id: "laser1", src: "./Assets/bullet.png" },
        { id: "laser2", src: "./Assets/icebullet.png" },
        { id: "laser3", src: "./Assets/greenbullet.png" },
        { id: "bosstank", src: "./Assets/bosstank.png" },
        { id: "InstructionsButton", src: "./Assets/instructions_chromedome.png" },
        { id: "BackButton", src: "./Assets/back_button.png" }
    ];
    function Init() {
        console.log("Initialization Start");
        //Start();
        //Texture Atlas
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // textureAtlasData.images = [assetManager.getResult("textureAtlas")]
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        // Scene and Stage Management
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        // Keyboard Manager
        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;
        // Asset Manager
        managers.Game.assetManager = assetManager;
        // Texture Manager
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        if (currentState != managers.Game.currentScene) {
            console.log("Changing scenes to" + managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("Game Start...");
        // Delete all children elements
        stage.removeAllChildren();
        // Finite State Machine
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            /*
             case config.Scene.INSTRUCTIONS:
                 stage.removeAllChildren();
                 currentScene = new scenes.InstructionsScene(assetManager);
                 stage.addChild(currentScene);
                 break;*/
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            /*
        case config.Scene.TRANSITION:
            stage.removeAllChildren();
            currentScene = new scenes.Transition1(assetManager);
            stage.addChild(currentScene);
            break;
        case config.Scene.GAME2:
            stage.removeAllChildren();
            currentScene = new scenes.PlayScene2(assetManager);
            stage.addChild(currentScene);
            break;
        case config.Scene.TRANSITION2:
            stage.removeAllChildren();
            currentScene = new scenes.Transition2(assetManager);
            stage.addChild(currentScene);
            break;
        case config.Scene.GAME3:
            stage.removeAllChildren();
            currentScene = new scenes.PlayScene3(assetManager);
            stage.addChild(currentScene);
            break;
        case config.Scene.OVER:
            stage.removeAllChildren();
            currentScene = new scenes.GameOverScene(assetManager);
            stage.addChild(currentScene);
            break;
        case config.Scene.WIN:
            stage.removeAllChildren();
            currentScene = new scenes.Win(assetManager);
            stage.addChild(currentScene);
            break;
            */
        }
        managers.Game.assetManager = assetManager;
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map