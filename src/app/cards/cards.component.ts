import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() cardsText = '';
  @Input() imageURL = '';
  @Input() title = '';
  @Input() UserName = '';
  @Input() cardHeaderImg = '';
opened = false;



}
