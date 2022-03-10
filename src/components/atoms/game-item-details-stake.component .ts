import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('game-item-details-stake')
export class GameItemDetailsStake extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .game-stake {
      height: 21px;
      font-family: 'ff-daxline-pro';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      margin: 2px 0;
      color: var(--color-ui-casino-03);
    }
    @media only screen and (max-width: 768px) {
      .game-stake {
        font-size: 12px;
        line-height: 18px;
      }
    }
  `;

  @property({ type: Number }) stake?: number;

  render() {
    if (this.stake === undefined) {
      return '';
    }

    return html`
      <h6 class="game-stake">€ ${this.stake.toFixed(2)} min. Stake</h6>
    `;
  }
}
