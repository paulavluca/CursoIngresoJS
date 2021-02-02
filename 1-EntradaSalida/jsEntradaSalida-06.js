/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variable
	var numero1;
	var numero2;
	var numero3;
	var numeroUnoParseado;
	var numeroDosParseado;
	//asigno
	numero1=txtIdNumeroUno.value;
	numero2=txtIdNumeroDos.value;
	
	numeroUnoParseado = parseInt(numero1);
	numeroDosParseado = parseInt(numero2);

	suma= numeroUnoParseado + numeroDosParseado
	


		
	alert("La suma es "+suma);
}

