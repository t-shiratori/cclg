/**
 * @property label log text
 * @property color color of the label
 * @property bgColor background color of the label
 * @property value value of the label
 * @cStyle cStyle style of the label
 * @type type log type
 */
type TCclg = {
  label: string
  color?: string
  bgColor?: string
  value?: string | number | object | null | undefined
  cStyle?: string
  type?: 'log' | 'info' | 'warn' | 'error'
}

const getConsole = (type: 'log' | 'info' | 'warn' | 'error' | undefined = 'log') => {
  switch (type) {
    case 'log':
      return console.log
    case 'info':
      return console.info
    case 'warn':
      return console.warn
    case 'error':
      return console.error
    default:
      return console.log
  }
}

/**
 * custom console
 * @param args {@link TCclg}
 * @returns console medhod
 */
export const cclg = ({ label, color, bgColor, cStyle, value, type }: TCclg) => {
  const _color = color ?? '#000000'
  const style = cStyle ?? `color: ${_color}; background: ${bgColor}; padding: 2px 4px;`

  const console = getConsole(type)

  if (value) return console(`%c${label}`, style, `${value}`)
  return console(`%c${label}`, style)
}
