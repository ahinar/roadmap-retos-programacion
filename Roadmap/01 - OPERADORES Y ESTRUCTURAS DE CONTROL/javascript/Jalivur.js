/*
EJERCICIO:
- Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
    Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
    (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
- Utilizando las operaciones con operadores que tú quieras, crea ejemplos
    que representen todos los tipos de estructuras de control que existan
    en tu lenguaje:
    Condicionales, iterativas, excepciones...
- Debes hacer print por consola del resultado de todos los ejemplos.

DIFICULTAD EXTRA (opcional):
    Crea un programa que imprima por consola todos los números comprendidos
    entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.

    Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

//OPERADORES:
/*
-Operadores de ASIGNACIÓN:
Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. 
El operador de asignación simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = y asigna el valor de y a x.
También hay operadores de asignación compuestos que son una abreviatura de las operaciones siguientes.
*/

//Asignacion Basica: --> =
console.log('========================');
console.log('ASIGNACION BASICA =');
let operator1; //-->no inicializado, undefined o indefinido.
console.log(operator1+" sin asignarle nada a la variable");
console.log(`asignamo valor a "variable = 5": ${operator1=5}`); 
console.log('========================');

//Asignacion suma: --> +=
console.log('========================');
console.log('ASIGNACION SUMA +');
let operator2; //-->no inicializado, undefined o indefinido.
console.log(operator2 +" SIN INICIALIZAR"); 
console.log(`${operator2} += 10 = ${operator2 += 10}`); //--> no se puede operar con valores undefined. 
operator2 = 2; //-->inicializar para que no devuelva NaN.
console.log(operator2 +" INICIALIZADA");
console.log(`${operator2} += 10 = ${operator2 += 10}`); //--> al valor inicializado suma el valor de asignaicon y reasigna valor sumado.
console.log('========================');

//Asignacion resta: --> -=
console.log('========================');
console.log('ASIGNACION RESTA -');
let operator3; //-->no inicializado, undefined o indefinido.
console.log(operator3 +" SIN INICIALIZAR");
console.log(`${operator3} -= 10 = ${operator3 -= 10}`); //--> no se puede operar con valores undefined. 
operator3 = 2; //-->inicializar para que no devuelva NaN.
console.log(operator3 +" INICIALIZADA");
console.log(`${operator3} -= 10 = ${operator3 -= 10}`); //--> al valor inicializado resta el valor de asignaicon y reasigna valor restado.
console.log('========================');
//Asignacion de multiplicación: --> *=
console.log('========================');
console.log('ASIGNACION MULTIPLICACIÓN');
let operator4 = 5; //Declaracion e Inicialización.
console.log(`Al igual que con suma y resta,
la variable deve tener valor, 
para poder operar con ella.
${operator4} *= 10 = ${operator4 *= 10}`);//--> el valor inicializado se multiplica por el valor de asignaicon y reasigna valor multiplicado.
console.log('========================');

//Asignacion de división: --> /=
console.log('========================');
console.log('ASIGNACION DIVISIÓN');
let operator5 = 5; //Declaracion e Inicialización.
console.log(`La variable deve tener valor, 
para poder operar con ella.
${operator5} /= 10 = ${operator5 /= 10}`);//--> el valor inicializado se divde por el valor de asignaicon y reasigna valor dividido.
console.log('========================');

//Asignacion de residuo o resto: --> %=
console.log('========================');
console.log('ASIGNACION RESTO');
let operator6 = 10; //Declaracion e Inicialización.
console.log(`La variable deve tener valor, 
para poder operar con ella.
${operator6} %= 7 = ${operator6 %= 7}`);//--> el valor inicializado se divde por el valor de asignaicon y reasigna valor del resto de la division.
console.log('========================');

//Asignacion de exponenciación: --> **=
console.log('========================');
console.log('ASIGNACION POTENCIA');
console.log(`La variable deve tener valor, 
para poder operar con ella.
${operator6} **= 5 = ${operator6 **= 5}`);//--> el valor del operador6 se eleva al exponente de asignacion y reasigna valor del exponente.
console.log('========================');

