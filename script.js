// When document is loaded
document.addEventListener("DOMContentLoaded", function()
{
    // Loop thru each link for search
    document.querySelectorAll(".nav-link").forEach(link => 
    {
        // When each link is clicked
        link.onclick = function() 
        {
            // for all bars that exists, hide
            document.querySelectorAll(".search-bar").forEach(bar => 
            {
                bar.style.display = "none";
            });

            // Display the bar we want
            document.querySelector(`#${this.dataset.page}`).style.display = "flex";
        };
    });

    // Function to show the settings menu
    document.querySelectorAll(".setting-link").forEach(setLink => 
    {
        setLink.onclick = function() 
        {   
            document.querySelectorAll(`.${this.dataset.hide}`).forEach(sett => 
            {
                sett.style.display = "none";
            })

            document.querySelector(`#${this.dataset.menu}`).style.display = "block";
        };
    });

    // Function to hide the settings menu if clicked outside the menu
    document.onclick = function(e)
    {
        console.log(e.target.dataset.hide)
        if (e.target.dataset.hide !== "settings-menu")
        {
            document.querySelectorAll(".settings-menu").forEach(setmenu => 
            {
                setmenu.style.display = "none";
            });
        };
    };
    

});