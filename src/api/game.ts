import { Game } from "../models/Game";
import { apiRequest } from "./utils";

const apiUrl = "/api/game";

export const fetchGame = (): Promise<Game> => {
  return apiRequest<Game>(apiUrl, {});
};

export const startNewGame = (): Promise<Game> => {
  return apiRequest<Game>(apiUrl, {});
  // TODO
};

export const setAnswer = (): Promise<Game> => {
  return apiRequest<Game>(apiUrl, {});
  // TODO
};

export const deleteGame = (): void => {
  // TODO
};
