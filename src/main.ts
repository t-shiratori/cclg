import { cclg } from './lib/cclg'

cclg({ label: 'any label' })
cclg({ label: 'any label', color: '#ff1493' })
cclg({ label: 'any label', color: '#ffffff', bgColor: '#39c093' })
cclg({ label: 'any label', color: '#ffffff', bgColor: '#39c093', value: '123456789' })
cclg({ label: 'any label', cStyle: 'color: #ffffff; background: #ff8c00; padding: 4px 12px;' })

cclg({ label: 'any label', type: 'log' })
cclg({ label: 'any label', type: 'info' })
cclg({ label: 'any label', type: 'warn' })
cclg({ label: 'any label', type: 'error' })

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    hello
  </div>
`
