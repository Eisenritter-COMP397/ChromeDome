module objects{
        // Player Game Objects
        export class PlayerTurret extends objects.GameObject {

            //public isDead:boolean;
            // Constructor
            constructor(assetManager:createjs.LoadQueue,parent:GameObject) {
                super("PlayerTurret");
                this.parent = parent;
                this.Start();
            }
            // Methods
            public Start():void {

                //this.isDead = false;
            }
            
            public Update():void {
                this.Move();
            }
            public Reset():void {}
            public Move():void {
            }

            public CheckBound():void {   
            }
        }
        
}