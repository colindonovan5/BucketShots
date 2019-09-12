export class Shot {

    private name: string;
    private location: string; // Should eventually be an actual location in a map API
    private imageUrl: string; // Will eventually connect to a database which points to S3
    private likes = 0;
    private id: number;

    /**
     * A shot which has been uploaded by a user
     */
    constructor(name: string, location: string, imageUrl: string) {
        this.name = name;
        this.location = location;
        this.imageUrl = imageUrl;
        this.id = Math.random(); // Eventually this will be set randomly and check to make sure there are no other similar IDs
    }

    public getName() {
        return this.name;
    }

    public getLocation() {
        return this.location;
    }

    public getImageUrl() {
        return this.imageUrl;
    }

    public getID() {
        return this.id;
    }
}
