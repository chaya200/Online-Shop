import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ItemService } from 'src/app/services/item.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  public products: ProductModel[];

  //DI= Dependency Injection, we get object kind of service
  //angular inject object by constructor to this component
  constructor(private productService: ProductService) {}

   public async ngOnInit() {
    try{
      this.products = await this.productService.getAllProducts();
    }catch(err){
      console.log(err);
    }
  }

  // public async getAll(args:Event){
  //   this.products = await this.productService.getAllProducts();
  //   console.log(args);

  //   console.log(this.products);

  // }

}
