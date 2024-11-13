class Book {
    constructor(title = 'Unknown Book', pages = 0, author = 'Unknown Author') {
        this.title = title;
        this.pages = pages;
        this.author = author;
    }
}

class Movie {
    constructor(trackName, artistName, artworkUrl60, genres, trackTimeMillis) {
        this.trackName = trackName ?? 'Unknown Song';
        this.Artist = artistName ?? 'Unknown Artist';
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.genres = genres ?? 'Unknown Genre';
        this.trackTimeMillis = trackTimeMillis ?? 0;
    }
}

class Audiobook {
    constructor(trackName, artistName, artworkUrl60, genres, trackTimeMillis) {
        this.trackName = trackName ?? 'Unknown Song';
        this.Artist = artistName ?? 'Unknown Artist';
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.genres = genres ?? 'Unknown Genre';
        this.trackTimeMillis = trackTimeMillis ?? 0;
    }
}

class Podcast {
    constructor(trackName, artistName, artworkUrl60, genres, trackTimeMillis) {
        this.trackName = trackName ?? 'Unknown Song';
        this.Artist = artistName ?? 'Unknown Artist';
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.genres = genres ?? 'Unknown Genre';
        this.trackTimeMillis = trackTimeMillis ?? 0;
    }
}

class Song {
    constructor(trackName, artistName, artworkUrl60, genres, trackTimeMillis) {
        this.trackName = trackName ?? 'Unknown Song';
        this.Artist = artistName ?? 'Unknown Artist';
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.genres = genres ?? 'Unknown Genre';
        this.trackTimeMillis = trackTimeMillis ?? 0;
    }
}
export { Book, Movie, Audiobook, Podcast, Song };