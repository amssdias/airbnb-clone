// When document is loaded
document.addEventListener("DOMContentLoaded", function()
{

    // Loop thru each link
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
            document.querySelector(`.${this.dataset.page}`).style.display = "flex";
        };
    });

});