import { createComponent } from "@lit-labs/react";
import { CardanoStakeButton } from "../components";
import React from "react";

export const ReactCardanoStakeButton = createComponent(React, 'cardano-stake-button',CardanoStakeButton, {
    connection : 'connection'
});