import {LitElement, html, css} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class SolidFuelBoilers extends LitElement {
	config = {};

	setConfig(config) {
		this.config = config;
	}

	getCardSize() {
		return 1;
	}

	static get properties() {
		return {
			hass: {},
			config: {}
		};
	}

	makeHandler(command) {
		return () => {
			console.log('trigger command: ', command);
		}
	}

	static get styles() {
		return css`
      :root {
        
      }

      .root {
        background-image: url("/local/images/solid-fuel-boilers.png");
        height: 500px;
        background-color: var(--card-background-color);
				padding: 15px;
				border-radius: 15px;
				background-repeat: no-repeat;
        background-size: 300px;
        background-position: center;
      }
		`
	}

	render() {
		const {title} = this.config;
		return html`
        <div class="root">
            
        </div>
		`
	}
}

customElements.define('solid-fuel-boilers', SolidFuelBoilers);
window.customCards = window.customCards || [];
window.customCards.push({
	type: "solid-fuel-boilers",
	name: "Твердотопливный котел",
	preview: true,
	description: "Управление твердотопливным котлом отопления"
});
