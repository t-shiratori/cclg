import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'

import { cclg } from './lib/main'

cclg({ label: 'any label' })
cclg({ label: 'any label', color: '#ff1493' })
cclg({ label: 'any label', color: '#ffffff', bgColor: '#39c093' })
cclg({ label: 'any label', color: '#ffffff', bgColor: '#39c093', value: '123456789' })
cclg({ label: 'any label', cStyle: 'color: #ffffff; background: #ff8c00; padding: 4px 12px;' })

cclg({ label: 'any label', type: 'log' })
cclg({ label: 'any label', type: 'info' })
cclg({ label: 'any label', type: 'warn' })
cclg({ label: 'any label', type: 'error' })

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
