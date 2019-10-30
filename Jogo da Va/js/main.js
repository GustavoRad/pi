// cria variaveis que serão utilizadas
var atual = "x"

// Define o que será executado quando a página for carregada
window.onload = function () {
	// Declara as variáveis que vamos utilizar para o jogo

	atual = "x";
	var jogo = document.getElementById("tabela_jogo");
	var quadrados = jogo.getElementsByTagName("td");

	// Define a função do evento de clique para todos os espaços do jogo
	for (var i = 0; i < quadrados.length; i++) {
		quadrados[i].addEventListener("click", function () {
			if (this.classList.value == "" && !jogo.classList.contains("finalizado")) {
				// Coloca, no espaço clicado, a classe correspondente
				// Estas classes definem se o símbolo a aparecer é X ou O
				this.classList.value = "marked-" + atual;


				// Alterna o valor da variável 'atual', para alternar as jogadas
				if (atual == "x") {
					atual = "o";
				} else {
					atual = "x";
				}


				// Verifica caso alguem tenha ganho e avisa os jogadores
				if (verificaGanhador()) {
					if (atual == "o") {
						var vencedor = "Primeiro Jogador!"
					} else {
						var vencedor = "Segundo Jogador!"
					}


					setTimeout(function () {
						alert("O vencedor é o " + vencedor)
					}, 200);

					setTimeout(function () {
						limpaJogo()
					}, 200);

					return;
				}
				if (verificarEmpate()) {

					setTimeout(function () {
						alert("Empate!")
					}, 200);

					setTimeout(function () {
						limpaJogo()
					}, 200);

					atual = "x";
				}

			}

		});
	}
};

function limpaJogo() {
	var jogo = document.getElementById("tabela_jogo");
	var quadrados = jogo.getElementsByTagName("td");

	atual = "x";

	for (var i = 0; i < quadrados.length; i++) {
		quadrados[i].classList.value = "";
	}

}

function verificaGanhador() {
	var top_left = document.getElementById("top-left");
	var top_middle = document.getElementById("top-middle");
	var top_right = document.getElementById("top-right");
	var middle_left = document.getElementById("middle-left");
	var middle_middle = document.getElementById("middle-middle");
	var middle_right = document.getElementById("middle-right");
	var bottom_left = document.getElementById("bottom-left");
	var bottom_middle = document.getElementById("bottom-middle");
	var bottom_right = document.getElementById("bottom-right");

	//Se essas opções forem verdade, o jogador ganha o jogo
	if (iguais(top_left, top_middle, top_right)) {
		return true;
	}

	else if (iguais(middle_left, middle_middle, middle_right)) {
		return true;
	}

	else if (iguais(bottom_left, bottom_middle, bottom_right)) {
		return true;
	}

	else if (iguais(top_left, middle_left, bottom_left)) {
		return true;
	}

	else if (iguais(top_middle, middle_middle, bottom_middle)) {
		return true;
	}

	else if (iguais(top_right, middle_right, bottom_right)) {
		return true;
	}

	else if (iguais(top_left, middle_middle, bottom_right)) {
		return true;
	}

	else if (iguais(top_right, middle_middle, bottom_left)) {
		return true;
	}

	return false;
}

function verificarEmpate() {
	var top_left = document.getElementById("top-left");
	var top_middle = document.getElementById("top-middle");
	var top_right = document.getElementById("top-right");
	var middle_left = document.getElementById("middle-left");
	var middle_middle = document.getElementById("middle-middle");
	var middle_right = document.getElementById("middle-right");
	var bottom_left = document.getElementById("bottom-left");
	var bottom_middle = document.getElementById("bottom-middle");
	var bottom_right = document.getElementById("bottom-right");


	if (empate(top_left, top_middle, top_right, middle_right, middle_middle, middle_left, bottom_right, bottom_middle, bottom_left)) {
		return true;
	}



	return false;
}


function iguais(el1, el2, el3) {
	return el1.classList.value == el2.classList.value
		&& el2.classList.value == el3.classList.value &&
		el3.classList.value != "";
}
function empate(el1, el2, el3, el4, el5, el6, el7, el8, el9) {
	return el1.classList.value != ""
		&& el2.classList.value != "" &&
		el3.classList.value != ""
		&& el4.classList.value != "" &&
		el5.classList.value != ""
		&& el6.classList.value != "" &&
		el7.classList.value != ""
		&& el8.classList.value != "" &&
		el9.classList.value != ""
}

