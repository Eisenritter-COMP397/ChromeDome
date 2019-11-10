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
        { id: "NewGameButton", src: "./Assets/NewGameButton.png" },
        { id: "ExitGameButton", src: "./Assets/ExitGameButton.png" },
        { id: "OptionsButton", src: "./Assets/OptionsButton.png" },
        { id: "UIBackground", src: "./Assets/ChromeDomeStartBG.png"},
        { id: "FlameEffect", src: "./Assets/FlameEffect.png"},
        { id: "Player", src: "./Assets/TankBlue.png"},
        { id: "startmusic", src: "./Assets/Music/opening.mp3"},
        { id: "level1bgm", src: "./Assets/Music/level1.mp3"},
        { id: "level2bgm", src: "./Assets/Music/level2.mp3"},
        { id: "level3bgm", src: "./Assets/Music/level3.mp3"},
        { id: "gameoverbgm", src: "./Assets/Music/gameover.mp3"},
        { id: "Enemy", src: "./Assets/TankRed.png"},
        { id: "laser1",src: "./Assets/bullet.png"}
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

    function clickableButtonMouseClick(): void {
        console.log("AHHHHHHH");
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
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                    stage.removeAllChildren();
                    currentScene = new scenes.GameOverScene(assetManager);
                    stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
    }
    window.onload = Init;
})();