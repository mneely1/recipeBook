export class Recipe { // Our model (blueprint) that defines how a single recipe object should look like (OOP)
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