//Asignación de desplazamiento de bits a la izquierda: --> <<=
console.log('========================');
console.log('ASIGNACION DESPLAZAMEINTO BIT A BIT A LA IZQUIERDA');
console.log(` ${operator4} (${operator4.toString(2).padStart(32,"0")}) 
<<= 3
${operator4 <<= 3} (${operator4.toString(2).padStart(32,"0")})`);// al valor binario (ejm: 50 = 00000000000000000000000000110010) del operador agrega n (valor de asignacion) ceros a la izquierda, y reasigna valor binario resultante en decimal.
console.log('========================');

//Asignación de desplazamiento de bits a la derecha: --> >>= combierte en binarios de 32 bits
console.log('========================');
console.log('ASIGNACION DESPLAZAMEINTO BIT A BIT A LA DERECHA CON SIGNO');
operator4 = -243;
console.log(`${operator4} (${(operator4>>>0).toString(2).padStart(32,"0")}) 
>>= 2
 ${operator4 >>= 2} (${(operator4>>>0).toString(2).padStart(32,"0")})`);// Desplaza hacia la derecha los bits de una variable el número de bits especificados en el valor de la expresión, manteniendo el signo, y asigna el resultado a la variable.
console.log('========================');

 //Asignación de desplazamiento a la derecha sin signo: --> >>>=
console.log('========================');
console.log('ASIGNACION DESPLAZAMEINTO BIT A BIT A LA DERECHA SIN SIGNO');
operator4 = -243;
console.log(`      ${operator4} (${(operator4>>>0).toString(2).padStart(32,"0")}) 
>>>= 2
${operator4 >>>= 2} (${operator4.toString(2).padStart(32,"0")})`);// Desplaza hacia la derecha los bits de una variable el número de bits especificados en el valor de la expresión, sin mantener el signo, y asigna el resultado a la variable.
console.log('========================');

return //AQUI ME QUEDE
//Asignación AND bit a bit: --> &=
let operatorbit1 = 3; //       
console.log('========================');
console.log(operatorbit1); // ahora es 3
console.log(`${operatorbit1} (${(operatorbit1).toString(2).padStart(32,"0")}) AND, 
4 (${(4).toString(2).padStart(32,"0")}) bit a bit es igual a, 
${operatorbit1&=4} (${(operatorbit1).toString(2).padStart(32,"0")})`);
console.log(operatorbit1); // ahora es 0
console.log('========================');
console.log('========================');
operatorbit1 = 6;
console.log(operatorbit1); // ahora es 6
console.log(`${operatorbit1} (${(operatorbit1).toString(2).padStart(32,"0")}) AND, 
4 (${(4).toString(2).padStart(32,"0")}) bit a bit es igual a, 
${operatorbit1&=4} (${(operatorbit1).toString(2).padStart(32,"0")})`);
console.log(operatorbit1); // ahora es 4
console.log('========================');
console.log(`AND, 
solo si los dos bit de los operadores es 1
el bit del resultado sera 1,
si uno o ambos bit son 0 sera 0.`);

