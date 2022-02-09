import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './posts';
import { Observable } from 'rxjs';
import { getCurrencySymbol } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  url = "https://jsonplaceholder.typicode.com/todos";
  posts: any;
  constructor (private http: HttpClient){}

  getPosts(){
  // let params = new HttpParams().set('user', '1');
  this.http.get(this.url).subscribe(res=>{
  this.posts = res;
  // console.log(this.posts);
    });
    
  }

  getColor(){
    return 'red'
    }
}
