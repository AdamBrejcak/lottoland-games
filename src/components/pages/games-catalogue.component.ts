import { LitElement, html, customElement, css, property } from 'lit-element';
import gamesData from '../../assets/gamesData.js';
import { Game } from 'src/shared/models/game';
import '../organisms/game-item.component';
import '../organisms/game-item-dropdown-sort.component';
import { SortOptions } from '../../shared/enum/sort-options';

@customElement('games-catalogue')
export class GamesCatalogue extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .games-list {
      margin-top: 16px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .catalogue-heading {
      font-style: normal;
      font-weight: 900;
      font-size: 21px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: var(--color-ui-casino-02);
      margin: 25px 0;
    }

    @media only screen and (max-width: 1280px) {
      .content {
        margin: 0 24px;
      }
    }
  `;

  @property({ type: Object }) games?: any;
  allGames: any = gamesData;
  defaultSortGamesBy: string = SortOptions.name;

  constructor() {
    super();
    this.games = Object.keys(this.allGames).map((key) => this.allGames[key]);
  }

  private onPlay(event: CustomEvent): void {
    console.log('You clicked on => ', event.detail);
  }

  private sortGames(e: any): void {
    let stakeMin: any;
    if (e.detail === 'name') {
      stakeMin = this.games.sort(function (a: any, b: any) {
        return ('' + a.displayName).localeCompare(b.displayName, undefined, {
          numeric: true,
          sensitivity: 'base',
        });
      });
    }

    if (e.detail === 'stakeMin') {
      stakeMin = this.games.sort(function (a: any, b: any) {
        return ('' + a.currencyData['EUR']?.minimumStake).localeCompare(
          b.currencyData['EUR']?.minimumStake,
          undefined,
          { numeric: true, sensitivity: 'base' }
        );
      });
    }
    if (e.detail === 'stakeMax') {
      stakeMin = this.games.sort(function (a: any, b: any) {
        if (
          a.currencyData['EUR']?.minimumStake &&
          b.currencyData['EUR']?.minimumStake
        ) {
          return ('' + b.currencyData['EUR']?.minimumStake).localeCompare(
            a.currencyData['EUR']?.minimumStake,
            undefined,
            { numeric: true, sensitivity: 'base' }
          );
        } else {
          return 1;
        }
      });
    }

    this.games = JSON.parse(JSON.stringify(stakeMin));
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.sortGames({ detail: 'name' });
  }

  update(changedProperties: Map<string, unknown>): void {
    super.update(changedProperties);
  }

  render() {
    return html`
      <div class="content">
        <h4 class="catalogue-heading">Lottoland Games</h4>
        <game-item-dropdown-sort
          .sortGamesBy=${this.defaultSortGamesBy}
          @sortGamesChange=${this.sortGames}
        ></game-item-dropdown-sort>
        <div class="games-list">
          ${this.games.map(
            (game: Game) => html`
              <game-item
                .game="${new Game(game)}"
                @play=${this.onPlay}
              ></game-item>
            `
          )}
        </div>
      </div>
    `;
  }
}
