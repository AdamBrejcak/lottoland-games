import {
  LitElement,
  html,
  customElement,
  css,
  internalProperty,
} from 'lit-element';
import '../organisms/game-item.component';
import gamesData from '../../assets/gamesData.js';
import { Game } from 'src/assets/models/game';

@customElement('games-catalogue')
export class GamesCatalogue extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

  `;

  render() {
    return html`
      <h3>games-catalogue</h3>
      ${Object.values(gamesData).map(
        (game) => html`
          <game-item
            .game="${new Game(game)}"
            @edit=${this.edit}
          ></game-item>
        `
      )}
    `;
  }

  private edit(event: CustomEvent) {
    super.connectedCallback();
    console.log(event.detail.displayName);
  }
}
