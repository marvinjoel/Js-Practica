// Creando mi primera clase
class miClase{
    // Definicion del constructor
    constructor(primero, segundo){
        this.uno = primero;
        this.dos = segundo;
    };

    // definicion de un metodo sin parametros
    miMetodoUno(){
        return this.uno
    };

    // definicion de un metodo con 2 parametros
    miMetodoDos(parametroUno, parametroDos){
        document.write(
            "El parametro UNO es: "+parametroUno+
            "</br>El parametro DOS es: "+parametroDos
        );
    };
};

// Crear un OBJETO e instanciar la clase
var objetoUno = new miClase("Marcello", 23);

// llamamos a las propiedades que tiene, (uno y dos)
document.write( objetoUno.uno );
document.write("</br>");
document.write( objetoUno.dos );

// Llamamos al metodo que no tiene parametros, esta retornando la propiedad de (UNO)
document.write("</br>");
document.write( objetoUno.miMetodoUno() );
document.write("</br>");

// Llamamos al metodo que tiene 2 parametros:: dentro del 
// metodo ya tiene DOCUMENT.WRITE()  por lo tanto no sera necesario ponerlo
objetoUno.miMetodoDos("Elena", "Quispe");

document.write("</br>")

// Creando clase con herencia

// Todo lo que tenga la clase 1 (MiCLASE) la clase DOS lo heredara
class miClaseDos extends miClase{

};

// creamos una nueva instancia
var objetoDos = new miClaseDos("Pedro", "Manuel");
document.write( objetoDos.uno );
document.write("</br>")
document.write( objetoDos.dos );
document.write("</br>")
document.write( objetoDos.miMetodoUno() );
document.write("</br>")
objetoDos.miMetodoDos("Maria",23)



// Creamos otra clase con herencia, modificando el constructor

class miClaseTres extends miClase{
    // llamamos a la propiedad que definimos en contructor de la clase UNO (MICLASE)
    constructor(uno, dos, tres){
        // SUPER: palabra reservada que da de entender que son las 2 propiedades que estan llegando de la clase 1
        super(uno, dos)

        this.tercero = tres
    };
};


// instanciamos la clase, pero esta vez tiene 3 parametros
var objetoTres = new miClaseTres("Ernesto", "Castillo", 23);

document.write("</br></br> Clase heredado con 3 parametros</br>");
document.write(objetoTres.uno);
document.write("</br>")
document.write( objetoTres.dos);
document.write("</br>");
document.write( objetoTres.tercero);
document.write("</br>");
document.write(objetoTres.miMetodoUno());
document.write("</br>")
objetoTres.miMetodoDos("Pedro", 34)
