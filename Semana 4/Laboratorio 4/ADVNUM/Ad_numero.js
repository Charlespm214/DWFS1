// Adivinar el número

let numeros=[];
var numeroAleatorio=0;
let mensaje="";
let numero_ingresado;
let sistema="";

function arrayNumeros()
    {
     for(let i=1; i<=100; i++)
        {
            numeros.push(i)
        }
        console.log(numeros);
    }
    arrayNumeros()

function elegirNumero()
    {
        numeroAleatorio= Math.floor(Math.random()*numeros.length);
    }
    elegirNumero()
    console.log(numeroAleatorio)
    
function restablecer()
    {
        document.addEventListener('DOMContentLoaded',function()
            {
                var botonLimpiar=document.getElementById('reset');
                botonLimpiar.addEventListener('click',function()
                    {
                        document.getElementById('txtnumeroIngresado').value="";
                        document.getElementById('respuesta').textContent="";
                        alert("Se ha reiniciado el juego");
                        location.reload()
                    })
            })
    }
    restablecer()

function prueba()
    {
        document.addEventListener('DOMContentLoaded',function()
            {
                var btnValidar=document.getElementById('btnValidar');
                btnValidar.addEventListener('click',function()
                    {
                        numero_ingresado=document.getElementById('txtnumeroIngresado').value;
                        document.getElementById('respuesta').textContent=mensaje;
                        document.getElementById('sistema').textContent=sistema;
    
function validar()
    {
        if(numero_ingresado===0 || numero_ingresado<0 ||numero_ingresado>100)
            {
                mensaje="Sólo puede elegir un número entre 1 y 100";
            }
            else
                {
                    if(numero_ingresado == numeroAleatorio)
                        {
                            mensaje="Felicitaciones!!! Ganaste. "+"\n"+"Tu elección: "+numero_ingresado+" El sistema: "+numeroAleatorio;
                            alert("Juego ganado!!! presione el botón reiniciar para volver a intentarlo");
                        }
                        else
                            {
                                mensaje="Intente nuevamente...";
                                document.getElementById('txtnumeroIngresado').select();
                                if(numero_ingresado>numeroAleatorio)
                                    {
                                        sistema="El número ingresado es mayor al elegido."
                                    }
                                    else
                                        {
                                            sistema="El número ingresado es menor al seleccionado"
                                        }
                            }
                }
                document.getElementById('respuesta').textContent=mensaje;
                document.getElementById('sistema').textContent=sistema;
    }
    validar()
                    })
            })
    }
    prueba()