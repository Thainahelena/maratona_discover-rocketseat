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
        let income = 0
        transactions.forEach(transactions => {
            if( transactions.amount > 0){
                income += transactions.amount; 
            }
        })
        return income
    },

    expenses(){
        let expense = 0
        transactions.forEach(transactions => {
            if( transactions.amount < 0){
                expense += transactions.amount;
            }
        }) 
        return expense
    },

    total(){
        return Transaction.incomes() + Transaction.expenses();
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transactions, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transactions)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transactions){
        const CSSclass = transactions.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transactions.amount)

        const html = `
        <td class="description">${transactions.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transactions.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML= Utils.formatCurrency(Transaction.incomes())
        document
            .getElementById('expenseDisplay')
            .innerHTML= Utils.formatCurrency(Transaction.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML= Utils.formatCurrency(Transaction.total())
        }
}


const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
        
        value = String(value).replace(/\D/g, "")

        value = Number(value / 100)
        
        value = value.toLocaleString("pt-BR", {
            style: "currency", 
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(function(transactions){
    DOM.addTransaction(transactions)
})

DOM.updateBalance();