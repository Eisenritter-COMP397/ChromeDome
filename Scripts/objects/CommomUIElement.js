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
    // Buttons
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        // Variables
        // Constructor
        function Button(assetManager, imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            //  if (isCentered) {
            //     this.regX = this.getBounds().width * 0.5;
            //     this.regY = this.getBounds().height * 0.5;
            // }
            // Set default position
            _this.x = x;
            _this.y = y;
            // Set event handlers
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
        }
        // Methods
        // Mouseover Effects
        Button.prototype.mouseOver = function () {
            this.alpha = 0.7;
        };
        Button.prototype.mouseOut = function () {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
    // Labels
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label(labelString, fontSize, fontFamily, fontColor, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, labelString, fontSize + " " + fontFamily, fontColor) || this;
            // Set the registration point if true to be in the middle
            if (isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            // Set default position
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=CommomUIElement.js.map