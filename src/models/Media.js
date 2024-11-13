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
    constructor(title = 'Unknown Movie', runtime = 0, director = 'Unknown Director') {
        this.title = title;
        this.runtime = runtime;
        this.director = director;
        this.isAvailable = true;
    }

    checkOut() {
        this.isAvailable = false;
    }

    checkIn() {
        this.isAvailable = true;
    }
}

class Audiobook {
    constructor(title = 'Unknown Audiobook', duration = 0, narrator = 'Unknown Narrator') {
        this.title = title;
        this.duration = duration;
        this.narrator = narrator;
        this.isAvailable = true;
    }

    checkOut() {
        this.isAvailable = false;
    }

    checkIn() {
        this.isAvailable = true;
    }
}

class Podcast {
    constructor(title = 'Unknown Podcast', episodes = 0, host = 'Unknown Host') {
        this.title = title;
        this.episodes = episodes;
        this.host = host;
        this.isAvailable = true;
    }

    checkOut() {
        this.isAvailable = false;
    }

    checkIn() {
        this.isAvailable = true;
    }
}

export { Book, Movie, Audiobook, Podcast };