import {
  LitElement,
  html,
  customElement,
  css,
  property,
  internalProperty,
} from 'lit-element';
import { Game } from 'src/shared/models/game';
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
      border-radius: 6px;
    }
    .game-item-content-background {
      background-color: var(--color-casino-base-half-opacity);
    }
    .play-game {
      width: 64px;
      height: 40px;
      top: calc(50% - (40px / 2));
      background: linear-gradient(90deg, #a5cd28 0%, #69a507 100%);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
      border-radius: 4px;
      border: none;
      cursor: pointer;
      opacity: 1;
      transition: all 0.3s ease-in-out;
      margin: auto 21px auto 0;
    }
    .hidden {
      opacity: 0;
      transition: all 0.3s ease-in-out;
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
    .separator {
      height: 1px;
      width: 272px;
      border-radius: 0px;
      background-color: var(--color-ui-casino-02);
      margin: 0 auto;
      opacity: 0;
    }
    @media only screen and (max-width: 768px) {
      .game-item-content {
        max-width: 320px;
        margin: 5px;
      }
      .game-image {
        width: 96px;
        height: 72px;
        margin: auto auto auto 24px;
      }
      .game-details {
        margin: auto 16px;
      }
      .play-game {
        width: 60px;
        height: 32px;
        margin: auto 24px auto auto;
      }
      .game-item-content-background {
        background-color: transparent;
      }
      .hidden {
        opacity: 1;
      }
      div.separator {
        opacity: 0.12;
      }
    }
  `;

  @property({ type: Object }) game?: Game;
  @internalProperty() mouseOver: boolean = false;

  private handleEdit(): void {
    super.connectedCallback();
    this.dispatchEvent(
      new CustomEvent<any>('play', {
        detail: this.game,
      })
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  render() {
    if (this.game === undefined) {
      return '';
    }

    return html`
      <div
        @mouseenter="${() => (this.mouseOver = true)}"
        @mouseleave="${() => (this.mouseOver = false)}"
        class="game-item-content ${this.mouseOver
          ? 'game-item-content-background'
          : ''}"
      >
        <game-item-image
          .game="${new Game(this.game)}"
          .mouseOver="${this.mouseOver}"
          class="game-image"
        ></game-item-image>
        <game-item-details
          class="game-details"
          .game="${new Game(this.game)}"
        ></game-item-details>

        <button
          class="play-game ${this.mouseOver ? '' : 'hidden'}"
          @click=${this.handleEdit}
        >
          <span class="play-game-text"> PLAY </span>
        </button>
      </div>
      <div class="separator ${this.mouseOver ? '' : 'hidden'}"></div>
    `;
  }
}
