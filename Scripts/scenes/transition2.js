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
    var Transition2 = /** @class */ (function (_super) {
        __extends(Transition2, _super);
        //Constructor
        function Transition2(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //Start Override
        Transition2.prototype.Start = function () {
            //Initialize objects
            this.background = new objects.Background(this.assetManager, "UIBackground");
            this.welcomeLabel = new objects.Label("Get Ready! Final Level!", "60px", "Metal Mania", "#800000", 400, 120, true);
            this.move = new objects.Label("New bullet: press Q to place mines", "30px", "Metal Mania", "#800000", 400, 320, true);
            this.readyButton = new objects.Button(this.assetManager, "ReadyButton", 325, 425);
            this.readyButton.scaleX = 2;
            this.readyButton.scaleY = 2;
            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("startmusic");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 1;
            this.Main();
        };
        Transition2.prototype.Update = function () {
        };
        //When New Game Button is Clicked
        Transition2.prototype.readyButtonClick = function () {
            //Change game state from Start to Game
            managers.Game.currentScene = config.Scene.GAME3;
        };
        //Main Override
        Transition2.prototype.Main = function () {
            // Add Items to Scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.move);
            this.addChild(this.shoot);
            this.addChild(this.readyButton);
            this.readyButton.on("click", this.readyButtonClick);
        };
        return Transition2;
    }(objects.Scene));
    scenes.Transition2 = Transition2;
})(scenes || (scenes = {}));
//# sourceMappingURL=transition2.js.map