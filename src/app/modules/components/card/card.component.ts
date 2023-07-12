import { Component,Input,ContentChild ,TemplateRef} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title!:string;
  @ContentChild('cardContent') cardContent!:TemplateRef<any>;
  @ContentChild('options') options!:TemplateRef<any>;

  
}
