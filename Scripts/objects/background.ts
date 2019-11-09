module object{
    export class Background extends createjs.Bitmap{
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager.getResult("background"));
        }
        // Methods
        public Start():void{}
        public Update():void{}
    }
}