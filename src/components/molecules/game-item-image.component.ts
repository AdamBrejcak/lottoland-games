import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('game-item-image')
export class GameItemImage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .game-image {
      position: relative;
      width: 132px;
      height: 96px;

      filter: drop-shadow(0px 5.33333px 26.6667px rgba(27, 24, 31, 0.12));
      border-radius: 6px;
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
      top: 9.21px;
      color: var(--color-ui-casino-01);
    }
  `;

  @property({ type: Boolean }) mouseOver?: boolean;


  render() {
    return html`
      <div class="game-image">
        <img
          style="width:132px;height:96px;"
          src="https://www.lanescarlisle.co.uk/wp-content/uploads/2016/06/Game-Logo-960x300.jpg"
          }
        />
        ${this.mouseOver}
        ${this.mouseOver
          ? html` <span class="game-image-info">&#88</span>`
          : html``}
      </div>
    `;
  }

  update(changedProperties: Map<string, unknown>) {
    super.update(changedProperties);
  }
}
