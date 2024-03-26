// src/games/index.tsx

import { GameBundle } from "gamba-react-ui-v2";
import dynamic from "next/dynamic";

export const GAMES: GameBundle[] = [
  {
    id: "slots",
    meta: {
      background: "#5465ff",
      name: "Slots",
      image: "/games/logo.png",
      description: `Corn Pop showed me this game back in Nam when we had those beautiful hookers and their children living with us on the ice cream farm.`,
    },
    app: dynamic(() => import("./Slots")),
  },
  {
    id: "flip",
    meta: {
      background: "#ffe694",
      name: "Flip",
      image: "/games/logo.png",
      description: `This Coin Flip game is the best game, there are other games but they just don't get how games really work. Nobody has a game that is as magnificent as this game`,
    },
    app: dynamic(() => import("./Flip")),
  },
 ];
