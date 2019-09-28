class List {
    // Método que é sempre instanciado quando o objeto é criado
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        // Chamar o constructor da classe pai
        super();

        this.usuario = 'Elias Bernardo';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const Minhalista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    Minhalista.add('Novo todo');
}

Minhalista.mostraUsuario();