module objects{
    export class Effect extends objects.GameObject{
        // Variables

        // Constructor
        constructor(effect:string, position:math.Vector2){
            super(effect);
            this.x = position.x;
            this.y = position.y;

            this.Start();
        }

        // Methods
        public Start():void{
            this.on("animationend",this.animationEnded.bind(this),false);
        }

        private animationEnded():void{
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this),false);
            managers.Game.currentSceneObject.removeChild(this);
        }
    }
}