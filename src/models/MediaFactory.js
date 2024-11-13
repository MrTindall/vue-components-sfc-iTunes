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
          imageUrl: item.artworkUrl100 || '',  
          title: item.trackName,               
          artist: item.artistName || 'Unknown', 
          album: item.collectionName || 'N/A', 
          price: item.collectionPrice || 'N/A' 
        }
      };
    case "movie":
      return {
        component: MovieItem,
        props: {
          item,
          imageUrl: item.artworkUrl60 || '',  
          title: item.trackName,               
          director: item.artistName || 'N/A',  
          runtime: item.trackTimeMillis ? (item.trackTimeMillis / 60000).toFixed(0) : 'N/A' 
        }
      };
    case "podcast":
      return {
        component: PodcastItem,
        props: {
          item,
          imageUrl: item.artworkUrl60 || '',  
          title: item.trackName,              
          author: item.artistName || 'N/A',   
          episodes: item.trackCount || 'N/A'   
        }
      };
    case "audiobook":
      return {
        component: AudiobookItem,
        props: {
          item,
          imageUrl: item.artworkUrl60 || '',  
          title: item.trackName,               
          author: item.artistName || 'N/A',   
          runtime: item.trackTimeMillis ? (item.trackTimeMillis / 60000).toFixed(0) : 'N/A' 
        }
      };
    case "book":
      return {
        component: BookItem,
        props: {
          item,
          imageUrl: item.artworkUrl60 || '',  
          title: item.trackName,               
          author: item.artistName || 'N/A',   
          pages: item.trackTimeMillis || 'N/A' 
        }
      };
    default:
      return {
        component: SongItem,  
        props: { item }
      };
  }
}
