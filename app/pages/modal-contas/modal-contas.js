import {Page, ViewController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/modal-contas/modal-contas.html'
})
export class ModalContasPage {
    static get parameters() {
        return [[ViewController], [NavParams]];
    }

    constructor(view, params) {
        this.view = view;
        this.conta = params.get('conta') || {descricacao: ''};
    }

    cancel() {
        this.view.dismiss();
    }

    save() {
        this.view.dismiss(this.conta);
    }

}
