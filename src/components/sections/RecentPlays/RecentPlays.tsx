// src/components/sections/RecentPlays/RecentPlays.tsx

import { BPS_PER_WHOLE, GambaTransaction } from "gamba-core-v2";
import { GambaUi, TokenValue, useTokenMeta } from "gamba-react-ui-v2";
import React, { useMemo, useState } from "react";

import { PLATFORM_EXPLORER_URL } from "../../../../config";
import { ShareModal } from "./ShareModal";
import { extractMetadata } from "@/utils/utils";
import { useRecentPlays } from "../../../hooks/useRecentPlays";

function TimeDiff({ time, suffix = "ago" }: { time: number; suffix?: string }) {
  const diff = Date.now() - time;
  const timeString = useMemo(() => {
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (hours >= 1) {
      return `${hours}h ${suffix}`;
    }
    if (minutes >= 1) {
      return `${minutes}m ${suffix}`;
    }
    return "Just now";
  }, [diff, suffix]);

  return <span>{timeString}</span>;
}

function RecentPlay({ event }: { event: GambaTransaction<"GameSettled"> }) {
  const data = event.data;
  const token = useTokenMeta(data.tokenMint);

  const multiplier = data.bet[data.resultIndex.toNumber()] / BPS_PER_WHOLE;
  const wager = data.wager.toNumber();
  const payout = multiplier * wager;
  const profit = payout - wager;

  const { game } = extractMetadata(event);

  if (!game) {
    return null;
  }

  return (
    <>
      <img
        src={`/games/${game.id}/logo.png`}
        alt={`Splash for ${game.meta.name}`}
        width={64}
      />
      <div className="text-[#a079ff]">
        {data.user.toBase58().substring(0, 4)}...
      </div>
      <div className="hidden md:inline">{profit >= 0 ? " won " : " lost "}</div>
      <div
        className={`flex gap-2 items-center rounded-lg p-1 ${
          profit > 0 ? "bg-green-200/50" : "bg-white/10"
        }`}
      >
        <img src={token.image} width={24} className="rounded-full" />
        <TokenValue amount={Math.abs(profit)} mint={data.tokenMint} />
      </div>
      <div className="hidden md:flex flex-col">
        {profit > 0 && <div>({multiplier.toFixed(2)}x)</div>}
        {data.jackpotPayoutToUser.toNumber() > 0 && (
          <div className="animate-jackpotGradient flex gap-2 items-center text-black rounded-lg p-1">
            +
            <TokenValue
              mint={data.tokenMint}
              amount={data.jackpotPayoutToUser.toNumber()}
            />
          </div>
        )}
      </div>
    </>
  );
}
