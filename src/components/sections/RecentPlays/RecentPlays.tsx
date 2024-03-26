// src/components/sections/RecentPlays/RecentPlays.tsx

import { BPS_PER_WHOLE, GambaTransaction } from "gamba-core-v2";
import { GambaUi, TokenValue, useTokenMeta } from "gamba-react-ui-v2";
import React, { useMemo, useState } from "react";

import { PLATFORM_EXPLORER_URL } from "../../../../config";
import { ShareModal } from "./ShareModal";
import { extractMetadata } from "@/utils/utils";
import { useRecentPlays } from "../../../hooks/useRecentPlays";

