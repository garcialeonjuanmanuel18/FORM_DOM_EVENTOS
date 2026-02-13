//Obtenemos id
const registroForm = document.getElementById("registroForm");
const div = document.getElementById("div");
contenedor.style.display = "none"; //ocultamos el div 

function validarFormulario(registroForm) {
    const campos = registroForm.elements; //lista de elementos del formulario
    let validez = true; //todo está bien hasta que comprobemos el formulario

    for (let i = 0; i < campos.length; i++){
        const campo = campos[i];//recuperamos el campo por el que voy
        let datosHtml = ""; //aquí creo una variable para meter los datos del formulario y que se vean
        if(campo.type === "submit") "continue";
        const valor = campo.value.trim();//recupero el valor de cada uno de los campos

        switch (campo.type) { //switch según el tipo de campo

        }

        //
        if (validez){

        }



    }
}

registroForm.addEventListener("submit", function(e){
    e.preventDefault(); //DETENER EL ENVÍO AUTOMÁTICO
    validarFormulario(this); //pasamos el formulario a la funcion
});