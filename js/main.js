 $( document ).ready(function() 
    {
           
    $('#dark').click(function()
        {
            $("#theme").attr("href", "css/dark.css");
           
        })

    $('#light').click(function()
        {
            $("#theme").attr("href", "css/dafault.css");
           
            
        })
            
    });
