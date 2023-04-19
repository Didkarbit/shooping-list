const itemForm = document.querySelector("#item-form")
const itemInput = document.querySelector("#item-input")
const itemList = document.querySelector("#item-list")
const buttonClear = document.querySelector("#clear")
const itemFilter = document.querySelector("#filter")

const addItem = (evt) => {
  evt.preventDefault()
  const newItem = itemInput.value

  // Validate input
  if (newItem === "") {
    modalOpen()
    return
  }

  const li = document.createElement("li")
  li.appendChild(document.createTextNode(newItem))

  const button = createButton("remove-item btn-link text-red")
  li.appendChild(button)

  itemList.appendChild(li)
  checkUI()
  itemInput.value = ""
}

function createButton(classes) {
  const button = document.createElement("button")
  button.className = classes
  const icon = createIcon("fa-solid fa-xmark")
  button.appendChild(icon)
  return button
}

function createIcon(classes) {
  const icon = document.createElement("i")
  icon.className = classes
  return icon
}

function removeItem(evt) {
  if (evt.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure?")) {
      evt.target.parentElement.parentElement.remove()

      checkUI()
    }
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild)
  }

  checkUI()
}

function checkUI() {
  const items = itemList.querySelectorAll("li")
  if (items.length === 0) {
    buttonClear.style.display = "none"
    itemFilter.style.display = "none"
  } else {
    buttonClear.style.display = "block"
    itemFilter.style.display = "block"
  }
}

itemForm.addEventListener("submit", addItem)
itemList.addEventListener("click", removeItem)
buttonClear.addEventListener("click", clearItems)
checkUI()
// Modal behavior
const modal = document.getElementById("myModal")
const closeModal = document.querySelector(".close")

function modalOpen() {
  modal.style.display = "block"
}

closeModal.addEventListener("click", () => (modal.style.display = "none"))
