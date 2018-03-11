var clicks = 0;
            var interns = 0;
            var hackers = 0;
            var myVar = setInterval(idle, 1000);

            function idle()
            {
                clicks += interns + (hackers * 10);
                document.getElementById("clicks").innerHTML="Clicks: " + String(clicks);
            }

            function buyIntern()
            {
                if(clicks >= 10)
                {
                    clicks -= 10;
                    interns += 1;
                    document.getElementById("interns").innerHTML="Interns: " + String(interns);
                }
                document.getElementById("clicks").innerHTML="Clicks: " + String(clicks);
            }

            function buyHacker()
            {
                if(clicks >= 100)
                {
                    clicks -= 100;
                    hackers += 1;
                    document.getElementById("hackers").innerHTML="Hackers: " + String(hackers);
                }
                document.getElementById("clicks").innerHTML="Clicks: " + String(clicks);            
            }

            function clicked()
            {
                clicks += 1;
                document.getElementById("clicks").innerHTML="Clicks: " + String(clicks);
            }