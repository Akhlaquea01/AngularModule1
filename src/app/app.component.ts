import { templateJitUrl } from '@angular/compiler';
import{ Component} from '@angular/core'
@Component({
  selector:'root-Component',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  title:String;
  products: any[] | undefined;

  constructor(){
    this.title='Amazon Retail App';
    this.getProducts();
  }

  getProducts(){
    this.products=[
      {name:'iphone10',price:8000,category:'Mobile'},
      {name:'iphone11',price:70000,category:'Mobilesss'},
      {name:'iphone12',price:90000,category:'MobileTab'}
    ];
  }
}
