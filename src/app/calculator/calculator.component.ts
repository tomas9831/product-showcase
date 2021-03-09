import { Component, OnInit } from "@angular/core";
import { race } from "rxjs";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent implements OnInit {
  obvod: number;
  obsah: number;
  polomer: number;
  priemer: number;
  input: number;
  pi: number = Math.PI;
  showTable: boolean = false;
  showPolomer: boolean = false;
  showPriemer: boolean = false;
  showObvod: boolean = false;
  showObsah: boolean = false;
  types: any[] = ["obvod", "obsah", "polomer", "priemer"];
  selected = "None";

  constructor() {}

  toggleCalculator(type: string, selectedValue: number): void {
    this.toggleTable();
    switch (type) {
      case "polomer": {
        this.calculatePolomer(selectedValue);
        break;
      }
      case "priemer": {
        this.calculatePolomer(selectedValue / 2);
        break;
      }
      case "obvod": {
        let r = selectedValue / (2 * this.pi);
        this.calculatePolomer(r);
        this.obvod = selectedValue;
        break;
      }
      case "obsah": {
        let r = Math.sqrt(selectedValue / this.pi);
        this.calculatePolomer(r);
        this.obsah = selectedValue;
        break;
      }
      default: {
        //statements;
        break;
      }
      //this.showTable = !this.showTable;
    }
  }
  toggleTable(): void {
    this.showTable = !this.showTable;
  }

  calculatePolomer(selectedValue: number): void {
    this.obsah = this.pi * selectedValue * selectedValue;
    this.polomer = selectedValue;
    this.priemer = 2 * selectedValue;
    this.obvod = 2 * this.pi * selectedValue;
  }

  ngOnInit() {}
}
