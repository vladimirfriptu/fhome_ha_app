import {LitElement, html, css} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class GarlandWallControlCard extends LitElement {
	config = {
		title: '',
		script_id: '',
	};

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
        --button-bg: gray;
        --light-text-color: white;
        --primary-bg: silver;
      }

      .fhome-garland-wall-control_root {
        background-image: url("/local/images/garland_wall.png");
				background-repeat: no-repeat;
				background-position: 3px 60px;
				background-size: 120%;
				
        height: 395px;
        background-color: var(--card-background-color);
				border-radius: 15px;
				padding: 15px;
				font-size: 12px;
				justify-content: space-between;
        display: flex;
				flex-direction: column;
      }

      .fhome-garland-wall-control_button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
				background-color: var(--button-bg);
				color: var(--light-text-color);

        flex: 1 1 100%;
				
				padding: 5px 10px;
				border: solid 1px var(--light-text-color);
        box-shadow: 0 0 3px var(--secondary-text-color);
        text-transform: uppercase;
      }

      .fhome-garland-wall-control_buttons {
        display: flex;
				flex-wrap: wrap;
        padding-top: 60px;
				gap: 20px;
				
        max-width: 100px;
        justify-content: space-between;
      }
			
			.fhome-garland-wall-control_header {
        display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: space-around;
				flex: 1;
				gap: 10%;
			}
			
			.fhome-garland-wall-control_footer {
        display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 15px;
			}
			
			.fhome-garland-wall-control_mode-button-container {
				flex-basis: 79px;
			}
			
			.fhome-garland-wall-control_top-view {
				
			}
		`
	}

	renderButton(title, command) {
		return html`
        <div class="fhome-garland-wall-control_button-container" @click="${this.makeHandler(command)}">
            ${title}
        </div>
		`
	}

	renderColorButton(title, command, color) {
		return html`
        <div
                class="fhome-garland-wall-control_button-container fhome-garland-wall-control_button-container-${color}"
                @click="${this.makeHandler(command)}"
        >
            ${title}
        </div>
		`
	}

	render() {
		const { title } = this.config;
		return html`
        <div class="fhome-garland-wall-control_root">
						<div class="fhome-garland-wall-control_top-view">
								<div class="fhome-garland-wall-control_header">
                	${this.renderButton('on', 'power_on')}
                	${this.renderButton('off', 'power_off')}
								</div>
						
            		<div class="fhome-garland-wall-control_buttons">
                    ${this.renderButton('+', 'warmer')}
										${this.renderButton('-', 'dimmer')}
                    ${this.renderButton('timer', 'timer')}
            		</div>
						</div>
						
						<div class="fhome-garland-wall-control_footer">
                ${new Array(7).fill(null).map((_, index) => html`
                	<div class="fhome-garland-wall-control_mode-button-container">
                		${this.renderButton(`mode ${index + 1}`, `mode_${index + 1}`)}
                	</div>
                `)}

                <div class="fhome-garland-wall-control_mode-button-container">
                	${this.renderButton('reset', 'static_mode')}
								</div>
						</div>
        </div>
		`
	}
}

customElements.define('garland-wall-control', GarlandWallControlCard);
window.customCards = window.customCards || [];
window.customCards.push({
	type: "garland-wall-control",
	name: "Remote IR garland wall",
	preview: true,
	description: "Пульт управление шторой гирлянды" // Optional
});
