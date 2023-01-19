import { Component, EventEmitter, Output } from '@angular/core';
import { About } from 'src/app/About';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name!: string;
  pageName!: string;

  @Output() toAbout: EventEmitter<About> = new EventEmitter();
  
  handleAboutClick() {
    console.log("Hello");
    
  }
   handleSubmit() {
    const temp ={name: "hello world", pageName:this.pageName }
    this.toAbout.emit(temp);
   }
}
