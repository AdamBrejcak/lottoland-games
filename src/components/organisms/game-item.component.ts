import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Game } from 'src/assets/models/game';
import '../molecules/game-item-details.component';
import '../molecules/game-item-image.component';

@customElement('game-item')
export class GameItem extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .game-item-content {
      position: relative;
      display: flex;
      flex-direction: row;
      width: 432px;
      height: 138px;
    }
    .play-game {
      position: absolute;
      width: 64px;
      height: 40px;
      right: 12px;
      top: calc(50% - (40px / 2));

      background: linear-gradient(90deg, #a5cd28 0%, #69a507 100%);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
      border-radius: 4px;
      border: none;
    }
    .play-game-text {
      font-style: normal;
      font-weight: 900;
      font-size: 14px;
      line-height: 21px;
      color: var(--color-ui-casino-01);
    }

    .game-details {
      height: fit-content;
      width: fit-content;
      margin: auto 24px;
    }
    .game-image {
      width: 132px;
      height: 96px;
      margin: auto 21px;
    }
  `;

  @property({ type: Object }) game?: Game;

  render() {
    if (this.game === undefined) {
      return '';
    }

    return html`
      <div class="game-item-content">
        <game-item-image class="game-image"></game-item-image>
        <game-item-details
          class="game-details"
          .game="${new Game(this.game)}"
        ></game-item-details>
        <button class="play-game" @click=${this.handleEdit}>
          <span class="play-game-text"> PLAY </span>
        </button>
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
