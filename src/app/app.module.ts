import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './components/employee/employee.component';
@NgModule({
  declarations:[AppComponent,HeaderComponent, FooterComponent, EmployeeComponent],
  imports:[BrowserModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{

}
