class Book {
    constructor(title = 'Unknown Book', pages = 0, author = 'Unknown Author') {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.isAvailable = true;
    }

    checkOut() {
        this.isAvailable = false;
    }

    checkIn() {
        this.isAvailable = true;
    }
}

class Movie {
    constructor(trackName, artistName, artworkUrl60, genres, trackTimeMillis) {
        this.trackName = trackName ?? 'Unknown Song';
        this.Artist = artistName ?? 'Unknown Artist';
        this.isAvailable = true;
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.genres = genres ?? 'Unknown Genre';
        this.trackTimeMillis = trackTimeMillis ?? 0;
        this.isAvailable = true;
    }
}

class Audiobook {
    constructor(trackName, artistName, artworkUrl60, genres, trackTimeMillis) {
        this.trackName = trackName ?? 'Unknown Song';
        this.Artist = artistName ?? 'Unknown Artist';
        this.isAvailable = true;
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.genres = genres ?? 'Unknown Genre';
        this.trackTimeMillis = trackTimeMillis ?? 0;
        this.isAvailable = true;
    }
}

class Podcast {
    constructor(trackName, artistName, artworkUrl60, genres, trackTimeMillis) {
        this.trackName = trackName ?? 'Unknown Song';
        this.Artist = artistName ?? 'Unknown Artist';
        this.isAvailable = true;
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.genres = genres ?? 'Unknown Genre';
        this.trackTimeMillis = trackTimeMillis ?? 0;
        this.isAvailable = true;
    }
}

class Song {
    constructor(trackName, artistName, artworkUrl60, genres, trackTimeMillis) {
        this.trackName = trackName ?? 'Unknown Song';
        this.Artist = artistName ?? 'Unknown Artist';
        this.isAvailable = true;
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.genres = genres ?? 'Unknown Genre';
        this.trackTimeMillis = trackTimeMillis ?? 0;
        this.isAvailable = true;
    }
}
export { Book, Movie, Audiobook, Podcast, Song };