export default class Card {
  #card = {
    name: '',
    description: '',
    ability: {
      hardSkills: 0,
      softSkills: 0,
    },
    chosenAbility: '',
  }

  constructor(name, description, hard, soft) {
    this.#card.name = name;
    this.#card.description = description;
    this.#card.ability.hardSkills = hard;
    this.#card.ability.softSkills = soft;
  }

  get name() {return this.#card.name}
  get description() {return this.description}
  get hardSkill() {return this.#card.ability.hardSkills}
  get softSkills() {return this.#card.ability.softSkills}
  get chosenAbility(){return this.#card.chosenAbility}
  set chooseAbility(chosenOption) {
    if (chosenOption === 'hardSkills') {
      this.#card.chosenAbility = this.#card.ability.hardSkills;
      return;
    }
    if (chosenOption === 'softSkills') {
      this.#card.chosenAbility = this.#card.ability.softSkills;
      return;
    }
    return undefined;
  }
}