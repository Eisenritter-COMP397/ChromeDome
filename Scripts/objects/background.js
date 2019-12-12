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
        function Background(assetManager) {
            var _this = this;
            switch (managers.Game.currentScene) {
                case config.Scene.START:
                    _this = _super.call(this, assetManager.getResult("UIBackground")) || this;
                    break;
                case config.Scene.GAME:
                    _this = _super.call(this, assetManager.getResult("level1bg")) || this;
                    break;
                default:
                    _this = _super.call(this, assetManager.getResult("UIBackground")) || this;
                    break;
            }
            return _this;
        }
        // Methods
        Background.prototype.Start = function () { };
        Background.prototype.Update = function () { };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map