export interface Herb {
  name: string;
  image: string;
  uses: string[];
}

export interface GameState {
  isComplete: boolean;
  score: number;
  attempts: number;
}