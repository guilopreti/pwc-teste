// 1 teste
const firstTestButton = document.getElementById("firstTestButton");

firstTestButton.addEventListener("click", () => {
  const firstTestInput = document.getElementById("firstTestInput");
  const endereco = firstTestInput.value.split(" ");

  const firstTestP = document.getElementById("firstTestP");
  firstTestP.innerHTML = `{rua: ${endereco[0]}, numero: ${endereco[1]}}`;
});
