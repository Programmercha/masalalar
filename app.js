//1-masala

// function nuMbers(son1, son2) {
//   return son1 + son2;
// }
// let son1 = +prompt(
//   "Bu siz kiritkan sonlarni qoshib beruvchi dastur. 1-sonni kiriting"
// );
// let son2 = +prompt("2-sonni kiriting");

// let res = nuMbers(son1, son2);

// alert(res);

//2-masala

// function calcMinut(minut) {
//   return minut * 60;
// }

// let minut = +prompt(
//   " bu siz kiritkan minutni sekunda aylantirip beradigan dastur.minut kiriting "
// );

// let res = calcMinut(minut);
// alert(res + "sekund");


//3-masala

// function nextInteger(int) {
//   return int + 1;
// }

// let int = +prompt("son kiriting, bu sz kiritkan sonni birga oshirip beradi");
// let res = nextInteger(int);
// alert(res);



// 4-masala

// function calcS(balandlik, asos) {
//   return (balandlik * asos)/2;
// }

// let asos = +prompt(
//   "Bu uchburchak yuzini hisonlab beruvchi dastur. uchburchakning asosini kiriting"
// );

// let balandlik = +prompt("uchburchakning balandligini kiriting");

// let res = calcS(balandlik, asos);

// alert("siz kiritkan uchburchak yuzasi" + res + "ga teng");


// 5-masala

// function calcDay(days) {
//     return days*365

// }
// let days = +prompt("yoshingizni kiriting")
// let res = calcDay(days)
// alert(res + "kun")

// 6-masala

// ? kub(3) ᔍ 27
//  ?kub(5) ᔍ 125
// ?kub(10) ᔍ 1000

// function kuba(son) {
//   return son ** 3;
// }

// let son = +prompt("son kiriting");
// let res = kuba(son);
// alert("siz kiritkan sonning kubi "  + res + " ga teng");



// 7-masala

// function firstElement(arr) {
//   return arr[0];
// }

// let arr = [5, 2, 3, 6, 5, 5];

// let res = firstElement(arr);
// console.log(res);



// 8-masala

// function calCulate(a, b) {
//   return a * b;
// }
// let a = +prompt("a ni kiriting");
// let b = +prompt("b ni kiriting");

// let res = calCulate(a, b);
// alert("siz kiritkan sonlarnng o'zaro ko'paytmasi " + res + " ga teng");



// 9-masala

// function hourToSekunds(hour) {
//   return hour * 60 * 60;
// }

// let hour = +prompt("soat kiriting");

// let res = hourToSekunds(hour);
// alert("siz kiritgan soat " + res + " sekundgaga teng");



// 10-masala

// function uchinchiTomon(tomon1, tomon2) {
//   return (tomon1 + tomon2) - 1;
// }

// let tomon1 = +prompt("tomon1 ni kititing")
// let tomon2 = +prompt("tomon2 ni kititing");

// let res = uchinchiTomon(tomon1,tomon1)

// alert("Eng uzun uchinchi tomon " + res + " ga teng" );



// 11-masala

// function qoldiq(son1, son2) {
//   return son1 % son2;
// }
// let son1 = +prompt("1-sonni kiriting");
// let son2 = +prompt("2-sonni kiriting");

// let res = qoldiq(son1, son2);

// alert("qoldiq " + res + " ga teng");



// 12-masala

// function turtburchakYuzi(boyi, eni) {
//   return boyi * eni;
// }
// let boyi = +prompt("turtburchakning boyini kiriting");

// let eni = +prompt("turtburchakning enini kiriting");
// let res = turtburchakYuzi(boyi, eni);
// alert("turtburchakning yuzi " + res + " ga teng");


// 13-masala

// function stringQoshish(str) {
//   return "Something " + str;
// }
// console.log(stringQoshish("a"));



// 14-masala

// function daRaja(son) {
//   return son ** 2;
// }

// let son = +prompt("son kiriting");
// let res = daRaja(son);
// alert("siz kiritkan sonning darajasi "  + res + " ga teng");


// 15-masala

// function checkNumber(num) {
//   if (num <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkNumber(-5));
// console.log(checkNumber(0));
// console.log(checkNumber(10));



// 16-masala

// let n = +prompt(
//   " Bu kop burchakli shaklning burchaklar sonini qabul qilib , natijada ushbu shakling ichki burchaklar yigindisini hisoblab beruvchi dasturdir. kop burchakli shakling burchaklarini kiriting"
// );

// let res = ichkiBurchaklar(n);

// alert(res);

// !============
// 17-masala

// function ochko(ikki, uch) {
//   let son1 = ikki * 2;
//   let son2 = uch * 3;
//   let natija = son1 + son2;
//   return natija;
// }
// console.log(ochko(1, 1));

// !==========

// 18-masala

// function nameString(word) {
//   return word + "Edabit";
// }

// let word = prompt("So'z kiriting");
// let res = nameString(word);
// alert(res);
// !===========

// -19-masala

// function hisobla(son1, son2){
//     result = son1 + son2
//     if(result >= 100){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }

// }
// hisobla(95, 3)

// 20-masala

// function printArray(son){
//     arr = []
//     for(let i = 1; i < son+1; i++){
//         arr.push(i)
        
//     }
//     console.log(arr);
// }
// printArray(3)

// 21-masala

// function oyoq(tovuq, qoy, sigir){
//     tovuqOyoq = tovuq**2
//     qoyOyoq = qoy*4
//     sigirOyoq = sigir*4
//     result = oyoq*tovuqOyoq, qoyOyoq, sigirOyoq
//     console.log(result);
// }
// oyoq(2, 3, 5)

// 22-masala

// function va(qiymat1, qiymat2) {
//   return qiymat1 && qiymat2;
// }
// console.log(va(true,false));
// console.log(va(true,true));
// console.log(va(false, true));
// console.log(va(false, false));

// 23-masala

// function tengMi(x, y) {
//   return x === y;
// }
// console.log(tengMi(5, 4));

// 25-masala

// function sekundlar(soat, minut) {
//   let s = soat * 60 * 60;
//   let min = minut * 60;
//   let umumiy = s + min;
//   return umumiy;
// }
// let soat = +prompt("soat kiriting");
// let minut = +prompt("minut kiriting");

// let result = sekundlar(soat, minut);
// alert("jami " + result + " sekund");

// 26-masala

// let number = +prompt("Son kiriting, biz uni tub yoki tub emasligini aniqlaymiz !");
// let i = 1;
// let counter = 0;
// while(i <= number ** 0.5) {
//   if(number % i === 0) {
//     counter++;
//   }
//   i++
// }
// if (counter === 1) {
//   return true;
// } else {
//   return false;
// }

// 27-masala

// function tengMi(x, y) {
//   return x === y;
// }
// console.log(tengMi(5,true));
