import {
  LitElement,
  html,
  customElement,
  css,
  internalProperty,
} from 'lit-element';
import '../atoms/game-item-details-name.component';
import '../atoms/game-item-details-provider.component';
import '../atoms/game-item-details-stake.component ';

@customElement('game-item-dropdown-sort')
export class GameItemDropdownSort extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .dropbtn {
      height: 32px;
      width: 135px;
      border: none;
      padding: 0;
      background-color: var(--color-casino-base);
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      font-feature-settings: 'pnum' on, 'lnum' on;
      border-radius: 4px;
      flex-direction: row;
      transition: all 0.5s ease-in-out;
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      visibility: hidden;
      position: absolute;
      background-color: var(--color-casino-base);
      transition: all 0.5s ease-in-out;
      height: 0;
      width: 132px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .dropdown-content form {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
    }
    .dropdown-content form span {
      color: var(--color-ui-casino-02);
      transition: all 0.5s ease-in-out;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      text-decoration: none;
      opacity: 0;
      max-width: 272px;
      max-height: 32px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .dropdown-content form span label {
      line-height: 21px;
      width: 169px;
    }
    .dropdown-text {
      min-width: 81.5px;
      font-style: normal;
      font-weight: 900;
      font-size: 11px;
      line-height: 21px;
      margin: 5.5px 16px 5.5px 0;
      color: var(--color-ui-casino-02);
    }
    .dropdown-icon {
      font-family: 'll-icon-font';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      margin: 3px 8px 3px 16px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: var(--color-ui-casino-02);
      transition: all 0.5s ease-in-out;
    }
    .dropdown-icon::before {
      content: '1';
    }
    input[type='radio'] {
      -webkit-appearance: none;
      width: 28px;
      height: 28px;
      border: 1px solid darkgray;
      border-radius: 50%;
      outline: none;
      box-shadow: 0;
      margin: 0 17.5px 0 38.5px;
    }
    input[type='radio']:before {
      content: '';
      display: block;
      width: 60%;
      height: 60%;
      margin: 20% auto;
      border-radius: 50%;
    }
    input[type='radio']:checked:before {
      background: var(--color-casino-complimentary);
    }
    .dropdown:hover .dropdown-content {
      height: 168px;
      width: 272px;
      visibility: visible;
    }
    .dropdown:hover .dropbtn {
      border-radius: 4px 4px 0 0;
      width: 272px;
    }
    .dropdown:hover .dropdown-content form span {
      border-radius: 4px 4px 0 0;
      width: 272px;
      margin: 7.5px 0;
      opacity: 1;
    }
    .dropdown:hover .dropdown-icon::before {
      content: '2';
    }
  `;

  @internalProperty() sortGamesBy!: string;

  private onChangeSort(u: any): void {
    this.sortGamesBy = u.target.value;
    this.dispatchEvent(
      new CustomEvent('sortGamesChange', {
        detail: this.sortGamesBy,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="dropdown">
        <button class="dropbtn">
          <span class="dropdown-icon"></span>
          <span class="dropdown-text">Sort Games</span>
        </button>
        <div class="dropdown-content">
          <form>
            <span>
              <input
                value="name"
                type="radio"
                id="name"
                name="sort_games"
                value="name"
                @change=${this.onChangeSort}
                ?checked=${this.sortGamesBy === 'name'}
              />
              <label for="name">Name (A-Z)</label>
            </span>
            <span>
              <input
                value="stakeMin"
                type="radio"
                id="stake_min"
                name="sort_games"
                value="stake_min"
                @change=${this.onChangeSort}
                ?checked=${this.sortGamesBy === 'stakeMin'}
              />
              <label for="stake_min">Stake (min to max)</label>
            </span>
            <span>
              <input
                value="stakeMax"
                type="radio"
                id="stake_max"
                name="sort_games"
                value="stake_max"
                @change=${this.onChangeSort}
                ?checked=${this.sortGamesBy === 'stakeMax'}
              />
              <label for="stake_max">Stake (max to min)</label>
            </span>
          </form>
        </div>
      </div>
    `;
  }
}
