//Comentario simple
/*comentario multilinea*/
function miFuncion() {
	// body...
	//Hola, soy una variable
	var miVariable0 = "Soy una variable que varia";
	//Hola, soy una salida de consola y me usan para depurar este codigo
	//Me veras en accion cuando abras tu pagina y oprimas F12 seleccionando la pestaña de console
	console.log(miVariable0);
	//Cambiando el valor de la variable
	miVariable0 = 10;
	//mastrando el nuevo valor
	console.log(miVariable0);
}
//Nueva funcion acerca de bucles
function bucles() {
	for (/*inicio*/var x = 0;/*fin*/ x < 10;/*incremento o decremento*/ x++) 
	{
		//salida de variable x
		console.log(x);
	}
	console.log("\n");//salto de linea
	//bucle salta patras
	for (var x = 10; x > 0; x--) 
	{
		console.log(x);
	}
}
//funcion para ver bucles de tipo while - do while
function buclesWhile() 
	{
		//Tipo While
		var contador = 0;
		while(contador < 10)
		{
			console.log(contador);
			contador++;
		}
		console.log("\n");
		//While patras
		var contador1 = 10;
		while(contador1 > 0)
		{
			console.log(contador1);
			contador1--;
		}
	}
//funcion para bucle do while
function buclesDoWhile() 
	{
		//variable contadora
		var contador3 = 0;
		//definicion del bucle
		do
		{
			console.log(contador3);
			contador3++;
		}	while(contador3 < 10);
		console.log("\n");
		//variable contadora
		var contador4 = 10;
		//definicion del bucle
		do
		{
			console.log(contador4);
			contador4--;
		}	while(contador4 > 0);
		//while(contador4--, contador4 > 10);
	}
//funcion para usar operadores aritmeticos
function opeArit() 
	{
		//Definicion de variables
		//Suma
		var op1 = 3;
		var op2 = 10;
		var res = 0;
		res = op1 + op2;
		console.log("Suma");
		console.log(res);
		//Multiplicacion
		console.log("Multiplicacion");
		res = op1 * op2;
		console.log(res);
		//Division
		console.log("Division");
		res = op1 / op2;
		console.log(res);
		//Resta
		console.log("Resta");
		res = op1 - op2;
		console.log(res);
		//Modulo - residuo de una division
		console.log("Modulo");
		res = op1 % op2;
		console.log(res);
		//Exponencial
		console.log("Exponencial");
		res = op1 ** 2;
		console.log(res);
		//Raiz cuadrada
		console.log("Raiz Cuadrada");
		res = Math.sqrt(op2);
		console.log(res);
		//Logaritmo natural
		console.log("Logaritmo");
		res = Math.log(op2);
		console.log(res);
		res = Math.log(-op2);	//NaN Not at Number
		console.log(res);
		res = Math.log(0);		//-Infinity
		console.log(res);
	}
//Operadores logicos
function logicos() 
	{
		//Valores booleanos
		console.log("AND");
		var b = true;
		var c = false;
		var d = (b && c);
		console.log(b && c);
		//Operador AND
		if (!(b && c)) 
		{
			console.log(c);
			console.log(d);
		}
		//OR
		console.log("OR");
		var d = (b || c);
		console.log(d);
		//numeros
		//comparacion
		console.log("Comparacion")
		var g = 0;
		var f = 3;
		var h = -3;
		if (h > g) 
		{
			console.log(h);
		}
		else
		{
			console.log(g);
		}

		console.log("switch");
		var opcion = 4;
		switch(opcion)
		{
			case 0:
				console.log(opcion);
			break;
			case 1:
				console.log(opcion);
			break;
			case 2:
				console.log(opcion);
			break;
			case 3:
				console.log(opcion);
			break;
			case 4:
				console.log(opcion);
			break;
			default:
				console.log("No esta la opcion");
				//caract[caract.length]=""
		}

	}
