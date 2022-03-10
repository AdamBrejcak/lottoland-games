import { LitElement, html, customElement, css, property } from 'lit-element';
//import "../../assets/img/temple-of-nudges.jpg";
@customElement('game-item-image')
export class GameItemImage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .game-image {
      width: 132px;
      height: 96px;
      position: relative;
      filter: drop-shadow(0px 5.33333px 26.6667px rgba(27, 24, 31, 0.12));
      border-radius: 6px;
    }
    .hidden {
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    .game-image img {
      width: 132px;
      height: 96px;
    }
    .game-image-info {
      font-family: 'll-icon-font';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: left;
      position: absolute;
      width: 21px;
      height: 22px;
      left: 11.67px;
      transition: all 0.3s ease-in-out;
      top: 9.21px;
      color: var(--color-ui-casino-01);
    }
    @media only screen and (max-width: 768px) {
      .game-image img {
        width: 96px;
        height: 72px;
      }
      .game-image {
        width: 96px;
        height: 72px;
      }
      .hidden {
        opacity: 1;
      }
    }
  `;

  @property({ type: Boolean }) mouseOver?: boolean;

  update(changedProperties: Map<string, unknown>): void {
    super.update(changedProperties);
  }

  render() {
    return html`
      <div class="game-image">
        <img
          src="../../assets/img/temple-of-nudges.jpg"
          }
        />
        <span class="game-image-info
          ${this.mouseOver ? '' : 'hidden'}">&#88
        </span>
      </div>
    `;
  }
}
