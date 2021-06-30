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

  function checkAge() {
    let age: number = +mock.age;
    //is it number?
    let result = expect(age).toEqual(jasmine.any(Number));
    //does it raise error?
    funny_forms.customer.value.age = "word";
    funny_forms.onSubmit(mock_formsGroup);
    let result2 = expect(funny_forms.age_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.age = 99;
    funny_forms.onSubmit(mock_formsGroup);
    let result3 = expect(funny_forms.age_flag).toBeTruthy;
    let finalresult = result && result2 && result3
    return finalresult;
  }

  function checkFirstName() {
    //does it contain only letters?
    let result = expect(mock.firstName).toMatch(/^[a-zA-Z]+$/);
    //does it raise error?
    funny_forms.customer.value.firstName = "999";
    funny_forms.onSubmit(mock_formsGroup);
    let result2= expect(funny_forms.fname_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.firstName = "abc";
    funny_forms.onSubmit(mock_formsGroup);
    let result3 =expect(funny_forms.fname_flag).toBeTruthy;
    let finalresult = result && result2 && result3
    return finalresult;
  }
  function checkLastName() {
    //does it contain only letters?
    let result = expect(mock.lastName).toMatch(/^[a-zA-Z]+$/);
    //does it raise error?
    funny_forms.customer.value.lastName = "999";
    funny_forms.onSubmit(mock_formsGroup);
    let result2= expect(funny_forms.fname_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.lastName = "abc";
    funny_forms.onSubmit(mock_formsGroup);
    let result3 =expect(funny_forms.fname_flag).toBeTruthy;
    let finalresult = result && result2 && result3
    return finalresult;
  }
  function checkLPN() {
    //does it contain letters and NUMBERS?
    let result= expect(mock.lpn).toMatch(/^(?=.*[a-zA-Z])(?=.*[0-9])/);
    //does it raise error?
    funny_forms.customer.value.lpn = "999";
    funny_forms.onSubmit(mock_formsGroup);
    let result2= expect(funny_forms.fname_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.lpn = "abc";
    funny_forms.onSubmit(mock_formsGroup);
    let result3 = expect(funny_forms.fname_flag).toBeFalsy;
    //does it raise error?
    funny_forms.customer.value.lpn = "abc965";
    funny_forms.onSubmit(mock_formsGroup);
    let result4 = expect(funny_forms.fname_flag).toBeTruthy;
  
    let finalresult = result && result2 && result3 && result4;
    return finalresult;
  }

  it("should check if age is number", () => {
    expect(checkAge()).toBeTruthy;
  });
  it("should check if first name is only letters", () => {
    expect(checkFirstName()).toBeTruthy;
  });
  it("should check if last name is only letters", () => {
    expect(checkLastName()).toBeTruthy;
  });
  it("should check if LPN contains numbers and letters", () => {
    expect(checkLPN()).toBeTruthy;
  });

  it("should check if first name && last name is correct", () => {
    expect(checkFirstName()&&checkLastName()).toBeTruthy;
  });
  it("should check if first name && age is correct", () => {
    expect(checkFirstName()&&checkAge()).toBeTruthy;
  });
  it("should check if first name && LPN is correct", () => {
    expect(checkFirstName()&&checkLPN()).toBeTruthy;
  });
  it("should check if last name && age is correct", () => {
    expect(checkLastName()&&checkAge()).toBeTruthy;
  });
  it("should check if last name && LPN is corrects", () => {
    expect(checkLastName()&&checkLPN()).toBeTruthy;
  });
  it("should check if age && LPN is correct", () => {
    expect(checkAge()&&checkLPN()).toBeTruthy;
  });

  it("should check if first name && last name && age is correct", () => {
    expect(checkFirstName()&&checkLastName()&&checkAge()).toBeTruthy;
  });
  it("should check if last name && age && LPN is correct", () => {
    expect(checkLastName()&&checkAge()&&checkLPN).toBeTruthy;
  });
  it("should check if first name && last name && lpn is correct", () => {
    expect(checkFirstName()&&checkLastName()&&checkLPN()).toBeTruthy;
  });

  it("should check if first name && last name && lpn && age is correct", () => {
    expect(checkFirstName()&&checkLastName()&&checkLPN()&&checkAge).toBeTruthy;
  });



});
