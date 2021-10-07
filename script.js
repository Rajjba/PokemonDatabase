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
  document.querySelector("#Name").innerHTML = Data[PokeS]["name"];
  document.querySelector("#Type").innerHTML = Data[PokeS]["types"];
  document.querySelector("#Evos").innerHTML = Data[PokeS]["evos"];
}
