var start = new Date().getTime();
            function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
                }
            return color;
            }
            function move(){
                var left;
                var right;
                var wh;
                left = Math.random()*300;
                right = Math.random()*300;
                wh = (Math.random()*100)+20;
                document.getElementById("shape").style.left = left+"px";
                document.getElementById("shape").style.right = right+"px";
                document.getElementById("shape").style.width = wh+"px";
                document.getElementById("shape").style.height = wh+"px";
                document.getElementById("shape").style.display="block";
                document.getElementById("shape").style.backgroundColor= getRandomColor();
                start = new Date().getTime();
            }
            move();
            var start = new Date().getTime();
            document.getElementById("shape").onclick = function(){
                document.getElementById("shape").style.display="none";
                var end = new Date().getTime();
                var timetaken = (end-start)/1000;
                alert(timetaken+"s");
                move()
            };