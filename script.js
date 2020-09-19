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

    document.addEventListener("click", event => 
    {
        const element = event.target;

        // If the element's touched is the button of settings menu
        if (element.dataset.hide === "settings-menu")
        {
            // Hide all the menus
            document.querySelectorAll(`.${element.dataset.hide}`).forEach( hd => 
            {
                hd.style.display = "none";
            });

            // Get the id menu we want to show
            const elementMenu = document.querySelector(`#${element.dataset.menu}`);
            
            // If it's hiden, make it visible 
            if (elementMenu.style.display === "none")
            {
                elementMenu.style.display = "block";
            }
            else
            {
                elementMenu.style.display = "none";
            }
        }
        
        // Hide all the seetings menu
        else
        {
            document.querySelectorAll(".settings-menu").forEach( menu => 
            {
                menu.style.display = "none";
            });
        };
    });
    

});