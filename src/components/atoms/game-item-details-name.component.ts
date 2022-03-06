import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('game-item-details-name')
export class GameItemDetailsName extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .game-name {
      position: static;
      height: 21px;
      left: 0px;
      right: 0px;
      top: 23px;

      font-size: 17px;
      line-height: 21px;
      font-weight: 900;
      font-style: normal;
      color: var(--color-ui-casino-02);
      text-transform: uppercase;
      font-feature-settings: 'pnum' on, 'lnum' on;

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      margin: 2px 0px;
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
