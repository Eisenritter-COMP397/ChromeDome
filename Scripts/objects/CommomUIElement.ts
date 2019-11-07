module objects {
    // Buttons
    export class Button extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue, imageString: string, x: number = 0, y: number = 0) {
            super(assetManager.getResult(imageString));

            // Set default position
            this.x = x;
            this.y = y;

            // Set event handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }

        // Methods
        // Mouseover Effects
        private mouseOver(): void {
            this.alpha = 0.7;
        }

        private mouseOut(): void {
            this.alpha = 1.0;
        }
    }
    // Labels
    export class Label extends createjs.Text {
        constructor(labelString: string, fontSize: string, fontFamily: string,
            fontColor: string, x: number = 0, y: number = 0, isCentered: boolean = false) {
            super(labelString, fontSize + " " + fontFamily, fontColor);

            // Set the registration point if true to be in the middle
            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            // Set default position
            this.x = x;
            this.y = y;
        }
    }
}