import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";


interface Post {
  name: string,
  image: string,
  like: number,
  isLiked: boolean
}

@Component({
  selector: 'app-main-page',
  imports: [RouterLink],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

  posts: Post[] = [
    {
      name: "Hans",
      image: "assets/img/banana.jpg",
      like: 23,
      isLiked: false
    },
    {
      name: "Mandy",
      image: "assets/img/currant.jpg",
      like: 70,
      isLiked: false
    },
    {
      name: "Klaus",
      image: "assets/img/banana.jpg",
      like: 42,
      isLiked: true
    }
  ]

  changeLike(post: Post) {
    if (post.isLiked) {
      post.like--;
      post.isLiked = false;
    } else {
      post.like++;
      post.isLiked = true;
    }
  }
}
