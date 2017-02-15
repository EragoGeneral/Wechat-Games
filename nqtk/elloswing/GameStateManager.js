pc.script.create('GameStateManager', function (app) {
    // Creates a new GameStateManager instance
    var GameStateManager = function (entity) {
        this.entity = entity;
    };

    GameStateManager.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () 
        {
            this.start = false;
            this.startgame = false;
            this.lose = false;
            /*
            var btn1 = document.createElement('button');
            btn1.innerHTML = '低清';
            btn1.style.position = 'absolute';
            btn1.style.left = '0';
            document.body.appendChild(btn1);
            
            btn1.onclick = function(event){

                    app.graphicsDevice.canvas.width = window.innerWidth;
                    app.graphicsDevice.canvas.height = window.innerHeight;

            };
 
            
            var btn2 = document.createElement('button');
            btn2.innerHTML = '高清';
            btn2.style.position = 'absolute';
            btn2.style.left = '10%'; 
            document.body.appendChild(btn2);
            
            btn2.onclick = function(event){

                app.graphicsDevice.canvas.width = window.innerWidth*2;
                app.graphicsDevice.canvas.height = window.innerHeight*2;
                 
            };
        */
            app.mouse.disableContextMenu();
            
            this.playtimer = 0;
            var player = app.root.findByName('player');
            this.playercontrol = player.script.GameControl;
            initHandle();
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) 
        {
            
            if(!this.start || this.lose || !this.startgame)
            {
                return;
            }
            
            this.playtimer += dt;
            
            
        },
        
        
        GameStart:function()
        {
            beginHandle();
        },
        
        GameEnd:function()
        {
            var scoreinfo={"score":this.playercontrol.score.toString(8),'usermask':parseInt(this.playtimer).toString(8),"score1":(this.playercontrol.score+17).toString(8),'usermask1':parseInt(this.playtimer+9).toString(8)};
            gameover(scoreinfo);
        },
        
        GameStartGame:function()
        {
           startHandle();

        },

        Init:function()
        {
            //this.start = false;
            this.startgame = false;
            this.lose = false;
            this.playtimer = 0;
            resetHandle();
        }
        
    };

    return GameStateManager;
});