/**
 * Autor Michaell Yovanny Mendoza Pacheco (@DANTE)
 * "Somos lo que hacemos dia a dia de modo que la excelencia no es un acto, sino un hábito" - Aristóteles
*/

var colision = 
{

    /**
     * salirCalle
     * Permite saber si el player salio de la calle o hambiente general.
     * @param  mixed estiloD
     * @param  mixed estiloA
     * @return salir
    */
    // salirCalle : function(estiloD, estiloA) 
    // {
 
    //     if(estiloD == 100+"px" || estiloA == -200+"px")
    //     {

    //         alert("WARWIN: HA SALIDO DE LA CARRETERA!!");

    //     }

    //     return salir;

    // }


    chocarObjeto : function(estilow, estiloD, player, estiloA)
    {

        const din0 = (estilow == -1490+"px");

        const din1 = ( din0 && estiloD == 80+"px");
        const din2 = (din0 && estiloD == 60+"px")
        const din3 = ( din0 && estiloD == 100+"px");
        const din4 = ( din0 && estiloD == 120+"px");
        const din5 = ( din0 && estiloD == 140+"px");

        if(din0 && (estiloA <= 40+"px"))
        {

            console.log(true);
            player.style.visibility = "visible";
            Swal.fire({
                title: 'Excelente!',
                text: 'Has cumplido con la ley, se te sumara 100 puntos!!.',
                imageUrl: 'assest/img/alerta2.png',
                imageWidth: 200,
                imageHeight: 300,
                imageAlt: 'Custom image',
            });

        }else if(din1 || din2 || din3 || din4 || din5)
        {

            player.style.visibility = "hidden";

            Swal.fire({
                title: 'Cuidado!',
                text: 'Has inflijido la ley, se te descontaran 100 puntos!!.',
                imageUrl: 'assest/img/alerta1.png',
                imageWidth: 200,
                imageHeight: 300,
                imageAlt: 'Custom image',
            });

        }


    }

}

