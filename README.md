# React + TypeScript + Vite

# Portfólio Web

Este projeto é um portfólio web desenvolvido utilizando tecnologias modernas para criar uma aplicação rápida e responsiva.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build que oferece um ambiente de desenvolvimento rápido com Hot Module Replacement (HMR).
- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript.
- **Babel**: Compilador JavaScript utilizado pelo plugin `@vitejs/plugin-react` para Fast Refresh.
- **SWC**: Compilador JavaScript utilizado pelo plugin `@vitejs/plugin-react-swc` para Fast Refresh.
- **Tailwind css**: Modulo para o Front-end, use a o arquivo `tailwind.config.js`.
- **Biome**: Descreve uma funcionalidade específica do projeto relacionada a biomas. 

## Configuração do ESLint

Para garantir a qualidade do código, o projeto utiliza uma configuração personalizada do ESLint. Se você estiver desenvolvendo uma aplicação de produção, recomendamos atualizar a configuração para habilitar regras de linting com reconhecimento de tipos:

- Configure a propriedade `parserOptions` no nível superior:

```js
export default tseslint.config({
  languageOptions: {
    // outras opções...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Substitua `tseslint.configs.recommended` por `tseslint.configs.recommendedTypeChecked` ou `tseslint.configs.strictTypeChecked`.
- Opcionalmente, adicione `...tseslint.configs.stylisticTypeChecked`.
- Instale o [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) e atualize a configuração:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Defina a versão do React
  settings: { react: { version: '18.3' } },
  plugins: {
    // Adicione o plugin react
    react,
  },
  rules: {
    // outras regras...
    // Habilite as regras recomendadas
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie o servidor de desenvolvimento com `npm run dev`.

## Contribuindo

Sinta-se à vontade para abrir issues e enviar pull requests. Toda contribuição é bem-vinda!

