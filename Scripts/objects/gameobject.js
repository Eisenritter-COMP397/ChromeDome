var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    // Game Object Super Class
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        function GameObject(imageString, size, position, rotation, anchor) {
            var _this = _super.call(this) || this;
            // Variables
            _this.transform = new components.Transform;
            // Instantiate a list of components
            _this._components = new Array();
            _this.anchor = anchor;
            _this.sprite = new createjs.Sprite(managers.Game.textureAtlas, imageString);
            _this.transform.Size.x = _this.sprite.getBounds().width;
            _this.transform.Size.y = _this.sprite.getBounds().height;
            _this.transform.Position.x = _this.sprite.x;
            _this.transform.Position.y = _this.sprite.y;
            _this.transform.Rotation = _this.sprite.rotation;
            _this.transform.HalfSize = math.Vector2.Divide(_this.transform.Size, 2);
            _this.Init();
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "Tag", {
            get: function () {
                return this.tag;
            },
            set: function (tag) {
                this.tag = tag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Anchor", {
            get: function () {
                return this.Anchor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Transform", {
            get: function () {
                return this.transform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "CurrentScene", {
            get: function () {
                return this._currentScene;
            },
            set: function (scene) {
                this._currentScene = managers.Game.currentScene;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Sprite", {
            get: function () {
                return this.sprite;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Image", {
            get: function () {
                return this.image;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype.AddComponent = function (component) {
            this._components.push(component);
        };
        GameObject.prototype.UpdateComponent = function () {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.Update();
            }
        };
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
        GameObject.prototype.Init = function () {
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
        };
        GameObject.prototype.Start = function () { };
        GameObject.prototype.Update = function () { };
        GameObject.prototype.Reset = function () { };
        GameObject.prototype.Move = function () { };
        GameObject.prototype.CheckBound = function () { };
        return GameObject;
    }(createjs.Container));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map