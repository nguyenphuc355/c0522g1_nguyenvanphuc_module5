import {Component, OnInit} from '@angular/core';
import {IWord} from '../i-word';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page-component',
  templateUrl: './dictionary-page-component.component.html',
  styleUrls: ['./dictionary-page-component.component.css']
})
export class DictionaryPageComponentComponent implements OnInit {

  dictionaryList: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionaryList = this.dictionaryService.findAll();
  }

}
