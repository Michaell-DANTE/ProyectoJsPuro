/**
 * Autor Michaell Yovanny Mendoza Pacheco (@DANTE)
 * "Somos lo que hacemos dia a dia de modo que la excelencia no es un acto, sino un hábito" - Aristóteles
*/

/**
 * izquierda
 * Permite que el jugador avance en un dispositivo movil-tactil hacia la izquierda.
 * @return salir
*/
function izquierda()
{   
    
    left -= 10;   
    console.log("para izquierda");
    player.style.marginLeft = left+"px";

    return salir;

}

/**
 * derecha
 * Permite que el jugador avance en un dispositivo movil-tactil hacia la derecha.
 * @return salir
*/
function derecha()
{

    left += 10;   
    console.log("para derecha");
    player.style.marginLeft = left+"px";

    return salir;

}

/**
 * arriba
 * Permite que el jugador avance en un dispositivo movil-tactil hacia arriba.
 * @return salir
*/
function arriba()
{

    up -= 10;   
    console.log("para arriba");
    player.style.marginTop = up+"px";

    return salir;

}

/**
 * abajo
 * Permite que el jugador avance en un dispositivo movil-tactil hacia abajo.
 * @return salir
*/
function abajo()
{

    up += 10;   
    console.log("para abajo");
    player.style.marginTop = up+"px";

    return salir;

}