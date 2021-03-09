import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl, FormGroup } from "@angular/forms";
import * as faker from "faker";
import { FunnyFormsComponent } from "./funny-forms.component";

describe("FunnyFormsComponent", () => {
  const funny_forms = new FunnyFormsComponent();
  const mock_formsGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    age: new FormControl(""),
    lpn: new FormControl(""),
  });
  const mock: any = mock_formsGroup.value;
  mock.firstName = faker.random.alpha();
  mock.lastName = faker.random.alpha();
  mock.age = faker.random.number(99);
  mock.lpn = faker.random.alphaNumeric(5);

  it("should check if age is number", () => {
    let age: number = +mock.age;
    //is it number?
    expect(age).toEqual(jasmine.any(Number));
    //does it raise error?
    funny_forms.customer.value.age = "word";
    funny_forms.onSubmit(mock_formsGroup);
    expect(funny_forms.age_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.age = 99;
    funny_forms.onSubmit(mock_formsGroup);
    expect(funny_forms.age_flag).toBeTruthy;
  });
  it("should check if first name is only letters", () => {
    //does it contain only letters?
    expect(mock.firstName).toMatch(/^[a-zA-Z]+$/);
    //does it raise error?
    funny_forms.customer.value.firstName = "999";
    funny_forms.onSubmit(mock_formsGroup);
    expect(funny_forms.fname_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.firstName = "abc";
    funny_forms.onSubmit(mock_formsGroup);
    expect(funny_forms.fname_flag).toBeTruthy;
  });
  it("should check if LPN contains numbers and letters", () => {
    //does it contain letters and NUMBERS?
    expect(mock.lpn).toMatch(/^(?=.*[a-zA-Z])(?=.*[0-9])/);
    //does it raise error?
    funny_forms.customer.value.lpn = "999";
    funny_forms.onSubmit(mock_formsGroup);
    expect(funny_forms.fname_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.lpn = "abc";
    funny_forms.onSubmit(mock_formsGroup);
    expect(funny_forms.fname_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.lpn = "abc965";
    funny_forms.onSubmit(mock_formsGroup);
    expect(funny_forms.fname_flag).toBeTruthy;
  });
});
