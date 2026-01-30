async function buscarEndereco(cep) {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Error");
    } else {
      const data = await response.json();

      const info = [
        {
          cep: data.cep,
          endereco: data.logradouro,
          cidade: data.localidade,
          uf: data.uf,
          bairro: data.bairro,
        },
      ];

      console.log(
        `CEP: ${info[0].cep}, Logradouro: ${info[0].endereco}, Cidade: ${info[0].cidade}, UF: ${info[0].uf}, Bairro: ${info[0].bairro}`,
      );

      return info;
    }
  } catch (error) {
    console.error(error);
  }
}

function calcularFrete(uf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (uf === "SP") {
        resolve("R$ 10,00");
      } else if (uf === "RJ") {
        resolve("R$ 15,00");
      } else {
        resolve("R$ 25,00");
      }
    }, 1000);
  });
}

const btnBuscar = document.querySelector("#btnBuscar");
const inputCep = document.querySelector("#inputCep");
const resultado = document.querySelector("#resultado");
const resEndereco = document.querySelector("#resEndereco");
const resFrete = document.querySelector("#resFrete");
const erroMsg = document.querySelector("#erroMsg");

btnBuscar.addEventListener("click", async () => {
  resultado.classList.add("hidden");
  erroMsg.classList.add("hidden");
  try {
    const value = inputCep.value;

    const infoLogistica = await buscarEndereco(value);

    const precoFinal = await calcularFrete(infoLogistica[0].uf);

    resEndereco.innerText = `${infoLogistica[0].endereco}, ${infoLogistica[0].cidade} - ${infoLogistica[0].uf}`;
    resFrete.innerText = precoFinal;

    resultado.classList.remove("hidden");
  } catch (error) {
    erroMsg.innerText = "CEP nao encontrado";
    erroMsg.classList.remove("hidden");
  }
});