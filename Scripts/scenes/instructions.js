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
    var InstructionsScene = /** @class */ (function (_super) {
        __extends(InstructionsScene, _super);
        //Constructor
        function InstructionsScene(assetManager) {
            var _this = _super.call(this, assetManager, new math.Vector2(800, 640), 10, 10) || this;
            _this.Start();
            return _this;
        }
        //Start Override
        InstructionsScene.prototype.Start = function () {
            //Initialize objects
            //this.background = new objects.Background(this.assetManager, "UIBackground");
            /*
            this.welcomeLabel = new objects.Label(

                "Instructions", "60px", "Metal Mania", "#800000",
                400, 120, true);

            this.move = new objects.Label(

                 "Move: WASD keys", "30px", "Metal Mania", "#800000",
                 300, 180, true);

            this.shoot = new objects.Label(

                "Shoot: Space Bar", "30px", "Metal Mania", "#800000",
                300, 220, true);

            this.objective = new objects.Label(

                "Objective: Shoot and kill enemies,", "30px", "Metal Mania", "#800000",
                390, 260, true);
            this.objective2 = new objects.Label(

                 "avoid being shot/touched by enemies", "30px", "Metal Mania", "#800000",
                 410, 300, true);


            this.backButton = new objects.Button(this.assetManager, "BackButton",
            350, 425);
            this.backButton.scaleX = 2;
            this.backButton.scaleY = 2;
            */
            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;
            this.Main();
        };
        InstructionsScene.prototype.Update = function () {
        };
        //When New Game Button is Clicked
        InstructionsScene.prototype.backButtonClick = function () {
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.START;
        };
        //Main Override
        InstructionsScene.prototype.Main = function () {
            // Add Items to Scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.move);
            this.addChild(this.shoot);
            this.addChild(this.objective);
            this.addChild(this.objective2);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        return InstructionsScene;
    }(objects.Scene));
    scenes.InstructionsScene = InstructionsScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map