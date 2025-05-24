import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import type { Character } from './types';

interface CharacterCardProps {
    character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
    return (
        <Card sx={{ width: 280, m: 2, borderRadius: 3, boxShadow: 3 }}>
            <Box sx={{ position: 'relative', height: 400 }}>
                <CardMedia
                    component="img"
                    sx={{ height: '100%', objectFit: 'cover' }}
                    image={
                        character.image && character.image.trim() !== ''
                            ? character.image
                            : '/sem-imagem.jpg'
                    }                      
                    alt={character.name}
                />
                <CardContent
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        color: 'white',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                        width: '100%',
                        padding: 2,
                    }}
                >
                    {character.dateOfBirth && (
                        <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                            {character.dateOfBirth}
                        </Typography>
                    )}

                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }} noWrap>
                        {character.name}
                    </Typography>
                    <Typography variant="body2">Bruxo: {character.wizard ? 'Sim' : 'Não'}</Typography>
                    <Typography variant="body2">
                        Casa: {character.house ? character.house : 'Não Possui'}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};
