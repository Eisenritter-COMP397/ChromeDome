module components {
    import Anchors=Utils.Anchors;
    export abstract class Component {
        public name: string;
        protected owner: objects.GameObject;

        constructor(owner: objects.GameObject) {
            this.owner = owner;
        }
        public abstract Update(): void;
    }

    // Transform Component
    export class Transform {
        private _size: math.Vector2= new math.Vector2(0,0);
        private _position: math.Vector2= new math.Vector2(0,0);
        private _rotation: number = 0;
        private _pivot: math.Vector2= new math.Vector2(0,0);

        constructor(size: math.Vector2 = math.Vector2.Zero(), position: math.Vector2 = math.Vector2.Zero(),
         rotation: number=0) {
            this._size = size;
            this._position = position;
            this._rotation = rotation;
            this._pivot = math.Vector2.Divide(size,2);
        }
        get Size():math.Vector2{
            return this._size;
        }
        get Position(): math.Vector2 {
            return this._position;
        }
        get Rotation(): number {
            return this._rotation;
        }
        set Size(size:math.Vector2){
            this._size = size;
        }
        set Position(position:math.Vector2){
            this._position = position;
        }
        set Rotation(rotation:number){
            this._rotation = rotation;
        }
        set Pivot(anchors:Utils.Anchors){
            switch (anchors) {
                case Anchors.TOPLEFT:
                    this._pivot = math.Vector2.Zero();
                    break;
                case Anchors.TOPCENTER:
                    this._pivot.x = this._size.x * 0.5;
                    this._pivot.y = 0;
                    break;
                case Anchors.TOPRIGHT:
                    this._pivot.x =  this._size.x
                    this._pivot.y = 0;
                    break;
                case Anchors.CENTERLEFT:
                    this._pivot.x = 0;
                    this._pivot.y = this._size.y * 0.5;

                case Anchors.CENTERCENTER:
                        this._pivot = math.Vector2.Divide(this.Size,2);
                    break;
                case Anchors.CENTERLEFT:
                    this._pivot.x =  this._size.x
                    this._pivot.y = this._size.y * 0.5;

                case Anchors.BOTTOMLEFT:
                    this._pivot.x = 0;
                    this._pivot.y = this._size.y;;
                    break;
                case Anchors.BOTTOMCENTER:
                    this._pivot.x =  this._size.x* 0.5;
                    this._pivot.y = this._size.y;
                    break;
                case Anchors.BOTTOMRIGHT:
                    this._pivot.x =  this._size.x
                    this._pivot.y = this._size.y;
                    break;
        }
    }
}

    //Collider Component
    export class Collider2D {
        private _size: math.Vector2;
        constructor(size: math.Vector2) {
            this._size.x = size.x;
            this._size.y = size.y;
        }
    }

    //Rigidbody Component
    export class Rigidbody {
        private _mass: number;
        private _gravity: number;
        private _velocity: math.Vector2;
        constructor(mass: number = 0, gravity: number = 0, velocity: math.Vector2 = new math.Vector2(0, 0)) {
            this._mass = mass;
            this._gravity = gravity;
            this._velocity = velocity;
        }
    }

    //Grid Component
    export abstract class Grid extends components.Component {
        private gSize: math.Vector2;
        private igxSize: number;
        private igySize: number;
        private gridArray: number[][];
        protected owner: objects.GameObject;
        constructor(owner: objects.GameObject, gridSize: math.Vector2, igxSize: number, igySize: number) {
            super(owner);
            this.gSize = gridSize;
            this.igxSize = igxSize;
            this.igySize = igySize;
            this.gridArray = new Array(new Array(igxSize), new Array(igySize));
        }
    }

    export class HealthComponent extends components.Component {
        private _HP: number = 0;
        private _maxHP: number = 0;

        constructor(owner: objects.GameObject, maxHP: number) {
            super(owner);
            this.name = "Health";
            this._maxHP = maxHP;
            this._HP = this._maxHP;
        }

        get HP(): number {
            return this._HP;
        }
        get MaxHP(): number {
            return this.MaxHP;
        }
        public Damage(amount: number): void {
            if (this._HP > 0) {
                this._HP -= amount;
            }
            else {
                this._HP = 0
            }
        }
        public Heal(amount: number): void {
            if (this._HP + amount > this.MaxHP) {
                this._HP -= this.MaxHP;
            }
            else {
                this._HP = 0
            }
        }
        public Update(): void { }
    }
}