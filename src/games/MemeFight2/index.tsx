import { GambaUi, useSound, useWagerInput } from "gamba-react-ui-v2";
import React, { useState } from "react";

import useCustomPlay from "@/hooks/useCustomPlay";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

// Constants for roosters and their results
const TEXTURE_WHITE_ROOSTER = "/games/memefight/wen.png";
const TEXTURE_BLACK_ROOSTER = "/games/memefight/bonk.png";
const WIN_WHITE_ROOSTER_GIF = "/games/memefight/wenwins.gif";
const WIN_BLACK_ROOSTER_GIF = "/games/memefight/bonkwins.gif";

// Enum for side selection
const SIDES = {
  white: "$WEN",
  black: "$BONK",
};

type Side = keyof typeof SIDES;

function MemeFight() {
  const game = GambaUi.useGame();
  const gambaBPlay = useCustomPlay("memefight");
  const [playing, setPlaying] = useState(false);
  const [win, setWin] = useState(false);
  const [result, setResult] = useState<string>("");
  const [side, setSide] = useState<Side>("white");
  const [wager, setWager] = useWagerInput();
  const sounds = useSound({
    win: "/games/memefight/win.mp3",
    lose: "/games/memefight/lose.mp3",
    playing: "/games/memefight/playing.mp3",
  });

  const walletModal = useWalletModal();
  const wallet = useWallet();

  const connect = () => {
    if (!wallet.connected) {
      wallet.connect();
    } else {
      walletModal.setVisible(true);
    }
  };

  const play = async () => {
    setPlaying(true);
    setWin(false);
    setResult("");
    sounds.play("playing");

    try {
      await gambaBPlay(wager, [2, 0]);
      const result = await game.result();

      setWin(result.payout > 0);
      setResult(side + (result.payout > 0 ? "Win" : "Loss"));

      setTimeout(() => {
        if (result.payout > 0) {
          sounds.play("win");
        } else {
          sounds.play("lose");
        }
      }, 5000);
    } catch (error) {
      console.error("Error playing the game:", error);
      setPlaying(false);
      setWin(false);
      setResult("");
    } finally {
      setTimeout(() => {
        setPlaying(false);
        setWin(false);
        setResult("");
      }, 10000);
    }
  };

  const imageToShow = win
    ? side === "$WEN"
      ? WIN_WHITE_ROOSTER_GIF
      : WIN_BLACK_ROOSTER_GIF
    : side === "$WEN"
      ? WIN_BLACK_ROOSTER_GIF
      : WIN_WHITE_ROOSTER_GIF;

  const getRoosterStyle = (roosterSide: Side) => ({
    cursor: "pointer",
    transform: roosterSide === "$BONK" ? "scaleX(-1)" : "",
    border: side === roosterSide ? "1px solid white" : "",
    width: "40vw",
    maxWidth: "400px",
    height: "auto",
  });

  const parentContainerStyle = {
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <GambaUi.Portal target="screen">
        <div
          className="relative align-middle items-center flex justify-center"
          style={parentContainerStyle}
        >
          <div style={{ position: "absolute", top: 25 }}>
            <p>Choose Your Memecoin</p>
          </div>
          <img
            src={TEXTURE_WHITE_ROOSTER}
            alt="$WEN"
            style={getRoosterStyle("$WEN")}
            onClick={() => setSide("$WEN")}
          />
          <img
            src={TEXTURE_BLACK_ROOSTER}
            alt="$BONK"
            style={getRoosterStyle("$BONK")}
            onClick={() => setSide("$BONK")}
          />
          {result && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={imageToShow}
                alt="Fight Result"
                style={{
                  zIndex: 10,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              />
            </div>
          )}
        </div>
      </GambaUi.Portal>
      <GambaUi.Portal target="controls">
        <GambaUi.WagerInput value={wager} onChange={setWager} />
        {wallet.connected ? (
          <GambaUi.PlayButton disabled={playing} onClick={play}>
            Fight
          </GambaUi.PlayButton>
        ) : (
          <GambaUi.Button main onClick={connect}>
            Play
          </GambaUi.Button>
        )}
      </GambaUi.Portal>
    </>
  );
}

export default MemeFight;