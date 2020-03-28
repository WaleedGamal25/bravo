import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productDetails:any = {};
  AllComments = [];
  ind;



  constructor(_ActivatedRoute:ActivatedRoute,public _ProductsService:ProductsService) {
    this.ind = _ActivatedRoute.snapshot.paramMap.get("id");


    this._ProductsService.getAllComments(this.ind).subscribe( (da) => {

      this.AllComments = da ;

     } )
   }

  ngOnInit(): void {

    this._ProductsService.getAllPosts().subscribe( (d) => {

      this.productDetails = d[this.ind];

     } )
  }


}

