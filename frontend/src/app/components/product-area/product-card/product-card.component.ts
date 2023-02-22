import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/models/item.model';
import { ProductModel } from 'src/app/models/product.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

constructor( private itemService:ItemService,private router: Router){}

  public async AddItem(product: ProductModel) {
    try{
      this.router.navigateByUrl("/products/add/cart");
      // const newItem=await this.itemService.AddItemToCart(product);
      // return newItem;

    }catch(err){
      console.log(err);
    }
    }

  @Input()
  public product:ProductModel;
}