//Asignación XOR bit a bit: --> ^= or exclusiva.
let operatorbit2 = 6; 
console.log('========================');
console.log(operatorbit2); // ahora es 6
console.log(` ${operatorbit2} (${(operatorbit2).toString(2).padStart(32,"0")}) XOR, 
55 (${(55).toString(2).padStart(32,"0")}) bit a bit es igual a, 
${operatorbit2^=55} (${(operatorbit2).toString(2).padStart(32,"0")})`);
console.log(operatorbit2); // ahora es 49
console.log('========================')
operatorbit2 = 4
console.log('========================')
console.log(operatorbit2); // ahora es 4
console.log(` ${operatorbit2} (${(operatorbit2).toString(2).padStart(32,"0")}) XOR, 
10 (${(10).toString(2).padStart(32,"0")}) bit a bit es igual a, 
${operatorbit2^=10} (${(operatorbit2).toString(2).padStart(32,"0")})`);
console.log(operatorbit2); // ahora es 4
console.log('========================')
console.log(`XOR es or exlusiva, 
solo si uno de los dos bit de los operadores es 1,
el bit del resultado sera 1,
si ambos bit son 1 sera 0,
al igual que si ambos son 0.`)
//Asignación OR bit a bit: --> |= 
let operatorbit3 = 5896;
console.log('========================')
console.log(operatorbit3); // ahora es 5896
console.log(`${operatorbit3} (${(operatorbit3).toString(2).padStart(32,"0")}) OR, 
4589 (${(4589).toString(2).padStart(32,"0")}) bit a bit es igual a, 
${operatorbit3|=4589} (${(operatorbit3).toString(2).padStart(32,"0")})`);
console.log(operatorbit3); // ahora es 6125
console.log('========================')
console.log(operatorbit3); // ahora es 6125
console.log(`${operatorbit3} (${(operatorbit3).toString(2).padStart(32,"0")}) OR, 
6126 (${(6126).toString(2).padStart(32,"0")}) bit a bit es igual a, 
${operatorbit3|=6126} (${(operatorbit3).toString(2).padStart(32,"0")})`);
console.log(operatorbit3); // ahora es 6127
console.log(`OR, 
solo si uno o ambos bit de los operadores es 1,
el bit del resultado sera 1,
si ambos bit son 0 sera 0.`);

//Asignación AND lógico: --> &&=
let operatorLogic1 = true;
let operatorLogic2 = true;
operatorLogic1 &&= operatorLogic2; //si ambos operadorres son true asigna al operador 1 true
console.log(operatorLogic1); 
operatorLogic2 = false;
operatorLogic1 &&= operatorLogic2;
console.log(operatorLogic1); // si alguno de los opreadores, o ambos son false asigna false 
//Asignación OR lógico: --> ||=
let operatorLogic3 = true;
let operatorLogic4 = false;
operatorLogic3 ||= operatorLogic4; //si uno o los dos operadorres son true asigna al operador 3 true
console.log(operatorLogic3); 
operatorLogic3 = false;
operatorLogic3 ||= operatorLogic4; // si abmos opreadores son false, asigna false 
console.log(operatorLogic3); 
//Asignación anulacion lógica: --> ??=
let operatorLogic5;
let operatorLogic6 = false;
operatorLogic5 ??= operatorLogic6; // si el poperador a la izquierda no esta definido, se arigna el valor de operador de la derecha.
console.log(operatorLogic5); 
operatorLogic5 = true;
operatorLogic5 ??= operatorLogic6; // si el operador de la izquierda esta definido, se queda con el valor que tenia.
console.log(operatorLogic5); 

