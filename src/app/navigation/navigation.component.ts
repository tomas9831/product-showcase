import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  onHome(): void {
    this.router.navigate(["/home"]);
  }
  onWelcome(): void {
    this.router.navigate(["/welcome"]);
  }
  onCalculator(): void {
    this.router.navigate(["/calculator"]);
  }
}
