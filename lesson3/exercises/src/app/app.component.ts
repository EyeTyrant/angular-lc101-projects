import { Component, ɵi18nConfigureLocalize } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";
  takeOffEnabled = true;

  handleTakeOff(image: any) {
    let result = window.confirm("Are you sure the shuttle is ready for takeoff?");
    if (result) {
      this.color = "blue";
      this.height = 0;
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.moveRocket(image, "up");
      this.takeOffEnabled = false;
    }
  }

  handleLand(image: any) {
    let result = window.confirm("The shuttle is landing. Landing grear engaged.");
    if (result) {
      this.color = "green";
      this.height = 0;
      this.message = "The shuttle has landed.";
      image.style.bottom = "0px";
      // image.style.left = "235";
      // this.moveRocket(image, "reset");
      this.takeOffEnabled = true;
    }
  }

  handleAbort(image: any) {
    let result = window.confirm("Confirm Abort!");
    if (result) {
      this.color = "red";
      this.height = 0;
      this.message = "Mission aborted";
      // image.style.bottom = 0;
      // image.style.left = 235;
      this.moveRocket(image, "reset");
      this.takeOffEnabled = true;
    }
  }

  moveRocket(image: any, direction: string) {
    if (direction === "right") {
      let movement = parseInt(image.style.left) + 10 + "px";
      image.style.left = movement;
      this.width += 10;
    } else if (direction === "left") {
      let movement = parseInt(image.style.left) + -10 + "px";
      image.style.left = movement;
      this.width -= 10;
    } else if (direction === "down") {
      let movement = parseInt(image.style.bottom) + -10 + "px";
      image.style.bottom = movement;
      this.height -= 10000;
    } else if (direction === "up") {
      let movement = parseInt(image.style.bottom) + 10 + "px";
      image.style.bottom = movement;
      this.height += 10000;
    } else if (direction === "reset") {
      image.style.left = "235px";
      image.style.bottom = "0px";
    }
    this.boundary(this.height, this.width);
  }

  boundary(height: number, width: number) {
    if (height >= 320000 || height <= -1 || width >= 220 || width <= -220) {
      this.color = "orangered";
    } else {
      this.color = "blue";
    }
  }
}
