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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // Variables
        // Constructor
        function Background(assetManager, imageString) {
            return _super.call(this, assetManager.getResult(imageString)) || this;
        }
        // Methods
        Background.prototype.Start = function () { };
        Background.prototype.Update = function () { };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
    var AnimatedBackground = /** @class */ (function (_super) {
        __extends(AnimatedBackground, _super);
        // Constructor
        function AnimatedBackground(assetManager) {
            var _this = _super.call(this, assetManager.getResult("FlameEffect")) || this;
            _this.Start();
            return _this;
        }
        // Functions 
        // Initializing our variables with default values
        AnimatedBackground.prototype.Start = function () {
            this.speedY = 0.5;
            this.Reset();
        };
        // Updated 60 times per second (60FPS)
        AnimatedBackground.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        // Resets the position of the object
        AnimatedBackground.prototype.Reset = function () {
            this.y = 400;
            this.alpha = 0.75;
        };
        // Move the object
        AnimatedBackground.prototype.Move = function () {
            this.y -= this.speedY;
        };
        // Collision Detection 
        AnimatedBackground.prototype.CheckBound = function () {
            if (this.y <= 300) {
                this.Reset();
            }
        };
        return AnimatedBackground;
    }(createjs.Bitmap));
    objects.AnimatedBackground = AnimatedBackground;
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        // Variables
        // Constructor
        function Image(assetManager, imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return _super.call(this, assetManager.getResult(imageString)) || this;
        }
        // Methods
        Image.prototype.Start = function () { };
        Image.prototype.Update = function () { };
        return Image;
    }(createjs.Bitmap));
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map