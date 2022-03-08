import { LitElement, html, customElement, css } from 'lit-element';
import gamesData from '../../assets/gamesData.js';
import { Game } from 'src/assets/models/game';
import '../organisms/game-item.component';
import '../organisms/game-item-dropdown-sort.component';

@customElement('games-catalogue')
export class GamesCatalogue extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .content {
      background: linear-gradient(90deg, #353b4d 0%, #1f263a 100%);
      overflow: auto;
      padding: 18px 84px;
    }
    .catalogue-heading {
      font-style: normal;
      font-weight: 900;
      font-size: 21px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: var(--color-ui-casino-02);
      margin: 25px 0;
    }
  `;

  render() {
    return html`
      <div class="content">
        <h4 class="catalogue-heading">Lottoland Games</h4>
        <game-item-dropdown-sort></game-item-dropdown-sort>
        ${Object.values(gamesData).map(
          (game) => html`
            <game-item .game="${new Game(game)}" @edit=${this.edit}></game-item>
          `
        )}
      </div>
    `;
  }

  private edit(event: CustomEvent) {
    super.connectedCallback();
    console.log(event.detail.displayName);
  }
}
