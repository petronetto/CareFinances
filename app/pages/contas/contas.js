import {Page, Modal, NavController} from 'ionic-angular';
import {DAOContas} from '../../dao/dao-contas';
import {ModalContasPage} from '../modal-contas/modal-contas';

@Page({
    templateUrl: 'build/pages/contas/contas.html'
})

export class ContasPage {

    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.dao = new DAOContas();

        this.dao.getList((lista) => {
            this.listContas = lista;
        });

        this.nav = nav;
    }

    insert() {
        let modal = Modal.create(ModalContasPage);

        modal.onDismiss((data) => {
            this.dao.insert(data, (conta) => {
                this.listContas.push(conta);
            });
        });

        this.nav.present(modal);
    }

    edit(conta) {
        let modal = Modal.create(ModalContasPage, {conta: conta});

        modal.onDismiss((data) => {
            this.dao.edit(data, (conta) => {});
        });

        this.nav.present(modal);
    }

    delete(conta) {
        this.dao.delete(conta, (conta) => {
            let pos = this.listContas.indexOf(conta);
            this.listContas.splice(pos, 1);
        });
    }
}