// Email JS

function validate() {
	const name = document.querySelector(".name");
	const email = document.querySelector(".email");
	const msg = document.querySelector(".message");
	const sendBtn = document.querySelector(".send-btn");

	sendBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (name.value === "" || email.value === "" || msg.value === "") {
			emptyerror();
		} else {
			sendmail(name.value, email.value, msg.value);
			success();
		}
	});
}

validate();

function sendmail(name, email, msg) {
	emailjs
		.send("service_76p0m0o", "template_a81rtf5", {
			from_name: name,
			to_name: email,
			message: msg,
		})
		.then((response) => {
			console.log("Email enviado com sucesso", response.status, response.text);
			success();
		})
		.catch((error) => {
			console.error("Falha no envio do email", error);
			sendError(); // Chama a função de erro
		});
}

function emptyerror() {
	swal({
		title: "Atenção",
		text: "Todos os campos deve estar preenchidos",
		icon: "error",
	});
}

function success() {
	swal({
		title: "Email enviado com sucesso",
		text: "Obrigado, entrarei em contato assim que possível",
		icon: "success",
	});
}

function sendError() {
	swal({
		title: "Atenção",
		text: "Falha no envio",
		icon: "error",
	});
}
