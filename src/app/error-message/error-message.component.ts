import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-error-message",
  templateUrl: "./error-message.component.html",
  styleUrls: ["./error-message.component.css"],
})
export class ErrorMessageComponent implements OnInit {
  showMessage: boolean = true;
  @Input("message_data")
  message_data: string = "";
  constructor() {}

  ngOnInit() {
    this.timed_disable();
  }
  timed_disable(): void {
    setTimeout(() => {
      console.log("Hello from setTimeout");
      this.showMessage = false;
    }, 3000);
  }
}
