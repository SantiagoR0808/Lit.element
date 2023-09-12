import { LitElement, html } from "lit-element";

export class Myelement extends LitElement{
    createRenderRoot(){
        return this
    }
    render(){
         return html`
         
         `
    }
}

customElements.define ('my-seleccion', Myelement);