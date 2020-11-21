var cambiarMundo = 
{



    escenaUno : function(estilow, mundo, player)
    {


        if(estilow == -330 +"px")
        {
        
            mundo.style.backgroundColor = "green";
            player.style.top = 950+"px";
                
        } 
    

    },

    escenaDos : function(estilow, mundo, player)
    {


        if(estilow == -950 +"px")
        {
        
            console.log("Funciona");
            mundo.style.backgroundColor = "orange";
            player.style.top = 1570+"px";
                
        } 
    

    }



}
