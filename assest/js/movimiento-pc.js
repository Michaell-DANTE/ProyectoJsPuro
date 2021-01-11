/**
 * Autor Michaell Yovanny Mendoza Pacheco (@DANTE)
 * "Somos lo que hacemos dia a dia de modo que la excelencia no es un acto, sino un hábito" - Aristóteles
*/

/**
 * function.onload
 * Carga todo el entorno del juego y de igual manera lo actualiza.
 * @return salir
*/
window.onload = function()
{

    document.onkeypress = teclado.precionar_teclas;
    setInterval( jugar, 100 );
  

}

var teclado = 
{

    /**
     * precionar_teclas
     * Permite que el jugador avance en un dispositivo con teclado - capturando asi las teclas (w-s-d-a) para poder moverser.
     * @return salir
    */
    precionar_teclas : function()
    {

        var tecla_up = event.key;

        //Permite el desplazarse hacia abajo con el teclado.
        if(tecla_up == "s" || tecla_up == "S")
        {
    
            up += 20;   
            console.log("para abajo");
            estilos = player.style.marginTop = up+"px";
            console.log(estilos);
    
        }
    
        //Permite el desplazarse hacia arriba con el teclado.  
        if(tecla_up == "w" || tecla_up == "W")
        {
    
            up -= 10;
            var sentencia = (up)*(-1);   
            console.log("para arriba");
            estilow = player.style.marginTop = up+"px";

            console.log(estilow);
            console.log(sentencia);
            

            cambiarMundo.escenaDos(estilow, mundo, player, señal);
            cambiarMundo.escenaUno(estilow, mundo, player);
            alerta.alertaNoPasar(estilow);
            
            var pos = true;
            if(pos == false){


            }else{
                
                sonidos.sonidoCoche(sonido);

            }
    
        }
    
        //Permite el desplazarse hacia izquierda con el teclado.
        if(tecla_up == "a" || tecla_up == "A")
        {
    
            left -= 20;   
            console.log("para izquierda");
            estiloA = player.style.marginLeft = left+"px";
            console.log(estiloA);
            // colision.salirCalle(estiloD, estiloA);
    
        }
    
        //Permite el desplazarse hacia derecha con el teclado.    
        if(tecla_up == "d" || tecla_up == "D")
        {
    
            left += 10; 
            var number = left += 10;
            console.log(number); 
            console.log("para derecha");
            estiloD = player.style.marginLeft = left+"px"; 
            // colision.salirCalle(estiloD, estiloA);
            console.log("Estilos: " + estiloD);
    
    
        }


        colision.chocarObjeto(estilow, estiloD, player, estiloA);

        return salir;

    }


}






