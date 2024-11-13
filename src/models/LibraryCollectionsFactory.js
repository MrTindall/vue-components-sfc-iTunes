import LibraryCollection from '@/models/LibraryCollection';
import { Book, Movie, Audiobook, Podcast, Song } from '@/models/Media.js'

export default class LibraryCollectionsFactory {
    static createFromItunes(items) {
        const collection = new LibraryCollection();
        
        items.forEach(item => {
            let newItem = false;
            switch (item.kind?.toLowerCase() ?? '') {
                case "song":
                    newItem = new Song(item.trackName, item.artistName, item.artworkUrl60, item.genres, item.trackTimeMillis);
                    break;
                case "podcast":
                    newItem = new Podcast(item.trackName, item.artistName, item.artworkUrl60, item.genres, item.trackTimeMillis);
                    break;
                case "audiobook":
                    newItem = new Audiobook(item.trackName, item.artistName, item.artworkUrl60, item.genres, item.trackTimeMillis);
                    break;
                case "movie":
                    newItem = new Movie(item.trackName, item.artistName, item.artworkUrl60, item.genres, item.trackTimeMillis);
                    break;
                case "book":
                    newItem = new Book(item.trackName, item.artistName, item.artworkUrl60, item.genres, item.trackTimeMillis);
                    break;

                default:
                    console.warn('Item kind not recognized:', item.kind);
            }

            if (newItem) {
                collection.addItem(newItem);
            }
        });
        return collection;
    }
}
