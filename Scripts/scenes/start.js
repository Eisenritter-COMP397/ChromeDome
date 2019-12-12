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
    var Anchors = Utils.Anchors;
    var Color = Utils.Color;
    // Start Scene
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        //Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager, new math.Vector2(800, 640), 10, 10) || this;
            _this.welcomeLabelTextRed = 0;
            _this.welcomeLabelTextGreen = 0;
            _this.welcomeLabelTextBlue = 0;
            _this.welcomeLabelTextAlpha = 1;
            _this.ColorMaxReached = false;
            _this.Start();
            return _this;
        }
        //Start Override
        StartScene.prototype.Start = function () {
            //Initialize Background
            this.background = new objects.Background(this.assetManager);
            //Remove this
            //this.flameEffect = new objects.AnimatedBackground(this.assetManager);
            this.logo = new objects.Image(this.assetManager, "Logo", this.sceneCenter, Anchors.TOPLEFT);
            this.logo.scaleX = 0.1;
            this.logo.scaleY = 0.1;
            //Initialize Logo Element
            this.welcomeLabel = new objects.Label("Welcome to Chrome Dome!", "60px", "Metal Mania", new Color(128, 0, 0, 1), this.position(this.sceneCenter, 0, 1), Anchors.CENTERCENTER);
            this.startLabel = new objects.Label("Start Game", "40px", "Metal Mania", new Color(0, 0, 0, 1), this.position(this.sceneCenter, 0, -0.5), Anchors.CENTERCENTER, true);
            this.instructionLabel = new objects.Label("Instructions", "40px", "Metal Mania", new Color(0, 0, 0, 1), this.position(this.sceneCenter, 0, -1.5), Anchors.CENTERCENTER, true);
            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 0;
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.WelcomeLabelEffect();
        };
        StartScene.prototype.WelcomeLabelEffect = function () {
            if (!this.ColorMaxReached) {
                this.welcomeLabelTextRed += 1;
                this.welcomeLabel.scaleX += 0.0001;
                this.welcomeLabel.scaleY += 0.0001;
            }
            if (this.welcomeLabelTextRed == 255) {
                this.ColorMaxReached = true;
            }
            if (this.ColorMaxReached) {
                this.welcomeLabelTextRed -= 1;
                this.welcomeLabel.scaleX -= 0.0001;
                this.welcomeLabel.scaleY -= 0.0001;
            }
            if (this.welcomeLabelTextRed == 0) {
                this.ColorMaxReached = false;
            }
            this.welcomeLabel.color =
                new Color(this.welcomeLabelTextRed, this.welcomeLabelTextGreen, this.welcomeLabelTextBlue, this.welcomeLabelTextAlpha).toString();
        };
        //When New Game Button is Clicked
        StartScene.prototype.startButtonClick = function () {
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.instructionClick = function () {
            //Change game state from Start to Game
            //managers.Game.currentScene = config.Scene.INSTRUCTIONS;
        };
        //Main Override
        StartScene.prototype.Main = function () {
            // Add Items to Scene
            this.addChild(this.background);
            //this.addChild(this.flameEffect);
            this.addChild(this.logo);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startLabel);
            this.addChild(this.startButton);
            this.addChild(this.instructionLabel);
            this.startLabel.on("click", this.startButtonClick);
            this.instructionLabel.on("click", this.instructionClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map