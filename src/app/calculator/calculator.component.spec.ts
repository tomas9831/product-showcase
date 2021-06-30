import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { CalculatorComponent } from "./calculator.component";

describe("CalculatorComponent", () => {
  const calc = new CalculatorComponent();
  const pi_num = 3.141592653589793;
  const times2_pi= 6.283185307179586;

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
    let num: number = 1;
    calc.toggleCalculator("polomer", num);
    let obvod = calc.obvod;
    let obsah = calc.obsah;

    expect(obvod).toEqual(times2_pi);
    expect(obsah).toEqual(pi_num);
  });
  //overime vypocet pri vybere obsahu
  it("should calculate obsah correctly", () => {
    let num: number = pi_num;
    calc.toggleCalculator("obsah", num);
    let polomer = calc.polomer;
    let obvod = calc.obvod;

    expect(obvod).toEqual(times2_pi);
    expect(polomer).toEqual(1);
  });
  //overime vypocet pri vybere obvodu
  it("should calculate obvod correctly", () => {
    let num: number = times2_pi;
    calc.toggleCalculator("obvod", num);
    let polomer = calc.polomer;
    let obsah = calc.obsah;

    expect(obsah).toEqual(pi_num);
    expect(polomer).toEqual(1);
  });

});
