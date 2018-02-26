import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows: Array<any> = []
  data: any = {}

  flag: string;
  index: Array<any> = [];
  compare:number;

  public result;

  index_maintain(value){
    if(!this.index.includes(value)){
      this.index.push(value)
    }
  }

  addition(no1, no2, i){
  //  this.no1 = parseInt(no1)
  //  this.no2 = parseInt(no2)
    this.index_maintain(parseInt(i))
    this.compare = this.index[i]
    this.rows[i]["result"] = parseInt(no1) + parseInt(no2)
    this.flag = 'add'
    console.log(i)
  }

  substraction(no1, no2, i){
    // this.no1 = parseInt(no1)
    // this.no2 = parseInt(no2)
    this.index_maintain(parseInt(i))
    this.compare = this.index[i]
    this.rows[i]["result"] = parseInt(no1) - parseInt(no2)
    this.flag = 'sub'
    console.log(i)
  }

  multiplication(no1, no2, i){
    // this.no1 = parseInt(no1)
    // this.no2 = parseInt(no2)
    this.index_maintain(parseInt(i))
    this.compare = this.index[i]
    this.rows[i]["result"] = parseInt(no1) * parseInt(no2)
    this.flag = 'mult'
    console.log(i)
  }

  division(no1, no2, i){
    if(no2 < 0){
      return
    }
    // this.no1 = parseInt(no1)
    // this.no2 = parseInt(no2)
    this.index_maintain(parseInt(i))
    this.compare = this.index[i]
    this.rows[i]["result"] = parseInt(no1) / parseInt(no2)
    this.flag = 'div'
    console.log(i)
    this.flag = 'div'
  }

  save(){
    this.data.result = 0
    this.rows.push(this.data)
    console.log(this.rows)
    this.data = {}
    //this.flag = 0
  }

  delete(index){
    this.rows.splice(index,1)
  }

  change(no1, no2, index){
    console.log(this.flag)
    switch(this.flag){
      case "add":
        this.addition(no1, no2, index)
      break;
      case "sub":
        this.substraction(no1, no2, index)
      break;
      case "mult":
        this.multiplication(no1, no2, index)
      break;
      case "div":
        this.division(no1, no2, index)
      break;
    }
  }
}