/*
-Operadores de COMPARACION:
Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode.
En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. 
Este comportamiento generalmente resulta en comparar los operandos numéricamente. 
Las únicas excepciones a la conversión de tipos dentro de las comparaciones involucran a los operadores === y !==, que realizan comparaciones estrictas de igualdad y desigualdad. 
Estos operadores no intentan convertir los operandos a tipos compatibles antes de verificar la igualdad.
*/
//IGUAL: --> ==
console.log("es "+(operator3)+" igual a "+(operator2)+": "+ (operator3 == operator2));
operator3 = 5; 
operator2 = 5;
console.log("es "+(operator3)+" igual a "+(operator2)+": "+ (operator3 == operator2));
operator3 = "alberto"; 
operator2 = "alberto";
console.log("es "+(operator3)+" igual a "+(operator2)+": "+ (operator3 == operator2));
operator3 = "alberto";
operator2 = "Alberto";
console.log("es "+(operator3)+" igual a "+(operator2)+": "+ (operator3 == operator2));
operator3 = 1.0; 
operator2 = 1;
console.log(`es ${operator3} igual a ${operator2}: ${operator3 == operator2}`);
operator3 = 50; 
operator2 = 50n;
console.log(`es ${operator3} int igual a ${operator2} bigint: ${operator3 == operator2}`);
console.log(`es ${operatorLogic1} igual a ${operatorLogic2}: ${operatorLogic1 == operatorLogic2}`);
console.log(`es ${operatorLogic1} igual a ${operatorLogic3}: ${operatorLogic1 == operatorLogic3}`);
operator1 = undefined;
operator2 = null;
console.log(`es ${operator1} igual a ${operator2}: ${operator1 == operator2}`);
console.log(`es ${operator1} igual a ${0}: ${operator1 == 0}`);
console.log(`es ${operator2} igual a ${0}: ${operator1 == 0}`);
console.log(`es ${1} igual a ${operatorLogic2}: ${1 == operatorLogic2}`);
console.log(`es ${0} igual a ${operatorLogic1}: ${0 == operatorLogic1}`);
console.log(`es ${operator1} igual a ${operatorLogic1}: ${operator1 == operatorLogic1}`);
console.log(`es ${operator2} igual a ${operatorLogic1}: ${operator2 == operatorLogic1}`);
//NO IGUAL: --> !=
console.log(`${operator1} no es igual a ${operator2}: ${operator1 != operator2}`);
console.log(`${operatorLogic1} no es igual a ${operatorLogic2}: ${operatorLogic1 != operatorLogic2}`);
operator3 = "alberto";
operator2 = "Alberto";
console.log((operator3)+" no es igual a "+(operator2)+": "+ (operator3 != operator2));
//EXTRICTAMENTE IGUAL: --> ===
operator1 = undefined;
operator2 = null;
console.log(`es ${operator1} extrictamente igual a ${operator2}: ${operator1 === operator2}`);
console.log(`es ${operator1} extrictamente igual a ${0}: ${operator1 === 0}`);
console.log(`es ${operator2} extrictamente igual a ${0}: ${operator1 === 0}`);
console.log(`es ${1} extrictamente igual a ${operatorLogic2}: ${1 === operatorLogic2}`);
console.log(`es ${0} extrictamente igual a ${operatorLogic1}: ${0 === operatorLogic1}`);
//DESIGUALDAD EXTRICTA: --> !==
console.log(`${operator1} no es igual a ${operator2} extricatemente: ${operator1 !== operator2}`);
console.log(`${operatorLogic1} no es igual a ${operatorLogic2} extrictamente: ${operatorLogic1 !== operatorLogic2}`);
operator3 = "alberto ";
operator2 = "Alberto";
console.log((operator3)+" no es igual a "+(operator2)+" extrictamente: "+ (operator3 !== operator2));
//MAYOR QUE: --> >
console.log(`es 1 mayor que 5: ${1>5}`);
console.log(`es 5 mayor que 1: ${5>1}`);
console.log(`es "alberto " mayor que "Alberto": ${operator3.length>operator2.length}`);
//MAYOR O IGUAL: --> >=
console.log(`es 5 mayor o igual que 5: ${5>=5}`)
console.log(`es 5 mayor o igual que 3: ${5>=3}`)
console.log(`es 5 mayor o igual que 6: ${5>=6}`)
let name1 = "alberto";
let name2 = "Alberto";
console.log(`es ${name1}(${name1.length}) mayor o igual que ${name2}(${name2.length}): ${name1.length>=name2.length}`)
name1="albertooo"
name2="alberto   "
console.log(`es ${name1}(${name1.length}) mayor o igual que ${name2}(${name2.length}): ${name1.length>=name2.length}`)
//MENOR QUE: --> <
console.log(`es 1 menor que 5: ${1<5}`);
console.log(`es 5 menor que 1: ${5<1}`);
console.log(`es "alberto " menor que "Alberto": ${operator3.length<operator2.length}`);
//MENOR O IGUAL: --> <=
console.log(`es 5 menor o igual que 5: ${5<=5}`)
console.log(`es 5 menor o igual que 3: ${5<=3}`)
console.log(`es 5 menor o igual que 6: ${5<=6}`)
name1 = "alberto";
name2 = "Alberto";
console.log(`es ${name1}(${name1.length}) menor o igual que ${name2}(${name2.length}): ${name1.length<=name2.length}`)
name1="albertooo"
name2="alberto   "
console.log(`es ${name1}(${name1.length}) menor o igual que ${name2}(${name2.length}): ${name1.length<=name2.length}`) 
/* OPERADORES ARITMETICOS:
Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y devuelve un solo valor numérico. 
Los operadores aritméticos estándar son suma (+), resta (-), multiplicación (*) y división (/). 
Estos operadores funcionan como lo hacen en la mayoría de los otros lenguajes de programación cuando se usan con números de punto flotante (en particular, ten en cuenta que la división entre cero produce Infinity).
*/
//RESIDUO O RESTO: --> % actua como en el de asignacion, pero no asigna valor al operador de la izquierda.
console.log(`El resto de 5 entre 3 es = ${5%3}`)//2
console.log(`El resto de 550 entre 10 es = ${550%10}`)//0, 550 es multiplo de 10.
//INCREMENTO: --> ++
let value = 1;
console.log(++value); //inclementa 1 al valor de value
//DECREMENTO: --> --
console.log(--value); //decrementa 1 al valor de value
//NEGACION UNARIA: --> - 
console.log(-value); //devuelve la negacion del value
//POSITIVO UNARIO: --> +
value = false;
console.log(typeof(value))
console.log(+value); //combierte en numero si todavia no lo es
console.log(typeof(+value))
value="2"
console.log(value)
console.log(typeof(value))//value es de tipo estrin pero contiene un 2
console.log(+value)
console.log(typeof(+value))//value se convierte en un 2 number
value="alberto"
console.log(value)
console.log(typeof(value))//value es una cadena de caracteres
console.log(+value)//lo combierte en un NaN (not asigned number)
console.log(typeof(+value))//value se convierte en un 2 number
//EXPONECIACION, EXPONENTE: --> **
console.log(`5 elevado a 6 es = ${5**6}`);
console.log(`2 elevado a 8 es = ${2**8}`);
/* OPERADORES BIT A BIT:
Un operador bit a bit trata a sus operandos como un conjunto de 32 bits (ceros y unos), en lugar de números decimales, hexadecimales u octales. 
Por ejemplo, el número decimal nueve tiene una representación binaria de 1001. 
Los operadores bit a bit realizan sus operaciones en tales representaciones binarias, pero devuelven valores numéricos estándar de JavaScript.
*/
//AND bit a bit: --> & sin asignacion.
console.log('========================')
operatorbit1 = -3;
andValue = -5
console.log(`${operatorbit1} AND ${andValue} bit a bit es igual a ${operatorbit1&andValue}, ${((operatorbit1&andValue)>>>0).toString(2).padStart(32,"0")}`);
console.log(`${operatorbit1} = ${(operatorbit1>>>0).toString(2).padStart(32,"0")},
 ${andValue} = ${((andValue)>>>0).toString(2).padStart(32,"0")},
con and solo quedan a 1 los que coniciden en abmos por eso queda, 
 ${operatorbit1&andValue} = ${((operatorbit1&andValue)>>>0).toString(2).padStart(32,"0")}`);
