class Book {
    static type = 'Book';
    constructor(title = 'Unknown Book', pages = 0, author = 'Unknown Author') {
        this.title = title;
        this.pages = pages;
        this.author = author;
    }
}

class Movie {
    static type = 'Movie';
    constructor(trackId, collectionName, artistName, artworkUrl60, longDescription, trackTimeMillis) {
        this.trackId = trackId;
        this.collectionName = collectionName ?? 'Unknown Song';
        this.artistName = artistName ?? 'Unknown Artist';
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.longDescription = longDescription ?? 'Unknown Description';
        this.trackTimeMillis = (trackTimeMillis / 1000 / 60).toFixed(2) ?? 0;
    }
}

class Audiobook {
    static type = 'Audiobook';
    constructor(trackId, collectionName, artistName, artworkUrl60, description) {
        this.trackId = trackId;
        this.collectionName = collectionName ?? 'Unknown Song';
        this.artistName = artistName ?? 'Unknown Artist';
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.description = description ?? 'Unknown Description';
    }
}

class Podcast {
    static type = 'Podcast';
    constructor(trackId, collectionName, artistName, artworkUrl60, primaryGenreName, trackTimeMillis) {
        this.trackId = trackId;
        this.collectionName = collectionName ?? 'Unknown Song';
        this.artistName = artistName ?? 'Unknown Artist';
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.primaryGenreName = primaryGenreName ?? '';
        this.trackTimeMillis = (trackTimeMillis / 1000 / 60).toFixed(2) ?? 0;
    }
}

class Song {
    static type = 'Song';
    constructor(trackId, trackName, artistName, artworkUrl60, primaryGenreName, trackTimeMillis) {
        this.trackId = trackId;
        this.trackName = trackName ?? 'Unknown Song';
        this.artistName = artistName ?? 'Unknown Artist';
        this.artworkUrl60 = artworkUrl60 ?? '';
        this.primaryGenreName = primaryGenreName ?? 'Unknown Genre';
        this.trackTimeMillis = (trackTimeMillis / 1000 / 60).toFixed(2) ?? 0;
    }
}
export { Book, Movie, Audiobook, Podcast, Song };