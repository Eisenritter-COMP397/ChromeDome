module objects{
    export class Shell extends objects.GameObject{
        // Variables
        private speed;
        public direction:math.Vector2 = math.Vector2.Zero();
        

        
        get Speed(): number{
            return this.speed;
        }
        set Speed(speed: number ){
            this.speed = speed;
        }
        
        // Constructor
        constructor(shell:string, speed:number){
            super(shell);
            this.speed = speed;
            this.Start();
        }

        //Methods
        public Start():void{
            this.addChild()
            this.scaleY = 0.25;
            this.scaleX =0.25;
            this.Reset();
        }

        public Update():void{
            this.Move();
            if(this.x> managers.Game.currentSceneObject.SceneSize.x+50||this.x<-50){
                this.Reset();
            }
            if(this.y>managers.Game.currentSceneObject.SceneSize.y+50||this.x<-50){
                this.Reset();
            }
        }
        public Reset(): void{
            this.x = -5000;
            this.y = -5000;
        }
        public Main():void{}
        public Move():void{
            this.x -=this.direction.x * this.speed;
            this.y -= this.direction.y * this.speed;
        }
    }
}