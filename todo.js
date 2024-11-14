const addItem = document.querySelector(".add");
const yourItems = document.querySelector(".display");
const showItems = document.querySelector(".show-items");
const todoItems = document.querySelector(".todo-items");
const enterButton = document.querySelector(".enter")
const inputField = document.querySelector(".inp")
yourItems.addEventListener("click", () => {
  if (showItems.classList.contains("hide")) {
    showItems.classList.remove("hide");
    yourItems.innerHTML = "Hide Items";
  } else {
    showItems.classList.add("hide");
    yourItems.innerHTML = "Your Items";
  }
});


addItem.addEventListener("click" , () =>{
  if(todoItems.classList.contains("hide-input")){
    todoItems.classList.remove("hide-input")
  }else{
    todoItems.classList.add("hide-input")
  }
});
  enterButton.addEventListener("click" , () =>{
    const itemText = inputField.value.trim(); 
    if (itemText) {
      // Check for duplicate items
      const items = document.querySelectorAll(".show-items .item");
      for (let item of items) {
        if (item.textContent === itemText) {
          alert("Duplicate item");
          return; 
        }
      }
      const newItem = document.createElement("div");
      newItem.className = "item";
      newItem.textContent = itemText;
      showItems.appendChild(newItem);
      inputField.value = "";
    }})

  
  inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      enterButton.click(); // Trigger the Enter button click event
    }
  })
  
