import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Game } from 'src/assets/models/game';

@customElement('game-item')
export class GameItem extends LitElement {
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

  @property({ type: Object }) game?: Game ;

  render() {
    if (this.game === undefined) {
      return '';
    }

  //  <img
  //  width="160px"
  //  src=${this.game.image
  //    ? this.game.image
  //    : 'assets/images/avatar.png'}
  ///>
    return html`
      <div class="card">
        <div class="card-content">


          <h4>${this.game.displayName}</h4>
          <p>${this.game.image}</p>
          <button @click=${this.handleEdit}>Edit</button>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private handleEdit() {
    super.connectedCallback();
    this.dispatchEvent(
      new CustomEvent<any>('edit', {
        detail: this.game,
      })
    );
    console.log('hi');
  }
}
