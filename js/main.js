//Función para mapeo de imagen de página principal
let clickMap = (opcion) => {
    switch (opcion) {
        case 0: 
            $("#foto-modal").attr('src', "../assets/img/barril-filling-res78-difu.png");
            $("#txt-modal-titulo").html("No pierdas más Barriles");
            $("#txt-modal-parrafo").html("Organiza tus despachos y retiros, minimiza las pérdidas.");        
        break;
        case 1: console.log('se selecciono el cod-barra');
            $("#foto-modal").attr('src', "../assets/img/en-constru.png");
            $("#txt-modal-titulo").html("En construcción"); 
            $("#txt-modal-parrafo").html("Estamos maullando para usted.");
        break;
        case 2: 
            $("#foto-modal").attr('src', "../assets/img/camion-ajus.png");
            $("#txt-modal-titulo").html("Localiza todos tus barriles.");
            $("#txt-modal-parrafo").html("Monitorea la ubicación de tus activos y organiza tu ruta de la forma más óptima.");
        break; 
        case 3: console.log('se selecciono el tiempo'); 
            $("#foto-modal").attr('src', "../assets/img/en-constru.png");
            $("#txt-modal-titulo").html("En construcción"); 
            $("#txt-modal-parrafo").html("Estamos maullando para usted.");

        break;
        case 4: console.log('se selecciono el graficos');
            $("#foto-modal").attr('src', "../assets/img/en-constru.png");
            $("#txt-modal-titulo").html("En construcción");  
            $("#txt-modal-parrafo").html("Estamos maullando para usted.");
        break;
        case 5: console.log('se selecciono el barril2'); 
            $("#foto-modal").attr('src', "../assets/img/en-constru.png");
            $("#txt-modal-titulo").html("En construcción"); 
            $("#txt-modal-parrafo").html("Estamos maullando para usted.");
        break;
        case 6:
            $("#foto-modal").attr('src', "../assets/img/bagazo-ajustado.png");
            $("#txt-modal-titulo").html("Automatiza tareas de inventario");
            $("#txt-modal-parrafo").html("Despreocúpate de tu logística y prioriza otros procesos de tu cervecería.");
        break;
        case 7: console.log('se selecciono el beershop');
            $("#foto-modal").attr('src', "../assets/img/en-constru.png");
            $("#txt-modal-titulo").html("En construcción");
            $("#txt-modal-parrafo").html("Estamos maullando para usted.");  
        break;      
    }
}


//Funcion para validar formulario
function validarForm(){
    const forms = document.querySelectorAll('.needs-validation');

    let estado = false; 

    forms.forEach(form => {
        if (form.checkValidity()) { 
            estado = true;

            document.querySelector('#notificacion-contacto').classList.remove('d-none');
        };

        form.classList.add('was-validated');
    });

    return estado;
};  