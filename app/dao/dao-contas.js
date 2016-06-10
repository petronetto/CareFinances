import {Storage, SqlStorage} from 'ionic-angular';

export class DAOContas {
    constructor() {
        let storage = new Storage(SqlStorage);

        storage.query('CREATE TABLE IF NOT EXISTS contas(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT)')
        .then((data) => {
            console.log('Tabela criada.');
        }, (error) => {
            console.log('Erro ao criar tabela.' + JSON.stringify(error.err));
        });
    }

    getList(successCallback) {
        let storage = new Storage(SqlStorage);

        storage.query('SELECT * FROM contas')
        .then((data) => {
            let lista = [];

            for (let i = 0; i < data.res.rows.length; i++) {
                let item = {};

                item.id = data.res.rows.item(i).id;
                item.descricao = data.res.rows.item(i).descricao;
                lista.push(item);
            }

            successCallback(lista);
        }, (error) => {
            console.log('Erro ao buscar dados.' + JSON.stringify(error.err));
        });

        return this.list;
    }

    insert(conta, successCallback) {
        let storage = new Storage(SqlStorage);

        storage.query('INSERT INTO contas(descricao) VALUES(?)', [conta.descricao])
        .then((data) => {
            conta.id = data.res.insertId;
            successCallback(conta);
            console.log('Salvo com sucesso.');
        }, (error) => {
            console.log('Erro ao inserir dados.' + JSON.stringify(error.err));
        });
    }

    edit(conta, successCallback) {
        let storage = new Storage(SqlStorage);

        storage.query('UPDATE contas SET descricao = ? WHERE id = ?', [conta.descricao, conta.id])
        .then((data) => {
            successCallback(conta);
            console.log('Alterado com sucesso.');
        }, (error) => {
            console.log('Erro ao alterar dados.' + JSON.stringify(error.err));
        });
    }

    delete(conta, successCallback) {
        let storage = new Storage(SqlStorage);

        storage.query('DELETE FROM contas WHERE id = ?', [conta.id])
        .then((data) => {
            successCallback(conta);
            console.log('Deletado com sucesso.');
        }, (error) => {
            console.log('Erro ao deletar dados.' + JSON.stringify(error.err));
        });
    }
}
