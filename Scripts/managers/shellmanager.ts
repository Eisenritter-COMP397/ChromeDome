module managers{
    export class Shell{
        private shellCount:number;
        public Shell: objects.Shell[];
        public CurrentShell: number;

        // Constructor
        constructor() {
            this.Start();
        }

        // Methods
        public buildShellPool():void{
            for(let i=0; i<this.shellCount; i++){
                this.Shell[i] = new objects.Shell("MediumShell",5);
            }
        }

        public GetShell(): objects.Shell{
            
            let shell:objects.Shell =  this.Shell[this.CurrentShell];
            this.CurrentShell++;
            if(managers.Game.shellManager.CurrentShell>this.shellCount-1){
                managers.Game.shellManager.CurrentShell =0;
                return shell;
            }
        }

        public Start():void{
            this.shellCount = 10;
            this.Shell = new Array<objects.Shell>();
            this.buildShellPool();
            this.CurrentShell = 0;
        }
        public Update():void{
            if(managers.Game.shellManager.CurrentShell>this.shellCount-1){
                managers.Game.shellManager.CurrentShell =0;}
            this.Shell.forEach(shell=>{
                shell.Update();
            });
        }


    }
}