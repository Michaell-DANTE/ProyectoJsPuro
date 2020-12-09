/**
 * Autor Michaell Yovanny Mendoza Pacheco (@DANTE)
 * "Somos lo que hacemos dia a dia de modo que la excelencia no es un acto, sino un hábito" - Aristóteles
*/

var desaparecerAuto =
{

    /**
     * autoUno
     * Desaparece al enemigo cuando supera el limite de pantalla.
     * @param  mixed Objeto
     * @param  mixed enemigo
     * @return salir
    */
    autoUno : function (Objeto, enemigo)
    {

        if( Objeto === 660 + "px" )
        {

            console.log("funciona");
            enemigo.style.display = "none";

        }

        return salir;

    }

}