var formulario = function(){
	$("#tweet").submit(agregarTweet);
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

$(document).ready(formulario);