import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../organisms/game-item.component';
import gamesData from '../../assets/gamesData.js';
import { Game } from 'src/assets/models/game';

@customElement('games-catalogue')
export class GamesCatalogue extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .game-item {
      width: 350px;
      height: 150px;
      margin: 7px;
      width: 432px;
      height: 138px;

      background-color: var(--color-casino-base);

      border-radius: 6px;
    }
  `;

  render() {
    return html`
      <h3>games-catalogue</h3>
      ${Object.values(gamesData).map(
        (game) => html`
          <game-item
            class="game-item"
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
