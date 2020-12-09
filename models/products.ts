export class Products {
    id: number;
    name: string;
    description : string;
    price : number;
    imageUrl : string;

    constructor(id, name, description= '', price = 0, imageUrl= 'https://media3.picsearch.com/is?tv-6eUeTxM2sAOj9a8ik96jkHcjeQiqStoNyrFf9PQo&height=227'){
        this.id= id;
        this.name = name;
        this. description = description;
        this. price = price;
        this.imageUrl= imageUrl;
        
    }

}
