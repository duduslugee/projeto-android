# ToDo List App - React Native

Um aplicativo móvel de lista de tarefas desenvolvido com React Native e Expo, focado em gerenciar tarefas com funcionalidades de adicionar, editar, remover e marcar como concluídas. O app implementa navegação (Stack e Tabs), gerenciamento de estado local (`useState`) e global (`Context`), layouts responsivos com Flexbox, e acessibilidade básica.

## Funcionalidades

- **Lista de Tarefas**: Adicione, edite, remova e marque tarefas como concluídas usando `FlatList`.
- **Navegação**:
  - **Stack Navigator**: Navegue de Home para Detalhe e volte.
  - **Tab Navigator**: Acesse abas Home e Configurações.
- **Gerenciamento de Estado**:
  - Local: `useState` para inputs e lista de tarefas.
  - Global: `Context` para alternar tema (claro/escuro).
- **Formulário**: Edição de tarefas com validação (título obrigatório).
- **Feedback**: `ActivityIndicator` para loading e `Alert` para mensagens.
- **Acessibilidade**: Labels e propriedades `accessible` em elementos interativos.
- **Layout**: Design responsivo com Flexbox.

## Tecnologias

- **React Native**: 0.72.4
- **Expo**: SDK 49
- **React Navigation**: Stack (`@react-navigation/stack`) e Tabs (`@react-navigation/bottom-tabs`)
- **Dependências**: `react-native-gesture-handler`, `react-native-safe-area-context`, `react-native-screens`

## Instalação

### Pré-requisitos
- Node.js (v14+)
- Yarn ou npm
- App Expo Go (Android/iOS)
- Android Studio (opcional, para emulador)
- Git

### Passos
1. **Clone o repositório**:
   ```bash
   git clone [https://github.com/seu-usuario/todo-app-react-native.git](https://github.com/duduslugee/projeto-android.git)
   cd todo-app-react-native
   ```

2. **Instale as dependências**:
   ```bash
   yarn install
   ```
   ou
   ```bash
   npm install
   ```

3. **Inicie o servidor Expo**:
   ```bash
   npx expo start
   ```

4. **Teste no celular**:
   - Abra o app Expo Go.
   - Escaneie o QR code exibido no terminal.
   - Alternativamente, use o modo tunnel se houver problemas de rede:
     ```bash
     npx expo start --tunnel
     ```

5. **Teste no emulador**:
   - Android: Configure um emulador no Android Studio, inicie com `npx expo start` e pressione `a`.
   - iOS (Mac): Configure um simulador no Xcode, inicie com `npx expo start` e pressione `i`.

6. **Verifique dependências**:
   ```bash
   npx expo doctor
   ```
   Corrija problemas com:
   ```bash
   npx expo install --fix
   ```

## Teste via Expo

- **Link Expo**: [expo.dev/@seu-usuario/todo-app](https://expo.dev/@seu-usuario/todo-app)
- **QR Code**: Escaneie no Expo Go (link fictício, substitua pelo seu projeto publicado).
- **Instruções**: No celular, use o Expo Go para escanear o QR code ou insira manualmente o endereço (ex.: `exp://192.168.x.x:19000`) obtido via `ipconfig` (Windows) ou `ifconfig` (Mac/Linux).

## Estrutura do Projeto

```
todo-app-react-native/
├── contexts/
│   └── ThemeContext.js
├── navigation/
│   └── AppNavigator.js
├── screens/
│   ├── HomeScreen.js
│   ├── DetailScreen.js
│   └── SettingsScreen.js
├── App.js
├── package.json
└── README.md
```

- **App.js**: Entry point, configura `NavigationContainer` e `ThemeProvider`.
- **ThemeContext.js**: Gerencia tema global (claro/escuro).
- **AppNavigator.js**: Define navegação (Stack e Tabs).
- **HomeScreen.js**: Lista tarefas com `FlatList` e botões para adicionar/remover.
- **DetailScreen.js**: Edita tarefas com formulário e validação.
- **SettingsScreen.js**: Alterna tema.

## Solução de Problemas

- **Erro de QR Code**: Use `npx expo start --tunnel` ou verifique se celular e computador estão na mesma rede Wi-Fi.
- **Erro de Dependências**: Rode `npx expo install --fix`.
- **Erro de Cache**: Limpe com `npx expo start --clear`.
- **Erro de Porta**: Permita a porta 19000 no firewall (Windows: Configurações Avançadas > Regras de Entrada).

## Licença

MIT License
