export class DAOContas {
    constructor() {
        this.list = [];
    }

    getList() {
        this.list = [
            {descricao: "Alimentação"},
            {descricao: "Transporte"},
            {descricao: "Lazer"}
        ];

        return this.list;
    }

    insert(conta) {
        this.list.push(conta);
    }

    edit(conta) {
        //
    }

    delete(conta) {
        let pos = this.list.indexOf(conta);
        this.list.splice(pos, 1);
    }
}
