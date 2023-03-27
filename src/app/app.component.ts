import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  

  cardsContent = [
    {
      cardsText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      imageURL: 'assets/DSC00611.JPG',
      title: 'Developer',
      UserName: 'Ashish Kumar',
      cardHeaderImg: 'assets/Ashish.jpg'
    },
    {
      cardsText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      imageURL: 'assets/DSC00611.JPG',
      title: 'Developer',
      UserName: 'Ashish Kumar',
      cardHeaderImg: 'assets/Ashish.jpg'
    },
    {
      cardsText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      imageURL: 'assets/DSC00611.JPG',
      title: 'Developer',
      UserName: 'Ashish Kumar',
      cardHeaderImg: 'assets/Ashish.jpg'
    
    },
    {
      cardsText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      imageURL: 'assets/DSC00611.JPG',
      title: 'Developer',
      UserName: 'Ashish Kumar',
      cardHeaderImg: 'assets/Ashish.jpg'
    }
  ]
 
}


