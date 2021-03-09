import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { FunnyFormsComponent } from "./funny-forms/funny-forms.component";
const routes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "calculator", component: CalculatorComponent },
  { path: "error", component: ErrorMessageComponent },
  { path: "funny", component: FunnyFormsComponent },
  { path: "", component: ProductListComponent },
  { path: "**", component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
