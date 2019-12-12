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
    // Scene Super Class
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        // Constructior
        function Scene(assetManager, size, Columns, Rows) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            // Set Size and Center Position
            _this.sceneSize = new math.Vector2(size.x, size.y);
            // Set Coreners
            _this.sceneTopLeft = new math.Vector2(0, 0);
            _this.sceneTopCenter = new math.Vector2(size.x * 0.5, 0);
            _this.sceneTopRight = new math.Vector2(size.x, 0);
            _this.sceneCenterLeft = new math.Vector2(0, size.y * 0.5);
            _this.sceneCenter = new math.Vector2(size.x * 0.5, size.y * 0.5);
            _this.sceneCenterRight = new math.Vector2(size.x, size.y * 0.5);
            _this.sceneBottomLeft = new math.Vector2(0, size.y);
            _this.sceneBottomCenter = new math.Vector2(size.x * 0.5, size.y);
            _this.sceneBottomRight = new math.Vector2(size.x, size.y);
            _this.layoutSpacing = new math.Vector2(size.x / Columns, size.y / Rows);
            return _this;
        }
        Object.defineProperty(Scene.prototype, "SceneSize", {
            get: function () {
                return this.sceneSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneTopLeft", {
            get: function () {
                return this.sceneTopLeft;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneTopCenter", {
            get: function () {
                return this.sceneTopCenter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneTopRight", {
            get: function () {
                return this.sceneTopRight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneCenterLeft", {
            get: function () {
                return this.sceneCenterLeft;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneCenter", {
            get: function () {
                return this.sceneCenter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneCenterRight", {
            get: function () {
                return this.sceneCenterRight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneBottomLeft", {
            get: function () {
                return this.sceneBottomLeft;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneBottomCenter", {
            get: function () {
                return this.sceneBottomCenter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "SceneBottomRight", {
            get: function () {
                return this.sceneBottomRight;
            },
            enumerable: true,
            configurable: true
        });
        Scene.prototype.position = function (refPostion, x, y) {
            return new math.Vector2(refPostion.x - x * this.layoutSpacing.x, refPostion.y - y * this.layoutSpacing.y);
        };
        // Methods
        Scene.prototype.Start = function () {
        };
        Scene.prototype.Update = function () { };
        Scene.prototype.Main = function () { };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map