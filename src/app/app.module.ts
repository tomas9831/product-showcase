import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchFilterPipe } from "./pipes/search-filter.pipe";
import { StarComponent } from "./star/star.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { MatCardModule } from "@angular/material/card";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FunnyFormsComponent } from "./funny-forms/funny-forms.component";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchFilterPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    FooterComponent,
    NavigationComponent,
    CalculatorComponent,
    ErrorMessageComponent,
    FunnyFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
