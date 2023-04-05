function toggleView(view) {
    let recipeTiles = document.getElementsByClassName("recipe");
    let elementTiles = document.getElementsByClassName("element");
    if (view.value.toString() == "recipe") {
        for (let i = 0; i < recipeTiles.length; i++) {
            recipeTiles[i].style.display = "block";
        }
        for (let j = 0; j < elementTiles.length; j++) {
            elementTiles[j].style.display = "none";
        }

        document.getElementById("side-menu").style.display = "none";
        document.getElementById("guidedrecipes-grid").style.display = "block";
    }
    if (view.value.toString() == "element") {
        for (let i = 0; i < recipeTiles.length; i++) {
            recipeTiles[i].style.display = "none";
        }
        for (let j = 0; j < elementTiles.length; j++) {
            elementTiles[j].style.display = "block";
        }

        document.getElementById("side-menu").style.display = "flex";
        document.getElementById("guidedrecipes-grid").style.display = "grid";
    }
    if (view.value.toString() == "none") {
        for (let i = 0; i < recipeTiles.length; i++) {
            recipeTiles[i].style.display = "block";
        }
        for (let j = 0; j < elementTiles.length; j++) {
            elementTiles[j].style.display = "block";
        }

        document.getElementById("side-menu").style.display = "none";
        document.getElementById("guidedrecipes-grid").style.display = "block";
    }
}