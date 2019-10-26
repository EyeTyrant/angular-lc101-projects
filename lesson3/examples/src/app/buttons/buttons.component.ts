import { Component, OnInit } from "@angular/core";

@Component({
  selector: "buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"]
})
export class ButtonsComponent implements OnInit {
  buttonHeading: string = "Buttons";
  inactive: boolean = false;
  gInactive: boolean = false;
  sInactive: boolean = false;
  cInactive: boolean = false;

  constructor() {}

  ngOnInit() {}

  activate() {
    this.gInactive = false;
    this.sInactive = false;
    this.cInactive = false;
  }
}
