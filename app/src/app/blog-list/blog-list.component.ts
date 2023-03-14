import { Component } from '@angular/core';
import { DataService } from '../data/posts';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {


  dados : DataService = new DataService();
  posts : any;


  constructor(){
    this.posts = this.dados.getPostsTeasers()
  }
}
