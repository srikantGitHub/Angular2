import { Component } from '@angular/core';
import { Myservices } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Myservices]
})
export class AppComponent {
  title='';cources;fir;
  constructor(private myservices: Myservices) {  }  
	ngOnInit() {
        this.title = this.myservices.getTitle();
        this.cources=this.myservices.getCources();
        this.myservices.getFir().subscribe(response => { this.fir =response});
    }
}
