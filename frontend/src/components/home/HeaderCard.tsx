import { Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'


type Props = {
    title: string;
    description: number | string;
    bgcolor: string;
    Icon: React.ElementType;
}

const HeaderCard: React.FC<Props> = ({ title, description, bgcolor, Icon }) => {
    return (
        <Grid size={{ xs: 6, md: 3 }}>
            <Stack borderRadius={3} justifyContent={'start'} bgcolor={bgcolor} p={2} >
                <IconButton sx={{ justifyContent: "start" }}>
                    <Icon sx={{ fontSize: 50 }} />
                </IconButton>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="h4">{description}</Typography>
            </Stack>
        </Grid>
    )
}

export default HeaderCard