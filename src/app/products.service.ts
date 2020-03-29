import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor( public _HttpClient:HttpClient ) {
  }

 getAllPosts():Observable<any>
 {
     return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts")
 }

 getOnePost(id):Observable<any>
 {
     return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts/"+`${id}`)
 }


 getAllComments(id):Observable<any>
 {
     return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts/'+`${id}`+'/comments')
 }


}
