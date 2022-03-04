var mydragg = function() {
                return {
                    move: function(divid, xpos, ypos) {
                        divid.style.left = xpos + 'px';
                        divid.style.top = ypos + 'px';
                    },
                    startMoving: function(divid, container, evt) {
                        evt = evt || window.event;
                        var posX = evt.clientX,
                            posY = evt.clientY,
                            divTop = divid.style.top,
                            divLeft = divid.style.left,
                            eWi = parseInt(divid.style.width),
                            eHe = parseInt(divid.style.height),
                            cWi = parseInt(document.getElementById(container).style.width),
                            cHe = parseInt(document.getElementById(container).style.height);
                        document.getElementById(container).style.cursor = 'move';
                        divTop = divTop.replace('px', '');
                        divLeft = divLeft.replace('px', '');
                        var diffX = posX - divLeft,
                            diffY = posY - divTop;
                        document.onmousemove = function(evt) {
                            evt = evt || window.event;
                            var posX = evt.clientX,
                                posY = evt.clientY,
                                aX = posX - diffX,
                                aY = posY - diffY;
                            if (aX < 0) aX = 0;
                            if (aY < 0) aY = 0;
                            if (aX + eWi > cWi) aX = cWi - eWi;
                            if (aY + eHe > cHe) aY = cHe - eHe;
                            mydragg.move(divid, aX, aY);
                        }
                    },
                    stopMoving: function(container) {
                        var a = document.createElement('script');
                        document.getElementById(container).style.cursor = 'default';
                        document.onmousemove = function() {}
                    },
                }
            }();
            function hideWindow(id) {
              document.getElementById(id).style.display="none";
            }
            var high=100;
            function wallpaper(url) {
                document.getElementsByTagName("html")[0].style.background = "url('" + url + "') no-repeat center center fixed";
                document.getElementsByTagName("html")[0].style.backgroundSize="cover";
            }
            var windowtemp="";
windowtemp += "<div id=\"container\">";
windowtemp += "            <div id=\"ID\" class=window onmousedown='mydragg.startMoving(this,\"container\",event);high++;this.style.zIndex=high;' onmouseup='mydragg.stopMoving(\"container\");' style=\"width: 480px;height: 500px;\">";
windowtemp += "                <div class=title>";
windowtemp += "                    TITLE";
windowtemp += "                    <div class=x onclick=\"hideWindow(\'IDD\')\">X<\/div>";
windowtemp += "                <\/div>";
windowtemp += "                <div class=windowtext>";
windowtemp += "                    <iframe src=\"URL\" height=500px width=100% frameborder=0 seamless ><\/iframe>";
windowtemp += "                <\/div>";
windowtemp += "            <\/div>";
windowtemp += "            ";
windowtemp += "            ";
windowtemp += "        <\/div>";

            function newWindow(id,title,url) {
              var unix = Math.round(+new Date()/1000);
              var windowtemptemp=windowtemp.toString().replace("ID",id+unix.toString()).replace("IDD",id+unix.toString()).replace("TITLE",title).replace("URL",url);
              var div = document.getElementById('container');
div.innerHTML +=windowtemptemp;
var elements = div.childNodes;
high++;
document.getElementById(id+unix.toString()).style.zIndex=high;
            }
