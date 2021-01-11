var alerta = 
{

    alertaNoPasar : function(estilow)
    {

        switch(estilow)
        {

            case -1080+"px":
                Swal.fire({
                    title: 'UN MOMENTO!!',
                    text: 'Ha unos cuantos metros hay una señal de transito!!!.',
                    imageUrl: 'assest/img/alerta.png',
                    imageWidth: 200,
                    imageHeight: 300,
                    imageAlt: 'Custom image',
                })
            break;

            case -1360+"px":
                Swal.fire({
                    title: 'RESTRINGIDO EL PASO',
                    text: 'El CONDUCTOR no deberá seguir su marcha en los tramos restringidos por esta señal si su vehículo tiene un acho que sobrepase al indicado por la señal.',
                    imageUrl: 'assest/img/no_pase.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                })
            break;

            default:
            console.log("no funciono");
        
        }
        
        return salir;

    }

}