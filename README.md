# 🔍 GitHub User Finder

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

<div align="center">
  <h3>🚀 Encontre e explore perfis do GitHub de forma rápida e elegante</h3>
  <p>Uma aplicação moderna para buscar usuários do GitHub e visualizar suas informações principais</p>
</div>

---

## 📋 Sobre o Projeto

O **GitHub User Finder** é uma aplicação web responsiva que permite pesquisar usuários do GitHub e visualizar informações detalhadas sobre seus perfis, incluindo:

- 👤 **Avatar e nome de usuário**
- 📍 **Localização**
- 👥 **Seguidores e pessoas seguidas**
- 🔗 **Link direto para os repositórios**

## ✨ Funcionalidades

- 🔍 **Busca em tempo real** - Digite o nome de usuário e encontre instantaneamente
- 📱 **Design responsivo** - Funciona perfeitamente em dispositivos móveis e desktop
- 🎨 **Interface moderna** - Design clean e intuitivo com Tailwind CSS
- ⚡ **Performance otimizada** - Construído com Vite para carregamento ultrarrápido
- 🌐 **Integração com API GitHub** - Dados sempre atualizados diretamente da API oficial
- ❌ **Tratamento de erros** - Feedback claro quando usuário não é encontrado

## 🛠️ Tecnologias Utilizadas

- **⚛️ React 19** - Biblioteca JavaScript para interfaces de usuário
- **📘 TypeScript** - Superset do JavaScript com tipagem estática
- **🎨 Tailwind CSS 4** - Framework CSS utilitário para estilização
- **⚡ Vite** - Build tool moderna e rápida
- **🧭 React Router DOM** - Roteamento para aplicações React
- **🎯 React Icons** - Biblioteca de ícones para React
- **🔧 ESLint** - Ferramenta de linting para manter código limpo

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/FelipeCamposM/GitHub-FindUser.git
cd github-finduser
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**

```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador**

```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
github-finduser/
├── 📁 public/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🧩 Error.tsx
│   │   ├── 🧩 Header.tsx
│   │   ├── 🧩 Search.tsx
│   │   └── 🧩 User.tsx
│   ├── 📁 routes/
│   │   └── 🧩 Home.tsx
│   ├── 📁 types/
│   │   └── 📝 user.ts
│   ├── 🎨 App.css
│   ├── ⚛️ App.tsx
│   ├── 🎨 index.css
│   └── ⚛️ main.tsx
├── ⚙️ tailwind.config.js
├── ⚙️ vite.config.ts
├── 📦 package.json
└── 📖 README.md
```

## 🎯 Scripts Disponíveis

- `npm run dev` - 🔥 Executa o projeto em modo de desenvolvimento
- `npm run build` - 📦 Constrói o projeto para produção
- `npm run lint` - 🔍 Executa o linter para verificar qualidade do código
- `npm run preview` - 👀 Visualiza o build de produção

## 🤝 Como Contribuir

1. **Faça um fork do projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nova-feature
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/nova-feature
   ```
5. **Abra um Pull Request**

## 📸 Screenshots

> _Em breve serão adicionadas capturas de tela da aplicação_

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/FelipeCamposM/GitHub-FindUser/issues) detalhando:

- Descrição do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Felipe Campos**

- GitHub: [@FelipeCamposM](https://github.com/FelipeCamposM)

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>💙 Feito com React, TypeScript e muito ☕</p>
</div>
