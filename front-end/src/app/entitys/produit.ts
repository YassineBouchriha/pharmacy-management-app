export class produit {
    id_produit: number |null;
    lib_produit: string;
  prix_produit: number;
  description_produit: string;
  date_ajoute: Date;
  prix_liv: number;
    laboratoire: any ;
    famille: any;
 constructor(id_produit: number |null,lib_produit: string,prix_produit: number,description_produit: string,date_ajoute: Date,prix_liv: number,laboratoire: any,famille: any){
    this.id_produit=id_produit;
    this.lib_produit=lib_produit;
    this.prix_produit=prix_produit;
    this.description_produit=description_produit;
    this.date_ajoute=date_ajoute;
    this.prix_liv=prix_liv;
    this.laboratoire=laboratoire;
    this.famille=famille;
 }
}
