import LibraryCollection from "./LibraryCollection";
import { Book, Movie, Audiobook, Podcast, Song } from '@/models/Media.js'

export default class LibraryCollectionFactory {
    static createFromItunes(items) {

        const collection = new LibraryCollection();
        let newItem;

        items.forEach(item => {
            switch (item.kind?.toLowerCase()) {
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
                collection.add(newItem);
            }
        });

        return collection;
    }
}
