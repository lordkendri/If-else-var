const sumar = (num1, num2)=>{
    let sumar = num1 + num2;
    return(sumar);
}
const multiplicar = (num1, num2)=>{
    let mult = num1 * num2;
    return(mult);
}
const restar = (num1, num2)=>{
    let restar = num1 - num2;
    return(restar);
}
const dividir = (num1, num2)=>{
    if(num2 >0){
        let div = num1 / num2;
    return(div);
    } else{
        alert("SYNTAX ERROR");
    }
}

let Operacion = prompt("Calculadora  Para sumar ingrese: 1  Para restar ingrese: 2   Para Multiplicar ingrese: 3   Para Dividir ingrese: 4")
if(Operacion == 1){
   let v1 = prompt("Ingrese el primer valor: ");
   let v2 = prompt("Ingrese el primer valor: ");
   v1 = parseInt(v1);
   v2 = parseInt(v2);
    document.write("El resultado de la suma es: " + sumar(v1,v2));
}else if(Operacion == 2){
    let v1 = prompt("Ingrese el primer valor: ");
    let v2 = prompt("Ingrese el primer valor: ");
    v1 = parseInt(v1);
    v2 = parseInt(v2);
     document.write("El resultado de la resta es: " + restar(v1,v2));
}else if(Operacion == 3){
    let v1 = prompt("Ingrese el primer valor: ");
    let v2 = prompt("Ingrese el primer valor: ");
    v1 = parseInt(v1);
    v2 = parseInt(v2);
     document.write("El resultado de la multiplicacion es: " + multiplicar(v1,v2));
}else if(Operacion == 4){
    let v1 = prompt("Ingrese el primer valor: ");
    let v2 = prompt("Ingrese el primer valor: ");
    v1 = parseInt(v1);
    v2 = parseInt(v2);
     document.write("El resultado de la divicion es: " + dividir(v1,v2));
}else {
    alert("No se encuentra la operacion")
};