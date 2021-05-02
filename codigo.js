function cargarDiccionario(){
    
    //Crea un nuevo objeto XMLHttpRequest
var xhr = new XMLHttpRequest();
var url = 'https://ordenalfabetix.unileon.es/aw/diccionario.txt';
    

//Esto se llamará después de que la respuesta se reciba

xhr.onload = function() { //para no detectar estados intermedios uso onload
 
    if (xhr.status != 200) { // analiza el estado HTTP de la respuesta 200 = respuesta OK; != no ha ido bien la peticion
    
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado

    }else { //muestra el resultado
    
        //recibo las palabras todas seguidas en mogollon del txt y las paso a procesar
        procesarDiccionario(xhr.responseText);
   
    }
};


xhr.onerror = function() {
  alert("Solicitud fallida");
};


 //compongo la peticion GET para la URL establecida
 xhr.open('GET', url, true);
 //Envía la solicitud a la red
 xhr.send();

}

function procesarDiccionario(retahilaPalabras){

listaPalabras = retahilaPalabras.split("\n"); //divido por el retorno de carro porque vienen cada palabra en una linea y las salvo en un array

 //for(i = 0; i < 10; i++){ 
   //    console.log(listaPalabras[i]); 
     //  console.log(listaPalabras[i].length); 
    //}

palabrDeCuatro = []
palabrDeSeis = []
j = 0;
k = 0;
diccionario = [];

    for(i=0; i<listaPalabras.length; i++){  //recorro todas las palabras del txt

        if(listaPalabras[i].length == 4){
            //solo me interesan del txt las palabras de longitud 4 y 6 el resto las desecho
            palabrDeCuatro[j] = listaPalabras[i];
            j++;

        }else if(listaPalabras[i].length == 6){
            palabrDeSeis[k] = listaPalabras[i];
            k++;
        }


    }


        /*PARA QUE NO DE FALLO METER EN DICCIONARIO LAS PALABRAS FALTANTES DE LA SOLUCION*/
    //palabrDeCuatro = meterPalabraEnDiccionario("nací", palabrDeCuatro);
    //palabrDeCuatro = meterPalabraEnDiccionario("nace", palabrDeCuatro);
    //palabrDeSeis = meterPalabraEnDiccionario("remato", palabrDeSeis);
    //palabrDeSeis = meterPalabraEnDiccionario("tolero", palabrDeSeis);


    

    diccionario = palabrDeCuatro.concat(palabrDeSeis); //concateno los dos arrays en el definitivo para no hace otro blucle
    //console.log(diccionario.length) //12236

    //ya tenemos procesado y guardado el diccionario con las palabras que nos interesan para el juego solamente (agrupadas las de cuatro primero y luego las de seis)
    
}

