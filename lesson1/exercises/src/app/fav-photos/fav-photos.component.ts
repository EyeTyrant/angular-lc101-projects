import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"]
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "My Favorite Photos";
  image1 = "https://unaffiliatedcritic.com/wp-content/uploads/2018/07/THE-MANCHURIAN-CANDIDATE-1962.png";
  image2 = "https://www.sheknows.com/wp-content/uploads/2018/08/gtvfrowmmmqqcf4omncn.jpeg";
  image3 = "https://i.ebayimg.com/images/g/Z60AAOSwGWJcPgJ7/s-l300.jpg";
  image4 =
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F12%2Ffrozone.jpg&w=400&c=sc&poi=face&q=85";

  constructor() {}

  ngOnInit() {}
}
