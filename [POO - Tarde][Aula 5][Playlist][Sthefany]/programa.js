let musica1 = {
    titulo:'Tudo que eu vivi' ,
    artistas: 'Pedro Valença',
    album: 'Singles',
    poster: 'vivi.jpg'
}

let musica2 = {
    titulo: 'A começar em mim',
    artistas: 'Pedro Valença',
    album: 'Singles',
    poster: 'amor.jpg'
}

let musica3 = {
    titulo: 'Tu, porém',
    artistas: 'Marco Telles',
    album: 'Amado Timóteo',
    poster: 'tu.jpg'
}

let musica4 = {
    titulo: 'Até sozim',
    artistas: 'Marco Telles',
    album: 'Amado Timóteo',
    poster: 'sozim.jpg'
}

let musica5 = {
    titulo: 'Been so Good',
    artistas: 'Elevation Worship',
    album: 'Single',
    poster: 'good.jpg'
}

let musica6 = {
    titulo: 'Good news',
    artistas: 'Maverick City Music',
    album: 'The Maverick way ',
    poster: 'news.jpg'
}

let musica7 = {
    titulo: 'A Sky Full Of Stars',
    artistas: 'Coldplay',
    album: 'Ghost Stories',
    poster: 'stars.jpg'
}

let musica8 = {
    titulo: 'Aquarela',
    artistas: 'Toquinho',
    album: 'Aquarela',
    poster: 'aquarela.jpeg'
}

let musica9 = {
    titulo: 'Whisky a go-go',
    artistas: 'Roupa Nova' ,
    album: 'Roupa Nova',
    poster: 'roupanova.jpg'
}

let musica10 = {
    titulo: 'Me leva pra casa',
    artistas: 'Israel Subirá',
    album: 'Single' ,
    poster: 'casa.jpg'
}

let playlist = [
    musica1,
    musica2,
    musica3,
    musica4,
    musica5,
    musica6,
    musica7,
    musica8,
    musica9,
    musica10
];

for (let i = 0; i < playlist.length; i++) {
    document.write(`
    <div class="card">
        <img class="foto" src="img/${playlist[i].poster}">
        <p class="nomeMusica"> ${playlist[i].titulo} </p>
        
        <p class="albuns"> ${playlist[i].album} </p>
        <p class="nomeArtista"> ${playlist[i].artistas} </p>
    </div>
    `);
}
