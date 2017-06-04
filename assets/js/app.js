var formulario = function(){
	$("#tweet").submit(agregarTweet);
	$("#mensaje").keyup(validarTexto);
};

var agregarTweet = function(e){
    e.preventDefault();

    //Obtención de elementos
    var $postContenedor = $("<article />", { "class": "jumbotron" });
    var $postTexto = $("<p />");

    //Personalización de elementos
    $postTexto.text($("#mensaje").val());

    // Agregar al DOM
    $postContenedor.append($postTexto);
    // Agregar a un elemento existente para visualizarlo
    $("#post").append($postContenedor);
    // Borrar contenido de textarea
    $("#mensaje").val("");
    validarTexto();

};

var validarTexto = function(){
    var $caracteres = conteoCaracteres();
    colores(Number($caracteres));
	if($caracteres < 140 && $caracteres > -1){
		$("#publicarTweet").removeAttr("disabled"); 
        
				
	} else {
		$("#publicarTweet").attr("disabled", true);
	}

};

var conteoCaracteres = function(){
	var $caracteres = $("#caracteres").text(140-$("#mensaje").val().trim().length);
    if($caracteres <= 0){
        $("#caracteres").text("-" + $caracteres + $("#mensaje").val().trim().length);
    }
    return $caracteres.text();
};


var colores = function(numero){
    if(numero < 21 && numero > 10){
        $("#caracteres").removeClass("textoNaranja");
        $("#caracteres").addClass("textoAzul");
    }
    if(numero < 10 && numero > -1){
        $("#caracteres").removeClass("textoAzul");
        $("#caracteres").removeClass("textoRojo");
        $("#caracteres").addClass("textoNaranja");
    }
    if(numero < 0){
        $("#caracteres").removeClass("textoNaranja");
        $("#caracteres").addClass("textoRojo"); 
    }
    if(numero > 21){
        $("#caracteres").removeClass("textoAzul");
    }
};

$(document).ready(formulario);
