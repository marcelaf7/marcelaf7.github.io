var html = 
            "<nav id=\"navbar\">"
                +"<nav style=\"position: fixed; left: 0;\"><!--"
                    +"--><a href=\"index.html\"><!--"
                        +"--><img src=\"images/MarcelFiore.svg\" alt=\"Marcel Fiore\" onmouseover=\"this.src='images/MarcelFioreHover.svg';\" onmouseout=\"this.src='images/MarcelFiore.svg';\"><!--"
                    +"--></a><!--"
                    +"--><a href=\"https://twitter.com/MarcelFiore\"><!--"
                        +"--><img src=\"images/Twitter.svg\" alt=\"Twitter\" onmouseover=\"this.src='images/TwitterHover.svg';\" onmouseout=\"this.src='images/Twitter.svg';\"><!--"
                    +"--></a><!--"
                    +"--><a href=\"https://github.com/marcelaf7\"><!--"
                        +"--><img src=\"images/GitHub.svg\" alt=\"Github\" onmouseover=\"this.src='images/GitHubHover.svg';\" onmouseout=\"this.src='images/GitHub.svg';\"><!--"
                    +"--></a><!--"
                    +"--><a href=\"https://www.linkedin.com/in/marcel-fiore/\"><!--"
                        +"--><img src=\"images/LinkedIn.svg\" alt=\"LinkedIn\" onmouseover=\"this.src='images/LinkedInHover.svg';\" onmouseout=\"this.src='images/LinkedIn.svg';\"><!--"
                    +"--></a>"
                +"</nav>"

                +"<nav id=\"NavButtons\" style=\"position: fixed; right: 0;\"><!--"
                    +"--><a href=\"index.html\"><!--"
                        +"--><img src=\"images/Home.svg\" alt=\"Home\" onmouseover=\"this.src='images/HomeHover.svg';\" onmouseout=\"this.src='images/Home.svg';\"><!--"
                    +"--></a><!--"
                    +"--><a href=\"Clicker.html\"><!--"
                        +"--><img src=\"images/Clicker.svg\" alt=\"Clicker\" onmouseover=\"this.src='images/ClickerHover.svg';\" onmouseout=\"this.src='images/Clicker.svg';\"><!--"
                    +"--></a><!--"
                    +"--><a href=\"Resume.html\"><!--"
                        +"--><img src=\"images/Resume.svg\" alt=\"Resume\" onmouseover=\"this.src='images/ResumeHover.svg';\" onmouseout=\"this.src='images/Resume.svg';\"><!--"
                    +"--></a>"
                +"</nav>"

                +"<nav id=\"DropDownButton\" style=\"position: fixed; right: 0;\">"
                    +"<img src=\"images/DropDown.svg\" alt=\"DropDown\" onclick=\"DropDownClick()\">"
                +"</nav>"
            +"</nav>"

            +"<div id=\"DropDownMenu\">"
                +"<a href=\"index.html\" style=\"position: fixed; right:0;\">"
                    +"<img src=\"images/Home.svg\" alt=\"Home\" onmouseover=\"this.src='images/HomeHover.svg';\" onmouseout=\"this.src='images/Home.svg';\">"
                +"</a>"
                +"<a href=\"Clicker.html\" style=\"position: fixed; right:0; margin-top: 50px\">"
                    +"<img src=\"images/Clicker.svg\" alt=\"Clicker\" onmouseover=\"this.src='images/ClickerHover.svg';\" onmouseout=\"this.src='images/Clicker.svg';\">"
                +"</a>"
                +"<a href=\"Resume.html\" style=\"position: fixed; right:0; margin-top: 100px\">"
                    +"<img src=\"images/Resume.svg\" alt=\"Resume\" onmouseover=\"this.src='images/ResumeHover.svg';\" onmouseout=\"this.src='images/Resume.svg';\">"
                +"</a>"
            +"</div>"
            ;

function DropDownClick() 
{
    var DropDownMenu = document.getElementById("DropDownMenu");
    if(DropDownMenu.style.visibility == "visible")
        DropDownMenu.style.visibility = "hidden";
    else
        DropDownMenu.style.visibility = "visible";
}

function loadHeader() 
{
    console.log("Header loaded");
    document.getElementById("navbar-header").innerHTML = html;
}
