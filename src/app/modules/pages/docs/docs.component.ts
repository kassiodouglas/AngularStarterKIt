import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  @Input() event: any;
  title!:string|null;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.urlChanges();

  }

  /**
   * Observa alterações na URL e reaplica o parametro na propriedade
   */
  urlChanges():void{
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const param = params.get('title');      
        this.title = param          
        return new Observable<any>();
      })
    ).subscribe();
  }

}
