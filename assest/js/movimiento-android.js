function izquierda()
{   
    
    left -= 10;   
    console.log("para izquierda");
    player.style.marginLeft = left+"px";

}


function derecha()
{

    left += 10;   
    console.log("para derecha");
    player.style.marginLeft = left+"px";
}


function arriba()
{

    up -= 10;   
    console.log("para arriba");
    player.style.marginTop = up+"px";

}

function abajo()
{

    up += 10;   
    console.log("para abajo");
    player.style.marginTop = up+"px";

}