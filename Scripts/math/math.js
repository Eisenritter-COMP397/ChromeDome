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
var math;
(function (math) {
    var Vector2 = /** @class */ (function (_super) {
        __extends(Vector2, _super);
        function Vector2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return _super.call(this, x, y) || this;
        }
        Vector2.Distance = function (vec1, vec2) {
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2)));
        };
        Vector2.Add = function (vec1, vec2) {
            var result = new math.Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
            return result;
        };
        Vector2.Subtract = function (vec1, vec2) {
            var result = new math.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        };
        Vector2.Mulitply = function (vec1, scalar) {
            return new math.Vector2(vec1.x * scalar, vec1.y * scalar);
        };
        Vector2.Divide = function (vec1, scalar) {
            return new math.Vector2(vec1.x / scalar, vec1.y / scalar);
        };
        Vector2.Zero = function () {
            return new math.Vector2(0, 0);
        };
        return Vector2;
    }(createjs.Point));
    math.Vector2 = Vector2;
})(math || (math = {}));
//# sourceMappingURL=math.js.map