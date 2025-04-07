# 🚀 Projeto 01 - Desenvolvimento do Layout

## 📝 Objetivo
O desafio final consiste em desenvolver um layout proposto no Figma utilizando **HTML, CSS e JavaScript**.

🔗 **Acesse o layout no Figma:**  
[Innovation Class - Figma](https://www.figma.com/proto/DqtFxC6312M32mLt8FpJjq/innovation-class?page-id=13%3A673&node-id=13-920&viewport=346%2C140%2C0.11&t=HyGGDSs83f1vbqMJ-1&scaling=scale-down&content-scaling=fixed)

---

## Observações:
- Esse projeto foi feito respeitando o modelo mobile-first;

- No componente carousel, meu scripts/carousel.js é responsável por renderizar os elementos do carousel, os dados do carousel estão contidos em data/card-info-carousel.js. Essa abordagem melhor é do que ter várias linhas de código no arquivo .html;

- No componente Text & Image, o script scripts/textImage.js é responsável por renderizar seus elementos, ele busca pela classe 'text-image-' no nosso index.html e faz a lógica para a renderização do componente de acordo com o seu número(lógica da função 'getCardIndexFromContainer'). Decidi fazer o código dessa forma porque existem 3 desses componentes na Landing Page modelo.
   OBS: Visto que os componentes são parecidos, mas levemente diferentes, foi-se reaproveitado parte da sua estrutura para a construção de ambos, a seguir foi implementado uma forma que se uma classe fosse presente na estrutura html seria renderizado o componente com Texto na direita e Imagem na esquerda, caso fosse a outra classe seria o contrário. Assim reaproveitamentos sua estutura e deixamos o nosso html mais limpo.

- ./scripts/menu-nav.js é responsável pela renderização dos itens da navbar, tirando o componente imagem. Ele busca as informações de ./data/categories.json; Dessa forma é possível facilmente alterar o nosso .json e ver as mudanças em tela;
   OBS: Como a imagem ao final do nav é fixa, são apenas 8 linhas de código no .html, e vai ficar sempre lá, não houve necessidade de colocar sua lógica de renderização em um arquivo externo; Caso fosse outro componente mais extenso, que tivesse mais linhas de código ou 'poluísse' o .html de alguma forma, seria delegado sua lógica de renderização em um arquivo externo.

- ./scripts/search.js é responsável pela busca no nosso input do header. Ele cria um modal e exibe a mensagem: `Você buscou por: "${texto_do_input}"`

## ✅ Requisitos para o Desenvolvimento

### 1️⃣ Estruturar o HTML conforme o layout do Figma
- Criar a marcação semântica seguindo a estrutura do design.
- Utilizar classes e IDs de forma organizada.

### 2️⃣ Aplicar estilos com CSS, garantindo um layout responsivo
- Implementar a versão **Desktop e Mobile** de acordo com o Figma.
- O candidato pode utilizar um **framework CSS** de sua escolha, como **Bootstrap, Bulma** ou outro.

### 3️⃣ Implementar uma funcionalidade de busca com JavaScript
- No campo de busca, ao clicar no botão da lupa, o texto digitado no campo deve ser exibido abaixo com a mensagem:
  
  ```Você buscou por: 'assunto buscado'```
  
### 4️⃣ Implementar a interação dos carrosséis
- A interação pode ser feita utilizando **JavaScript puro** ou através de uma **biblioteca**.

---

## Tecnologias Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript**
- **Figma**

---

## 📂 Estrutura do projeto
AvantiLandingPage/
├── Assets/                         # Arquivos estáticos (imagens e ícones)
│   ├── favicon/                    # Ícones do site (favicon)
│   └── images/                     # Imagens usadas na página
│
├── data/                           # Arquivos de dados em JSON
│   ├── card-info-carousel.json     # Dados para os cards do carrossel
│   ├── categories.json             # Categorias exibidas na página inicial
│   └── text-image-info.json        # Informações para os componentes de texto com imagem
│
├── scripts/                        # Scripts JavaScript da página
│   ├── carousel.js                 # Lógica do carrossel de produtos
│   ├── footer-toggle.js            # Lógica de girar a seta do Accordion
│   ├── menu-nav.js                 # Comportamento do menu de navegação
│   ├── search.js                   # Funcionalidade de busca
│   └── textImage.js                # Renderização dos componentes de texto com imagem
│
├── styles/                         
│   └── style.css                   # Arquivo principal de estilos
│
├── index.html                      # Página principal da landing page
└── README.md                       # Documentação do projeto

## 📌 Como Executar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/iagooteles/avantiLP.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Abra o arquivo `index.html` em seu navegador.

4. Opção de uso: Live Server;

---

### Features implementadas

- HEAD Coupon;
- carousel;
- Navbar; * Ainda é preciso implementar as categorias *
- Footer;
- Supported By;

Continuar da aula 42;

REACT => Continuar da aula 02;
TODO: Colocar mais tratamentos de erros com fetch.then.catch ;
