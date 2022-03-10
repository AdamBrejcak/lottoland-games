import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('game-item-details-provider')
export class GameItemDetailsProvider extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .game-provider {
      height: 21px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      margin: 2px 0;
      display: flex;
      align-items: center;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: var(--color-ui-casino-03);
    }
    @media only screen and (max-width: 768px) {
      .game-provider {
        font-size: 12px;
        line-height: 18px;
      }
    }
  `;

  @property({ type: String }) provider?: string;

  render() {
    if (this.provider === undefined) {
      return '';
    }

    return html` <h6 class="game-provider">${this.provider}</h6> `;
  }
}
