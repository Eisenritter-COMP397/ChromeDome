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

    export enum Anchors {
        TOPLEFT,
        TOPCENTER,
        TOPRIGHT,
        CENTERLEFT,
        CENTERCENTER,
        CENTERRIGHT,
        BOTTOMLEFT,
        BOTTOMCENTER,
        BOTTOMRIGHT,
    }
    
    export class Color{
        protected red:number;
        protected green: number;
        protected blue: number;
        protected alpha: number;
        constructor(red:number=0, green: number=0,blue:number=0, alpha:number=1 ){
            this.red=red;
            this.green=green;
            this.blue=blue;
            this.alpha = alpha;
        }
        public toString():string{
            return "rgba("+this.red.toString()+","+this.blue.toString()+","+this.green.toString()+","+this.alpha.toString();
        }

        }

}