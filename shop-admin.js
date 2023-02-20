//  // ******************** Objects ******************** //

//  // Can't add! Potion Dragon breath is already in your inventory!
//  Can't remove! Potion Polymorth is not in inventory!
//  Can't rename! Potion Dragon breath is not in inventory!
//  Can't rename! Potion Stone skin is already in inventory!

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    console.table(this.potions);
    return this.potions;
  },
  addPotion({ name, price }) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === name) {
        console.log(`Can't add! Potion ${name} is already in your inventory!`);
        return `Can't add! Potion ${name} is already in your inventory!`;
      }
    }
    this.potions.push({ name, price });
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    }
    console.log(`Can't remove! Potion ${potionName} is not in inventory!`);
    return `Can't remove! Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === newName) {
        console.log(`Can't rename! Potion ${newName} is already in inventory!`);
        return `Can't rename! Potion ${newName} is already in inventory!`;
      }
    }
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        return;
      }
    }
    console.log(`Can't rename! Potion ${oldName} is not in inventory!`);
    return `Can't rename! Potion ${oldName} is not in inventory!`;
  },
};
// -----------------------------------------------------------------------------

// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.getPotions();
// atTheOldToad.removePotion('Polymorth');
// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.getPotions();
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Speed potion', 'Stone skin');
// atTheOldToad.updatePotionName('Stone skin', 'Defence potion');
// atTheOldToad.getPotions();
