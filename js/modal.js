
$('#modal1').modal();
//Accediendo a la información de cada personaje.
const URLpeople = "https://swapi.co/api/people/1/";
fetch(URLpeople, {
  method: 'get'})//Usando el método get.
  .then( results => results.json() )//Asegurando que la respuesta este en estructura JSON.
  .then( response =>  infPeople(response) )//En este then, la promesa tiene que ver con el return que se obtiene de la línea 8.
  .catch( () => console.log('Error! :(') );


let infPeople = people => {
  let name = people.name;
  let height = people.height;
  let mass = people.mass;
  let skinColor = people.skin_color;
  let hairColor = people.hair_color;
  let urlImage = "https://dummyimage.com/80x80/d13ed1/000000";

  let templateModal = '';
  templateModal = `<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat right">X</a>
  <img src=${urlImage}.png alt=${name}>
  <h5>Name: ${name}</h5>
  <h6>Height: ${height}</h6>
  <h6>Mass: ${mass}</h6>
  <h6>Skin color: ${skinColor}</h6>
  <h6>Hair color: ${hairColor}</h6>`;

  paintModal(templateModal);//Ejecutando la función que pintará la información en el modal.
}//Fin de función infPeople.

/*
$('.style-h6').on('click', function(e) {
  console.log(e.target);
  console.log(this);
});
*/
