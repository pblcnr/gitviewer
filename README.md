# GitHub Profile Viewer

Um aplicativo móvel desenvolvido com React Native e Expo que permite aos usuários fazer login e pesquisar perfis do GitHub.

## 📱 Funcionalidades

- Tela de login simples
- Busca de usuários do GitHub por nome de usuário
- Visualização de informações básicas de perfil (nome, bio, avatar)
- Armazenamento local de usuários pesquisados
- Opção para remover usuários da lista

## 🚀 Tecnologias Utilizadas

- React Native
- Expo
- React Navigation
- Styled Components
- Axios
- AsyncStorage
- GitHub API

## ⚙️ Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI
- Um dispositivo móvel com o aplicativo Expo Go ou um emulador

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/pblcnr/gitviewer
cd gitviewer
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Instale as dependências específicas do projeto
```bash
npm install @react-navigation/native @react-native-async-storage/async-storage axios styled-components expo-status-bar @expo/vector-icons
# ou
yarn add @react-navigation/native @react-native-async-storage/async-storage axios styled-components expo-status-bar @expo/vector-icons
```

## 🚀 Executando o Projeto

```bash
npx expo start
# ou
yarn expo start
```

Depois de iniciar o projeto, você pode:
- Escanear o QR code com o aplicativo Expo Go (Android) ou a câmera (iOS)
- Pressionar 'a' para abrir no emulador Android
- Pressionar 'i' para abrir no emulador iOS

## 📂 Estrutura do Projeto

```
gitviewer/
├── src/
│   ├── services/
│   │   └── api.js         # Configuração do Axios para a API do GitHub
│   ├── styles.js          # Componentes estilizados
│   ├── routes.js          # Configuração de navegação
│   ├── pages/
│       ├── Login.js       # Tela de login
│       └── Main.js        # Tela principal com busca de usuários
└── App.js                 # Ponto de entrada da aplicação
```

## 🧭 Uso

1. Abra o aplicativo
2. Na tela de login, deixe os campos de e-mail e senha vazios para entrar (simulação de login)
3. Na tela principal, digite um nome de usuário do GitHub e pressione o botão "+" ou a tecla "Enviar"
4. Visualize as informações básicas do perfil do usuário
5. Clique em "Ver perfil" para mais detalhes
6. Use o botão "Remover" para excluir um usuário da lista

## 📝 Observações

- O aplicativo armazena localmente os usuários pesquisados usando AsyncStorage
- A autenticação é simulada (qualquer login com campos vazios é aceito)
- A API do GitHub possui limites de requisição para IPs não autenticados

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Contato

Paulo Henrique de Andrade - [plhnrqf@outlook.com](mailto:plhnrqf@outlook.com)

Link do projeto: [https://github.com/pblcnr/gitviewer](https://github.com/pblcnr/gitviewer)