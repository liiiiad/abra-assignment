import { ListItemButton, Paper } from "@mui/material";
import List from '@mui/material/List';

export default function PlacesList({data,onClickPlace}) {

    return <Paper sx={{padding: 3, borderRadius: 3, width: '40%'}}>
        <List>
            {data && data.map((place) => <ListItemButton key={place._id} onClick={() => onClickPlace(place)}>{place.name}</ListItemButton>)}
        </List>
    </Paper>
}