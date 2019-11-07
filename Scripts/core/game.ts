// Immediate Invoked Anonymous Function

(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label; 
    let newgameButton:objects.Button;

    function Init() {
        console.log("Initialization Start");
        Start();
    }

    function Start() {
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20); 
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update() {
        stage.update();
        helloLabel.rotation += 5;
    }

    function clickableButtonMouseClick():void {
        helloLabel.text = "Clicked";
        console.log("AHHHHHHH");
    }

    function Main() {
        console.log("Game Start...");

        helloLabel = new objects.Label("Hello World", "40px", "Consolas", "#000000", 320, 240, true);

        stage.addChild(helloLabel); // Add the label to the stage

        // Button Initialization
        newgameButton = new objects.Button("./Assets/NewGameButton.png", 320, 340);

        newgameButton.regX = 95;
        newgameButton.regY = 24.5;

        newgameButton.on("click", clickableButtonMouseClick);
        stage.addChild(newgameButton);
    }

    window.onload = Init;
})();