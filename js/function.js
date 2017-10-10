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
	}