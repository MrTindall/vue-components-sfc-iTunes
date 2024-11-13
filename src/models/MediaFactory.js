import SongItem from "@/components/SongItem.vue";
import MovieItem from "@/components/MovieItem.vue";
import PodcastItem from "@/components/PodcastItem.vue";
import AudiobookItem from "@/components/AudiobookItem.vue";
import BookItem from "@/components/BookItem.vue";

export default function mediaFactory(item) {
  switch (item.kind) {
    case "song":
      return {
        component: SongItem,
        props: {
          item,
          imageUrl: item.artworkUrl60 || '',
          title: item.trackName || 'Unknown Song',
          artist: item.Artist || 'Unknown Artist',
          genre: item.genres || 'Unknown Genre',
          runtime: item.trackTimeMillis
            ? `${(item.trackTimeMillis / 60000).toFixed(0)} mins`
            : 'N/A'
        }
      };
    case "movie":
      return {
        component: MovieItem,
        props: {
          item,
          imageUrl: item.artworkUrl60 || '',
          title: item.trackName || 'Unknown Title',
          director: item.Artist || 'Unknown Director',
          genre: item.genres || 'Unknown Genre',
          runtime: item.trackTimeMillis
            ? `${(item.trackTimeMillis / 60000).toFixed(0)} mins`
            : 'N/A'
        }
      };
    case "podcast":
      return {
        component: PodcastItem,
        props: {
          item,
          imageUrl: item.artworkUrl60 || '',
          title: item.trackName || 'Unknown Title',
          author: item.Artist || 'Unknown Author',
          genre: item.genres || 'Unknown Genre',
          runtime: item.trackTimeMillis
            ? `${(item.trackTimeMillis / 60000).toFixed(0)} mins`
            : 'N/A'
        }
      };
    case "audiobook":
      return {
        component: AudiobookItem,
        props: {
          item,
          imageUrl: item.artworkUrl60 || '',
          title: item.trackName || 'Unknown Title',
          author: item.Artist || 'Unknown Author',
          genre: item.genres || 'Unknown Genre',
          runtime: item.trackTimeMillis
            ? `${(item.trackTimeMillis / 60000).toFixed(0)} mins`
            : 'N/A'
        }
      };
    case "book":
      return {
        component: BookItem,
        props: {
          item,
          title: item.title || 'Unknown Book',
          author: item.author || 'Unknown Author',
          pages: item.pages || 'N/A',
          availability: item.isAvailable ? 'Available' : 'Checked Out'
        }
      };
    default:
      return {
        component: SongItem,
        props: { item }
      };
  }
}
