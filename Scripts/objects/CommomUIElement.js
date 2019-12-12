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
    var Anchors = Utils.Anchors;
    var Color = Utils.Color;
    // Buttons
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        // Constructor
        function Button(assetManager, imageString, position, text, font, color) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            //  if (isCentered) {
            //     this.regX = this.getBounds().width * 0.5;
            //     this.regY = this.getBounds().height * 0.5;
            // }
            _this.text = new createjs.Text(text, font, color);
            // Set default position
            _this.x = position.x;
            _this.y = position.y;
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
        function Label(labelString, fontSize, fontFamily, textColor, position, anchor, isButton) {
            if (anchor === void 0) { anchor = Anchors.CENTERCENTER; }
            if (isButton === void 0) { isButton = false; }
            var _this = _super.call(this, labelString, fontSize + " " + fontFamily, textColor.toString()) || this;
            // Set the registration anchoring
            switch (anchor) {
                case Anchors.TOPLEFT:
                    _this.regX = 0;
                    _this.regY = 0;
                    break;
                case Anchors.TOPCENTER:
                    _this.regX = _this.getMeasuredWidth() * 0.5;
                    _this.regY = 0;
                    break;
                case Anchors.TOPRIGHT:
                    _this.regX = _this.getMeasuredWidth();
                    _this.regY = 0;
                    break;
                case Anchors.CENTERLEFT:
                    _this.regX = 0;
                    _this.regY = _this.getMeasuredHeight() * 0.5;
                case Anchors.CENTERCENTER:
                    _this.regX = _this.getMeasuredWidth() * 0.5;
                    _this.regY = _this.getMeasuredHeight() * 0.5;
                    break;
                case Anchors.CENTERLEFT:
                    _this.regX = _this.getMeasuredWidth();
                    _this.regY = _this.getMeasuredHeight() * 0.5;
                case Anchors.BOTTOMLEFT:
                    _this.regX = 0;
                    _this.regY = _this.getMeasuredHeight();
                    ;
                    break;
                case Anchors.BOTTOMCENTER:
                    _this.regX = _this.getMeasuredWidth() * 0.5;
                    _this.regY = _this.getMeasuredHeight();
                    break;
                case Anchors.BOTTOMRIGHT:
                    _this.regX = _this.getMeasuredWidth();
                    _this.regY = _this.getMeasuredHeight();
                    break;
            }
            // Set default position
            _this.x = position.x;
            _this.y = position.y;
            _this.isButton = isButton;
            _this.textColor = textColor.toString();
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
        }
        Label.prototype.mouseOver = function () {
            if (this.isButton) {
                this.alpha = 0.7;
                createjs.Sound.play("ButtonSelected");
                this.scaleX += 0.1;
                this.scaleY += 0.1;
                this.color = new Color(255, 0, 0, 1).toString();
            }
        };
        Label.prototype.mouseOut = function () {
            if (this.isButton) {
                this.alpha = 1.0;
                this.scaleX -= 0.1;
                this.scaleY -= 0.1;
                this.color = this.textColor;
            }
        };
        return Label;
    }(createjs.Text));
    objects.Label = Label;
    // images
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        // Variables
        // Constructor
        function Image(assetManager, imageString, position, anchor) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            // Set the registration anchoring
            switch (anchor) {
                case Anchors.TOPLEFT:
                    _this.regX = 0;
                    _this.regY = 0;
                    break;
                case Anchors.TOPCENTER:
                    _this.regX = _this.getBounds().width * 0.5;
                    _this.regY = 0;
                    break;
                case Anchors.TOPRIGHT:
                    _this.regX = _this.getBounds().width;
                    _this.regY = 0;
                    break;
                case Anchors.CENTERLEFT:
                    _this.regX = 0;
                    _this.regY = _this.getBounds().height * 0.5;
                case Anchors.CENTERCENTER:
                    _this.regX = _this.getBounds().width * 0.5;
                    _this.regY = _this.getBounds().height * 0.5;
                    break;
                case Anchors.CENTERLEFT:
                    _this.regX = _this.getBounds().width;
                    _this.regY = _this.getBounds().height * 0.5;
                case Anchors.BOTTOMLEFT:
                    _this.regX = 0;
                    _this.regY = _this.getBounds().height;
                    break;
                case Anchors.BOTTOMCENTER:
                    _this.regX = _this.getBounds().width * 0.5;
                    _this.regY = _this.getBounds().height;
                    break;
                case Anchors.BOTTOMRIGHT:
                    _this.regX = _this.getBounds().width;
                    _this.regY = _this.getBounds().height;
                    break;
                default:
                    break;
            }
            return _this;
        }
        // Methods
        Image.prototype.Start = function () { };
        Image.prototype.Update = function () { };
        return Image;
    }(createjs.Bitmap));
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=CommomUIElement.js.map