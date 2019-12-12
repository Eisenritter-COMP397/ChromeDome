module objects {
    // Game Object Super Class
    export abstract class GameObject extends createjs.Container {
        // Properties
        private tag: Utils.Tag;
        // Variables
        private transform: components.Transform =  new components.Transform;
        public position: math.Vector2;
        private anchor: Utils.Anchors;
        // Instantiate a list of components
        private _components: components.Component[] = new Array();
        private _currentScene:number;

        protected sprite?: createjs.Sprite;
        protected image?: createjs.Bitmap;

        protected collider: components.Collider2D;

        get Tag():Utils.Tag{
            return this.tag;
        }

        get Anchor(): Utils.Anchors{
            return this.Anchor;
        }

        get Transform(): components.Transform{
            return this.transform;
        }

        get CurrentScene(): number{
            return this._currentScene;
        }

        get Sprite(): createjs.Sprite{
            return this.sprite;
        }

        get Image():createjs.Bitmap{
            return this.image;
        }

        set CurrentScene(scene:number){
            this._currentScene =managers.Game.currentScene;
        }

        set Tag(tag:Utils.Tag){
            this.tag= tag;
        }

        constructor(imageString:string,size?:math.Vector2, position?:math.Vector2, rotation?:number,
            anchor?:Utils.Anchors ){
            super();
            this.anchor = anchor;
            this.sprite = new createjs.Sprite(managers.Game.textureAtlas,imageString);
            this.transform.Size.x = this.sprite.getBounds().width;
            this.transform.Size.y = this.sprite.getBounds().height;
            this.transform.Position.x = this.sprite.x;
            this.transform.Position.y = this.sprite.y;
            this.transform.Rotation = this.sprite.rotation;
            this.transform.HalfSize = math.Vector2.Divide(this.transform.Size,2);
            this.Init();
        }

        public AddComponent(component:components.Component){
            this._components.push(component);
        }

        private UpdateComponent():void{
            for(let component of this._components){
                component.Update();
            }
        }
        
        /*
        protected speedX: number;
        protected speedY: number;
        public isColliding: boolean;   // collision check boolean
        

        public width: number;
        public height: number;
        public halfW: number;   // Half-width; Useful for collision detection
        public halfH: number;   // Half-height

        //public _currentScene: Scene;    // this gets the current scene properties
        // Constructor
        /*constructor(assetManager:createjs.LoadQueue, imageString:string) {
            super(assetManager.getResult(imageString));

            this.name = imageString;

            this.Init();
        }*/
        // Methods 
        private Init():void {
            this.addChild(this.sprite);
            // Initialize all the properties of my object
            /*
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;

            this.isColliding = false;*/
        }

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}
