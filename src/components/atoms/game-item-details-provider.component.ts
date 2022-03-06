import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('game-item-details-provider')
export class GameItemDetailsProvider extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .game-provider {
      position: static;
      height: 21px;
      left: 0px;
      right: 0px;
      top: 0px;

      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      display: flex;
      align-items: center;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: var(--color-ui-casino-03);

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
      margin: 2px 0px;
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
