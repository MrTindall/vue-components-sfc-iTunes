export default function LibraryItem(media){
    // "decorate" the media with additional functionality

    // set the default status
    media.status = 'in';

    // methods
    media.checkIn = function(){
        this.status = 'in';
    }

    media.checkOut = function(){
        this.status = 'out';
    }

    media.isAvailable = function(){
        return this.status === 'in';
    }

    return media;
}