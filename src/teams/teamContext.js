import { createContext } from "react";

export const teamContext = createContext({
    teamRecluits: [],
    updateTeamRecluits: (id) => null,
})