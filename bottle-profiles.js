// Transcribed from the verified seven-page Fragrance Wardrobe Visual Guide.
const bottleProfiles = [
  {
    "brand": "Afnan",
    "accords": [
      "Fruity",
      "Mossy",
      "Woody",
      "Earthy",
      "Citrus"
    ],
    "notes": [
      [
        "Black Currant",
        "Bergamot",
        "Apple"
      ],
      [
        "Oakmoss",
        "Patchouli",
        "Lavender"
      ],
      [
        "Ambergris",
        "Musk",
        "Saffron"
      ]
    ]
  },
  {
    "brand": "Nishane",
    "accords": [
      "Woody",
      "Citrus",
      "Mossy",
      "Earthy",
      "Fruity"
    ],
    "notes": [
      [
        "Pineapple",
        "Grapefruit",
        "Bergamot"
      ],
      [
        "Cedar",
        "Patchouli",
        "Jasmine"
      ],
      [
        "Oakmoss",
        "Woody Notes"
      ]
    ]
  },
  {
    "brand": "Nishane",
    "accords": [
      "Citrus",
      "Fresh Spicy",
      "Aromatic",
      "Sweet",
      "Fruity"
    ],
    "notes": [
      [
        "Bergamot",
        "Orange",
        "Mandarin Orange",
        "Litsea Cubeba"
      ],
      [
        "Oolong Tea",
        "Nutmeg"
      ],
      [
        "Fig",
        "Musk"
      ]
    ]
  },
  {
    "brand": "Hermès",
    "accords": [
      "Citrus",
      "Aromatic",
      "Fresh Spicy",
      "Woody",
      "Earthy"
    ],
    "notes": [
      [
        "Bergamot",
        "Grapefruit",
        "Lemon"
      ],
      [
        "Sichuan Pepper",
        "Geranium"
      ],
      [
        "Vetiver",
        "Olibanum",
        "Patchouli",
        "Amberwood"
      ]
    ]
  },
  {
    "brand": "Hermès",
    "accords": [
      "Citrus",
      "Woody",
      "Fresh Spicy",
      "Aromatic",
      "Mineral"
    ],
    "notes": [
      [
        "Citron"
      ],
      [
        "Juniper Berries",
        "Timur"
      ],
      [
        "Mineral Notes",
        "Woody Notes"
      ]
    ]
  },
  {
    "brand": "Chanel",
    "accords": [
      "Woody",
      "Amber",
      "Powdery",
      "Musky",
      "Balsamic"
    ],
    "notes": [
      [
        "Amber",
        "Woody Notes",
        "Labdanum",
        "Sandalwood"
      ]
    ]
  },
  {
    "brand": "Dior",
    "accords": [
      "Fresh Spicy",
      "Citrus",
      "Amber",
      "Lavender",
      "Musky"
    ],
    "notes": [
      [
        "Bergamot"
      ],
      [
        "Sichuan Pepper",
        "Lavender",
        "Star Anise",
        "Nutmeg"
      ],
      [
        "Ambroxan",
        "Vanilla"
      ]
    ]
  },
  {
    "brand": "Dior",
    "accords": [
      "Warm Spicy",
      "Fresh Spicy",
      "Woody",
      "Aromatic",
      "Lavender"
    ],
    "notes": [
      [
        "Nutmeg",
        "Cinnamon",
        "Cardamom",
        "Grapefruit"
      ],
      [
        "Lavender"
      ],
      [
        "Licorice",
        "Sandalwood",
        "Amber",
        "Patchouli",
        "Haitian Vetiver"
      ]
    ]
  },
  {
    "brand": "Burberry",
    "accords": [
      "Fresh Spicy",
      "Ozonic",
      "Musky",
      "Aquatic",
      "Woody"
    ],
    "notes": [
      [
        "Violet Leaf",
        "Artemisia",
        "Mandarin Orange"
      ],
      [
        "White Pepper",
        "Cedar",
        "Nutmeg"
      ],
      [
        "White Musk",
        "Tonka Bean",
        "Vetiver"
      ]
    ]
  },
  {
    "brand": "Yves Saint Laurent",
    "accords": [
      "Aromatic",
      "Warm Spicy",
      "Lavender",
      "Woody",
      "Fresh Spicy"
    ],
    "notes": [
      [
        "Cardamom"
      ],
      [
        "Lavender",
        "Virginia Cedar",
        "Bergamot"
      ],
      [
        "Vetiver",
        "Caraway"
      ]
    ]
  },
  {
    "brand": "Bvlgari",
    "accords": [
      "Citrus",
      "White Floral",
      "Woody",
      "Fresh Spicy",
      "Amber"
    ],
    "notes": [
      [
        "Neroli",
        "Bergamot"
      ],
      [
        "Orange Blossom",
        "Virginia Cedar",
        "Cypriol Oil or Nagarmotha"
      ],
      [
        "Woody Notes",
        "White Musk",
        "Ambergris",
        "Amber",
        "Leather"
      ]
    ]
  },
  {
    "brand": "Rasasi",
    "accords": [
      "Woody",
      "Citrus",
      "Mossy",
      "Earthy",
      "Fresh Spicy"
    ],
    "notes": [
      [
        "Bergamot",
        "Pineapple",
        "Grapefruit"
      ],
      [
        "Patchouli",
        "Cedarwood",
        "Jasmine"
      ],
      [
        "Oakmoss",
        "Woody Notes",
        "Amber"
      ]
    ]
  },
  {
    "brand": "Lattafa",
    "accords": [
      "Sweet",
      "Warm Spicy",
      "Vanilla",
      "Amber",
      "Cinnamon"
    ],
    "notes": [
      [
        "Cinnamon",
        "Nutmeg",
        "Bergamot"
      ],
      [
        "Dates",
        "Praline",
        "Tuberose",
        "Mahonial"
      ],
      [
        "Vanilla",
        "Tonka Bean",
        "Amberwood",
        "Myrrh",
        "Benzoin",
        "Akigalawood"
      ]
    ]
  },
  {
    "brand": "Mercedes-Benz",
    "accords": [
      "Amber",
      "Vanilla",
      "Balsamic",
      "Warm Spicy",
      "Woody"
    ],
    "notes": [
      [
        "Bergamot"
      ],
      [
        "Incense",
        "Jasmine"
      ],
      [
        "Vanilla",
        "Benzoin",
        "Woodsy Notes",
        "Ambroxan"
      ]
    ]
  },
  {
    "brand": "Armaf",
    "accords": [
      "Woody",
      "Amber",
      "Warm Spicy",
      "Metallic",
      "White Floral"
    ],
    "notes": [
      [
        "Saffron",
        "Jasmine"
      ],
      [
        "Amberwood",
        "Ambergris"
      ],
      [
        "Fir Resin",
        "Cedar"
      ]
    ]
  },
  {
    "brand": "Lattafa",
    "accords": [
      "Rose",
      "Oud",
      "Amber",
      "Soft Spicy",
      "Floral"
    ],
    "notes": [
      [
        "Pink Pepper",
        "Bergamot"
      ],
      [
        "Turkish Rose",
        "Bulgarian Rose",
        "Jasmine"
      ],
      [
        "Agarwood (Oud)",
        "Amber",
        "Vanilla"
      ]
    ]
  },
  {
    "brand": "Lattafa",
    "accords": [
      "Oud",
      "Warm Spicy",
      "Fresh Spicy",
      "Patchouli",
      "Metallic"
    ],
    "notes": [
      [
        "Saffron",
        "Nutmeg",
        "Lavender"
      ],
      [
        "Agarwood (Oud)",
        "Patchouli"
      ],
      [
        "Agarwood (Oud)",
        "Patchouli",
        "Musk"
      ]
    ]
  },
  {
    "brand": "Jean Paul Gaultier",
    "accords": [
      "Green",
      "Coconut",
      "Sweet",
      "Vanilla",
      "Woody"
    ],
    "notes": [
      [
        "Green Notes",
        "Watery Notes",
        "Mint",
        "Ginger"
      ],
      [
        "Coconut",
        "Fig",
        "Salt"
      ],
      [
        "Tonka Bean",
        "Sandalwood"
      ]
    ]
  },
  {
    "brand": "Mancera",
    "accords": [
      "Citrus",
      "Marine",
      "Aromatic",
      "Salty",
      "White Floral"
    ],
    "notes": [
      [
        "Lemon",
        "Orange",
        "Tangerine",
        "Ginger",
        "Pepper"
      ],
      [
        "Sea Notes",
        "Tiare Flower",
        "Pine Tree",
        "Mimosa",
        "Vetiver"
      ],
      [
        "Sea Salt",
        "White Musk",
        "Amber"
      ]
    ]
  },
  {
    "brand": "Hermès",
    "accords": [
      "Green",
      "Fruity",
      "Sweet",
      "Aquatic",
      "Fresh"
    ],
    "notes": [
      [
        "Herbal Notes"
      ],
      [
        "Pear"
      ],
      [
        "Physcool®"
      ]
    ]
  },
  {
    "brand": "Giorgio Armani",
    "accords": [
      "Iris",
      "Aromatic",
      "Powdery",
      "Woody",
      "Citrus"
    ],
    "notes": [
      [
        "Bergamot",
        "Bergamot Leaf"
      ],
      [
        "Iris",
        "Aldehydes",
        "Clary Sage",
        "Orris"
      ],
      [
        "Tonka Bean",
        "Cedar"
      ]
    ]
  },
  {
    "brand": "Tom Ford",
    "accords": [
      "Marine",
      "Aromatic",
      "Salty",
      "Aquatic",
      "Oud"
    ],
    "notes": [
      [
        "Sea Notes",
        "Salt",
        "Agarwood (Oud)",
        "Seagrass",
        "Balsam Fir",
        "Musk",
        "Amber",
        "Styrax",
        "Pink Pepper"
      ]
    ]
  },
  {
    "brand": "French Avenue",
    "accords": [
      "Vanilla",
      "Amber",
      "Citrus",
      "White Floral",
      "Sweet"
    ],
    "notes": [
      [
        "Cardamom",
        "Lavender",
        "Citrus"
      ],
      [
        "Orange Blossom",
        "Guaiac Wood",
        "Rose"
      ],
      [
        "Vanilla",
        "Tonka",
        "Amber",
        "Oak Moss"
      ]
    ]
  },
  {
    "brand": "Maison Margiela",
    "accords": [
      "Aromatic",
      "Fresh Spicy",
      "Green",
      "Citrus",
      "Patchouli"
    ],
    "notes": [
      [
        "Tomato Leaf",
        "Green Mandarin"
      ],
      [
        "Geranium"
      ],
      [
        "Patchouli"
      ]
    ]
  },
  {
    "brand": "Azzaro",
    "accords": [
      "Warm Spicy",
      "Sweet",
      "Amber",
      "Woody",
      "Caramel"
    ],
    "notes": [
      [
        "Cardamom"
      ],
      [
        "Toffee"
      ],
      [
        "Amberwood"
      ]
    ]
  },
  {
    "brand": "Xerjoff",
    "accords": [
      "White Floral",
      "Citrus",
      "Woody",
      "Tuberose",
      "Fresh Spicy"
    ],
    "notes": [
      [
        "Bergamot",
        "Rose",
        "Nutmeg",
        "Cardamom"
      ],
      [
        "Tuberose",
        "Neroli",
        "Jasmine",
        "Ylang-Ylang"
      ],
      [
        "Musk",
        "Cashmere Wood",
        "Amber",
        "Patchouli",
        "Cedarwood"
      ]
    ]
  },
  {
    "brand": "Givenchy",
    "accords": [
      "Woody",
      "Powdery",
      "Aromatic",
      "Coffee",
      "Vanilla"
    ],
    "notes": [
      [
        "Nutmeg",
        "Peppermint",
        "Clary Sage"
      ],
      [
        "Coffee",
        "Orris Root",
        "Madagascar Vetiver",
        "Haitian Vetiver",
        "Vetiver",
        "French Narcissus"
      ],
      [
        "Madagascar Vanilla",
        "Australian Sandalwood",
        "Himalayan Cedar"
      ]
    ]
  },
  {
    "brand": "Moschino",
    "accords": [
      "Rose",
      "Floral",
      "Woody",
      "Musky",
      "Soft Spicy"
    ],
    "notes": [
      [
        "Pink Pepper",
        "Pear",
        "Indonesian Nutmeg",
        "Elemi",
        "Bergamot"
      ],
      [
        "Rose",
        "Clove",
        "Magnolia",
        "Flax"
      ],
      [
        "Haitian Vetiver",
        "Cashmeran",
        "Sandalwood",
        "Amber",
        "Sylkolide"
      ]
    ]
  }
];

