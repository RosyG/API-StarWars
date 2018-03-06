const url = "https://swapi.co/api/films/1/?format=json";
//const url = "https://swapi.co/api/films/1/";//Cualquiera de llas URLs función a arroja lo mismo
fetch(url, {
  method: 'get'})//Usando el método get.
  .then( results => results.json() )
  .then( response =>  movies(response) )//En este then, la promesa tiene que ver con el return que se obtiene de la línea 5.
  .catch( () => console.log('Error! :(') );


let movies = data => {
  console.log(data);
}
