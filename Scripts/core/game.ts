// Immediate Invoked Anonymous Function

(function () {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;

    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene and state information
    let currentScene: objects.Scene;
    let currentState: number;

    assetManifest = [
        { id: "NewGameButton", src: "./Assets/NewGameButton.png" },
        { id: "ExitGameButton", src: "./Assets/ExitGameButton.png" },
        { id: "OptionsButton", src: "./Assets/OptionsButton.png" }
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
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;

        Main();
    }

    function Update() {
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to" + objects.Game.currentScene);
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
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                console.log("GAME state");
                break;
            case config.Scene.OVER:
                console.log("OVER state");
                break;
        }
    }

    window.onload = Init;
})();