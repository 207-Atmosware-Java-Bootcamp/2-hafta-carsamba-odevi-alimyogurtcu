let x = prompt("Kelime giriniz");

document.write("Birinci kelime: ", x, "<br>");

document.write("Karakter sayısı: ", x.length, "<br>");
document.write("Boşluksuz karakter sayısı: ", x.trim().length, "<br>");
document.write("Tüm karakterler küçük harf: ", x.toLowerCase(), "<br>");
document.write("Tüm karakterler büyük harf: ", x.toUpperCase(), "<br>");
document.write("İlk karakter: ", x.charAt(0), "<br>");
document.write("Java ile başlıyor mu: ", x.startsWith("java"), "<br>");
document.write("Concat: ", x.concat("-ben js öğreniyorum"), "<br>");
document.write("İlk dört karakter: ", x.substring(0, 4), "<br><br>");

let y = prompt("İkinci kelimenizi giriniz");

document.write("Replace: ", x.replace(x, y), "<br>");
