import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-links",
  templateUrl: "./fav-links.component.html",
  styleUrls: ["./fav-links.component.css"]
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://www.launchcode.org", "https://www.w3schools.com/angular/angular_ref_directives.asp"];
  constructor() {}

  ngOnInit() {}
}
