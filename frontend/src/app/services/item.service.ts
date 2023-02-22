import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { appConfig } from 'src/utils/app-config';
import { ItemModel } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  // public async AddItemToCart(item:ItemModel): Promise<ItemModel> {

  //   // get the observable
  // const observable = this.http.post<ItemModel>(appConfig.addItemUrl, item);

  //   // convert to promise
  // const item = await firstValueFrom(observable);

//   return item;
// }
}
