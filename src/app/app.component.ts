import { Component, ViewChild } from '@angular/core';
import { ChildcomComponent } from './childcom/childcom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildcomComponent)
  childComp !: ChildcomComponent

  showit(){
    this.childComp.showalert()
  }

  getarray(){
    console.log(this.childComp.childarray) 
  }

  setarray(){
    this.childComp.childarray = ['new1' , 'new2' , 'new3']
  }

  gettermethod(){
    console.log(this.childComp.value)
  }

  settermethod(newarray : string[]){
    this.childComp.value = [...newarray]
  }

}
