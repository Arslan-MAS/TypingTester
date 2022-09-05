import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker'
import { range } from 'rxjs';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  randomData:string ='';
  variable :string = 'green';
  charArray:string[] =[]
  succesful:boolean = false
  ngOnInit(): void {
    this.randomData=faker.lorem.sentence();
    for (var i =0 ; i< this.randomData.length ;i++ ) {
      this.charArray.push(this.randomData.charAt(i))
      //console.log('char at', i, ' ' , this.randomData[i])
      this.classes[i]='none'
    }
  }

  classes:string[] =[]
  getString(){

    return this.charArray
  }
  getClass(i:number ){
    if (i>= this.classes.length){
      return 'none'
    }else {
      return this.classes[i];
    }
  }
  getInput (value:string) {
    var charArray = []
    for (var i =0 ; i< value.length ;i++ ) {
      charArray.push(value.charAt(i))
      //console.log('char at', i, ' ' , this.randomData[i])
      this.classes[i]='none'
    }
    return charArray
  }
  checkInput(value:Event){
    var inputString =(value.target! as HTMLInputElement).value
    var maximumLength =inputString.length;
    var errorCount = 0 ;
    if (inputString.length<=this.randomData.length ){
      for (let  [key,item] of  this.getInput(inputString).entries()){
        if (item===this.randomData.charAt(key)){
          if (this.classes[key]=='red'){
            errorCount--
          }
          this.classes[key]='green'

        }else  {
          this.classes[key]='red'
          errorCount+=1
        }

        console.log(key, this.randomData.length-1, inputString.length ,this.randomData.length,errorCount )
        if (key ===this.randomData.length-1  && inputString.length<=this.randomData.length && errorCount==0){
          this.succesful =true;

        }else {
          this.succesful=false;
        }
      }


    }else {
      this.succesful=false ;
    }
    for (let i=maximumLength;i < this.randomData.length;i++){
      this.classes[i]='none'
    }
    console.log(this.succesful)
    //console.log(this.classes)
    //this.variable = this.variable==='red'?'green':'red'
  }



}
