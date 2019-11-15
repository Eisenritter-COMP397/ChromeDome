var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    // Start Scene
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        //Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //Start Override
        StartScene.prototype.Start = function () {
            //Initialize objects
            this.background = new objects.Background(this.assetManager, "UIBackground");
            this.flameEffect = new objects.AnimatedBackground(this.assetManager);
            this.logo = new objects.Image(this.assetManager, "Logo", 500, 320);
            this.logo.scaleX = 0.5;
            this.logo.scaleY = 0.5;
            this.welcomeLabel = new objects.Label("Welcome to Chrome Dome!", "60px", "Metal Mania", "#800000", 425, 320, true);
            this.startButton = new objects.Button(this.assetManager, "NewGameButton", 300, 400);
            this.startButton.scaleX = 2;
            this.startButton.scaleY = 2;
            this.instructionButton = new objects.Button(this.assetManager, "InstructionsButton", 280, 450);
            this.instructionButton.scaleX = 2;
            this.instructionButton.scaleY = 2;
            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.flameEffect.Update();
        };
        //When New Game Button is Clicked
        StartScene.prototype.startButtonClick = function () {
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.instructionClick = function () {
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.INSTRUCTIONS;
        };
        //Main Override
        StartScene.prototype.Main = function () {
            // Add Items to Scene
            this.addChild(this.background);
            this.addChild(this.flameEffect);
            this.addChild(this.logo);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.addChild(this.instructionButton);
            this.startButton.on("click", this.startButtonClick);
            this.instructionButton.on("click", this.instructionClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map