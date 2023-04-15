## Install

```
npm i cclg
```

## Useage

```ts
import { cclg } from 'cclg'

cclg({ label: 'any label' })
cclg({ label: 'color', color: '#ff1493' })
cclg({ label: 'color bgColor', color: '#ffffff', bgColor: '#39c093' })
cclg({ label: 'color bgColor value', color: '#ffffff', bgColor: '#39c093', value: '123456789' })
cclg({ label: 'cStyle', cStyle: 'color: #ffffff; background: #ff8c00; padding: 4px 12px;' })
cclg({ label: 'type log', type: 'log' })
cclg({ label: 'type info', type: 'info' })
cclg({ label: 'type warn', type: 'warn' })
cclg({ label: 'type error', type: 'error' })
```

<img width="369" alt="スクリーンショット 2023-04-16 2 52 03" src="https://user-images.githubusercontent.com/8470739/232245429-34298493-d42d-4e5d-a3e8-adcf29669348.png">
