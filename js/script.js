const button = document.querySelector(".button");
const input = document.querySelector(".addTask");
let listaItens = [];
const listaCompleta = document.querySelector(".task_list");

function adicionarTarefa() {
  listaItens.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = "";
  exibirTarefas();
}
function exibirTarefas() {
  let novaLista = "";
  listaItens.forEach((item, index) => {
    novaLista =
      novaLista +
      ` 
    <li class="task ${item.concluida && "feito"}">
        <img  src="/img/verificar 2.svg" onclick="tarefaConcluida(${index})" />
        <p>${item.tarefa}</p>
        <img src="/img/lixo 1.svg" onclick="excluir(${index})" />
  </li>`;
  });
  listaCompleta.innerHTML = novaLista;
  localStorage.setItem("lista", JSON.stringify(listaItens));
}
function excluir(index) {
  listaItens.splice(index, 1);
  exibirTarefas();
}
function tarefaConcluida(index) {
  listaItens[index].concluida = !listaItens[index].concluida;
  exibirTarefas();
}
function recarregarTarefas() {
  const tarefasLocal = localStorage.getItem("lista");
  if (tarefasLocal) {
    listaItens = JSON.parse(tarefasLocal);
  }
  exibirTarefas();
}

recarregarTarefas();
button.addEventListener("click", adicionarTarefa);
