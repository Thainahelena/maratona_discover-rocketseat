const Modal = {
    open(){
       document.querySelector('.modal-overlay').classList.add('active'); 
    },

    close(){
    document.querySelector('.modal-overlay').classList.remove('active');
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    }, 
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '20/01/2021'
    }, 
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '20/01/2021'
    }
]

const Transaction = {
    incomes(){

    },

    expenses(){

    },

    total(){

    }
}

const DOM = {

    addTransaction(Transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(html)
    },

    innerHTMLTransaction(){
        
        const html = `
        <td class="description">Luz</td>
        <td class="expense">- R$500,00</td>
        <td class="date">23/01/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html
    }
}