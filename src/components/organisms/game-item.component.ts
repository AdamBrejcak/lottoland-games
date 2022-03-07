import {
  LitElement,
  html,
  customElement,
  css,
  property,
  internalProperty,
} from 'lit-element';
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

      margin: 7px;

      border-radius: 6px;
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

      cursor: pointer;
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
      max-width: 150px;
      margin: auto 24px;
    }
    .game-image {
      width: 132px;
      height: 96px;
      margin: auto 21px;
    }
  `;

  @property({ type: Object }) game?: Game;
  @internalProperty() mouseOver: boolean = false;

  render() {
    if (this.game === undefined) {
      return '';
    }

    return html`
      <div
        @mouseenter="${() => (this.mouseOver = true)}"
        @mouseleave="${() => (this.mouseOver = false)}"
        style="background-color: ${this.mouseOver
          ? 'var(--color-casino-base);'
          : ''}"
        class="game-item-content"
      >
        <game-item-image
          .mouseOver="${this.mouseOver}"
          class="game-image"
        ></game-item-image>
        <game-item-details
          class="game-details"
          .game="${new Game(this.game)}"
        ></game-item-details>

        ${this.mouseOver
          ? html`<button class="play-game" @click=${this.handleEdit}>
              <span class="play-game-text"> PLAY </span>
            </button>`
          : html``}
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  private handleEdit(): void {
    super.connectedCallback();
    this.dispatchEvent(
      new CustomEvent<any>('edit', {
        detail: this.game,
      })
    );
    console.log('hi');
  }
}
