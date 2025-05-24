import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCharacters } from '../features/characters/characterSlice';
import { CharacterCard } from '../features/characters/CharacterCard';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';
import type { Character } from '../features/characters/types';

export const CharacterList = () => {
    const dispatch = useAppDispatch();
    const { data, status } = useAppSelector(state => state.characters);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    if (status === 'loading') {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (status === 'failed') {
        return (
            <Typography sx={{ textAlign: 'center', mt: 4 }} color="error">
                Ocorreu um erro ao carregar os personagens.
            </Typography>
        );
    }

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
                Personagens de Harry Potter
            </Typography>
            <Grid container justifyContent="center">
                {data.map((character: Character, index: number) => (
                    <CharacterCard key={`${character.name}-${index}`} character={character} />
                ))}
            </Grid>
        </Box>
    );
};
