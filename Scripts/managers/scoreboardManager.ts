module managers {
    export class Scoreboard{
        // Variables
        public scoreLabel: objects.Label;
        public highScoreLabel: objects.Label;

        private score: number;
        private highScore: number;
        public enemyDestroyedCounter:number;

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
            this.highScoreLabel.text = "High Score: " +this.highScore;
        }

        get DestroyCounter():number {
            return this.enemyDestroyedCounter;
        }
        set DestroyCounter(counter:number) {
            this.enemyDestroyedCounter = counter;
        }

        // Constructor
        constructor() {
            this.Init();
        }
        private Init():void {

            // Set a default score 
            this.score = 0;
            this.highScore = 0;

            // Create our labels
            
            this.scoreLabel = new objects.Label("Score: "+this.Score.toString(), "20px", "Metal Mania", new Utils.Color(220,0,0,1), 
            managers.Game.currentSceneObject.position(managers.Game.currentSceneObject.SceneTopCenter,4,-0.25),
            Utils.Anchors.CENTERCENTER);
            this.highScoreLabel= new objects.Label("High Score: "+this.HighScore.toString(), "20px", "Metal Mania", new Utils.Color(220,0,0,1), 
            managers.Game.currentSceneObject.position(managers.Game.currentSceneObject.SceneTopCenter,-4,-0.25),
            Utils.Anchors.CENTERCENTER); 
        }
    }
} 