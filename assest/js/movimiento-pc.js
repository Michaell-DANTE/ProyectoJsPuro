window.onload = function()
{

    document.onkeypress = teclado.precionar_teclas;
    setInterval( jugar, 100 );

}

var teclado = 
{

    precionar_teclas : function()
    {

        var tecla_up = event.key;

        if(tecla_up == "s" || tecla_up == "S")
        {
    
            up += 10;   
            console.log("para abajo");
            estilos = player.style.marginTop = up+"px";
            console.log(estilos);
    
        }
    
    
        if(tecla_up == "w" || tecla_up == "W")
        {
    
            up -= 10;   
            console.log("para arriba");
            estilow = player.style.marginTop = up+"px";
            console.log(estilow);

            cambiarMundo.escenaDos(estilow, mundo, player);
            cambiarMundo.escenaUno(estilow, mundo, player);

            
    
        }
    
    
        if(tecla_up == "a" || tecla_up == "A")
        {
    
            left -= 10;   
            console.log("para izquierda");
            player.style.marginLeft = left+"px";
    
        }
    
    
        if(tecla_up == "d" || tecla_up == "D")
        {
    
            left += 10; 
            var number = left += 10;
            console.log(number); 
            console.log("para derecha");
            this.estilo = player.style.marginLeft = left+"px"; 
            console.log("Estilos: " + this.estilo);
    
            // if(this.estilo == 200 +"px")
            // {
    
            //     console.log("Funciona");
            //     mundo.style.backgroundColor = "green";
                
    
            // } 
    
        }

    }


}






