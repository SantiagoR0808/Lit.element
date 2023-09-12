import { LitElement, html } from "lit-element";

import "./my-element"
import "./seleccion"
import "./boton"
import "./logo"
import "./eventos"

export class Home extends LitElement{
    createRenderRoot(){
        return this
    }
    render(){
         return html` 
            <my-element></my-element>
            <my-seleccion></my-seleccion>
            <my-boton></my-boton>
            <my-logo></my-logo>
            <my-eventos></my-eventos>
         `
    }
}

customElements.define ('my-home', Home);