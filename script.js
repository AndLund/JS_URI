//1012

// var input = require("fs").readFileSync("stdin", "utf8");

// var valores = input.split(" ");

// var A = parseFloat(valores.shift());
// var B = parseFloat(valores.shift());
// var C = parseFloat(valores.shift());
// const pi = 3.14159;

// // a) a área do triângulo retângulo que tem A por base e C por altura.
// var areaTriangulo = (A * C) / 2;
// // b) a área do círculo de raio C. (pi = 3.14159)
// var areaCirculo = pi * C ** 2;
// // c) a área do trapézio que tem A e B por bases e C por altura.
// var areaTrapezio = ((A + B) * C) / 2;
// // d) a área do quadrado que tem lado B.
// var areaQuadrado = B ** 2;
// // e) a área do retângulo que tem lados A e B.
// var areaRetangulo = A * B;

// console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
// console.log("CIRCULO: " + areaCirculo.toFixed(3));
// console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
// console.log("QUADRADO: " + areaQuadrado.toFixed(3));
// console.log("RETANGULO: " + areaRetangulo.toFixed(3));

//1011

// var input = require("fs").readFileSync("stdin", "utf8");

// var raio = parseFloat(input);

// const pi = 3.14159;

// var volumeEsfera = (4 / 3) * pi * raio ** 3;
// console.log("VOLUME = " + volumeEsfera.toFixed(3));

//1010

// function peca(codigo, quantidade, valor) {
// 	this.codigo = codigo;
// 	this.quantidade = quantidade;
// 	this.valor = valor;
// }

// var input = require("fs").readFileSync("stdin", "utf8");
// var linhas = input.split("\n");

// var linha01 = linhas.shift().split(" ");
// var linha02 = linhas.shift().split(" ");

// var peca01 = new peca(linha01.shift(), linha01.shift(), linha01.shift());
// var peca02 = new peca(linha02.shift(), linha02.shift(), linha02.shift());

// var soma = peca01.quantidade * peca01.valor + peca02.quantidade * peca02.valor;

// console.log("VALOR A PAGAR: R$ " + soma.toFixed(2));

//1009

// var input = require("fs").readFileSync("stdin", "utf8");

// var valores = input.split("\n");

// var nome = valores[0];
// var salarioFixo = parseFloat(valores[1]);
// var vendasNoMes = parseFloat(valores[2] * 0.15);

// console.log("TOTAL = R$ " + (salarioFixo + vendasNoMes).toFixed(2));

//1008

// var input = require("fs").readFileSync("stdin", "utf8");

// var valores = input.split("\n");

// var numeroFuncionario = parseInt(valores.shift());
// var horasTrabalho = parseInt(valores.shift());
// var valorHora = parseFloat(valores.shift());

// console.log(
// 	"NUMBER = " +
// 		numeroFuncionario +
// 		"\n" +
// 		"SALARY = U$ " +
// 		(horasTrabalho * valorHora).toFixed(2)
// );

//1007

// var input = require("fs").readFileSync("stdin", "utf8");

// var valores = input.split("\n");
// var valor = [];
// var prodAB = 1,
// 	prodCD = 1;

// for (var i = 0; i <= 3; i++) {
// 	valor[i] = parseInt(valores.shift());
// 	if (i <= 1) prodAB *= valor[i];
// 	else prodCD *= valor[i];
// }

// var DIFERENCA = prodAB - prodCD;

// console.log("DIFERENCA = " + DIFERENCA);

//1006

// var input = require("fs").readFileSync("stdin", "utf8");

// var notas = input.split("\n");
// var nota = [];
// var media = 0.0;

// for (var i = 0; i <= 2; i++) {
// 	nota[i] = parseFloat(notas.shift());
// 	if (i == 0) media += nota[i] * 2;
// 	else if (i == 1) media += nota[i] * 3;
// 	else {
// 		media += nota[i] * 5;
// 		media /= 10;
// 	}
// }

// console.log("MEDIA = " + media.toFixed(1));

//1005

// var input = require("fs").readFileSync("stdin", "utf8");

// var notas = input.split("\n");

// var nota01 = parseFloat(notas.shift());
// var nota02 = parseFloat(notas.shift());

// var media = (nota01 * 3.5 + nota02 * 7.5) / 11;

// console.log("MEDIA = " + media.toFixed(5));

//1004

// var input = require("fs").readFileSync("stdin", "utf8");

// var valores = input.split("\n");

// var PROD = parseInt(valores.shift()) * parseInt(valores.shift());

// console.log("PROD = " + PROD);

//1003

// var input = require("fs").readFileSync("stdin", "utf8");

// var valores = input.split("\n");
// var arr01 = [];
// var soma = 0;

// for (var i = 0; i <= 1; i++) {
// 	arr01[i] = parseInt(valores.shift());
// 	soma += arr01[i];
// }

// console.log("SOMA = " + soma);

//1002

// var input = require("fs").readFileSync("stdin", "utf8");

// var raio = parseFloat(input);
// const pi = 3.14159;

// var area = (pi * raio * raio).toFixed(4);

// console.log("A="+area);

//1001

// var input = require("fs").readFileSync("stdin", "utf8");
// var valores = input.split("\n");

// var A = parseInt(valores.shift());
// var B = parseInt(valores.shift());

// var X = A + B;

// console.log("X = " + X);
