//1. Se tiene una cola de colores y se tiene que dividir en dos colas.
//respetando el orden y alternando a partir de su índice.Los pares de una y los nones de otra.
//Cola original: [amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
//Cola1: [amarillo,rojo, azul,morado]
//Cola2:[rosa, verde, negro, blanco]
//2. Se tiene una cola en la cual se han repartido tickets con el orden de atención. 
//Sin embargo, llegada la hora de inicio hay muchos “colados”, 
//es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. 
//Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
//Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
const colaOriginal=['amarillo','rosa','rojo','verde','azul','negro','morado','blanco'];
const cola1=[];
const cola2=[];

colaOriginal.forEach((color,index)=>{
    if(index%2===0){
        cola1.push(color);
    }else{
        cola2.push(color);
    }
});
console.log('cola 1:',cola1);
console.log('cola 2;',cola2);
const cola=[
    {user:'User1',ticket:true},
    {user:'User2',ticket:true},
    {user:'User3',ticket:false},
    {user:'User4',ticket:true},
    {user:'User5',ticket:false},
    {user:'User6',ticket:false},
    {user:'User7',ticket:true},
    {user:'User8',ticket:true},
    {user:'User9',ticket:true},
    {user:'User10',ticket:false},
    {user:'User11',ticket:true},
];
const colaFinal=[];
const retirados=[];
cola.forEach(persona=>{
    if(persona.ticket){
        colaFinal.push(pesrona);
    }else{
        retirados.push(persona);
    }
});
console.log('Cola inicial: ',cola);
console.log('Elementos retirados:',retirados);
console.log('Cola final:',colaFinal);