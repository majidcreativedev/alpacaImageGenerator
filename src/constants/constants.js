export const images = {
  accessories: {
    name: "accessories",
    values: ["earings", "flower", "glasses", "headphone"],
  },
  backgrounds: {
    name: "backgrounds",
    values: [
      "blue50",
      "blue60",
      "blue70",
      "darkblue30",
      "darkblue50",
      "darkblue70",
      "green50",
      "green60",
      "green70",
      "grey40",
      "grey70",
      "grey80",
      "red50",
      "red60",
      "red70",
      "yellow50",
      "yellow60",
      "yellow70",
    ],
  },
  ears: {
    name: "ears",
    values: ["default", "tilt-backward", "tilt-forward"],
  },
  eyes: {
    name: "eyes",
    values: ["angry", "default", "naughty", "panda", "smart", "star"],
  },
  hair: {
    name: "hair",
    values: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
  },
  leg: {
    name: "leg",
    values: [
      "bubble-tea",
      "cookie",
      "default",
      "game-console",
      "tilt-backward",
      "tilt-forward",
    ],
  },
  mouth: {
    name: "mouth",
    values: ["astonished", "default", "eating", "laugh", "tongue"],
  },
  neck: {
    name: "neck",
    values: ["bend-backward", "bend-forward", "default", "thick"],
  },
  nose: {
    name: "nose",
    values: ["nose"],
  },
}
export const options = [
  "backgrounds",
  "neck",
  "ears",
  "hair",
  "eyes",
  "mouth",
  "leg",
  "accessories",
]
export const initialState = {
  backgrounds: "darkblue70",
  neck: "default",
  ears: "default",
  hair: "default",
  eyes: "default",
  mouth: "default",
  leg: "default",
  accessories: "earings",
}
