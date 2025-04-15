
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

amount.oninput = () => {
let value = amount.value.replace(/\D/g, "")

value = Number(value) / 100

amount.value = formatCurremcyBRL(value) 
}

function formatCurremcyBRL(value) {

  value = value.toLocaleString("pt-BR", {
style: "currency",
currency: "BRL",

  })

  return value 
}

form.onsubmit = (event) => {
  event.preventDefault()


  const newExpense = {
     id: new Date().getTime(),
     expense: expense.value,
     category_id: category.value,
     category_name: category.options[category.selectedIndex].text,
     amount: amount.value,
     created_at: new Date(),
  }

  expenseAdd (newExpense)
}

function expenseAdd(newExpense) {
   try {
   } catch (error) {
     alert("Não foi possível atualizar a lista de despesas.")
    console.log(error)
   }
}

