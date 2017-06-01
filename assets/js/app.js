var formulario = function(){
	$("#tweet").submit(agregarTweet);
	$("#mensaje").keyup(validarTexto);
};

var agregarTweet = function(e){
		e.preventDefault();
		
		//Obtención de elementos
		var $postContenedor = $("<article />", { "class": "jumbotron" });
		var $postTexto = $("<p></p>");
		
		//Personalización de elementos
		$postTexto.text($("#mensaje").val());

		// Agregar al DOM
		$postContenedor.append($postTexto);
		// Agregar a un elemento existente para visualizarlo
		 $("#post").append($postContenedor);
		// Borrar contenido de textarea
		$("#mensaje").val("");

};

var validarTexto = function(){
	if($(this).val().trim().length > 0){
		$("#publicarTweet").removeAttr("disabled");
		conteoCaracteres();		
	} else {
		$("#publicarTweet").attr("disabled", true);
	}

};

var conteoCaracteres = function(){
	var $caracteres = $("#caracteres").text(140-$("#mensaje").val().trim().length);
		if($caracteres <= 0){
			$("#caracteres").text("-" + $caracteres + $("#mensaje").val().trim().length);
		}
};

$(document).ready(formulario);