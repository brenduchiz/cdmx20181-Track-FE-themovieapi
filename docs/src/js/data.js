const getMovies = url => fetch(url).then(response => response.json());

document.getElementById('movies').addEventListener('change', () => {
  const movies = document.getElementById('movies').value;
  let Printposter = '';
  
  getMovies(`http://www.omdbapi.com/?s=${movies}&apikey=51976a0e`)
    .then((resultados) => {
      console.log(resultados.Search);

      for (let i = 0; i < resultados.Search.length; i++) {
        const allMovies = resultados.Search[i];

        // console.log(allMovies);

       
        Poster = '';
        if (allMovies.Poster === 'N/A') {
          Poster = 'images/nodisponible.png';
        } else {
          Poster = allMovies.Poster;
        }


        Printposter
     += `
          <div class="card" style="width: 18rem;">
          <img class="height-img" src="${Poster}" alt="Card image cap">
          <div class="card-body">
            
            <p><b>${allMovies.Title}</b></p>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${allMovies.imdbID}">
 +Info
</button>
          </div>
        </div>

        







<!-- Modal -->
<div class="modal fade" id="${allMovies.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h7 class="modal-title" id="exampleModalLabel"> <p><b>${allMovies.Title}</b></p></h7>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <center>
      <p><img class="height-img" src="${Poster}"></p>
      
      <p>Año: ${allMovies.Year} </p>
      <p>Tipo: ${allMovies.Type}</p>
      </center>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>    `;

        poster.innerHTML = Printposter;
      }
    });
});

document.getElementById('button-Search').addEventListener('click', () => {
  let Printposter = '';
  const SearchMovie = document.getElementById('Search').value;

  getMovies(`http://www.omdbapi.com/?s=${SearchMovie}&apikey=51976a0e`)
    .then((resultados) => {
      console.log(resultados.Search);

      for (let i = 0; i < resultados.Search.length; i++) {
        const allMovies = resultados.Search[i];

        // console.log(allMovies);

        Poster = '';
        if (allMovies.Poster === 'N/A') {
          Poster = 'images/nodisponible.png';
        } else {
          Poster = allMovies.Poster;
        }


        Printposter += `



<div class="card" style="width: 18rem;">
          <img class="height-img" src="${Poster}" alt="Card image cap">
          <div class="card-body">
            
            <p><b>${allMovies.Title}</b></p>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${allMovies.imdbID}">
 +Info
</button>
          </div>
        </div>

<!-- Modal -->
<div class="modal fade" id="${allMovies.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel"> <p><b>${allMovies.Title}</b></p></h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
 <span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<p class="card-text"><img src="${allMovies.Poster}" class="img-fluid img-thumbnail" alt="Responsive image">foto </p>


<p>Año: ${allMovies.Year} </p>
<p>Tipo: ${allMovies.Type}</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
</div>
</div>
</div>
</div>
 `;
        const poster = document.getElementById('poster');
        poster.innerHTML = Printposter;
      }
    });
});
