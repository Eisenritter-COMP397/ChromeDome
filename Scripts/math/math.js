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
            return _super.call(this, 0, 0) || this;
        }
        Vector2.Distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)));
        };
        return Vector2;
    }(createjs.Point));
    math.Vector2 = Vector2;
})(math || (math = {}));
//# sourceMappingURL=math.js.map