function comprobarPalabra(IDCeldaPierdeFoco){
        
    //ACCESIBILIDAD: Si la tecla que lo activó fue el tabulador o shift+tab, que no salte constantemente la verificacion porque igual está volviendo a la casilla para cambiarla mediante el teclado
    key = event.keyCode || event.charCode;
    //console.log(key)
    if(key === 9 || key === 16){
        return;
    }


    //Lo primero hay que mirar si las casillas adyacentes estan completas
    //1. Sacamos la fila en la que estamos
    if(IDCeldaPierdeFoco.length == 2){
        fila = IDCeldaPierdeFoco.substring(1,2); //pej: 1   OJO!!! puede haber pej:12; si la longitud de lo que viene (a1 o a12) es 2 o 3 dependiendo se saca el o los 2 ultimos
    }else if(IDCeldaPierdeFoco.length == 3){
        fila = IDCeldaPierdeFoco.substring(1,3);
    }
    
    //2. La metemos en el switch
    //3. Miramos el resto de columnas de esa fila (si estan distintas de vacío todas, llamamos a existeEnDiccionario, si no, no hacemos nada, porque no esta completa la palabra)

    switch(fila) {
        case "1":
            if(document.getElementById("a1").value != "" && document.getElementById("b1").value != "" && document.getElementById("c1").value != "" && document.getElementById("d1").value != ""){
                //las 4 celdas estan completas, verificamos la palabra
                palabra = document.getElementById("a1").value + document.getElementById("b1").value + document.getElementById("c1").value + document.getElementById("d1").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }
            }
          break;
        case "2":
            if(document.getElementById("a2").value != "" && document.getElementById("b2").value != "" && document.getElementById("c2").value != "" && document.getElementById("d2").value != ""){
                palabra = document.getElementById("a2").value + document.getElementById("b2").value + document.getElementById("c2").value + document.getElementById("d2").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }
            }
          break;
        case "3":
            if(document.getElementById("a3").value != "" && document.getElementById("b3").value != "" && document.getElementById("c3").value != "" && document.getElementById("d3").value != ""){
                palabra = document.getElementById("a3").value + document.getElementById("b3").value + document.getElementById("c3").value + document.getElementById("d3").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "4":
            if(document.getElementById("a4").value != "" && document.getElementById("b4").value != "" && document.getElementById("c4").value != "" && document.getElementById("d4").value != ""){
                palabra = document.getElementById("a4").value + document.getElementById("b4").value + document.getElementById("c4").value + document.getElementById("d4").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "5":
            if(document.getElementById("a5").value != "" && document.getElementById("b5").value != "" && document.getElementById("c5").value != "" && document.getElementById("d5").value != ""){
                palabra = document.getElementById("a5").value + document.getElementById("b5").value + document.getElementById("c5").value + document.getElementById("d5").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "6":
            if(document.getElementById("a6").value != "" && document.getElementById("b6").value != "" && document.getElementById("c6").value != "" && document.getElementById("d6").value != ""){
                palabra = document.getElementById("a6").value + document.getElementById("b6").value + document.getElementById("c6").value + document.getElementById("d6").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "7":
            if(document.getElementById("a7").value != "" && document.getElementById("b7").value != "" && document.getElementById("c7").value != "" && document.getElementById("d7").value != "" && document.getElementById("e7").value != "" && document.getElementById("f7").value != ""){
                palabra = document.getElementById("a7").value + document.getElementById("b7").value + document.getElementById("c7").value + document.getElementById("d7").value + document.getElementById("e7").value + document.getElementById("f7").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "8":
            if(document.getElementById("a8").value != "" && document.getElementById("b8").value != "" && document.getElementById("c8").value != "" && document.getElementById("d8").value != "" && document.getElementById("e8").value != "" && document.getElementById("f8").value != ""){
                palabra = document.getElementById("a8").value + document.getElementById("b8").value + document.getElementById("c8").value + document.getElementById("d8").value + document.getElementById("e8").value + document.getElementById("f8").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "9":
            if(document.getElementById("a9").value != "" && document.getElementById("b9").value != "" && document.getElementById("c9").value != "" && document.getElementById("d9").value != "" && document.getElementById("e9").value != "" && document.getElementById("f9").value != ""){
                palabra = document.getElementById("a9").value + document.getElementById("b9").value + document.getElementById("c9").value + document.getElementById("d9").value + document.getElementById("e9").value + document.getElementById("f9").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "10":
            if(document.getElementById("a10").value != "" && document.getElementById("b10").value != "" && document.getElementById("c10").value != "" && document.getElementById("d10").value != "" && document.getElementById("e10").value != "" && document.getElementById("f10").value != ""){
                palabra = document.getElementById("a10").value + document.getElementById("b10").value + document.getElementById("c10").value + document.getElementById("d10").value + document.getElementById("e10").value + document.getElementById("f10").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "11":
            if(document.getElementById("a11").value != "" && document.getElementById("b11").value != "" && document.getElementById("c11").value != "" && document.getElementById("d11").value != "" && document.getElementById("e11").value != "" && document.getElementById("f11").value != ""){
                palabra = document.getElementById("a11").value + document.getElementById("b11").value + document.getElementById("c11").value + document.getElementById("d11").value + document.getElementById("e11").value + document.getElementById("f11").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
        case "12":
            if(document.getElementById("a12").value != "" && document.getElementById("b12").value != "" && document.getElementById("c12").value != "" && document.getElementById("d12").value != "" && document.getElementById("e12").value != "" && document.getElementById("f12").value != ""){
                palabra = document.getElementById("a12").value + document.getElementById("b12").value + document.getElementById("c12").value + document.getElementById("d12").value + document.getElementById("e12").value + document.getElementById("f12").value;
                if(existeEnDiccionario(palabra.toLowerCase()) == false){
                    alert("La palabra "+palabra+" no se encuentra en el diccionario.");
                }

            }
          break;
      } 

      //columna = IDCeldaPierdeFoco.substring(0,1); //pej: a



}

function existeEnDiccionario(palabra){
    
    min = 0;
    max = diccionario.length-1;
    encontrada = false;

    console.log(palabra)


    if(palabra.length == 4){


            //Búsqueda Binaria para ver si la palabra DE LONG 4 está en el diccionario (HABRA QUE IR A LA PRIMERA MITAD DEL ARRAY)
      

            while(encontrada === false && min <= max){ //=== igual en tipo y valor

                media = Math.floor((min + max) / 2);

                if(diccionario[media].localeCompare(palabra) == 0 ){
                    //son iguales
                    encontrada = true;
                    
                }else if (diccionario[media].localeCompare(palabra) > 0 || diccionario[media].length == 6){
                    //la actual es mas grande (posterior) que la que buscamos ó tiene longitud 6 primera mitad
                    max = media -1;

                }else if(diccionario[media].localeCompare(palabra) < 0 && diccionario[media].length == 4){
                    //la actual es mas pequeña (anterior lexicografiacmente) que la que buscamos y tiene longitud 4 segunda mitad
                    min = media +1;
                }

            }

    }else if(palabra.length == 6){

            //Búsqueda Binaria para ver si la palabra DE LONG 6 está en el diccionario (HABRA QUE IR A LA SEGUNDA MITAD DEL ARRAY)
         

            while(encontrada === false && min <= max){ //=== igual en tipo y valor

                media = Math.floor((min + max) / 2);

                if(diccionario[media].localeCompare(palabra) == 0 ){
                    //son iguales
                    encontrada = true;
                    
                }else if (diccionario[media].localeCompare(palabra) > 0 && diccionario[media].length == 6){
                    //la actual es mas grande (posterior) que la que buscamos y tiene longitud 6 primera mitad
                    max = media -1;

                }else if(diccionario[media].localeCompare(palabra) < 0 || diccionario[media].length == 4){
                    //la actual es mas pequeña (anterior lexicografiacmente) que la que buscamos o tiene longitud 4 segunda mitad
                    min = media +1;
                }

            }



    }

    return encontrada;

}

/* OPCION SIN BUSQUEDA BINARIA
function existeEnDiccionario(palabra){
    //en funcion de la longitud de la palabra introducida buscaremos entre las de esa longitud solamente
    //como las de 4 estan al ppio y las de 6 al final. Si es de 4 voy de 0 incrementando y si es de 6 empiezo por el final y voy hacia atras
    testigo = false;

    if(palabra.length == 4){
        pos = 0;

        while(diccionario[pos].length == 4){//mientras la palabra por la que voy del diccionario siga siendo de 4

            if(diccionario[pos] == palabra){ // si se encuentra 
                testigo = true;
                break;
            }


            pos++;
        }


    }else if(palabra.length == 6){
        pos = diccionario.length-1; //ultima pos del diccionario

        while(diccionario[pos].length == 6){//mientras la palabra por la que voy del diccionario siga siendo de 6

            if(diccionario[pos] == palabra){ // si se encuentra 
                testigo = true;
                break;
            }


            pos--;
        }

    }
    


    return testigo;
}
*/

function buscarPistas(){

    //Si el contador de pistas está en 0, ya se han consumido todas y se muestra una alerta
    if(contadorPistas == 0){
        alert("Se han consumido todas las pistas disponibles");
        return;
    }

    //Decrementamos en 1 el contador, porque se ha consumido una pista
    contadorPistas--;
    document.getElementById("pistasRestantes").innerHTML = "Pistas "+contadorPistas;

    pistas = [];
    i = 0;
    
     //Saco la palabra del campo de busqueda y la paso a minusculas

    letras = document.getElementById("inputPistas").value.toLowerCase();
    console.log(letras)
    
    if(letras.length == 4){ //si las letras a buscar son 4
       pos = 0;
        while(diccionario[pos].length == 4){//mientras la palabra por la que voy del diccionario siga siendo de 4

            if(letras != diccionario[pos]){ //si la palabra es exactamente la misma que no la añada

                testigo = comprobarPista(diccionario[pos], letras); //miro si es valida la palabra del diccionario
                if(testigo == true){
                    pistas[i] = diccionario[pos].toUpperCase(); //si lo es la pongo en la lista a pintar
                    i++;
                }

                
            }
            pos++;
            
        }

        mostrarPistas(pistas);
        
    }else if(letras.length == 6){
        pistas = [];
        i = 0;
        pos = diccionario.length-1; //ultima pos del diccionario

        while(diccionario[pos].length == 6){//mientras la palabra por la que voy del diccionario siga siendo de 6

            if(letras != diccionario[pos]){ //si la palabra es exactamente la misma que no la añada

                testigo = comprobarPista(diccionario[pos], letras); //miro si es valida la palabra del diccionario
                if(testigo == true){
                    pistas[i] = diccionario[pos].toUpperCase(); //si lo es la pongo en la lista a pintar
                    i++;
                }


                /*if(diccionario[pos].includes(letras[0]) && diccionario[pos].includes(letras[1]) && diccionario[pos].includes(letras[2]) && diccionario[pos].includes(letras[3]) && diccionario[pos].includes(letras[4]) && diccionario[pos].includes(letras[5])){  */

                    /*if(letras.includes(diccionario[pos][0]) && letras.includes(diccionario[pos][1]) && letras.includes(diccionario[pos][2]) && letras.includes(diccionario[pos][3]) && letras.includes(diccionario[pos][4]) && letras.includes(diccionario[pos][5])){  */
                      //miro que la ocurrencia de cada letra es justo exactamente 1 en la palabra (para que sea exactamente el mismo numero de cada letra). El || [] es porque si son 0 da null y null con lenght es puntero nulo.
                
                //}

            }
            pos--;
        }
        mostrarPistas(pistas);

    }

}   

function comprobarPista(pista, letras){
    valida = true;

    for(j=0; j<letras.length; j++){ //recorremos todas las letras a buscar
        if(pista.includes(letras[j])){ //si incluye a la letra
            pista = pista.replace(letras[j], ''); //la borramos (por si se diera el caso de buscar 2 r y mappeara las dos de busqueda sobre la misma)
        }else{
            return false; //en el momento en que no incluya una letra la desechamos    
        }
    }
    return valida;
}

function mostrarPistas(listaPistas){

    //recupero el elemento html DIV que contendrá la lista
    div = document.getElementById("pistasLista")
    //creo una lista
    nuevalista = document.createElement('ul'), //unordered list
    //añado la lista como hijo del div (dentro del div) que la contendrá en la página (como meter una foto en un cuadro)
    div.appendChild(nuevalista);
 
    for (i = 0; i < listaPistas.length; i++) {
        //creo un elemento en la lista
        entradaListaSubi = document.createElement('li'); //list item
 
        //le pongo el contenido como cuando cojo un elemento HTML con el getElem...ById
        entradaListaSubi.innerHTML = listaPistas[i];
 
        //Añado el elemento a la lista
        nuevalista.appendChild(entradaListaSubi);
    }

}

function borrarListaPistas(){
    document.getElementById("pistasLista").innerHTML = ""; //borro las pistas anteriores
}

function mirarSiVacio(){

    if(document.getElementById("inputPistas").value == ""){
        alert("Puede introducir una secuencia de 4 ó 6 letras en el campo adyacente y obtener una lista de opciones de palabras presentes en el diccionario cargado, con exactamente esas letras");
    }else{
        //Si el usuario ha escrito algo en el campo, se borra la lista anterior y se busca lo nuevo escrito
        borrarListaPistas();
        buscarPistas();
    }

}

function autoguardarCelda(Id){
    //Lo primero comprobaremos si se ha permitido el almacenamiento local para guardar la resolucion parcial, sino, salgo igual que entré
    
    if(permitirAlmLocal){
          //cada vez que se produce un cambio en el pasatiempo guardo, grabando el tablero completo en un string separado por comas
        pasatiempoLocal = "";

        formulario = document.getElementById("tablaJuego").elements; //recorro el formulario que tiene los inputs que forman el tablero

        for(i = 0 ; i < formulario.length ; i++){
            input = formulario.item(i); //cojo cada input del formulario

                if(input.value == ""){ //si la celda esta vacia metemos un * para mantener las posiciones vacias y que se guarde algo en el string
                    pasatiempoLocal = pasatiempoLocal + "*";
                }else{
                    pasatiempoLocal = pasatiempoLocal + input.value; //añado su valor al string
                }
        }


        localStorage.setItem("pasatiempo1", pasatiempoLocal); //guardo en el almacenamiento local la cadena que representa el tablero en el estado actual        
        //console.log(localStorage.getItem("pasatiempo1"));


    }
}

function permitirAlmacenLocal(){
    permitirAlmLocal = true;
    
}

function existePasatiempoGuardado(){
    
    if(localStorage.getItem("pasatiempo1") != null){ //si es null, es que no se ha guardado ninguna solucion parcial
        
        //si es disinto a null pregunto si se quiere cargar el contenido
    
        respuesta = confirm("Se ha detectado una resolución parcial anterior ¿Desea recuperarla ó deshecharla?");
        
        if(respuesta == true){ //si dice que si se carga
    
            mostrarPasatiempoGuardado();
    
        }else{ 
             //si no quiere recuperarlo se borra
             borrarAlmLocal()
        }
    }
}

function mostrarPasatiempoGuardado(){
    
    //cargo los valores guardados en las celdas del tablero

    tablero = localStorage.getItem("pasatiempo1");


    
    formulario = document.getElementById("tablaJuego").elements; //recorro el formulario que tiene los inputs que forman el tablero

        for(i = 0 ; i < formulario.length ; i++){
            input = formulario.item(i); //cojo cada input del formulario
            if(tablero[i]!="*"){
                input.value = tablero[i];
            }
        }
    

}

function limpiarPagina(){
   
    limpiarTablero();
    document.getElementById("inputPistas").value = ""; //limpio el cuadro de busqueda de palabras 

}

/*AUXILIARES*/
function limpiarTablero(){
    document.getElementById("tablaJuego").reset(); //limpia el tablero completo
}

function borrarAlmLocal(){
    localStorage.clear();
}

function confirmacionBorrado(){

    if(localStorage.getItem("pasatiempo1") != null){
    respuesta = confirm("¿Está seguro de que desea borrar la solución parcial autoguardada?");
        
        if(respuesta == true){ //si dice que si la borramos
    
            borrarAlmLocal();
        }
    }else{
        alert("No existe ninguna solución parcial autoguardada, si desea activar\nla funcionalidad debe Aceptarla en el diálogo flotante que se muestra\nen la parte inferior y escribir en el pasatiempo.");
    }

}


/*FUNCIONALIDAD EXTRA: METER PALABRAS QUE FALTAN AL DICCIONARIO*/

function meterPalabraEnDiccionario(palabra, arrayPalsDeEsaLong){

    //coger la palabra que viene como parametro y meterla en orden en el diccionario.
    //Me viene una palabra de 4 o de 6 y el array de palabras del diccionario solo de esa longitud en orden


    //encasillo la palabra que me pasan
    arrayActualizado = []
    metida = false;
    pos = 0;

    for(i=0;i<arrayPalsDeEsaLong.length;i++){

        if(arrayPalsDeEsaLong[i].localeCompare(palabra) == 0){
            
            //si la palabra es igual, es que ya estaba en el diccionario y no toco nada, retorno el array tal cual entré
            console.log("La palabra que intenta introducir ya está en el diccionario");
            return arrayPalsDeEsaLong;
      

        }else if(arrayPalsDeEsaLong[i].localeCompare(palabra) > 0){


            if(metida == false){

                //si la palabra actual es mayor a la que tenemos la metemos justo ahí
                arrayActualizado[pos] = palabra; //guardamos la palabra 
                pos++; //avanzamos 1 en el nuevo
                arrayActualizado[pos] = arrayPalsDeEsaLong[i]; //guardamos la palabra mayor
                pos++;
                metida = true;

            }else{//una vez metida todas seran mayores asi que necesito hacer una rama distinta dentro de el caso
                arrayActualizado[pos] = arrayPalsDeEsaLong[i]; 
                pos++;
            }


        }else{
            //la palabra es menor a la que tenemos, metemos la palabra y seguimos adelante mirando
            arrayActualizado[pos] = arrayPalsDeEsaLong[i]; 
            pos++;
        }


    }


    return arrayActualizado;



}
/*FUNCIONALIDAD EXTRA: COMPROBAR LAS DEFINICIONES -> NOTA: ASIGNAR A BOTON ON CLICK*/
function comprobarPistas(){
    //verifica que las palabras introducidas en las pistas corresponden con las definiciones dadas
    pistasBuenas = ["CLAN","PENA","REMATO","TORERO"];

    pista1 = document.getElementById("a1").value + document.getElementById("b1").value + document.getElementById("c1").value + document.getElementById("d1").value;
    pista2 = document.getElementById("a6").value + document.getElementById("b6").value + document.getElementById("c6").value + document.getElementById("d6").value;
    pista3 = document.getElementById("a7").value + document.getElementById("b7").value + document.getElementById("c7").value + document.getElementById("d7").value + document.getElementById("e7").value + document.getElementById("f7").value;
    pista4 = document.getElementById("a12").value + document.getElementById("b12").value + document.getElementById("c12").value + document.getElementById("d12").value + document.getElementById("e12").value + document.getElementById("f12").value;

    if(pista1 != pistasBuenas[0]){
        alert("La pista 1 no es correcta");
    }
    if(pista2 != pistasBuenas[1]){
        alert("La pista 2 no es correcta");
    }
    if(pista3 != pistasBuenas[2]){
        alert("La pista 3 no es correcta");
    }
    if(pista4 != pistasBuenas[3]){
        alert("La pista 4 no es correcta");
    }




}

var pasatiempoLocal = "";
var permitirAlmLocal = false;
var diccionario;
var contadorPistas = 3;