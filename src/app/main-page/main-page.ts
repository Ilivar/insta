import { Component } from '@angular/core';

interface Post {
  name: string,
  image: string,
  like: number
}

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

  posts: Post[] = [
    {
      name: "Hans",
      image: "assets/img/banana.jpg",
      like: 23
    },
    {
      name: "Mandy",
      image: "assets/img/currant.jpg",
      like: 70
    },
    {
      name: "Klaus",
      image: "assets/img/orange.jpg",
      like: 42
    }
  ]
}
