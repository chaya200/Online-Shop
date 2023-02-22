class AppConfig {

  //clients
    public loginUrl = "http://localhost:3004/client/login";
    public registerUrl = "http://localhost:3004/client/register";

  //products
    public productsUrl = "http://localhost:3004/product/all";

  //items
  public addItemUrl = "http://127.0.0.1:3004/item/add";
  public updateItemUrl = "http://127.0.0.1:3004/item/update/:id";
  public deleteItemUrl = "http://127.0.0.1:3004/item/del/:id";
}

export const appConfig = new AppConfig();