// The atlas is ordered left to right, then top to bottom.
const noteArt = [
  'Bergamot','Lemon','Orange','Grapefruit','Pineapple',
  'Lavender','Rose','Jasmine','Orange Blossom','Iris',
  'Cardamom','Cinnamon','Nutmeg','Pink Pepper','Ginger',
  'Vanilla','Tonka Bean','Vetiver','Oakmoss','Patchouli',
  'Cedar','Agarwood (Oud)','Amber','Oolong Tea','Generic',
  'Apple','Black Currant','Fig','Pear','Coconut',
  'Mandarin Orange','Green Mandarin','Citron','Dates','Praline',
  'Tuberose','Ylang-Ylang','Magnolia','Mimosa','French Narcissus',
  'Clary Sage','Geranium','Mint','Tomato Leaf','Violet Leaf',
  'Juniper Berries','Pine Tree','Sea Salt','Seagrass','Coffee',
  'Saffron','Star Anise','Clove','Caraway','White Pepper',
  'Pepper','Sichuan Pepper','Licorice','Litsea Cubeba','Artemisia',
  'Sandalwood','Guaiac Wood','Olibanum','Myrrh','Benzoin',
  'Labdanum','Elemi','Fir Resin','Incense','Tiare Flower',
  'Orris','Salt','Leather','Toffee','Flax'
];
const noteAliases = {
  'Turkish Rose':'Rose','Bulgarian Rose':'Rose','Indonesian Nutmeg':'Nutmeg',
  'Madagascar Vanilla':'Vanilla','Tonka':'Tonka Bean','Haitian Vetiver':'Vetiver',
  'Madagascar Vetiver':'Vetiver','Oak Moss':'Oakmoss','Cedarwood':'Cedar',
  'Virginia Cedar':'Cedar','Himalayan Cedar':'Cedar','Neroli':'Orange Blossom',
  'Peppermint':'Mint','Tangerine':'Mandarin Orange','Orris Root':'Orris',
  'Australian Sandalwood':'Sandalwood','Timur':'Sichuan Pepper'
};
function noteArtIndex(note) {
  const index = noteArt.indexOf(noteAliases[note] || note);
  return index < 0 ? noteArt.indexOf('Generic') : index;
}
const accordColors = {
  Fruity:'#99476a', Mossy:'#526c32', Woody:'#886041', Earthy:'#785a48',
  Citrus:'#8e7227', 'Fresh Spicy':'#596f36', Aromatic:'#38745d', Sweet:'#9d526e',
  Mineral:'#536e80', Amber:'#9b582f', Powdery:'#795d88', Musky:'#766378',
  Balsamic:'#78533c', Lavender:'#73549e', 'Warm Spicy':'#a34d37', Ozonic:'#3a7187',
  Aquatic:'#327b87', 'White Floral':'#7f7856', Vanilla:'#8b7044', Cinnamon:'#914e39',
  Metallic:'#5b697a', Rose:'#a14063', Oud:'#79504f', 'Soft Spicy':'#896249',
  Floral:'#935587', Patchouli:'#65693b', Green:'#40784a', Coconut:'#82704d',
  Marine:'#346c90', Salty:'#5a778a', Fresh:'#397b68', Iris:'#65558e',
  Caramel:'#986034', Tuberose:'#827554', Coffee:'#785345'
};
function openBottleProfile(number, trigger) {
  const b = bottle(number);
  const profile = bottleProfiles[number - 1];
  if (!profile) return;
  const back = $('#bottleBack');
  const panel = $('#bottleProfile');
  const headings = profile.notes.length === 1 ? ['Fragrance notes'] : ['Top notes','Heart notes','Base notes'];
  const noteSections = profile.notes.map((notes, group) => {
    const tiles = notes.map(note => {
      const index = noteArtIndex(note);
      return `<li><span aria-hidden="true" class="note-profile-art" style="--note-sheet:url('note-atlas-${Math.floor(index/25)+1}.webp');--note-x:${(index%5)*25}%;--note-y:${Math.floor((index%25)/5)*25}%"></span>${esc(note)}</li>`;
    }).join('');
    return `<section class="profile-section"><h3>${headings[group]}</h3><ul class="note-profile-grid">${tiles}</ul></section>`;
  }).join('');
  const accords = profile.accords.map((accord, rank) =>
    `<li style="--rank-width:${100-rank*8}%;--accord-color:${accordColors[accord] || '#665d47'}">${esc(accord)}</li>`).join('');
  panel.innerHTML = `<header class="profile-head"><img src="${esc(bottleImage(b))}" alt=""><div><p>${esc(profile.brand)}</p><h2 id="profileName">${esc(b.display)}</h2><p>${esc(b.flanker)} · ${esc(b.lifecycle)}</p></div><button class="iconbtn" id="closeBottleProfile" aria-label="Close bottle profile">×</button></header>
    <section class="profile-section"><h3>Accord profile</h3><ol class="accord-list">${accords}</ol><p class="profile-source">Bars show relative order from the verified wardrobe guide.</p></section>${accordSpiderMap([number])}${noteSections}`;
  const close = () => {
    back.classList.remove('open');
    document.removeEventListener('keydown', onKey);
    trigger.focus();
  };
  const onKey = event => { if (event.key === 'Escape') close();
    if (event.key === 'Tab') { event.preventDefault(); $('#closeBottleProfile').focus(); } };
  back.onclick = event => { if (event.target === back) close(); };
  $('#closeBottleProfile').onclick = close;
  document.addEventListener('keydown', onKey);
  back.classList.add('open');
  panel.scrollTop = 0;
  $('#closeBottleProfile').focus();
}

