module managers {
    export class Scoreboard{
        // Variables
        public scoreLabel: objects.Label;
        public highScoreLabel: objects.Label;

        private score: number;
        private highScore: number;

        public scene: objects.Scene= managers.Game.currentSceneObject;

        get Score():number {
            return this.score;
        }
        set Score(newScore:number) {
            this.score = newScore;
            this.scoreLabel.text = "Score: " + this.score;
        }
        get HighScore():number {
            return this.highScore;
        }
        set HighScore(newHighScore:number) {
            this.highScore = newHighScore;
            this.highScoreLabel.text = "High Score: " + this.highScore;
        }
        // Constructor
        constructor() {
            this.Init();
        }
        private Init():void {
            // Create our labels
            this.scoreLabel = new objects.Label("Score: 999999", "20px", "Metal Mania", "DarkRed", 
           0,0,true);
            this.highScoreLabel = new objects.Label("High score: 0", "20px", "Metal Mania", "crimson", 
           0,0,true);

            // Set a default score 
            this.score = 0;
            this.highScore = 0;
        }
    }
} 