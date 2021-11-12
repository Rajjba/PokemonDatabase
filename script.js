let Data;

fetch("./pokemon.json")
  .then((response) => {
    //console.log("Pog", response);
    return response.json();
  })
  .then((data) => {
    Data = data;
    console.log(Data);
  });

document.querySelector("form").addEventListener("submit", LogIn);

function LogIn(event) {
  event.preventDefault();
  let PokeS = document.querySelector("#PokemonS").value;
  document.querySelector("#Name").innerHTML = "Name: " + Data[PokeS]["name"];
  document.querySelector("#Type").innerHTML = "Types: " + Data[PokeS]["types"];
  document.querySelector("#Evos").innerHTML = "Evos: " + Data[PokeS]["evos"];
  document.querySelector("#ID").innerHTML = "ID: " + Data[PokeS]["num"];
  //document.querySelector("#Color").innerHTML = Data[PokeS]["color"];

  let col = Data[PokeS]["color"];
  switch (col) {
    case "Green":
      document.body.style.backgroundColor = "#1efc4e";
      break;
    case "Red":
      document.body.style.backgroundColor = "red";
      break;
    case "Blue":
      document.body.style.backgroundColor = "blue";
      break;
    case "Black":
      document.body.style.backgroundColor = "black";
      break;
    case "Yellow":
      document.body.style.backgroundColor = "yellow";
      break;
    case "Purple":
      document.body.style.backgroundColor = "purple";
      break;
    case "Brown":
      document.body.style.backgroundColor = "#9e3906";
      break;
    case "Pink":
      document.body.style.backgroundColor = "pink";
      break;
    case "White":
      document.body.style.backgroundColor = "white";
      break;
    case "Gray":
      document.body.style.backgroundColor = "gray";
      break;
  }
}
