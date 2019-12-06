module Utils{
    export class Velocity{
        private _hMinSpeed: number;
        private _hMaxSpeed: number;
        private _vMinSpeed: number;
        private _vMaxSpeed: number;
        private _noise: number;  
        constructor(horizontalSpeed:math.Vector2,verticalSpeed:math.Vector2,noise:number){
            this._hMinSpeed = horizontalSpeed.x;
            this._hMaxSpeed = horizontalSpeed.y;
            this._vMinSpeed = verticalSpeed.x;
            this._vMaxSpeed = verticalSpeed.y;
            this._noise = noise;
        }
    }

    export class Vector2 extends createjs.Point{
        //constructor

        constructor(x:number = 0, y:number = 0){
            super (x, y);
        }

        public static Distance(vec1:Utils.Vector2, vec2:Utils.Vector2):number{
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2)));
        }

        public static Add(vec1:Utils.Vector2, vec2:Utils.Vector2):Utils.Vector2{
            let result:Utils.Vector2 = new Utils.Vector2(vec1.x +vec2.x, vec1.y + vec2.y);
            return result;
        }

        public static Subtract(vec1:Utils.Vector2, vec2:Utils.Vector2):Utils.Vector2 {

            let result:Utils.Vector2 = new Utils.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        }

        public static Mulitply(vec1:Utils.Vector2, scalar:number):Utils.Vector2 {
            return new Utils.Vector2(vec1.x * scalar, vec1.y * scalar);
        }

        public static Divide(vec1:Utils.Vector2, scalar:number):Utils.Vector2 {
            return new Utils.Vector2(vec1.x / scalar, vec1.y / scalar);
        }
    }
}