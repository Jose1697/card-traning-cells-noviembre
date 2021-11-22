import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardTraning-styles.js';

import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@cells-components/coronita-icons/coronita-icons.js'
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<card-traning></card-traning>
```

##styling-doc

@customElement card-traning
*/
export class CardTraning extends LitElement {
  static get is() {
    return 'card-traning';
  }

  // Declare properties
  static get properties() {
    return {
      title: {type: String},
      info: {type: String},
      listItems: {type: Array, attribute: 'list-items'},
      buttonName: {type: String, attribute:'button-name'}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
    this.info = '';
    this.listItems=[];
    this.buttonName = ''
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('card-traning-shared-styles')
    ];
  }

  actionInsurance(){
    this.dispatchEvent(new CustomEvent('selection-insurance',{
      bubbles: true,
      composed: true,
      detail: this.title,
    }))
  }

  // Define a template
  render() {
    return html`
    <div class="seguro">
      <h1>${this.title}</h1>
      <p>${this.info}</p>
      ${this.listItems.map((i) => 
        html`
        <div class="list">
          <bbva-core-icon icon="coronita:bullet1"></bbva-core-icon><span>${i}</span><br>
        </div>
        
      `)}
      <div class="button">
        <bbva-button-default text="${this.buttonName}" @click="${this.actionInsurance}"></bbva-button-default>
      </div>
    </div>
    
    `;
  }
}
