import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('game-item-details-name')
export class GameItemDetailsName extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .game-name {
      min-height: 21px;
      font-size: 17px;
      line-height: 21px;
      font-weight: 900;
      margin: 2px 0;
      font-style: normal;
      color: var(--color-ui-casino-02);
      text-transform: uppercase;
      font-feature-settings: 'pnum' on, 'lnum' on;
    }
    @media only screen and (max-width: 768px) {
      .game-name {
        font-size: 12px;
        line-height: 18px;
      }
    }
  `;

  @property({ type: String }) displayName?: string;

  render() {
    if (this.displayName === undefined) {
      return '';
    }

    return html` <h5 class="game-name">${this.displayName}</h5> `;
  }
}