console.log('========================')
//XOR bit a bit: --> ^ or exclusiva.
console.log('========================')
operatorbit1 = -5;
xorValue=6;
console.log(`${operatorbit1} XOR ${xorValue} bit a bit es igual a ${operatorbit1^xorValue}`);
console.log(`${operatorbit1} = 
${(operatorbit1>>>0).toString(2).padStart(32,"0")}, 
${xorValue} = 
${(xorValue>>>0).toString(2).padStart(32,"0")},
con xor solo quedan a 1 los que son 1 en uno u otro operador, pero no si coiciden en abmos por eso queda 
${operatorbit1^xorValue} =
${((operatorbit1^xorValue)>>>0).toString(2).padStart(32,"0")}`);
console.log('========================')
//Asignación OR bit a bit: --> |= 
operatorbit3 = 5896; //     00000000000000000001011100001000
operatorbit3 |= 4589; //        00000000000000000001000111101101
console.log(operatorbit3); //   00000000000000000001011111101101, 6125 en decimal, compara bit a bit y si uno o los dos coinciden en 1 asigna 1 en el resultado.
operatorbit3 |= 6126; //        00000000000000000001011111101110
console.log(operatorbit3); //   00000000000000000001011111101111, 6127 en decimal, compara bit a bit y si uno o los dos coinciden en 1 asigna 1 en el resultado.


