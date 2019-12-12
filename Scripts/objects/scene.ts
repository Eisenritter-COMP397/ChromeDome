module objects {

    // Scene Super Class
    export class Scene extends createjs.Container {
        // Variables
        public assetManager: createjs.LoadQueue;
        private sceneSize: math.Vector2; //= new math.Vector2(800,640);

        private sceneTopLeft: math.Vector2;
        private sceneTopCenter: math.Vector2;
        private sceneTopRight: math.Vector2;
        private sceneCenterLeft: math.Vector2;
        private sceneCenter: math.Vector2; //=  new math.Vector2(400,320);
        private sceneCenterRight: math.Vector2;
        private sceneBottomLeft: math.Vector2;
        private sceneBottomCenter: math.Vector2;
        private sceneBottomRight:math.Vector2;
        private layoutSpacing:math.Vector2;

        get SceneSize(){
            return this.sceneSize;
        }

        get SceneTopLeft(){
            return this.sceneTopLeft;
        }
        get SceneTopCenter(){
            return this.sceneTopCenter;
        }
        get SceneTopRight(){
            return this.sceneTopRight;
        }

        get SceneCenterLeft(){
            return this.sceneCenterLeft;
        }
        get SceneCenter(){
            return this.sceneCenter;
        }
        get SceneCenterRight()
        {
            return this.sceneCenterRight;
        }

        get SceneBottomLeft(){
            return this.sceneBottomLeft;
        }
        get SceneBottomCenter(){
            return this.sceneBottomCenter;
        }
        get SceneBottomRight()
        {
            return this.sceneBottomRight;
        }




        // Constructior
        constructor(assetManager: createjs.LoadQueue,size:math.Vector2,Columns: number, Rows:number) {
            super();
            this.assetManager = assetManager;
            // Set Size and Center Position
            this.sceneSize = new math.Vector2(size.x, size.y);

            // Set Coreners
            this.sceneTopLeft =  new math.Vector2(0,0);
            this.sceneTopCenter = new math.Vector2(size.x*0.5, 0);
            this.sceneTopRight = new math.Vector2(size.x, 0);

            this.sceneCenterLeft = new math.Vector2(0, size.y*0.5);
            this.sceneCenter = new math.Vector2(size.x*0.5, size.y*0.5);
            this.sceneCenterRight = new math.Vector2(size.x, size.y*0.5)

            this.sceneBottomLeft = new math.Vector2(0,size.y);
            this.sceneBottomCenter =  new math.Vector2(size.x*0.5, size.y);
            this.sceneBottomRight = new math.Vector2(size.x,size.y);
            
            this.layoutSpacing =  new math.Vector2(size.x/Columns,size.y/Rows);
        }

        protected position(refPostion:math.Vector2,x:number, y:number): math.Vector2{

            return new math.Vector2(refPostion.x-x*this.layoutSpacing.x,refPostion.y-y*this.layoutSpacing.y);            
        }
        // Methods
        public Start(): void { 
        }
        public Update(): void { }
        public Main(): void { }
    }
}