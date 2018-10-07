var html =
            "<link href='css/navbarheader.css' rel='stylesheet' type='text/css'>"
            +"<nav id='navbar'>"
                +"<nav id='social-buttons-container' style='position: fixed; left: 0;'><!--"
                    +"--><a class='nav-button' href='index.html'><!--"
                        +"--><img src='images/MarcelFiore.svg' alt='Marcel Fiore'><!--"
                    +"--></a><!--"
                    +"--><a class='nav-button' href='https://twitter.com/MarcelFiore'><!--"
                        +"--><img src='images/Twitter.svg' alt='Twitter'><!--"
                    +"--></a><!--"
                    +"--><a class='nav-button' href='https://github.com/marcelaf7'><!--"
                        +"--><img src='images/GitHub.svg' alt='Github'><!--"
                    +"--></a><!--"
                    +"--><a class='nav-button' href='https://www.linkedin.com/in/marcel-fiore/'><!--"
                        +"--><img src='images/LinkedIn.svg' alt='LinkedIn'><!--"
                    +"--></a>"
                +"</nav>"

                +"<nav id='navigation-buttons-container' style='position: fixed; right: 0;'><!--"
                    +"--><a class='nav-button' href='index.html'><!--"
                        +"--><img src='images/Home.svg' alt='Home'><!--"
                    +"--></a><!--"
                    +"--><a class='nav-button' href='blog'><!--"
                        +"--><img src='images/Blog.svg' alt='Blog'><!--"
                    +"--></a><!--"
                    +"--><a class='nav-button' href='Clicker.html'><!--"
                        +"--><img src='images/Clicker.svg' alt='Clicker'><!--"
                    +"--></a>"
                +"</nav>"

                +"<nav id='dropdown-hamburger-button' style='position: fixed; right: 0;'>"
                    +"<img src='images/DropDown.svg' alt='DropDown' onclick='DropDownClick()'>"
                +"</nav>"
            +"</nav>"

            +"<div id='dropdown-menu'>"
                +"<a class='nav-button' href='index.html' style='position: fixed; right:0;'>"
                    +"<img src='images/Home.svg' alt='Home'>"
                +"</a>"
                +"<a class='nav-button' href='blog' style='position: fixed; right:0; margin-top: 50px'>"
                    +"<img src='images/Blog.svg' alt='Blog'>"
                +"</a>"
                +"<a class='nav-button' href='Clicker.html' style='position: fixed; right:0; margin-top: 100px'>"
                    +"<img src='images/Clicker.svg' alt='Clicker'>"
                +"</a>"
            +"</div>"
            ;

function DropDownClick()
{
    var DropDownMenu = document.getElementById("dropdown-menu");
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
