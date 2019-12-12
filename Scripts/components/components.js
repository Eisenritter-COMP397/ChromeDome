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
var components;
(function (components) {
    var Anchors = Utils.Anchors;
    var Component = /** @class */ (function () {
        function Component(owner) {
            this.owner = owner;
        }
        return Component;
    }());
    components.Component = Component;
    // Transform Component
    var Transform = /** @class */ (function () {
        function Transform(size, position, rotation) {
            if (size === void 0) { size = math.Vector2.Zero(); }
            if (position === void 0) { position = math.Vector2.Zero(); }
            if (rotation === void 0) { rotation = 0; }
            this._size = new math.Vector2(0, 0);
            this._position = new math.Vector2(0, 0);
            this._rotation = 0;
            this._pivot = new math.Vector2(0, 0);
            this._size = size;
            this._position = position;
            this._rotation = rotation;
            this._pivot = math.Vector2.Divide(size, 2);
        }
        Object.defineProperty(Transform.prototype, "Size", {
            get: function () {
                return this._size;
            },
            set: function (size) {
                this._size = size;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Transform.prototype, "Position", {
            get: function () {
                return this._position;
            },
            set: function (position) {
                this._position = position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Transform.prototype, "Rotation", {
            get: function () {
                return this._rotation;
            },
            set: function (rotation) {
                this._rotation = rotation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Transform.prototype, "Pivot", {
            set: function (anchors) {
                switch (anchors) {
                    case Anchors.TOPLEFT:
                        this._pivot = math.Vector2.Zero();
                        break;
                    case Anchors.TOPCENTER:
                        this._pivot.x = this._size.x * 0.5;
                        this._pivot.y = 0;
                        break;
                    case Anchors.TOPRIGHT:
                        this._pivot.x = this._size.x;
                        this._pivot.y = 0;
                        break;
                    case Anchors.CENTERLEFT:
                        this._pivot.x = 0;
                        this._pivot.y = this._size.y * 0.5;
                    case Anchors.CENTERCENTER:
                        this._pivot = math.Vector2.Divide(this.Size, 2);
                        break;
                    case Anchors.CENTERLEFT:
                        this._pivot.x = this._size.x;
                        this._pivot.y = this._size.y * 0.5;
                    case Anchors.BOTTOMLEFT:
                        this._pivot.x = 0;
                        this._pivot.y = this._size.y;
                        ;
                        break;
                    case Anchors.BOTTOMCENTER:
                        this._pivot.x = this._size.x * 0.5;
                        this._pivot.y = this._size.y;
                        break;
                    case Anchors.BOTTOMRIGHT:
                        this._pivot.x = this._size.x;
                        this._pivot.y = this._size.y;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        return Transform;
    }());
    components.Transform = Transform;
    //Collider Component
    var Collider2D = /** @class */ (function () {
        function Collider2D(size) {
            this._size.x = size.x;
            this._size.y = size.y;
        }
        return Collider2D;
    }());
    components.Collider2D = Collider2D;
    //Rigidbody Component
    var Rigidbody = /** @class */ (function () {
        function Rigidbody(mass, gravity, velocity) {
            if (mass === void 0) { mass = 0; }
            if (gravity === void 0) { gravity = 0; }
            if (velocity === void 0) { velocity = new math.Vector2(0, 0); }
            this._mass = mass;
            this._gravity = gravity;
            this._velocity = velocity;
        }
        return Rigidbody;
    }());
    components.Rigidbody = Rigidbody;
    //Grid Component
    var Grid = /** @class */ (function (_super) {
        __extends(Grid, _super);
        function Grid(owner, gridSize, igxSize, igySize) {
            var _this = _super.call(this, owner) || this;
            _this.gSize = gridSize;
            _this.igxSize = igxSize;
            _this.igySize = igySize;
            _this.gridArray = new Array(new Array(igxSize), new Array(igySize));
            return _this;
        }
        return Grid;
    }(components.Component));
    components.Grid = Grid;
    var HealthComponent = /** @class */ (function (_super) {
        __extends(HealthComponent, _super);
        function HealthComponent(owner, maxHP) {
            var _this = _super.call(this, owner) || this;
            _this._HP = 0;
            _this._maxHP = 0;
            _this.name = "Health";
            _this._maxHP = maxHP;
            _this._HP = _this._maxHP;
            return _this;
        }
        Object.defineProperty(HealthComponent.prototype, "HP", {
            get: function () {
                return this._HP;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HealthComponent.prototype, "MaxHP", {
            get: function () {
                return this.MaxHP;
            },
            enumerable: true,
            configurable: true
        });
        HealthComponent.prototype.Damage = function (amount) {
            if (this._HP > 0) {
                this._HP -= amount;
            }
            else {
                this._HP = 0;
            }
        };
        HealthComponent.prototype.Heal = function (amount) {
            if (this._HP + amount > this.MaxHP) {
                this._HP -= this.MaxHP;
            }
            else {
                this._HP = 0;
            }
        };
        HealthComponent.prototype.Update = function () { };
        return HealthComponent;
    }(components.Component));
    components.HealthComponent = HealthComponent;
})(components || (components = {}));
//# sourceMappingURL=components.js.map