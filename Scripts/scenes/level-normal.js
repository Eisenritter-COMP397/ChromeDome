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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager, new math.Vector2(800, 640), 10, 10) || this;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            // Initialize our variables
            this.levelbackground = new objects.Background(managers.Game.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.shellManager = new managers.Shell();
            managers.Game.shellManager = this.shellManager;
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager, this.position(this.SceneTopCenter, i - 2, -1));
            }
            this.scoreBoard = new managers.Scoreboard();
            // Initialize Sound
            createjs.Sound.stop();
            this.bgm = createjs.Sound.play("level1bgm");
            this.bgm.loop = -1; // Loop forever
            this.bgm.volume = 0;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.player.Update();
            this.shellManager.Update();
            this.enemies.forEach(function (e) {
                if (!e.isDead) {
                    e.Update();
                    //console.log(e.name);
                    _this.player.isDead = managers.Collision.CheckAABB(_this.player, e);
                    if (_this.player.isDead) {
                        // Disable music
                        _this.bgm.stop();
                        //managers.Game.currentScene = config.Scene.OVER;
                    }
                }
            });
            // SUPER INEFFICIENT. WE WILL FIX THIS LATER AS WELL
            this.shellManager.Shell.forEach(function (shell) {
                _this.enemies.forEach(function (enemy) {
                    var collide = managers.Collision.CheckAABB(shell, enemy);
                    if (collide) {
                        shell.Reset();
                        enemy.Reset();
                        _this.scoreBoard.Score = 25;
                    }
                });
            });
            console.log(this.scoreBoard.Score);
            if (this.scoreBoard.Score >= 100) {
                //managers.Game.currentScene = config.Scene.TRANSITION;
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.levelbackground);
            this.addChild(this.player);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.shellManager.Shell.forEach(function (shell) {
                _this.addChild(shell);
            });
            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=level-normal.js.map