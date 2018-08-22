window.getMovies = () => {
    fetch(`http://www.omdbapi.com/?s=Batman&page=2&apikey=51976a0e`)
    .then( response => response.json() )
    .then((res) => {
       

console.log(res);

 })
    .catch((error) => {

    });
}

getMovies();


