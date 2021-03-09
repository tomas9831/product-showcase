import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
import * as faker from "faker";

@NgModule({
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
