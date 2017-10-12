$(document).ready(function() {//Entra hasta que la pagine cargue

	var arregloObjetos = []; //Guardar posts
	var numeroPost = 0;

	$("button#add-post").on(/*Selector*/"click"/*Evento a manejar*/, function (event) {/*Funcion manejadora*/
		//console.log("Hiciste click");
		var textArea = $("textarea#FormControlTextarea").val(); //Devuelve un string
		//console.log("Estamos listos jQuery");
		//console.log("Contenido", textArea);
		//nuestro nuevo post
		var nuevoPost = {
			//numero: numeroPost = 1,
			numero: arregloObjetos.length + 1,
			contenido: textArea
		};

		console.log(nuevoPost);
		console.log(arregloObjetos);

		
			//numeroPost ++;
			//Obtienes contenido HTML
			var html = $("div#posts").html();
			//console.log(html);
			//Editas contenido HTML
			//$("div#posts").html("<h1>Publicacion</h1>");
			//$("div#posts").prepend("<h1>Publicacion "+(arregloObjetos.length + 1)+"</h1>");
			$("div#posts").prepend('<div class="row">'+
        '<div class="col-md-2">'+
        '</div>'+
        '<!--Contenedor central con las fases de la publicacion-->'+
        '<div class="col-md-8" id="com">'+
          '<div class="row">'+
            '<div class="col-md-2" id="pic">'+
              '<i class="fa fa-cog fa-spin fa-5x fa-fw" aria-hidden="true"></i>'+
            '</div>'+
            '<div class="col-md-6">'+
              '<h2>Ramon</h2>'+
            '<p></p>'+
            '<h4>Post #'+(arregloObjetos.length + 1)+ '</h4>'+
            '</div>'+
          '</div>'+
          '<div class="row justify-content-center">'+
            '<p></p>'+
          '</div>'+
          '<div class="row" id="tex">'+
          nuevoPost.contenido+
            '</div>'+
        '</div>'+
        '<div class="col-md-2">'+
        '</div>'+
      '</div>');

			arregloObjetos[arregloObjetos.length] = nuevoPost; 
	});

});





//Prueba antes de meter a codigo el HTML
/*'<div class="row">'+
        '<div class="col-md-2">'+
        '</div>'+
        '<!--Contenedor central con las fases de la publicacion-->'+
        '<div class="col-md-8" id="com">'+
          '<div class="row">'+
            '<div class="col-md-2" id="pic">'+
              '<i class="fa fa-cog fa-spin fa-5x fa-fw" aria-hidden="true"></i>'+
            '</div>'+
            '<div class="col-md-6">'+
              '<h2>Ramon</h2>'+
            '<p></p>'+
            '<h4>Post '+(arregloObjetos.length + 1)+ '</h4>'+
            '</div>'+
          '</div>'+
          '<div class="row justify-content-center">'+
            '<p></p>'+
          '</div>'+
          '<div class="row" id="tex">'+
          nuevoPost.contenido+
            '<p>Mi vida es bien divertida, Yupi!.</p>'+
          '</div>'+
        '</div>'+
        '<div class="col-md-2">'+
        '</div>'+
      '</div>'*/