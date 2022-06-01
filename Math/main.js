let x = prompt("Birinci sayıyı giriniz");
let y = prompt("İkinci sayıyı giriniz");

x = Number(x);
y = Number(y);

let min = x < y ? x : y;
let max = x > y ? x : y;

let minAbs = Math.abs(min);
let maxAbs = Math.abs(max);

document.write("En küçüğü: ", min, "<br>");
document.write("En büyüğü: ", max, "<br>");
document.write("En büyüğün karekökü: ", Math.sqrt(maxAbs), "<br>");
document.write(
  "En büyüğün karekökünün üste yuvarlağı: ",
  Math.ceil(Math.sqrt(maxAbs)),
  "<br>"
);
document.write("En küçüğü mutlak: ", minAbs, "<br>");
document.write(
  "En küçüğü alt en büyüğü üst taban: ",
  Math.pow(min, max),
  "<br>"
);

document.write("----------------------------------------------------", "<br>");

document.write("En büyüğü: ", max, "<br>");
document.write("En küçüğü: ", min, "<br>");
document.write("En küçüğünün karekökü: ", Math.sqrt(minAbs), "<br>");
document.write(
  "En küçüğünün karekökünün üste yuvarlağı: ",
  Math.ceil(Math.sqrt(minAbs)),
  "<br>"
);
document.write("En büyüğünün mutlak: ", maxAbs, "<br>");
document.write("En büyüğü alt en küçüğü üst taban: ", Math.pow(max, min));
