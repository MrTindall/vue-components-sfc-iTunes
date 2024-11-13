import LibraryItem from './LibraryItem';
export default function LibraryCollection(arr){
    arr = arr ?? [];

    arr.addItem = function(item){
        // make sure everything in this collection is a library item
        this.push(new LibraryItem(item));

        // ALLOWS CHAINING!!!
        return this;
    }

    arr.removeItem = function(item){
        // this is not ideal... IDs would be better
        this.splice(arr.findIndex(media => media.title === item.title), 1);
    }

    //arr.filter = null;

    return arr;
}

// or
// export default LibraryCollection;