import {DifficultyBase} from '../enums/DifficultyBase';
import {PlusMinus} from '../enums/PlusMinus';
import {ColorEnum} from '../enums/ColorEnum';
import {SecuringMethod} from '../enums/SecuringMethod';

export class ClimbingRoute {
  id: number;
  name: string;
  difficulty: DifficultyBase;
  plusMinus: PlusMinus;
  color: ColorEnum;
  securingMethod: SecuringMethod;
  buildDate: Date;

  constructor(id: number, name: string, difficulty: DifficultyBase, plusMinus: PlusMinus, color: ColorEnum, securingMethod: SecuringMethod, buildDate: Date) {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.plusMinus = plusMinus;
    this.color = color;
    this.securingMethod = securingMethod;
    this.buildDate = buildDate;
  }

}
