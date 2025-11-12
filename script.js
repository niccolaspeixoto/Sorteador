const SortButton = document.querySelector("#SortButton");


function sortNumber() {
  const min = Math.ceil(document.querySelector(".inputMin").value);
  const max = Math.floor(document.querySelector(".inputMax").value);

if (min >= max) {
    alert("O valor mínimo não pode ser maior, ou igual que o valor máximo!")
  } else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
  }

  
}

SortButton.addEventListener("click", sortNumber);
