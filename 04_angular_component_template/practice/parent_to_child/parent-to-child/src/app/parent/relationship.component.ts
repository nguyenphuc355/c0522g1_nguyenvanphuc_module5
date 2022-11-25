import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {

  dataSendChild = 'hello child';

  value: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveFromToChile(receiveFromChild: any) {
    this.value = receiveFromChild;
    console.log('receive form to child: ');
    console.log(receiveFromChild);
  }
}
