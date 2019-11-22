// Immediate Invoked Anonymous Function

(function () {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];
    let keyboardManager: managers.Keyboard;

    // Store current scene and state information
    let currentScene: objects.Scene;
    let currentState: number;

    assetManifest = [
        { id: "NewGameButton", src: "./Assets/newgame.png" },
        { id: "ExitGameButton", src: "./Assets/ExitGameButton.png" },
        { id: "ReadyButton", src: "./Assets/ready_button.png" },
        { id: "level3", src: "./Assets/background_grass.png" },
        { id: "level2", src: "./Assets/chromedome_background.png" },
        { id: "level1", src: "./Assets/background_desert.png" },
        { id: "Logo", src: "./Assets/logo.png" },
        { id: "UIBackground", src: "./Assets/ChromeDomeStartBG.png"},
        { id: "FlameEffect", src: "./Assets/FlameEffect.png"},
        { id: "Player", src: "./Assets/TankBlue.png"},
        { id: "startmusic", src: "./Assets/Music/opening.mp3"},
        { id: "level1bgm", src: "./Assets/Music/level1.mp3"},
        { id: "level2bgm", src: "./Assets/Music/level2.mp3"},
        { id: "level3bgm", src: "./Assets/Music/level3.mp3"},
        { id: "gameoverbgm", src: "./Assets/Music/gameover.mp3"},
        { id: "Enemy", src: "./Assets/TankRed.png"},
        { id: "laser1", src: "./Assets/bullet.png"},
        { id: "laser2", src: "./Assets/icebullet.png"},
        { id: "laser3", src: "./Assets/greenbullet.png"},
        { id: "InstructionsButton", src: "./Assets/instructions_chromedome.png"},
        { id: "BackButton", src: "./Assets/back_button.png"}
    ]

    function Init() {
        console.log("Initialization Start");
        //Start();

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);

        // Set up default game state
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        managers.Game.assetManager = assetManager;
        currentState = config.Scene.START;

                // Create our keyboard object and set the global reference
                keyboardManager = new managers.Keyboard;
                managers.Game.keyboardManager = keyboardManager;
        

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
    }
    window.onload = Init;
})();