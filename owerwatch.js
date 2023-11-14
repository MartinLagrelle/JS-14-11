let championOverwatch = ["Ashe", "Echo", "Tracer", "Reaper", "Phara", "McCree", "Soldier:76", "Genji", "Sombra", "Doomfist", "Widowmaker", "Torbjorn", "Hanzo", "Bastion", "Junkrat", "Mei", "Symmetra"];

//Afficher dans la console Tracer
console.log(championOverwatch[2])

//Afficher dans la console Mei
console.log(championOverwatch[15])

//Changer le nom McCree en "Cole Cassidy"
championOverwatch[5] = "Cole Cassidy"

console.log(championOverwatch)

//Faite une recherche sur comment ajouter un élément dans un tableau et ajouter "Ramattra"
const count = championOverwatch.push("Ramattra");
console.log(championOverwatch)

//Ajouter une chaine de caractère "nop", pour simuler l'ajout d'une erreur
championOverwatch.push("nop")
console.log(championOverwatch)

//Faire une recherche pour savoir comment supprimer un élément dans un tableau et supprimer "nop"
championOverwatch.pop()
console.log(championOverwatch)

//Convertir le tableau en chaine de caractère
let convertToString = championOverwatch.toString()
console.log(convertToString)

//Afficher une copie du tableau qui va de Genji à Hanzo (faite une recherche sur slice)
console.log(championOverwatch.slice(7, -5))

//Ajouter "champion : 0" au début du tableau (faite une recherche sur unshift)
let slicechampion = championOverwatch.unshift("champion : 0")
console.log(championOverwatch);

//Mettre le champion "Bastion" tout en majuscule (faite une recherche sur toUpperCase)
championOverwatch[14] = championOverwatch[14].toUpperCase()
console.log(championOverwatch)

//Compter le nombre de personnage dans le tableau (lenght)
championOverwatch.shift()
console.log(championOverwatch.length);

//A l'aide de la boucle foreach, concaténer tous les héros dans une variable pour faire apparaitre dans la console "Les héros d'Overwatch sont : [Tableau des Heros d'Overwatch]
let phrase = "Les héros d'Owerwatch sont : "

championOverwatch.forEach( (element) => {
    phrase += element + ", "
})

phrase = phrase.substring(0, phrase.length - 2)
console.log(phrase)