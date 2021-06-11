
/*  Primer ejemplo  */

function uno (){
    document.write("Soy la funcion uno: ");
}

function dos(){
    document.write("Llamando a la funcion uno: ");
    //de esta manera estaremos llamando a la funcion UNO desde la funcion DOS
    // uno();
};

// dos();


/* al llamar la funcion DOS() lo que hace imprimir lo escrito,
 depues vemos que se esta llamando a la funcion UNO()
 ve al navegador y verificalo   */





/* Segundo ejemplo */

function telefono(){
    uno();
    dos();
};

telefono()