//Arreglo
function arreglo() 
	{
		console.log("Arreglo");
		var miArreglo = [5,1,3,7,8,0,9,4];
		console.log(miArreglo.length)
		console.log("Inicializar y mostrar elementos");
		for (var t = 0; t < miArreglo.length; t++) 
		{
			console.log("Posicion o indice "+t+" :"+miArreglo[t]);
		}
		//Busqueda binaria
		console.log("Buscar en un arreglo un numero y romper el ciclo cuando se haya encontrado");
		var valorReferencial = 9;
		for (var t = 0; t < miArreglo.length; t++) 
		{
			if (miArreglo[t]==valorReferencial) 
			{
				console.log("Valor encontrado en la posicion: "+t+ "y el numero es: "+valorReferencial);
				break;
			}
			else
			{
				console.log("El valor: "+miArreglo[t]+" no es el indicado");
			}
		}
		//Busqueda binaria con while
		console.log("Buscar un arreglo con while");
		var t = 0;
		valorReferencial = 0;
		while(miArreglo[t] != valorReferencial)
		{
			console.log(miArreglo[t]);
			t++;
			if (miArreglo.length < t) 
			{
				break;
			}
		}
		//mostrar donde lo encontre
		console.log("Valor encontrado en: "+t+" - "+valorReferencial);
		//Mostrar while con el uso de Bandera
		console.log("Arreglo con bandera");
		var t = 0;
		valorReferencial = 0;
		var banderas = false;
		while( !banderas && (t < miArreglo.length))
		{
			console.log(miArreglo[t]+" : "+valorReferencial);
			banderas = (miArreglo[t] == valorReferencial);
			console.log("Estado de la bandera: "+banderas);
			t++;
		}
		//Mostrar datos
		console.log("Valor encontrado en: "+t+" - "+valorReferencial);

		//foreach?
		console.log("For each");
		for (var e in miArreglo) 
		{
			console.log(miArreglo[e]);
			//miArreglo[e] = -1; asignar valor pero aplica para todo el array
		}
		console.log(miArreglo);
	}
	//Funcion para limpiar la consola
	function limpieza() 
	{
		console.clear();
	}
	//Funcion para llamar alert
	var cadena = "Soy global";
	function misAlerts() 
	{
		//Enviar alerta
		alert("Hola Mundo! "+cadena);
	}

	//Variable global
	var persona = 
	{
		nombre : "Juan",
		edad : 25,
		colorDeOjos : "verde",
		miFuncion: function /*opcional-->*/unaFuncion() 
		{
			console.log("funcion interna");
		}
	}

	var gente = [{
		nombre : "Juan",
		edad : 25,
		colorDeOjos : "verde"
	},{
		nombre : "Pedro",
		edad : 21,
		colorDeOjos : "azul"
	},{
		nombre : "Martin",
		edad : 25,
		colorDeOjos : "cafe"
	},{
		nombre : "Tere",
		edad : 24,
		colorDeOjos : "verde"
	},{
		nombre : "Leo",
		edad : 30,
		colorDeOjos : "negro"
	},{
		nombre : "Ema",
		edad : 26,
		colorDeOjos : "cafe"
	}]


	var computadora = {
		marca : "Asus",
		modelo : "DX763",
		procesador : "i7",
		tarjetaDeVideo : "Nvidia",
		memoriaRam : "16GB"
	}

	var vehiculo = {
		marca : "VW",
		modelo : "Bora",
		version : "Style",
		año : 2017,
		motor : 2.5
	}

	var generation = { //Objeto
		curso : "Java Back-End", //atributo definido por llave: valor
		fechaInicio : "DX763",
		alumnos : 100,
		grupos : 4,
		academicos : 9
	}


	function manejarObjetos() 
	{	
		console.log("Pruebas con el maestro");
		var dinamico = "colorDeOjos";
		console.log(Object.keys(persona));
		console.log(persona);
		console.log(persona.nombre);
		console.log(persona["nombre"]);
		console.log(persona[dinamico]);
		//Jugando con el codigo
		console.log("Mis pruebas");
		console.log(Object.keys(computadora));
		console.log(computadora);
		console.log(computadora["marca"]);
		console.log(Object.keys(vehiculo));
		console.log(vehiculo);
		console.log(vehiculo.modelo);
		console.log(Object.keys(generation));
		console.log(generation);
		console.log(generation.curso+" con: "+generation["alumnos"]);
		console.log(generation,vehiculo);
		console.log("Funcion dentro de un objeto");
		persona.miFuncion();
		//concatenacion de dos arreglos
		var alpha = ['a', 'b', 'c'],
    		numeric = [1, 2, 3];

		var alphaNumeric = alpha.concat(numeric);

		console.log(alphaNumeric); 
		// Da como resultado: ['a', 'b', 'c', 1, 2, 3]

		console.log(gente);
		console.log(gente[1]);
		console.log(gente[1].colorDeOjos);
		console.log(gente[1]["nombre"]);
		for (var valorInicial = 0; valorInicial < gente.length; valorInicial++) 
		{
			console.log(gente[valorInicial]);
		}
	}