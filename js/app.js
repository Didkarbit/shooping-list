const itemForm = document.querySelector("#item-form")
const itemInput = document.querySelector("#item-input")
const itemList = document.querySelector("#item-list")

const addItem = (evt) => {
  evt.preventDefault()
  const newItem = itemInput.value

  // Validate input
  if (newItem.value === "") {
    modalOpen()
    return
  }
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(newItem))

  const button = createButton("remove-item btn-link text-red")
  li.appendChild(button)
  itemList.appendChild(li)
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

itemForm.addEventListener("submit", addItem)

// Modal behavior
const modal = document.getElementById("myModal")
const closeModal = document.querySelector(".close")

function modalOpen() {
  modal.style.display = "block"
}

closeModal.addEventListener("click", () => (modal.style.display = "none"))
