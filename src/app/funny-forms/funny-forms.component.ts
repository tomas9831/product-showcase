import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-funny-forms",
  templateUrl: "./funny-forms.component.html",
  styleUrls: ["./funny-forms.component.css"],
})
export class FunnyFormsComponent implements OnInit {
  customer = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    age: new FormControl(""),
    lpn: new FormControl(""),
  });
  fname_flag: boolean = false;
  lname_flag: boolean = false;
  age_flag: boolean = false;
  lpn_flag: boolean = false;

  constructor() {}

  ngOnInit() {}
  onSubmit(fg: FormGroup): void {
    this.setFlags();
    if (!/^[a-zA-Z]+$/.test(fg.value.firstName) || fg.value.firstName == "") {
      this.fname_flag = true;
    }
    if (!/^[a-zA-Z]+$/.test(fg.value.lastName) || fg.value.lastName == "") {
      this.lname_flag = true;
    }
    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(fg.value.lpn)) {
      this.lpn_flag = true;
    }
    if (!/^[0-9]*$/.test(fg.value.age) || fg.value.age == "") {
      this.age_flag = true;
    }
  }
  setFlags(): void {
    this.fname_flag = false;
    this.lname_flag = false;
    this.age_flag = false;
    this.lpn_flag = false;
  }
}
