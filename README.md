# 🚚 Simulador de Frete Express
#### Um projeto prático desenvolvido para exercitar conceitos avançados de JavaScript Assíncrono, utilizando a Fetch API para consumo de dados reais e orquestração de múltiplas Promises com async/await.
---
### 🚀 Tecnologias
- **JavaScript (ES6+):** Lógica assíncrona, Promises e manipulação de DOM.

- **Tailwind CSS:** Estilização moderna e responsiva via classes utilitárias.

- **[ViaCEP API:](https://viacep.com.br/)** API REST para consulta de endereços brasileiros.

---
### 🧠 Conceitos Aplicados
Este projeto foi construído focando em três pilares do desenvolvimento assíncrono:
- **Consumo de API Externa:** Uso do `fetch` para buscar dados dinâmicos.

- **Encadeamento de Operações:** A lógica de frete depende do resultado da busca de endereço, exigindo uma orquestração precisa.

- **Tratamento de Exceções:** Implementação de blocos `try/catch` para capturar erros de rede ou entradas inválidas (CEPs inexistentes).
---
### 🛠️ Como funciona o código?
O projeto é dividido em três partes principais:

1. **Busca de Endereço** `(buscarEndereco)`
Uma função assíncrona que consulta a API ViaCEP. Ela trata a resposta bruta, converte para JSON e valida se o CEP pesquisado realmente existe na base de dados.

2. **Cálculo de Frete** `(calcularFrete)`
Uma Promise customizada que simula uma resposta de servidor com setTimeout. Ela aplica regras de negócio baseadas na Unidade Federativa (UF) retornada pela busca anterior:

    - **SP**: R$ 10,00
    - **RJ:** R$ 15,00
    - **Outros estados:** R$ 25,00

3. **Event Listener:** 
O coração da interface. Quando o usuário clica no botão, ocorre limpa da tela, dispara as funções assíncronas em sequência e injeta os resultados no HTML em tempo real.

### 💻 Como Rodar
1. Clone este repositório:

        git clone https://github.com/seu-usuario/simulador-frete.git

2. Abra o arquivo `index.html` em seu navegador.

3. Digite um CEP válido (ex: `01311-000`) e clique em **Calcular Entrega.**