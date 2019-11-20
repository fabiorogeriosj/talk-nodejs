<img src="nodejs.jpg" width="200"/>

> O objetido deste material é organizar um fluxo para entendimento do NodeJS

# O que é o NodeJS

Um ambiente de execução para JavaScript no backend, multiplataforma, open source e single threaded

- Escrito em C/C++ e Javascript
- Baseado em Event Loop (epoll) utilizando libev
- Desenvolvido sobre o Javascript Engine V8 da Google

![](eventloop1.png)
![](eventloop2.png)
![](eventloop3.png)
_________

# Iniciando pelo objetivo primário, Javascript no backend

- npm init
- Criar um arquivo convertToJson.js
- Utilizar modulos nativos e publicos
- Npm install e sua estrutura
- Transformar isso em um módulo NPM publico

```
{
    "bin": "./bin/cjsonfabiodemo1"
}

#!/usr/bin/env node
```

