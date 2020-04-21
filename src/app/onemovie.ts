export class OneMovie {

        constructor(id :number , picture : string ,name: string, tagline: string, create : string , nationality :string , director : string, during: number, credit:any[] ) {
            this.id = id;
            this.picture = picture;
            this.name = name;
            this.tagline = tagline;
            this.create = create;
            this.nationality = nationality;
            this.director = director;
            this.during = during;
            this.credit = credit
        }

        public id: number;
        public picture: string;
        public name: string;
        public tagline: string; 
        public create : String;
        public nationality :string;
        public director : string;
        public during : number
        public credit :any[]
    }