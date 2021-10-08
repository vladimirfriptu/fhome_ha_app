import {LitElement, html, css} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class LightRemoteControlCard extends LitElement {
	config = {
		title: '',
		script_id: ''
	};

	setConfig(config) {
		this.config = config;
	}

	// The height of your card. Home Assistant uses this to automatically
	// distribute all cards over the available columns.
	getCardSize() {
		return 1;
	}

	static get properties() {
		return {
			hass: {},
			config: {}
		};
	}

	static get styles() {
		return css`
      :host {
        --border-color: var(--secondary-text-color);
        --border-color-active: var(--state-icon-color);
        --icon-color: #fff;
        --button-devider-color: var(--secondary-text-color);
      }

      .fhome-light-remote-control-container {
        background: var(--card-background-color, #fff);
        border-radius: 15px;
        padding: 15px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .fhome-light-remote-control-include-content {
        min-width: 200px;
        max-width: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .fhome-light-remote-control-space-top {
        margin-top: 20px;
      }

      .fhome-light-remote-control-beetwen-container {
        display: flex;
        justify-content: space-between;
      }

      .fhome-light-remote-control-button {
        width: 70px;
        padding: 2px;
        border-radius: 30px;
        box-shadow: 0 0 3px var(--border-color);
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: space-around;
        line-height: 14px;
        transition: box-shadow 0.3s;
      }

      .fhome-light-remote-control-button:hover {
        box-shadow: 0 0 5px var(--border-color-active);
      }

      .fhome-light-remote-control-round {
        flex: 1;
        position: relative;
        margin: 30px 0 0;
        box-shadow: 0 0 3px var(--border-color);
        border-radius: 50%;
        min-height: 200px;
        max-width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: box-shadow 0.3s;
        align-self: center;
        min-width: 200px;
      }

      .fhome-light-remote-control-round:hover {
        box-shadow: 0 0 5px var(--border-color-active);
      }

      .fhome-light-remote-control-include-round {
        width: 50%;
        min-height: 95px;
        border: solid 1px var(--border-color);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .fhome-light-remote-control-icon {
        max-width: 25px;
        fill: var(--icon-color);
      }

      .fhome-light-remote-control-include-round__large-sun {
        width: 65px;
      }

      .fhome-light-remote-control-round__arrow {
        max-width: 15px;
        position: absolute;
        top: 18px;
        left: 50%;
        transform: translateX(-50%) scale(2.5);
      }

      .fhome-light-remote-control-round__bottom-arrow {
        max-width: 15px;
        transform: rotate(180deg) translateX(50%) scale(2.5);
        position: absolute;
        bottom: 18px;
        left: 50%;
      }

      .fhome-light-remote-control-round__left-arrow {
        max-width: 15px;
        transform: rotate(270deg) translateX(50%) scale(2.5);
        position: absolute;
        top: 47%;
        left: 20px;
      }

      .fhome-light-remote-control-round__right-arrow {
        max-width: 15px;
        transform: rotate(90deg) translateX(-50%) scale(2.5);
        position: absolute;
        right: 20px;
        top: 49%;
      }

      .fhome-light-remote-control__center-content {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .fhome-light-remote-control__vertical-devider {
        height: 90%;
        width: 1px;
        background: var(--button-devider-color);
      }

      .fhome-light-remote-control__title {
        display: flex;
        justify-content: center;
        margin: 30px 0 5px;
        font-size: 14px;
        color: var(--primary-text-color);
      }`
	}

	makeCommandHandler(command) {
		return () => {
			this.hass.callService("script", this.config.script_id, { data: { command } })
		}
	}

	render() {
		const {title} = this.config;
		return html`
        <div class="fhome-light-remote-control-container">
            <div class="fhome-light-remote-control-include-content">
                <div class="fhome-light-remote-control-beetwen-container">
                    <div
                            class="fhome-light-remote-control-button"
                            @click="${this.makeCommandHandler("power_rgb")}"
                    >
                        <img src="/local/icons/rgb.png" class="fhome-light-remote-control-icon">
                        <div>ON<br>OFF</div>
                    </div>
                    <div
                            class="fhome-light-remote-control-button"
                            @click="${this.makeCommandHandler("power")}"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             fill="var(--icon-color)" version="1.1" width="25" height="25" viewBox="0 0 25 25">
                            <path d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"/>
                        </svg>
                        <div>ON<br>OFF</div>
                    </div>
                </div>

                <div class="fhome-light-remote-control-round">
                    <div
                            class="fhome-light-remote-control-include-round"
                            @click="${this.makeCommandHandler("reset_temp_dimmer")}"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             fill="var(--icon-color)" version="1.1" width="60" height="60" viewBox="0 0 24 24">
                            <path d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"/>
                        </svg>
                    </div>
                    <svg
                            width="25"
                            height="25"
                            class="fhome-light-remote-control-round__arrow"
                            viewBox="0 0 25 25"
                            @click="${this.makeCommandHandler("brighter_light")}"
                    >
                        <path fill="var(--icon-color)"
                              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
                    </svg>
                    <svg
                            width="25"
                            height="25"
                            class="fhome-light-remote-control-round__bottom-arrow"
                            viewBox="0 0 25 25"
                            @click="${this.makeCommandHandler("dimmer_light")}"
                    >
                        <path fill="var(--icon-color)"
                              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
                    </svg>
                    <svg
                            width="25"
                            height="25"
                            class="fhome-light-remote-control-round__left-arrow"
                            viewBox="0 0 25 25"
                            @click="${this.makeCommandHandler("colder_light")}"
                    >
                        <path fill="var(--icon-color)"
                              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
                    </svg>
                    <svg
                            width="25"
                            height="25"
                            class="fhome-light-remote-control-round__right-arrow"
                            viewBox="0 0 25 25"
                            @click="${this.makeCommandHandler("warmer_light")}"
                    >
                        <path fill="var(--icon-color)"
                              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
                    </svg>
                </div>

                <div class="fhome-light-remote-control__center-content fhome-light-remote-control-space-top">
                    <div
                            class="fhome-light-remote-control-button"
                            @click="${this.makeCommandHandler("power_off_on_20_sec")}"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" class="fhome-light-remote-control-icon">
                            <path d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z"/>
                        </svg>
                        <span style="line-height: 15px;">20sec</span>
                    </div>
                </div>

                <div class="fhome-light-remote-control-beetwen-container fhome-light-remote-control-space-top">
                    <div
                            class="fhome-light-remote-control-button"
                            @click="${this.makeCommandHandler("switch_temp")}"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             fill="var(--icon-color)" version="1.1" width="25" height="25" viewBox="0 0 25 25">
                            <path d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"/>
                        </svg>
                        <div class="fhome-light-remote-control__vertical-devider"></div>
                        <svg width="25" height="25" viewBox="0 0 25 25" class="fhome-light-remote-control-icon">
                            <path d="M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z"/>
                        </svg>
                    </div>

                    <div
                            class="fhome-light-remote-control-button"
                            @click="${this.makeCommandHandler("night_mode")}"
                    >
                        <svg width="25" height="25" viewBox="0 0 25 25" class="fhome-light-remote-control-icon">
                            <path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"/>
                        </svg>
                    </div>
                </div>

                <div class="fhome-light-remote-control-beetwen-container fhome-light-remote-control-space-top">
                    <div
                            class="fhome-light-remote-control-button"
                            @click="${this.makeCommandHandler("rgb_auth")}"
                    >
                        <img src="/local/icons/rgb.png" class="fhome-light-remote-control-icon">
                        <div class="fhome-light-remote-control__vertical-devider"></div>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"/>
                        </svg>
                    </div>

                    <div
                            class="fhome-light-remote-control-button"
                            @click="${this.makeCommandHandler("switch_rgb_color")}"
                    >
                        <img src="/local/icons/rgb.png" class="fhome-light-remote-control-icon">
                        <div class="fhome-light-remote-control__vertical-devider"></div>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="fhome-light-remote-control-icon">
                            <path d="M14 15V22H16V15H19L15 11L11 15H14M13 9H10V2H8V9H5L9 13L13 9Z"/>
                        </svg>
                    </div>

                </div>

                <div class="fhome-light-remote-control__title">
                    <span>${title || "Новый пульт"}</span>
                </div>
            </div>
        </div>`
	}
}

customElements.define('light-remote-control', LightRemoteControlCard);
window.customCards = window.customCards || [];
window.customCards.push({
	type: "light-remote-control",
	name: "Remote IR light control",
	preview: true,
	description: "Пульт управление люстрой" // Optional
});
