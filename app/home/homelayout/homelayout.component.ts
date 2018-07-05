import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent implements OnInit {
  products: Product[]=[];
  error:any;
  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.getFeatureProducts();
  }

  getFeatureProducts() {
    debugger;   
    let obs = this.prodService.getFeatureProducts().subscribe(     
      res => {
        //this.products = res;
        //console.log(this.products);
       },
      err => {
        console.log(err);
       },
      () => { 
      }
    );   
    console.log(this.products);
    console.log(this.error);
  }

}
