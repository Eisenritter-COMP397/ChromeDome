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
}