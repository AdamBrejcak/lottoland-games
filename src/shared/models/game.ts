export class Game {
  currencyData: { [currency: string]: { minimumStake: number } };
  detailURL: string;
  displayName: string;
  image: string;
  name: string;
  playURL: string;
  provider: string[];
  volatility: string[];

  constructor(data: any) {
    this.currencyData = data.currencyData;
    this.detailURL = data.detailURL;
    this.displayName = data.displayName;
    this.image = data.image;
    this.name = data.name;
    this.playURL = data.playURL;
    this.provider = data.provider;
    this.volatility = data.volatility;
  }
}
