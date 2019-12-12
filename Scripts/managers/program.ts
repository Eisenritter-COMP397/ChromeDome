module managers{
    export class Game {
        // Internal Element
        public static assetManager: createjs.LoadQueue;
        public static keyboardManager: managers.Keyboard;

        // Stage & Scene Data
        public static canvas: HTMLCanvasElement;
        public static stage: createjs.Stage;
        
        public static currentScene: number;
        public static currentSceneObject: objects.Scene;

        // Graphical Data
        public static textureAtlas: createjs.SpriteSheet;

        // Game Data
        public static highScore: number;
        public static score: number;
        public static timer: number;

        // Game Objects
        public static player: objects.Player;

        // Game Settings

        public static laserManager:managers.Laser;
        public static laserManager2:managers.Laser2;
        public static laserManager3:managers.Laser3;

    }
}