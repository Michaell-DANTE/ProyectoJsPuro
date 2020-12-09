/**
 * Autor Michaell Yovanny Mendoza Pacheco (@DANTE)
 * "Somos lo que hacemos dia a dia de modo que la excelencia no es un acto, sino un hábito" - Aristóteles
*/

var cambiarMundo = 
{
    /**
     * escenaUno 
     * Cambia de escena cuando el player exede el limite de pantalla superior.
     * @param  mixed estiloW
     * @param  mixed mundo
     * @param  mixed player
     * @return salir
    */
    escenaUno : function(estilow, mundo, player)
    {

        salir = 0;

        if(estilow == -330 +"px")
        {
        
            mundo.style.backgroundColor = "green";
            player.style.top = 950+"px";
                
        } 

        return salir;

    },


    /**
     * escenaDos 
     * Cambia de escena cuando el player exede el limite de pantalla superior luego de que haya superado la escenaUno.
     * @param  mixed estiloW
     * @param  mixed mundo
     * @param  mixed player
     * @return salir
    */
    escenaDos : function(estilow, mundo, player)
    {

        if(estilow == -950 +"px")
        {
        
            console.log("Funciona");
            mundo.style.backgroundColor = "orange";
            player.style.top = 1570+"px";
                
        } 
        
        return salir;

    }



}
