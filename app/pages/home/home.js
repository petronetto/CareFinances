import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
    this.title = 'CareFinances App';
  }

  getNome() {
      return 'Retornado de: ' + this.title;
  }
}
