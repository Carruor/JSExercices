//4. Teniendo un input de texto y un botón:
//Desarrollar una función que al hacer click en él, escriba el contenido (value) del input como un título en el documento.



function sendtxt(){
    var text = document.getElementById("UserInput").value;
    document.getElementById("title").innerHTML = text;
    
}

    //alert ("User input is"+ text)


//document.getElementById("change").innerHTML = ":)"
