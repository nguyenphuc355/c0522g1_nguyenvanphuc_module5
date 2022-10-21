import {Injectable} from '@angular/core';
import {IWord} from '../i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: IWord[] = [
    {word: 'apple', mean: 'táo'},
    {word: 'banana', mean: 'chuối'},
    {word: 'here', mean: 'ở dây'},
    {word: 'green', mean: 'xanh lá'}
  ];

  constructor() {

  }


  findByWordDictionary(dictionary: string): IWord {
    return this.dictionaryList.find(iWord => iWord.word === dictionary);
  }

  findAll(): IWord[] {
    return this.dictionaryList;
  }


}
