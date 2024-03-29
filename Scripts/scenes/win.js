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
    var Win = /** @class */ (function (_super) {
        __extends(Win, _super);
        // Constructor
        function Win(assetManager) {
            var _this = _super.call(this, assetManager, new math.Vector2(800, 640), 10, 10) || this;
            _this.Start();
            return _this;
        }
        //Method
        Win.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager);
            /*
                        this.gameOverLabel = new objects.Label(
                            "You Win!", "60px", "Metal Mania", new Utils.Color(255,0,0,1), managers.Game.currentSceneObject.SceneCenter, true);*/
            //this.backButton = new objects.Button(this.assetManager, "NewGameButton",320, 400);
            this.backButton.scaleX = 2;
            this.backButton.scaleY = 2;
            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;
            this.Main();
        };
        Win.prototype.Update = function () {
        };
        Win.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        Win.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        return Win;
    }(objects.Scene));
    scenes.Win = Win;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map