// Bottle charts use the published accord order as a relative display weight.
const accordAxes = [
  ['Fresh', ['Citrus','Fresh','Aquatic','Ozonic','Marine','Salty','Mineral']],
  ['Green', ['Green','Aromatic','Mossy','Patchouli','Earthy']],
  ['Floral', ['Floral','White Floral','Rose','Lavender','Iris','Tuberose']],
  ['Fruit', ['Fruity','Coconut']],
  ['Sweet', ['Sweet','Vanilla','Caramel','Coffee']],
  ['Amber', ['Amber','Balsamic','Musky','Powdery']],
  ['Woods', ['Woody','Oud','Metallic']],
  ['Spice', ['Warm Spicy','Fresh Spicy','Soft Spicy','Cinnamon']]
];
const bottleAccordValues = bottleProfiles.map(profile => accordAxes.map(([, names]) => {
  const rank = profile.accords.findIndex(accord => names.includes(accord));
  return rank < 0 ? 0 : (5 - rank) / 5;
}));
// Match the written scent phases, not the bottle ingredients or spray counts.
const comboScentAxes = [
  ['Fresh', /\b(citrus|bergamot|lemon|grapefruit|citron|orange|mandarin|neroli|aquatic|marine|mineral|ozonic|fresh(?:ness)?)\b/i],
  ['Green', /\b(green|herbal|aromatic|mossy|oakmoss|moss|vetiver|patchouli|earthy|leafy|leaf|grass|tomato)\b/i],
  ['Floral', /\b(florals?|rose|rosy|jasmine|iris|orris|violet|lavender|tuberose|geranium|blossom|ylang)\b/i],
  ['Fruit', /\b(fruit(?:y|s)?|pineapple|pear|apple|fig|berries|berry|currant|coconut|peach|plum|dates)\b/i],
  ['Sweet', /\b(sweet(?:ness)?|vanilla|caramel|toffee|praline|gourmand|tonka|syrup|chocolate|cocoa)\b/i],
  ['Amber', /\b(amber(?:ed|gris|y|wood)?|ambroxan|resin(?:ous)?|balsamic|labdanum|benzoin|myrrh)\b/i],
  ['Woods', /\b(wood(?:s|y|land)?|oud|cedar(?:wood)?|sandalwood|guaiac|timber)\b/i],
  ['Spice', /\b(spic(?:e|es|y|ed)|pepper(?:y|corn)?|cardamom|cinnamon|nutmeg|saffron|clove|ginger|anise)\b/i],
  ['Tea', /\b(tea|oolong|matcha)\b/i],
  ['Musk', /\b(musk(?:y|s)?|cashmeran|sylkolide)\b/i]
];
function comboScentValues(formula) {
  const phases = [formula.opening, formula.heart, formula.drydown]
    .filter(phase => typeof phase === 'string' && phase.trim() && !/^(none|n\/a|—)$/i.test(phase.trim()));
  const counts = comboScentAxes.map(([, pattern]) => phases.filter(phase => pattern.test(phase)).length);
  return {counts, phaseCount: phases.length};
}
function accordSpiderMap(numbers, formula) {
  const profile = formula ? null : bottleAccordValues[numbers[0]-1];
  if (!formula && !profile) return '';
  const axes = formula ? comboScentAxes : accordAxes;
  const {counts, phaseCount} = formula ? comboScentValues(formula) : {counts:[],phaseCount:0};
  const values = formula ? counts.map(count => phaseCount ? count / phaseCount : 0) : profile;
  const point = (i, radius) => {
    const angle = i * 2 * Math.PI / axes.length - Math.PI / 2;
    return [140 + Math.cos(angle) * radius, 87 + Math.sin(angle) * radius];
  };
  const polygon = radii => radii.map((radius, i) => point(i, radius).map(n => n.toFixed(1)).join(',')).join(' ');
  const levels = formula && phaseCount ? Array.from({length:phaseCount},(_,i)=>60*(i+1)/phaseCount) : [15,30,45,60];
  const grid = levels.map(radius => `<polygon points="${polygon(axes.map(() => radius))}"/>`).join('');
  const spokes = axes.map((_, i) => {
    const [x,y] = point(i,60);
    return `<path d="M140 87L${x.toFixed(1)} ${y.toFixed(1)}"/>`;
  }).join('');
  const labels = axes.map(([name], i) => {
    const [x,y] = point(i,75);
    const anchor = x < 139 ? 'end' : x > 141 ? 'start' : 'middle';
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="middle">${name}</text>`;
  }).join('');
  const description = values.map((v,i) => formula
    ? `${axes[i][0]} in ${counts[i]} of ${phaseCount} phases`
    : `${axes[i][0]} ${Math.round(v*100)}`).join(', ');
  const dots = values.map((v,i) => {
    if (!v) return '';
    const [x,y] = point(i,v*60);
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.4" fill="#e6bb69"/>`;
  }).join('');
  return `<figure class="accord-spider"><figcaption>${formula?'Combo':'Bottle'} spider map</figcaption>
    <svg viewBox="0 0 280 175" role="img" aria-label="${description}">
      <g class="spider-grid">${grid}${spokes}</g>
      <polygon class="spider-shape" points="${polygon(values.map(v=>v*60))}"/>${dots}${labels}
    </svg><small>${formula?'Distance shows how many phases mention each scent family: opening, heart, and drydown.':'Based on the bottle’s ranked accords.'}</small></figure>`;
}
