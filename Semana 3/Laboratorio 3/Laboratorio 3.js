//Punto 1: Determinar el día de la semana con Switch.
let bienvenida1=confirm("¿Quieres saber del 1 al 7 a qué día corresponde?");
let numero_dia=parseInt(prompt("Ingrese el número del día a determinar:"));
let mensaje_switch="";
switch(numero_dia){
    case 0:
        mensaje_switch="El número ingresado es CERO";
    break
    case 1:
        mensaje_switch="El día número "+numero_dia+", corresponde al Lunes";
    break
    case 2:
        mensaje_switch="El día número "+numero_dia+", corresponde al Martes";
    break
    case 3:
        mensaje_switch="El día número "+numero_dia+", corresponde al Miercoles";
    break
    case 4:
        mensaje_switch="El día número "+numero_dia+", corresponde al Jueves";
    break
    case 5:
        mensaje_switch="El día número "+numero_dia+", corresponde al Viernes";
    break
    case 6:
        mensaje_switch="El día número "+numero_dia+", corresponde al Sábado";
    break
    case 7:
        mensaje_switch="El día número "+numero_dia+", corresponde al Domingo";
    break
    default:
        mensaje_switch="El número ingresado no es valido";
        break
}
alert(mensaje_switch);

//Punto 2: Verificar si un número es Par o Impar (If-Else).
let bienvenida2=confirm("¿Desea verificar si el número Par o impar?");
let numeros=parseInt(prompt("Por favor, ingrese el número a revisar: "));
let mensaje_if="";
if(numeros % 2===0){
    mensaje_if="El número "+numeros+", es Par";
}
else{
    mensaje_if="El número "+numeros+", es impar";
}
alert(mensaje_if);


//Punto 3: Determinar  el tipo de día (laboral o si es fin de semana).
let bienvenida3="Que tipo de día de la semana es entre(1 al 7)";
let dia_semana=parseInt(prompt("Digite el número del día (1 - 7): "));
let mensaje_dia="";
if(dia_semana>0 && dia_semana<=5){
    mensaje_dia="Entre semana";
}
else if(dia_semana<=0 || dia_semana>7){
    mensaje_dia="Día de la semana no válido";
}
else if(dia_semana>5 && dia_semana<=7){
    mensaje_dia="Fin de semana";
}
alert(mensaje_dia);
