const amount = document.getElementById("amount")

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