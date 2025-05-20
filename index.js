// Write your code here!
const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]

//elements need to b created ans added to a selected point on the existing webpage
function displayCartItem(item){
    const shoppingCart = document.querySelector("#cart")
	const newItem = document.createElement("li")

	const itemName = document.createElement("p")
	const itemPrice = document.createElement("p")

	itemName.textContent = item.name
	itemPrice.textContent = "$" + item.price
	
	newItem.append(itemName,itemPrice)
	shoppingCart.append(newItem)
}
//used to separate each item in the shoppinList Array so we can use it
shoppingList.forEach(item => {
	displayCartItem(item)
})

//we select the form from the index.html, it is under the id #new-cart-item-form
const form = document.querySelector("#new-cart-item-form")

function handleSubmit(event){
	event.preventDefault()
    //we use event to get the values of the form
    // can also get user input with this
    //const newName = document.querySelect("#name-input").value
    //const newPrice = docuement.querySelect("#price-input").value
    const newName = event.target.name.value
    const newPrice = event.target.price.value

	const newItem = {
		name: newName,
		price: newPrice
	}
    //to confirm have collected the inputs correctly, if correct, next push to move to shoppingList array
	//console.log(newItem)
    shoppingList.push(newItem)
    displayCartItem(newItem)
}

form.addEventListener("submit", (event) => {
	handleSubmit(event)
})