import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  AllSlides = [];

  AllPosts = [];

  constructor(private _ProductsService:ProductsService) {

    _ProductsService.getAllPosts().subscribe( (data1) => {

      this.AllSlides = data1.slice(0,5);

     } )   
   
    _ProductsService.getAllPosts().subscribe( (data) => {

     this.AllPosts = data.slice(0,15);

    } )

  }

  ngOnInit(): void {
  }

}
