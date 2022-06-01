let object = {
    name: "Alim",
    surname: "Yogurtcu"
}

let stringObject = JSON.stringify(object)
console.log(object)
console.log(stringObject)
console.log(stringObject.search("Alim"))
console.log(stringObject.search("Yogurtcu"))

document.write("String<br><br>")

document.write("Name: ", stringObject.substring(9,13),"<br>")
document.write("Surname: ", stringObject.substring(26,34),"<br><br>")

document.write("-----------------------------------------<br><br>")
document.write("Object<br><br>")
document.write("Name: ", object.name,"<br>")
document.write("Surname: ", object.surname,"<br>")
 