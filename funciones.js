function verificaEdad(){
    const mayoriaEdad =18;
let edad = prompt ('Dime tu edad');
if (edad<mayoriaEdad){
    document.write("No puedes entrar en este sitio");
} else{
    document.write("<h2>Bienvenido, tenga cuidad</h2>");
}
document.write('tenga usted un buen dia');
}
function media2Numeros(a,b){
    let suma = a+b;
    return suma/2;
}
function calculaMedia(){
    let n1 = prompt("Dime el primer número");
    let n2 = prompt("Dime el segundo número");
    if (isNaN(n1) || isNaN(n2)){
        alert("Solo se aceptan números")
        calculaMedia();
    }else{
    let media = media2Numeros(Number(n1),Number(n2));
    alert("La media de "+ n1 + " y "+ n2 +" es "+ media)
    }
}
function tablaMultiplicar(){
    let numero = prompt("Dime de que numero quieres la tabla");
    let cadena= '';
    for(let i=0;i<=10;i++ ){
        cadena = cadena + numero + " * " + i + " = " + numero*i + "<br>";
    }
    document.write(cadena);
}
let alineacion =['Chech','Hazard','Kante','Lukaku']

function posicion(){
    let numero = prompt("Dime el número");
    if (numero > alineacion.length || numero<1){
        alert("No hay jugador con ese numero")
        return;
    }
    alert('En la posición ' + numero + ' juega '+ alineacion[numero-1]);
}
function imprimeAlineación(){
let cadena ='';
for(let i = 0; i<alineacion.length;i++){
cadena += i+1 + "."+ alineacion[i]+"<br>"    
}
document.write(cadena);
}
function pedirLadosTriangulos(){
    let base=prompt("Dime la base del rectangulo");
    let altura=prompt("Dime la altura del rectangulo");
    alert ("El área de tu triangulo es: "+calculaAreaTriangulos(base,altura));
}
function calculaAreaTriangulos(b,a){
    return (a*b)/2;
}
function areaTrianguloInputs(){
    let base=document.getElementById("base")
    let altura=document.getElementById("altura")
    baseNumero = base.value;
    alturaNumero = altura.value;
    let area = calculaAreaTriangulos(baseNumero,alturaNumero);
    let resultado=document.getElementById("resultado");
    resultado.innerHTML = "Tu resultado es: "+ area;
}
function cambiarImagen(){
    let miImagen=document.getElementById("foto");
    if(miImagen.src==("https://www.turismociudadreal.com/wp-content/uploads/2024/12/1528205028_140516mc_0177.jpg")){
        miImagen.src=("https://www.turismociudadreal.com/wp-content/uploads/2024/12/1528205027_140516mc_0153.jpg")
    }else{
    miImagen.src = ("https://www.turismociudadreal.com/wp-content/uploads/2024/12/1528205028_140516mc_0177.jpg");
    }
}
function cambiatitulo(){
    let miTitulo=document.getElementById("titulo");
    if(miTitulo.style.color=="yellow"){
        miTitulo.style.color="pink"
        miTitulo.style.fontSize = "4em"
        miTitulo.style.fontFamily="Arial"
    }else{
        miTitulo.style.color = "yellow"
        miTitulo.style.fontSize = "8em"
    }
}