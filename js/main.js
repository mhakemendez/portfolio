 $( document ).ready(function() 
    {
           
    $('#dark').click(function()
        {
            $("#test").attr("href", "css/dark.css");
        })

    $('#light').click(function()
        {
            $("#test").attr("href", "css/light.css");
        })
            
    });
