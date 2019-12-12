/*
    Name: George Zhou, Arielle Mueller
    Version: v2.1
    Last_Modification: Dec 11, 2019
*/

/// <reference path="_reference.ts"/>

// Immediate Invoked Anonymous Function
(function () {

    // Global Game Variables
    let canvas = document.getElementById("canvas"); // HTML Canvas
    let stage: createjs.Stage;  // Stage

    let assetManager: createjs.LoadQueue;   // Asset Manager
    let assetManifest: any[];   // Asset Manifest

    let currentScene: objects.Scene;    // Current Scence
    let currentState: number;   // Current State

    let keyboardManager: managers.Keyboard; // Keyboard Manager

    let textureAtlasData: any;  // Texture Data
    let textureAtlas: createjs.SpriteSheet; // CreateJS Sprite Sheet

    textureAtlasData = {
        "images": [
            "./Assets/Sprites/Player.png"
        ],
        "framerate": 20,
        "frames": [
            [1, 1, 166, 250, 0, 83, 124],
            [169, 1, 82, 185, 0, 41, 112],
            [169, 188, 79, 188, 0, 39, 126],
            [1, 253, 152, 256, 0, 76, 128],
            [155, 378, 94, 227, 0, 47, 120],
            [1, 511, 150, 237, 0, 75, 117],
            [153, 607, 88, 208, 0, 44, 128],
            [1, 750, 128, 254, 0, 64, 126],
            [131, 817, 120, 204, 0, 60, 102],
            [1, 1006, 128, 236, 0, 64, 118],
            [131, 1023, 116, 194, 0, 58, 82],
            [131, 1219, 76, 186, 0, 38, 123],
            [1, 1244, 128, 229, 0, 64, 106],
            [131, 1407, 73, 176, 0, 37, 111],
            [1, 1475, 88, 146, 0, 44, 79]
        ],

        "animations": {
            "Player": { "frames": [0] },
            "Gun_04": { "frames": [1] },
            "Gun_01": { "frames": [2] },
            "Hull_06": { "frames": [3] },
            "Gun_02": { "frames": [4] },
            "Hull_02": { "frames": [5] },
            "Gun_07": { "frames": [6] },
            "Hull_07": { "frames": [7] },
            "Hull_08": { "frames": [8] },
            "Hull_03": { "frames": [9] },
            "Hull_04": { "frames": [10] },
            "Gun_05": { "frames": [11] },
            "Hull_05": { "frames": [12] },
            "Gun_03": { "frames": [13] },
            "Gun_06": { "frames": [14] }
        }
    }

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
    ]

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
            case config.Scene.INSTRUCTIONS:
                stage.removeAllChildren();
                currentScene = new scenes.InstructionsScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
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
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();