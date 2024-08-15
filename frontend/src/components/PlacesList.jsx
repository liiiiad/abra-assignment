import { Paper } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function PlacesList({data}) {
    return <Paper sx={{padding: 3, borderRadius: 3, width: '40%'}}>
        <List>
            {data && data.map((place) => <ListItem key={place._id}>{place.name}</ListItem>)}
        </List>
    </Paper>
}