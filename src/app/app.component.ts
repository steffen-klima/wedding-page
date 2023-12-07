import { Component, AfterViewInit, ViewEncapsulation } from "@angular/core";
import FlipDown from "../assets/flipdown.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: [ViewEncapsulation.None],
})
export class AppComponent implements AfterViewInit {
  title = "CodeSandbox";

  ngAfterViewInit() {
    new FlipDown(1713607200).start();
    // console.log(FlipDown);
  }
}
