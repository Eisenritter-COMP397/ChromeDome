var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function () {
        // Constructor
        function Scoreboard() {
            this.scene = objects.Game.currentSceneObject;
            this.Init();
        }
        Object.defineProperty(Scoreboard.prototype, "Score", {
            get: function () {
                return this.score;
            },
            set: function (newScore) {
                this.score = newScore;
                this.scoreLabel.text = "Score: " + this.score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "HighScore", {
            get: function () {
                return this.highScore;
            },
            set: function (newHighScore) {
                this.highScore = newHighScore;
                this.highScoreLabel.text = "High Score: " + this.highScore;
            },
            enumerable: true,
            configurable: true
        });
        Scoreboard.prototype.Init = function () {
            // Create our labels
            this.scoreLabel = new objects.Label("Score: 999999", "20px", "Metal Mania", "DarkRed", new math.Vector2(this.scene.sceneCenter.x, 50), true);
            this.highScoreLabel = new objects.Label("High score: 0", "20px", "Metal Mania", "crimson", new math.Vector2(this.scene.sceneCenter.x, 25), true);
            // Set a default score 
            this.score = 0;
            this.highScore = 0;
        };
        return Scoreboard;
    }());
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboardManager.js.map