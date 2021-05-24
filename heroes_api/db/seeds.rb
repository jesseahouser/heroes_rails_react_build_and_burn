HeroPower.destroy_all
Hero.destroy_all
Power.destroy_all
Weapon.destroy_all

fists = Weapon.create name: 'fists'
chair = Weapon.create name: 'chair'
bubble_gun = Weapon.create name: 'bubble gun'

vote = Power.create name: 'vote'
confidence = Power.create name: 'confidence'
speak_up = Power.create name: 'speak up'

stacey = Hero.create name: 'Stacey', weapon: bubble_gun

HeroPower.create hero: stacey, power: confidence
HeroPower.create hero: stacey, power: speak_up