import { Component } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css']
})
export class ChildcomComponent {

  childarray : string[] = ['aaa','bbb','ccc']

  showalert(){
    alert("hi")
  }

  get value() {
    return this.childarray
  }

  set value(newarray : string[]) {
    this.childarray = [...newarray]
  }

  // OTHER SAMPLE====================
  // get value(): Friend {
  //   return this.form.value as Friend
  // }
  
  // set value(f: Friend) {
  //   console.info('>>> set value: ', f)
  //   this.initForm(f)
  // }

}
