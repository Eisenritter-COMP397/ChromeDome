var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function () {
        // Constructor
        function Scoreboard() {
            this.scene = managers.Game.currentSceneObject;
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
        Object.defineProperty(Scoreboard.prototype, "DestroyCounter", {
            get: function () {
                return this.enemyDestroyedCounter;
            },
            set: function (counter) {
                this.enemyDestroyedCounter = counter;
            },
            enumerable: true,
            configurable: true
        });
        Scoreboard.prototype.Init = function () {
            // Set a default score 
            this.score = 0;
            this.highScore = 0;
            // Create our labels
            this.scoreLabel = new objects.Label("Score: " + this.Score.toString(), "20px", "Metal Mania", new Utils.Color(220, 0, 0, 1), managers.Game.currentSceneObject.position(managers.Game.currentSceneObject.SceneTopCenter, 4, -0.25), Utils.Anchors.CENTERCENTER);
            this.highScoreLabel = new objects.Label("High Score: " + this.HighScore.toString(), "20px", "Metal Mania", new Utils.Color(220, 0, 0, 1), managers.Game.currentSceneObject.position(managers.Game.currentSceneObject.SceneTopCenter, -4, -0.25), Utils.Anchors.CENTERCENTER);
        };
        return Scoreboard;
    }());
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboardManager.js.map