function importAll(r: any) {
  console.log(r.keys().map(r));
  return r.keys().map(r);
}

const characterImages = importAll(
  require.context('../data/img/characters', false, /\.(png|jpe?g|svg)$/),
);

export let characters = [
  {
    name: 'Alisa Bosconovitch',
    shortname: 'Alisa',
    photo: characterImages.find((image: string) => image.includes('alisa')),
    traits: [
      '3d',
      'female',
      'base',
      'movement',
      'defense',
      'poke',
      'whiff-punish',
      'defensiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-high',
      'movetier-midhigh',
      'evasion-mid',
      'evasion-midhigh',
      'tier-midlow',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Akuma / Gouki',
    shortname: 'Akuma',
    photo: characterImages.find((image: string) => image.includes('akuma')),
    traits: [
      '2d',
      'male',
      'base',
      'combo',
      'aggression',
      'mixup',
      'versatileoffense',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-mid',
      'evasion-midhigh',
      'evasion-high',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Anna Williams',
    shortname: 'Anna',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('anna')),
    traits: [
      '3d',
      'female',
      'dlc',
      'aggression',
      'combo',
      'mixup',
      'counterhit',
      'aggressiveoki',
      'setups-important',
      'stance-light',
      'evasion-midhigh',
      'movetier-midhigh',
      'movetier-high',
      'tier-midhigh',
      'tier-mid',
      'gameplan-level-low',
    ],
    score: 0,
  },

  {
    name: 'Armor King',
    shortname: 'AK',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('armorking')),
    traits: [
      '3d',
      'male',
      'dlc',
      'combo',
      'versatilegoal',
      'counterhit',
      'grab',
      'versatileoki',
      'setups-unimportant',
      'movetier-high',
      'movetier-midhigh',
      'tier-midhigh',
      'tier-mid',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Asuka Kazama',
    shortname: 'Asuka',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('asuka')),
    traits: [
      '3d',
      'female',
      'base',
      'aggression',
      'defense',
      'counterhit',
      'poke',
      'aggressiveoki',
      'setups-important',
      'stance-light',
      'evasion-high',
      'evasion-midhigh',
      'tier-mid',
      'tier-midhigh',
      'tier-midlow',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Bob (Robert Richards)',
    shortname: 'Bob',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('bob')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'versatilegoal',
      'poke',
      'versatileoffense',
      'versatileoki',
      'setups-unimportant',
      'setups-important',
      'stance-light',
      'movetier-high',
      'movetier-midhigh',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Bryan Fury',
    shortname: 'Bryan',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('bryan')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'movement',
      'counterhit',
      'plus-frame',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'evasion-high',
      'evasion-midhigh',
      'tier-high',
      'tier-midhigh',
      'tier-midlow',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Claudio Serafino',
    shortname: 'Claudio',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('claudio')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'movement',
      'versatileoki',
      'poke',
      'versatileoffense',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'movetier-high',
      'tier-high',
      'tier-midhigh',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Devil Jin',
    shortname: 'Devil Jin',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('deviljin')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'versatilegoal',
      'mixup',
      'plus-frame',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-high',
      'movetier-midhigh',
      'evasion-low',
      'tier-mid',
      'tier-midhigh',
      'tier-midlow',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Eddy Gordo',
    shortname: 'Eddy',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('eddy')),
    traits: [
      '3d',
      'male',
      'base',
      'movement',
      'poke',
      'mixup',
      'defensiveoki',
      'setups-important',
      'stance-heavy',
      'evasion-high',
      'evasion-midhigh',
      'movetier-high',
      'movetier-midhigh',
      'tier-low',
      'tier-midlow',
      'beginner-friendly',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Eliza',
    shortname: 'Eliza',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('eliza')),
    traits: [
      '2d',
      'female',
      'dlc',
      'movement',
      'combo',
      'mixup',
      'poke',
      'aggressiveoki',
      'setups-important',
      'stance-light',
      'evasion-high',
      'evasion-midhigh',
      'movetier-midlow',
      'tier-midlow',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Fahkumram',
    shortname: 'Fahkumram',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('fahk')),
    traits: [
      '3d',
      'male',
      'dlc',
      'movement',
      'aggression',
      'poke',
      'whiff-punish',
      'versatileoki',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'tier-midlow',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Feng Wei',
    shortname: 'Feng',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('feng')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'defense',
      'versatilegoal',
      'poke',
      'versatileoffense',
      'aggressiveeoki',
      'setups-unimportant',
      'stance-light',
      'stance-heavy',
      'movetier-high',
      'movetier-midhigh',
      'evasion-midhigh',
      'evasion-high',
      'tier-high',
      'tier-midhigh',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Gigas',
    shortname: 'Gigas',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('gigas')),
    traits: [
      '3d',
      'male',
      'base',
      'defense',
      'poke',
      'whiff-punish',
      'defensiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-low',
      'evasion-low',
      'tier-low',
      'tier-midlow',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Geese Howard',
    shortname: 'Geese',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('geese')),
    traits: [
      '2d',
      'male',
      'dlc',
      'aggression',
      'combo',
      'versatileoffense',
      'poke',
      'versatileoki',
      'setups-unimportant',
      'evasion-high',
      'evasion-midhigh',
      'stance-light',
      'gameplan-level-high',
      'gameplan-level-mid',
      'tier-high',
      'tier-midhigh',
    ],
    score: 0,
  },

  {
    name: 'Ganryu',
    shortname: 'Ganryu',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('ganryu')),
    traits: [
      '3d',
      'male',
      'dlc',
      'aggression',
      'poke',
      'mixup',
      'versatileoki',
      'setups-unimportant',
      'stance-light',
      'evasion-mid',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Heihachi Mishima',
    shortname: 'Heihachi',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('heihachi')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'combo',
      'mixup',
      'plus-frame',
      'aggressiveoki',
      'setups-important',
      'stance-light',
      'movetier-midhigh',
      'tier-midhigh',
      'tier-mid',
      'tier-midlow',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Hwoarang',
    shortname: 'Hwoarang',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('hwoarang')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'combo',
      'mixup',
      'versatileoffense',
      'versatileoki',
      'setups-important',
      'stance-heavy',
      'evasion-mid',
      'evasion-midhigh',
      'tier-midhigh',
      'tier-mid',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Jack - 7',
    shortname: 'Jack',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('jack')),
    traits: [
      '3d',
      'male',
      'base',
      'versatilegoal',
      'defense',
      'whiff-punish',
      'poke',
      'versatileoki',
      'setups-unimportant',
      'stance-light',
      'movetier-mid',
      'evasion-low',
      'tier-midlow',
      'tier-midhigh',
      'tier-mid',
      'beginner-friendly',
      'gameplan-level-low',
    ],
    score: 0,
  },

  {
    name: 'Jin Kazama',
    shortname: 'Jin',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('normjin')),
    traits: [
      '3d',
      'male',
      'base',
      'versatilegoal',
      'defense',
      'poke',
      'counterhit',
      'versatileoki',
      'setups-unimportant',
      'stance-light',
      'tier-midlow',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Josie Rizal',
    shortname: 'Josie',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('josie')),
    traits: [
      '3d',
      'female',
      'base',
      'aggression',
      'poke',
      'mixup',
      'versatileoki',
      'setups-unimportant',
      'evasion-midhigh',
      'stance-light',
      'movetier-high',
      'movetier-midhigh',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-low',
    ],
    score: 0,
  },

  {
    name: 'Julia Chang',
    shortname: 'Julia',
    dlc: 'yes',
    photo: characterImages.find((image: string) => image.includes('julia')),
    traits: [
      '3d',
      'female',
      'dlc',
      'aggression',
      'movement',
      'mixup',
      'counterhit',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'evasion-midhigh',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Katarina Alvez',
    shortname: 'Katarina',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('katarina')),
    traits: [
      '3d',
      'female',
      'base',
      'combo',
      'aggression',
      'counterhit',
      'mixup',
      'versatileoki',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'evasion-mid',
      'evasion-midhigh',
      'evasion-midlow',
      'tier-midhigh',
      'tier-mid',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Kazumi Hachijo Mishima',
    shortname: 'Kazumi',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('kazumi')),
    traits: [
      '3d',
      'female',
      'base',
      'movement',
      'defense',
      'poke',
      'whiff-punish',
      'defensiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-high',
      'movetier-midhigh',
      'tier-high',
      'tier-midhigh',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Kazuya Mishima',
    shortname: 'Kazuya',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('kazuya')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'combo',
      'mixup',
      'whiff-punish',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'evasion-mid',
      'evasion-midlow',
      'tier-midhigh',
      'tier-mid',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'King',
    shortname: 'King',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('ogking')),
    traits: [
      '3d',
      'male',
      'base',
      'versatilegoal',
      'aggression',
      'grab',
      'mixup',
      'aggressiveoki',
      'setups-important',
      'stance-light',
      'tier-midlow',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Kuma / Panda',
    shortname: 'Bears',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('bear')),
    traits: [
      '3d',
      'female',
      'male',
      'base',
      'defense',
      'movement',
      'poke',
      'whiff-punish',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'tier-mid',
      'tier-midlow',
      'gameplan-level-mid',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Kunimitsu',
    shortname: 'Kunimitsu',
    dlc: 's4',
    photo: characterImages.find((image: string) => image.includes('kunimitsu')),
    traits: [
      '3d',
      'female',
      'dlc',
      'movement',
      'aggression',
      'versatileoffense',
      'mixup',
      'aggressiveoki',
      'setups-important',
      'evasion-midhigh',
      'stance-light',
      'movetier-midhigh',
      'movetier-high',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Lars Alexandersson',
    shortname: 'Lars',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('lars')),
    traits: [
      '3d',
      'male',
      'base',
      'versatilegoal',
      'combo',
      'versatileoffense',
      'whiff-punish',
      'defensiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'tier-mid',
      'tier-midlow',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Leroy Smith',
    shortname: 'Leroy',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('leroy')),
    traits: [
      '3d',
      'male',
      'dlc',
      'versatilegoal',
      'defense',
      'counterhit',
      'mixup',
      'versatileoki',
      'setups-unimportant',
      'evasion-low',
      'stance-light',
      'gameplan-level-low',
      'beginner-friendly',
      'tier-mid',
      'tier-midhigh',
    ],
    score: 0,
  },

  {
    name: 'Lee Chaolan',
    shortname: 'Lee',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('lee')),
    traits: [
      '3d',
      'male',
      'base',
      'defense',
      'combo',
      'poke',
      'counterhit',
      'versatileoki',
      'setups-unimportant',
      'evasion-mid',
      'stance-light',
      'movetier-midhigh',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Lei Wulong',
    shortname: 'Lei',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('lei')),
    traits: [
      '3d',
      'male',
      'dlc',
      'versatilegoal',
      'movement',
      'poke',
      'mixup',
      'versatileoki',
      'setups-important',
      'evasion-high',
      'evasion-midhigh',
      'stance-heavy',
      'movetier-high',
      'movetier-midhigh',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Leo Kliesen',
    shortname: 'Leo',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('leo')),
    traits: [
      '3d',
      'female',
      'male',
      'base',
      'versatilegoal',
      'aggressive',
      'versatileoffense',
      'mixup',
      'aggressiveoki',
      'setups-unimportant',
      'evasion-midhigh',
      'stance-light',
      'movetier-midhigh',
      'tier-mid',
      'tier-midhigh',
      'beginner-friendly',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Lidia Sobieska',
    shortname: 'Lidia',
    dlc: 's4',
    photo: characterImages.find((image: string) => image.includes('lidia')),
    traits: [
      '3d',
      'female',
      'dlc',
      'versatilegoal',
      'combo',
      'versatileoffense',
      'poke',
      'versatileoki',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'tier-mid',
      'tier-midlow',
      'gameplan-level-mid',
    ],
    score: 0,
  },

  {
    name: 'Lili (Emile de Rochefort)',
    shortname: 'Lili',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('lili')),
    traits: [
      '3d',
      'female',
      'base',
      'movement',
      'versatilegoal',
      'plus-frame',
      'poke',
      'defensiveoki',
      'setups-unimportant',
      'evasion-midhigh',
      'stance-light',
      'movetier-high',
      'movetier-midhigh',
      'evasion-midhigh',
      'tier-mid',
      'tier-midhigh',
      'beginner-friendly',
      'gameplan-level-low',
    ],
    score: 0,
  },

  {
    name: 'Lucky Chloe',
    shortname: 'Lucky',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('lucky')),
    traits: [
      '3d',
      'female',
      'base',
      'aggression',
      'combo',
      'poke',
      'counterhit',
      'defensiveoki',
      'setups-important',
      'evasion-high',
      'evasion-midhigh',
      'stance-light',
      'tier-midhigh',
      'tier-mid',
      'tier-midlow',
      'beginner-friendly',
      'gameplan-level-low',
    ],
    score: 0,
  },

  {
    name: 'Marshall Law',
    shortname: 'Law',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('law')),
    traits: [
      '3d',
      'male',
      'base',
      'combo',
      'versatilegoal',
      'plus-frame',
      'versatileoffense',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'tier-high',
      'tier-midhigh',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Master Raven',
    shortname: 'Raven',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('mraven')),
    traits: [
      '3d',
      'female',
      'base',
      'combo',
      'movement',
      'mixup',
      'versatileoffense',
      'aggressiveoki',
      'setups-important',
      'evasion-midhigh',
      'stance-heavy',
      'evasion-high',
      'movetier-midhigh',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Craig Marduk',
    shortname: 'Marduk',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('marduk')),
    traits: [
      '3d',
      'male',
      'dlc',
      'aggression',
      'combo',
      'grab',
      'mixup',
      'aggressiveoki',
      'setups-important',
      'evasion-high',
      'stance-light',
      'tier-midhigh',
      'tier-high',
      'beginner-friendly',
      'gameplan-level-low',
    ],
    score: 0,
  },

  {
    name: 'Miguel Caballero Rojo',
    shortname: 'Miguel',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('miguel')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'combo',
      'poke',
      'versatileoffense',
      'defensiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'movetier-high',
      'tier-mid',
      'tier-midhigh',
      'tier-midlow',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Negan',
    shortname: 'Negan',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('negan')),
    traits: [
      '3d',
      'male',
      'dlc',
      'versatilegoal',
      'movement',
      'versatileoffense',
      'plus-frame',
      'defensiveoki',
      'setups-unimportant',
      'stance-light',
      'evasion-midhigh',
      'movetier-midhigh',
      'movetier-high',
      'tier-midlow',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Nina Williams',
    shortname: 'Nina',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('nina')),
    traits: [
      '3d',
      'female',
      'base',
      'aggression',
      'combo',
      'versatileoffense',
      'poke',
      'versatileoki',
      'setups-unimportant',
      'stance-light',
      'evasion-midhigh',
      'tier-midhigh',
      'tier-mid',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Noctis',
    shortname: 'Noctis',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('noctis')),
    traits: [
      '3d',
      'male',
      'dlc',
      'defense',
      'combo',
      'counterhit',
      'whiff-punish',
      'versatileoki',
      'setups-important',
      'movetier-midhigh',
      'stance-light',
      'tier-midlow',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Paul Phoenix',
    shortname: 'Paul',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('paul')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'versatilegoal',
      'counterhit',
      'mixup',
      'aggressiveoki',
      'setups-unimportant',
      'stance-light',
      'evasion-high',
      'evasion-midhigh',
      'tier-midhigh',
      'tier-mid',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Sergei Dragunov',
    shortname: 'Dragunov',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('dragunov')),
    traits: [
      '3d',
      'male',
      'base',
      'aggression',
      'movement',
      'poke',
      'mixup',
      'defensiveoki',
      'setups-unimportant',
      'stance-light',
      'movetier-midhigh',
      'movetier-high',
      'tier-midhigh',
      'tier-mid',
      'tier-midlow',
      'gameplan-level-low',
      'beginner-friendly',
    ],
    score: 0,
  },

  {
    name: 'Shaheen',
    shortname: 'Shaheen',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('shaheen')),
    traits: [
      '3d',
      'male',
      'base',
      'defense',
      'versatilegoal',
      'versatileoffense',
      'versatileoki',
      'setups-unimportant',
      'stance-light',
      'evasion-low',
      'movetier-midhigh',
      'tier-mid',
      'tier-midhigh',
      'tier-midlow',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Steve Fox',
    shortname: 'Steve',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('steve')),
    traits: [
      '3d',
      'male',
      'base',
      'versatilegoal',
      'aggression',
      'versatileoffense',
      'counterhit',
      'defensiveoki',
      'setups-unimportant',
      'stance-heavy',
      'movetier-high',
      'movetier-midhigh',
      'evasion-midhigh',
      'evasion-high',
      'tier-mid',
      'tier-midlow',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Ling Xiaoyu',
    shortname: 'Xiaoyu',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('ling')),
    traits: [
      '3d',
      'female',
      'base',
      'aggression',
      'defense',
      'mixup',
      'counterhit',
      'aggressiveoki',
      'setups-important',
      'stance-heavy',
      'evasion-high',
      'evasion-midhigh',
      'tier-midhigh',
      'tier-mid',
      'gameplan-level-low',
    ],
    score: 0,
  },

  {
    name: 'Yoshimitsu',
    shortname: 'Yoshimitsu',
    dlc: 'base',
    photo: characterImages.find((image: string) => image.includes('yoshi')),
    traits: [
      '3d',
      'male',
      'base',
      'defense',
      'combo',
      'versatileoffense',
      'mixup',
      'aggressiveoki',
      'setups-important',
      'evasion-high',
      'evasion-midhigh',
      'movetier-mid',
      'stance-heavy',
      'tier-mid',
      'tier-midhigh',
      'gameplan-level-high',
    ],
    score: 0,
  },

  {
    name: 'Zafina',
    shortname: 'Zafina',
    dlc: 'dlc',
    photo: characterImages.find((image: string) => image.includes('zafina')),
    traits: [
      '3d',
      'female',
      'dlc',
      'movement',
      'versatilegoal',
      'whiff-punish',
      'versatileoffense',
      'defensiveoki',
      'setups-important',
      'stance-heavy',
      'movetier-high',
      'movetier-midhigh',
      'evasion-high',
      'evasion-midhigh',
      'tier-midhigh',
      'tier-high',
      'gameplan-level-high',
      'beginner-friendly',
    ],
    score: 0,
  },
];
