let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for(i=0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
};

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    };
};

for(i=0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    };
};

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________________Asistencias: ${alumnosTotales[alumno][1]}<br>
    ________________Ausencias: ${30- parseInt(alumnosTotales[alumno][1])}<br><br>`;
    if(30- parseInt(alumnosTotales[alumno][1]) > 18){
        resultado += "<b style='color:Red'>Reprobado por faltas</b><br><br>";
    } else{
        resultado += "<br><br>"
    };
    document.write(resultado);
};