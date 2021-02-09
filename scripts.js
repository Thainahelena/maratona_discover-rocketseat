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

    addTransaction(transactions, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transactions)
    },

    innerHTMLTransaction(transactions){
        const html = `
        <td class="description">${transactions.description}</td>
        <td class="expense">${transactions.amount}</td>
        <td class="date">${transactions.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html
    }
}