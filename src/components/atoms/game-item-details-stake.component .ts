import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('game-item-details-stake')
export class GameItemDetailsStake extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .name {
      position: static;
      height: 21px;
      left: 0px;
      right: 0px;
      top: 46px;

      font-family: "ff-daxline-pro";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: var(--color-ui-casino-03);

      display: flex;
      align-items: center;
      font-feature-settings: 'pnum' on, 'lnum' on;

      flex: none;
      order: 2;
      align-self: stretch;
      flex-grow: 0;
      margin: 2px 0px;
    }
  `;

  @property({ type: Number }) stake?: number;

  render() {
    if (this.stake === undefined) {
      return '';
    }

    return html` <h6 class="name">€ ${this.stake.toFixed(2)} min. Stake</h6> `;
  }
}
