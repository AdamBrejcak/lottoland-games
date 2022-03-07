import { LitElement, html, customElement, css, property } from 'lit-element';
import { Game } from 'src/assets/models/game';
import '../atoms/game-item-details-name.component';
import '../atoms/game-item-details-provider.component';
import '../atoms/game-item-details-stake.component ';

@customElement('game-item-details')
export class GameItemDetails extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
      max-width: 160px;
    }
    .card-content {
      padding: 10px;
    }
  `;

  @property({ type: Object }) game?: Game;

  render() {
    if (this.game === undefined) {
      return '';
    }

    return html`
      <span>
        <game-item-details-provider
          .provider="${this.game.provider ? this.game.provider[0] : ''}"
        ></game-item-details-provider>
        <game-item-details-name
          .displayName="${this.game.displayName}"
        ></game-item-details-name>
        <game-item-details-stake
          .stake="${this.game.currencyData['EUR']?.minimumStake}"
        ></game-item-details-stake>
      </span>
    `;
  }
}
