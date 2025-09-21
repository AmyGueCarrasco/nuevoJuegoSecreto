// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos =[];
let amigoSorteado =[];


function agregarAmigo(){
      let nombreRecibido = document.getElementById('amigo').value.trim();
      console.log(nombreRecibido);
      limpiarCaja();

      if(nombreRecibido === ""){

          alert('Por favor introduce un nombre, no se reciben espacios vacios');

      }else{
         listaAmigos.push(nombreRecibido);
         muestraLista('#listaAmigos',nombreRecibido);
         console.log(listaAmigos);
      }

}

function muestraLista(elemento,texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML += `<li>${texto}</li>`;
    return;
}

function sortearAmigo(){

    let longitudLista = listaAmigos.length;
    if(longitudLista == 0){
       alert('Por favor ingresa una lista, se necesita una lista para el Sorteo');
    }else{
    let espacioSorteado = Math.floor(Math.random()* longitudLista);
    console.log(espacioSorteado);
    
    console.log(listaAmigos[espacioSorteado]);

    amigoSorteado.push(listaAmigos[espacioSorteado]);

    document.querySelector('#resultado').innerHTML = `<li> Tu amigo secreto es: ${amigoSorteado}</li>`
    amigoSorteado = [];
    }
    return amigoSorteado;
}

function nuevaLista(){
    listaAmigos = [];   
    console.log(listaAmigos);
    amigoSorteado= [];
    console.log(amigoSorteado);

    document.querySelector('#listaAmigos').innerHTML = '';
    document.querySelector('#resultado').innerHTML = '';
    limpiarCaja();
    return;

}

function limpiarCaja(){
    document.querySelector('#amigo').value ='';
    return;
}

function limpiarLista(){
    document.querySelector('#listaAmigos').innerHTML = '';
    return;
}