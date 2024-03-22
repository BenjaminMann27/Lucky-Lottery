// create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') 
    const name = nameInput.value.trim() 
    namesArray.push(name)
    displayNames() 
    nameInput.value = '' 
}
function displayNames () {
    const nameList = document.getElementById('nameList') // Get the list element
    nameList.innerHTML = '' // Clear the previous list
  
    for (let i = 0; i < namesArray.length; i++) {
      // Loop through the names array
      const name = namesArray[i] // Get the current name
  
      const li = document.createElement('li') // Create a new list item element
      li.className = 'list-group-item' // Set the class for the list item
  
      const span = document.createElement('span') // Create a new span element
      span.textContent = name // Set the text content of the span to the name
  
      li.appendChild(span) // Append the span to the list item
      nameList.appendChild(li) // Append the list item to the list
    }
  }




document.getElementById('addNameBtn').addEventListener('click', addName)