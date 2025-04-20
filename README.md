# 🚀 Projeto 01 — Landing Page com HTML, CSS e JS (Desafio Innovation Class)

## 📝 Objetivo
O desafio final consiste em desenvolver um layout proposto no Figma utilizando **HTML, CSS e JavaScript**.

🔗 **Acesse o layout no Figma:**  
[Innovation Class - Figma](https://www.figma.com/proto/DqtFxC6312M32mLt8FpJjq/innovation-class?page-id=13%3A673&node-id=13-920&viewport=346%2C140%2C0.11&t=HyGGDSs83f1vbqMJ-1&scaling=scale-down&content-scaling=fixed)

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
- **Bootstrap**

---

## 🔍 Observações Técnicas:
- 📱 **Responsividade**:  
  O layout foi implementado seguindo a abordagem **mobile-first**, com três breakpoints principais:
  - Mobile: 390px
  - Tablet: 768px
  - Desktop: 1400px (modelo Figma em 1920px)

- 🎠 **Componente Carousel**:  
  - A lógica do carousel está em `scripts/carousel.js`.
  - Os dados vêm do arquivo `data/cardInfoCarousel.json`, facilitando a manutenção e atualização sem mexer no HTML.
  - Exemplo: o segundo card possui texto/tag distintos para ilustrar a facilidade de edição via JSON.

- 🖼️ **Componente Text & Image**:  
  - Renderizado por `scripts/textImage.js`.
  - O script identifica a classe `text-image-` no HTML e, baseado no número da classe, monta o conteúdo.
  - Permite reutilização da estrutura com variações (ex: imagem à esquerda ou direita), deixando o HTML mais limpo.

- 🧭 **Nav (Departamentos e Categorias)**:  
  - Os itens são renderizados dinamicamente a partir de `categories.json`, não estão fixos no HTML.
  - Cada departamento exibe apenas suas categorias, sua numeração foi deixada para deixar este comportamento mais claro.

- 🔍 **Busca (search.js)**:  
  - Cria um modal com a mensagem:  
    `Você buscou por: "termo digitado"`  
  - Inclui animações de feedback, inclusive para pesquisas vazias.

- 🔄 **Loaders e Eventos**:  
  - Loaders foram utilizados para carregar componentes HTML dinamicamente.
  - Alguns Loaders disparam eventos que garantem a execução correta de scripts dependentes.

- 🧾 **Organização e documentação**:
  - Os arquivos `.js` possuem **docstrings explicativas**.
  - Cada componente tem seu próprio `.css`, facilitando a manutenção e legibilidade.

---

### 🧪 Página de Exemplo (example.html)

Este projeto foi desenvolvido com foco em **componentização**, para facilitar a manutenção e reutilização dos elementos.

Para ilustrar essa modularidade, foi criada uma página adicional chamada `example.html`, onde testei diferentes combinações dos componentes com poucas linhas de código.

> ⚠️ **Atenção**:  
> A página `example.html` é apenas um exemplo de uso livre dos componentes.  
> Para avaliação do desafio, considere **apenas o arquivo `index.html`**, que segue fielmente o modelo do Figma.

---

## 🦴 Estrutura da Landing Page
- Ticket promocial;
- Header;
- Nav(Apenas em desktop);
- Hero banner (carousel no mobile);
- Carousel de cards;
- Image & text;
- Text & Image(Image & Text no mobile);
- Image & text;
- Carousel de cards 2(Apenas em desktop);
- Banner Contato
- Newsletter;
- Footer;
- Supported by;

## 📂 Estrutura do projeto

```bash
AvantiLandingPage/
├── public/                         # Pasta pública com arquivos acessíveis diretamente
│   ├── assets/                     # Arquivos estáticos (imagens, ícones, favicons)
│   │   ├── favicon/                # Favicon do site
│   │   ├── icons/                  # Ícones do site
│   │   └── images/                 # Imagens organizadas por componentes
│   │
│   ├── data/                       # Arquivos de dados em JSON
│   │   ├── cardInfoCarousel.json
│   │   ├── categories.json
│   │   └── heroBannerData.json
│   │
│   └── html/                       # Componentes HTML que serão injetados dinamicamente
│
├── scripts/                        # Scripts JavaScript da página
│   ├── loaders/                    # Scripts para carregar componentes HTML separados em ./html
│   ├── carousel.js                 # Lógica do carrossel de produtos
│   ├── departamentosNav.js         # Lógica do Dropdown de departamentos da navbar
│   ├── footerToggle.js             # Lógica de girar a seta do Accordion
│   ├── menuNavAllCategories.js     # Comportamento do menu de navegação de todas as categorias
│   ├── search.js                   # Funcionalidade de busca
│   └── textImage.js                # Renderização dos componentes de texto com imagem
│
├── styles/                         # Pasta contendo todos os estilos         
│
├── example.html                    # Página para mostrar a modularidade e componentização do projeto
├── index.html                      # Página principal da landing page
└── README.md                       # Documentação do projeto
```

## 📌 Como Executar o Projeto

⚠️ Atenção: Este projeto precisa ser executado com um servidor local (como o Live Server), pois os caminhos dos arquivos (imagens, scripts e estilos) usam uma estrutura baseada na pasta /public.
Abrir o arquivo .html diretamente no navegador (file:///) pode fazer com que o layout e funcionalidades não funcionem corretamente.

✅ Requisitos
- Extensão Live Server instalada no VS Code.

▶️ Passo a passo para clonar e executar o projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/iagooteles/avantiLP.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd avantiLP
   ```

3. Usar Live Server para executar o projeto(index.html);

▶️ Passo a passo do Live Server

1. Abra o projeto no VS Code.

2. Clique com o botão direito no arquivo index.html (ou o principal do projeto).

3. Selecione "Open with Live Server".

---
