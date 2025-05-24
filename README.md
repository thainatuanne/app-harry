
# 🧙‍♂️ Personagens de Harry Potter

Aplicação construída como atividade prática para consumir uma **API pública** de personagens da franquia Harry Potter, utilizando **React**, **Redux Toolkit** com `createAsyncThunk` e **Material UI (MUI)** para estilização dos componentes.

---

## 📌 Requisitos da atividade

A aplicação deve:
- ✅ Consumir a [API pública do Harry Potter](https://hp-api.onrender.com/api/characters)
- ✅ Exibir **foto do personagem**
- ✅ Indicar se é **bruxo** (Sim/Não em português)
- ✅ Mostrar a **casa** ou “Não Possui” caso não exista
- ✅ Utilizar **Redux Toolkit com AsyncThunk** para buscar os dados
- ✅ Usar **Material UI (MUI)** para montar os cards

---

## 🧰 Tecnologias utilizadas

- React
- Redux Toolkit
- createAsyncThunk
- Material UI
- TypeScript
- Vite

---

## ⚙️ Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/thainatuanne/app-harry.git
cd nome-do-projeto

# Instale as dependências
npm install

# Inicie o projeto
npm run dev
```

---

## 🗂️ Estrutura do projeto

```
src/
├── app/               # Configuração da store e hooks tipados
├── features/
│   └── characters/    # Slice, Card, Tipos
├── pages/             # Página de listagem dos personagens
├── public/            # Imagem de fallback (sem-imagem.jpg)
```

---

## 🔄 Como funciona

- A `store` do Redux é configurada para usar um slice `characters`.
- Usamos `createAsyncThunk` para fazer a requisição assíncrona à API.
- Os dados retornados são armazenados no estado global.
- O componente `CharacterList` consome os dados da store e renderiza os cards.
- Cada `CharacterCard` mostra as informações do personagem com MUI.
- Se a imagem estiver ausente ou vazia, é utilizada uma imagem local (`/sem-imagem.jpg`).

---
