const url = "https://swapi.co/api/films?format=json";
//const url = "https://swapi.co/api/films/1/";//Cualquiera de llas URLs función a arroja lo mismo
fetch(url, {
  method: 'get'})//Usando el método get.
  .then( results => results.json() )//Asegurando que la respuesta este en estructura JSON.
  .then( response =>  movies(response.results) )//En este then, la promesa tiene que ver con el return que se obtiene de la línea 5.
  .catch( () => console.log('Error! :(') );


let movies = data => {
  let templateString = '';
  for (item of data) {
    let movie = item.title;
    let episode = item.episode_id;
    let stringChar = item.characters;
    let liCharacters = '';//Limpiando la lista de Characters para que en la siguiente iteración se vuelva a llenar.
    for (var i = 0; i <=1 ; i++) {
      let itemCharacter = stringChar[i];
      //Obteniendo una lista de los personajes para después añadirla al templateString.
      liCharacters += `<li class="inf-characters1">
  <h6 class="modal-trigger inf-characters" href="#modal1">${itemCharacter}</h6>
  </li>`
    }

    templateString +=  `<li class="inf-movie">
<h4 class="style-h4">Movie: ${movie}</h4>
<h5 class="style-h5">Episode id: ${episode}</h5>
<h6 class="style-h6">Characters: ${liCharacters}</h6>
</li>`;

  }
  paintTemplate(templateString);

  let listCollection = document.getElementsByClassName('inf-characters');
  giveEventList(listCollection);
}

const giveEventList = collection => {
  console.log(collection);
  let list = Array.from(collection);
  console.log(list);
  list.forEach(li => {
    li.addEventListener('click', getDetailsCharacters );
   })
}
const getDetailsCharacters = e => {
  e.preventDefault;
  let tag = e.target;
  console.log(tag);
  let urlDetails = tag.innerText;
  accessInfModal(urlDetails);
};//Fin de función getDetailsCharacters().
