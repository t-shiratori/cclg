import { cclg } from './lib/cclg'

cclg({ label: 'any label' })
cclg({ label: 'color', color: '#ff1493' })
cclg({ label: 'color bgColor', color: '#ffffff', bgColor: '#39c093' })
cclg({ label: 'color bgColor value', color: '#ffffff', bgColor: '#39c093', value: '123456789' })
cclg({ label: 'cStyle', cStyle: 'color: #ffffff; background: #ff8c00; padding: 4px 12px;' })
cclg({ label: 'type log', type: 'log' })
cclg({ label: 'type info', type: 'info' })
cclg({ label: 'type warn', type: 'warn' })
cclg({ label: 'type error', type: 'error' })

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    hello
  </div>
`
