let free = false

const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?");
    if(edad > 18){
        if(time >=2 && time < 7 && free == false){
            alert("Entrada Gratis");
            free=true;
        } else{
            alert(`Son las ${time}:00Hs, tienes que pagar entrada`);
        }

    } else{
        alert("No entrar por menor");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.3);
validarCliente(3);