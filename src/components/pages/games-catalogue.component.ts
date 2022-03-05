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
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
      max-width: 160px;
    }
    .card-content {
      padding: 10px;
    }
  `;

  user?: any = {
    id: 0,
    fullName: 'Luis Aviles',
    role: 'Software Engineer',
  };

  render() {
    if (this.user === undefined) {
      return '';
    }

    return html`
      <div class="card">
        <h3>games-catalogue</h3>
        ${Object.values(gamesData).map(
          (game) => html`
            <game-item .game="${new Game(game)}" @edit=${this.edit}></game-item>
          `
        )}
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private edit(event: CustomEvent) {
    super.connectedCallback();
    console.log(event.detail.displayName);
  }
}
