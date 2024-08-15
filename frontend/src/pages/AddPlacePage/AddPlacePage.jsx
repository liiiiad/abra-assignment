import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper'
import  CircularProgress  from "@mui/material/CircularProgress";
import { useMutation } from "@tanstack/react-query";
import { createPlace } from "../../utils/http";
import { useState } from "react";


const types = [
  {
    key: 0,
    value: "Restaurant",
  },
  {
    key: 1,
    value: "Hotel",
  },
  {
    key: 2,
    value: "Park",
  },
];

export default function AddPlacePage() {

    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [type,setType] = useState('');

    const { mutate, isPending } = useMutation({
        mutationFn: createPlace,
        mutationKey: 'createPlace',
        onError: (error) => {
            console.log(error);
            
        },
        onSuccess: (data) => {
            console.log(data);
            
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            address,
            type
        }
        mutate(data);
    }
    
  return (
    <Paper sx={{padding: 3, borderRadius: 3}}>
      <Typography variant="h6" paddingBottom={3} textAlign="left">
        Add a new place:
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        width='100%'
        justifyContent="center"
      >
        <TextField size="small" id="name" label="Name" variant="outlined" sx={{width: '15rem'}} value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField size="small" id="address" label="Address" variant="outlined"  sx={{width: '20rem'}} value={address} onChange={(e) => setAddress(e.target.value)}/>
        <TextField size="small" id="type" label="Type" defaultValue="" select variant="outlined"  sx={{width: '15rem'}} value={type} onChange={(e) => setType(e.target.value)}>
          {types.map((option) => (
            <MenuItem
              key={option.value}
              label={option.value}
              value={option.value}
            >
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box display='flex' justifyContent='right' gap={2}>
        {isPending && <CircularProgress />}
      <Button type="submit" variant="contained" size="small" disabled={isPending} onClick={handleSubmit}>
        Submit
      </Button>
      </Box>
    </Paper>
  );
}
