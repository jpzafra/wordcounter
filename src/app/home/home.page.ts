import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface wordCounterPair {
  word: string,
  counter: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text: string;

  result: wordCounterPair[] = [];

  numWords: number;

  constructor() {}

  countWords(){

    this.result = [];

    const words = this.text.split(' ');
    this.numWords = words.length;
    
    words.forEach( (word) => {
      let arr2 = words.filter(element => element === word).length;

      if(!this.result.find(element => element.word === word)){
        this.result.push(
          {
            word: word, 
            counter: arr2
          }
        )
      }

    });

    this.result.sort((a, b) => (a.word < b.word ? -1 : 1));
    this.result.sort((a, b) => (a.counter > b.counter ? -1 : 1));

  }

  clean(){
    this.text = "";
    this.result = [];
  }

}
