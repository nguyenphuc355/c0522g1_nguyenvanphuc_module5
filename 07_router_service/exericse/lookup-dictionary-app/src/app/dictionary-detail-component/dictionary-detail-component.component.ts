import {Component, OnInit} from '@angular/core';
import {IWord} from '../i-word';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {

  dictionary: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const word = this.activatedRoute.snapshot.params.dictionaryWord;
    this.dictionary = this.dictionaryService.findByWordDictionary(word);
  }

}
