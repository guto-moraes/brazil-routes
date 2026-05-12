import { Component } from 'react'

declare global {
  interface Window {
    VLibras: {
      Widget: new (widgetSrc: string) => unknown
    }
  }
}

declare module 'react' {
  interface HTMLAttributes<T> {
    vw?: string
    'vw-access-button'?: string
    'vw-plugin-wrapper'?: string
  }
}

export default class VLibras extends Component<{ forceOnload?: boolean }> {
  widgetSrc: string
  scriptSrc: string
  script: HTMLScriptElement | null = null

  constructor(props: { forceOnload?: boolean }) {
    super(props)
    this.widgetSrc = 'https://vlibras.gov.br/app'
    this.scriptSrc = 'https://vlibras.gov.br/app/vlibras-plugin.js'
  }

  init() {
    this.script = document.createElement('script')
    this.script.src = this.scriptSrc
    this.script.async = true
    this.script.onload = () => {
      new window.VLibras.Widget(this.widgetSrc)
      if (this.props.forceOnload && typeof window.onload === 'function') {
        window.onload(new Event('load'))
      }
    }
    document.head.appendChild(this.script)
  }

  componentDidMount() {
    this.init()
  }

  render() {
    return (
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    )
  }
}