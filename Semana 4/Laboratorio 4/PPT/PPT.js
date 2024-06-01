// Piedra, Papel o Tijera.

let opciones=[];
let mensajeSwitch="";
let User="";
let PC="";
let sUsuario="";
let sistema;
let ganador="";
var eMAleatorio=0;

function arrOpciones()
    {
     for(let i=0; i<3; i++)
        {
            opciones.push(i)
        }
        console.log(opciones);
    }
    arrOpciones()

function usuario(sUsuario)
    {
         document.addEventListener('DOMContentLoaded',function()
            {
                document.getElementById('respuesta').textContent=mensajeSwitch;
            })             
        
function rdmOpciones()
    {
        eMAleatorio= Math.floor(Math.random()* opciones.length);
    }
     rdmOpciones()
    console.log(eMAleatorio)

    sUsuario=parseInt(sUsuario);
    sistema=parseInt(eMAleatorio)
    console.log("User"+sUsuario+" PC: "+sistema)
    

        if(sUsuario==sistema)
            {
                mensajeSwitch="¡Empate!";
                console.log(mensajeSwitch)
                document.getElementById('respuesta').textContent=mensajeSwitch;
            }
            else if(sUsuario==0 && sistema==1)
                {
                    User="Piedra";
                    PC="Papel"
                    mensajeSwitch="Perdiste... "+"\n"+" Elegiste: "+User+"\n"+" Sistema: "+PC;
                    console.log(mensajeSwitch)
                    document.getElementById('respuesta').textContent=mensajeSwitch;
                }
                else if(sUsuario==0 && sistema==2)
                    {
                        User="Piedra";
                        PC="Tijera";
                        mensajeSwitch="Felicitaciones, ganaste!!!"+"\n"+" Elegiste: "+User+"\n"+" Sistema: "+PC;
                        console.log(mensajeSwitch)
                        document.getElementById('respuesta').textContent=mensajeSwitch;
                    }
                    else if(sUsuario==1 && sistema==0)
                        {
                            User="Papel";
                            PC="Piedra";
                            mensajeSwitch="Felicitaciones, ganaste!!!"+"\n"+" Elegiste: "+User+"\n"+" Sistema: "+PC;
                            console.log(mensajeSwitch)
                            document.getElementById('respuesta').textContent=mensajeSwitch;
                        }
                        else if(sUsuario==1 && sistema==2)
                            {
                                User="Papel";
                                PC="Tijera";
                                mensajeSwitch="Perdiste... "+"\n"+" Elegiste: "+User+"\n"+" Sistema: "+PC;
                                console.log(mensajeSwitch)
                                document.getElementById('respuesta').textContent=mensajeSwitch;
                            }
                            else if(sUsuario==2 && sistema==0)
                                {
                                    User="Tijera";
                                    PC="Piedra";
                                    mensajeSwitch="Perdiste... "+"\n"+" Elegiste: "+User+"\n"+" Sistema: "+PC;
                                    console.log(mensajeSwitch)
                                    document.getElementById('respuesta').textContent=mensajeSwitch;
                                }
                                else if(sUsuario==2 && sistema==1)
                                    {
                                        User="Tijera";
                                        PC="Papel";
                                        mensajeSwitch="Felicitaciones, ganaste!!!"+"\n"+" Elegiste: "+User+"\n"+" Sistema: "+PC;
                                        console.log(mensajeSwitch)
                                        document.getElementById('respuesta').textContent=mensajeSwitch;
                                    } 
    }
    usuario()
                    