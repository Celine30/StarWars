export class Movie {

    constructor(id :number , picture : string ,name: string, content: string, create : string , director : string) {
        this.id = id;
        this.picture = picture;
        this.name = name;
        this.content = content;
        this.create = create;
        this.director = director;

        

    }

    public id: number;
    public picture: string;
    public name: string;
    public content: string; 
    public create : String;
    public nationality :string;
    public director : string;
     
}