import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { CalculatorComponent } from "./calculator.component";

describe("CalculatorComponent", () => {
  const calc = new CalculatorComponent();

  it("should create ErrorMessage if number is negative", () => {
    let num: number = -10;
    calc.toggleCalculator(calc.types[0], num);
    TestBed.configureTestingModule({ declarations: [ErrorMessageComponent] });
    const fixture = TestBed.createComponent(ErrorMessageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
  //overime vypocet pri vybere polomeru
  it("should calculate polomer correctly", () => {
    let num: number = 5;
    calc.toggleCalculator("polomer", num);
    let obvod = calc.obvod;
    let obsah = calc.obsah;
    let obsah_vzorec = Math.PI * num * num;
    let obvod_vzorec = 2 * Math.PI * num;
    expect(obvod).toEqual(obvod_vzorec);
    expect(obsah).toEqual(obsah_vzorec);
  });
  //overime vypocet pri vybere obsahu
  it("should calculate obsah correctly", () => {
    let num: number = 70;
    calc.toggleCalculator("obsah", num);
    let polomer = calc.polomer;
    let obvod = calc.obvod;
    let polomer_vzorec = Math.sqrt(num / Math.PI);
    let obvod_vzorec = 2 * Math.PI * polomer_vzorec;
    expect(obvod).toEqual(obvod_vzorec);
    expect(polomer).toEqual(polomer_vzorec);
  });
  //overime vypocet pri vybere obvodu
  it("should calculate obvod correctly", () => {
    let num: number = 70;
    calc.toggleCalculator("obvod", num);
    let polomer = calc.polomer;
    let obsah = calc.obsah;
    let polomer_vzorec = num / (2 * Math.PI);
    let obsah_vzorec = Math.PI * polomer_vzorec * polomer_vzorec;
    expect(obsah).toEqual(obsah_vzorec);
    expect(polomer).toEqual(polomer_vzorec);
  });
});
