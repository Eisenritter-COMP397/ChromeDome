"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Image = Image;
//# sourceMappingURL=image.js.map