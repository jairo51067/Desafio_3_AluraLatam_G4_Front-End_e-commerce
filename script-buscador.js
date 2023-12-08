// ***** Buscador de contenido ***** //

//*** Ejecutando funciones *** //

document
  .getElementById("icon-search")   
  .addEventListener("click", mostar_buscador);

document
  .getElementById("inputSearch")
  .addEventListener("click", mostar_buscador);
  
document
  .getElementById("cover-ctn-search")
  .addEventListener("click", ocultar_buscador);

document
  .getElementById("box-search")
  .addEventListener("click", ocultar_buscador);



// *** Declarando variables *** //

bars_search = document.getElementById("cover-ctn-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

//*** Funcion para mostrar el buscador *** //

function mostar_buscador() {
  cover_ctn_search.style.display = "block";
  inputSearch.focus();

  if (inputSearch.value === "") {
    box_search.style.display = "none";
  }
}

//*** Funcion para ocultar el buscador *** //

function ocultar_buscador() {
  cover_ctn_search.style.display = "none";
  box_search.style.display = "none";
  inputSearch.value = "";
}

// *** Creando filtrado de busqueda *** //

document
  .getElementById("inputSearch")
  .addEventListener("keyup", buscador_interno);

function buscador_interno() {
  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementsByTagName("li");

  // Recorriendo elementos a filtar mediante los "li"

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      box_search.style.display = "block";

      if (inputSearch.value === "") {
        box_search.style.display = "none";
        cover_ctn_search.style.display = "none";
      }
    } else {
      li[i].style.display = "none";
    }
  }
}
