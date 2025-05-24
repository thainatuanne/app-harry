export interface Character {
    name: string;
    image: string;
    wizard: boolean;
    house: string;
    dateOfBirth?: string;
}
  
export interface CharacterState {
    data: Character[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
  