module components{
    export abstract class Component{
        public name: string;
        protected owner: objects.GameObject;
        
        constructor(owner: objects.GameObject){
            this.owner = owner;
        }
        public abstract Update(): void;
    }
    export class Transform{
        private _position: math.Vector2;
        private _rotation: math.Vector2;

        constructor(position?:math.Vector2, rotation?: math.Vector2){
            this._position = position;
            this._rotation = rotation;
        }
        get Position():math.Vector2{
            return this._position;
        }
        get Rotation():math.Vector2{
            return this._rotation;
        }
    }
    export class HealthComponent extends  components.Component{
        private _HP: number = 0;
        private _maxHP: number =0;

        constructor(owner:objects.GameObject, maxHP: number){
            super(owner);
            this.name="Health";
            this._maxHP = maxHP;
            this._HP = this._maxHP;
        }
        
        get HP(): number{
            return this._HP;
        }
        get MaxHP():number{
            return this.MaxHP;
        }
        public Damage(amount:number):void{
            if(this._HP>0){
                this._HP-= amount;
            }
            else{
                this._HP = 0
            }
        }
        public Heal(amount:number):void{
            if(this._HP+amount>this.MaxHP){
                this._HP-= this.MaxHP;
            }
            else{
                this._HP = 0
            }
        }
        public Update():void{}
    }
}