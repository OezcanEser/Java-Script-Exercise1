
// Erstelle eine Funktion, die ein bestimmtes Wort, überall wo es vorkommt,
// in einem Artikel hervorhebt.

// Hinweise
// Dazu kannst du die replaceAll - Methode des String - Objekts verwenden.

// Mit der innerText - Eigenschaft des Elements kannst du nur den Text
// des Artikels erhalten und mit der innerHTML - Eigenschaft
// kannst du den html - Inhalt des Artikels festlegen.
// Du kannst ein span-Element verwenden, um die Wörter hervorzuheben.

function highWord() {
    let searchValue = document.getElementById("search-input").value
    console.log(searchValue)

    let article = document.getElementById("article").innerText
    console.log(article)

    let replaceValue = "<span class='highlight'>" + searchValue + "</span>"
    console.log(replaceValue)

    let result = article.replaceAll(searchValue, replaceValue)
    console.log(result)

    document.getElementById("article").innerHTML = result
}