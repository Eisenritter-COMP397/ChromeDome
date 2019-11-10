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
    var Component = /** @class */ (function () {
        function Component(owner) {
            this.owner = owner;
        }
        return Component;
    }());
    components.Component = Component;
    var Transform = /** @class */ (function () {
        function Transform(position, rotation) {
            this._position = position;
            this._rotation = rotation;
        }
        Object.defineProperty(Transform.prototype, "Position", {
            get: function () {
                return this._position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Transform.prototype, "Rotation", {
            get: function () {
                return this._rotation;
            },
            enumerable: true,
            configurable: true
        });
        return Transform;
    }());
    components.Transform = Transform;
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