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
    var Effect = /** @class */ (function (_super) {
        __extends(Effect, _super);
        // Variables
        // Constructor
        function Effect(effect, position) {
            var _this = _super.call(this, effect) || this;
            _this.x = position.x;
            _this.y = position.y;
            _this.Start();
            return _this;
        }
        // Methods
        Effect.prototype.Start = function () {
            this.on("animationend", this.animationEnded.bind(this), false);
        };
        Effect.prototype.animationEnded = function () {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        };
        return Effect;
    }(objects.GameObject));
    objects.Effect = Effect;
})(objects || (objects = {}));
//# sourceMappingURL=effect.js.map