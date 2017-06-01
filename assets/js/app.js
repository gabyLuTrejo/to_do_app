
var formulario = function(){
	var toDo = document.getElementById("toDo");
	toDo.addEventListener("submit", function(e){
		e.preventDefault();
		// Obtención de datos
		var contenedor = document.getElementById("post");
		var msjContenedor = document.getElementById("mensaje");
		var msj = msjContenedor.value;
		//Obtención de elementos
		var postContenedor = document.createElement("article");
		var post = document.createElement("p");
		//Personalización de elementos
		postContenedor.className = "jumbotron";
		post.textContent = msj;
		// Agregar al DOM
		postContenedor.appendChild(post);
		// Agregar a un elemento existente para visualizarlo
		contenedor.appendChild(postContenedor);
		// Borrar contenido de textarea
		msjContenedor.value = "";

	});
};

window.addEventListener("load", formulario);