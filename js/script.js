
// Declaracion del Vector //

const nombres = [];

const registro = document.querySelector('#registrar');

registro.addEventListener('click' , function(evt){
 
    evt.preventDefault();
    registrarNombre();
  
});


const consonantes = document.querySelector('#consonantes');

consonantes.addEventListener('click' , function(evt){
 
    evt.preventDefault();
    mostrarConsonantes();

});

const listar = document.querySelector('#listar');

listar.addEventListener('click' , function(evt){

       evt.preventDefault();
       mostrarNombres();

});

const buscar = document.querySelector('#buscar');

buscar.addEventListener('click' , function(evt){

        evt.preventDefault();

  if(nombres.length > 0){

    let pos;
    const nombre = prompt("Ingrese el nombre a buscar");
    
    if(nombre.length === 0){

         mensaje("No puede ingresar una cadena vacia")

    }else{

    pos = buscarNombre(nombre.toUpperCase());
    const textArea = document.querySelector('#resultado');

    if(pos === -1){
    
        textArea.textContent = "Nombre no encontrado en el sistema";

    }else {

       textArea.textContent = "El nombre:  " + nombre + " fue encontrado en la posicion: " + pos;
      
    }

}

  }else {

    mensaje("No puede buscar un nombre porque no existen datos registrados en el vector");

  }

});

function buscarNombre(nom){
 let flag = -1;

    for(let i=0; i<nombres.length; i++){

          if(nom === nombres[i].toUpperCase()){

             flag = i;
             break;
          }

    }

    return flag;
}

function registrarNombre(){
  
    
    if(nombres.length > 9){

        document.querySelector('#nombre').disabled = true;
        setTimeout(mensaje("No puede ingresar mas de 10 nombres al sistema") , 5000);
    
    }else {

        const nombre = document.querySelector('#nombre');
        const nom = nombre.value;
         
         if(nom.length === 0){

              setTimeout(mensaje("No pude ingresar el nombre como cadena vacia") , 3000)
           
         }else {

             nombres.push(nom);
             nombre.value = "";
             setTimeout(mensaje("Se guardo correctamente el nombre al sistema") , 3000);

         }
          


    }


}


function mostrarNombres(){

   if(nombres.length === 0){
 
        mensaje("No se puede mostar la lista de nombres porque no hay ninguno resgistrado");

   }else {

      
      const resultado = document.querySelector('#resultado');
      let resul = "";
       
      nombres.forEach(function(nom){

          resul+= nom + "\n";
       
      });

      resultado.textContent = resul;

   }

}


function mostrarConsonantes(){

   if(nombres.length === 0){

      mensaje("No se puede mostrar lso nombres con las consonantes porque no existen datos en el vector");

   }else {
 
    let nombre;
    let cant;
    let resul = "";

       nombres.forEach(function(nom){
  
        nombre = nom + "";
        nombre = nombre.toUpperCase();
        cant = obtenerCantidadConsonantes(nombre);
        resul+= "El nombre: " + nombre + " tuvo: " + cant + " consontantes" + "\n";

       });


       const resultado = document.querySelector('#resultado');
       resultado.textContent = resul;
   }

}

function obtenerCantidadConsonantes(texto){
  let car;
  let nom = texto+"";
  let count = 0;
  nom.trim();

    for(let i=0; i<texto.length; i++){

       car = nom.charAt(i);

       switch(car){
 
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case ' ':
        case 'U':break;
        default: count++;

       }

    }


    return count;

}

function mensaje(texto){

    alert(texto);

}