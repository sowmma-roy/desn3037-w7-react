import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



export default function BasicList() {

    function add () {
        alert('You are adding!');
    }

    function remove () {
        alert('You are removing!');
    }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>

      <TextField id="outlined-basic" label="Add note" variant="outlined" sx={{ width: '100%', mb: 2}} />
      <Button variant="contained" sx={{ width: '100%', mb:2}} onClick={(e) => add()}>Add</Button>

      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Item #0" />
                <Button variant="outlined" color='error' startIcon={<DeleteIcon sx={{m:0}}/>} onClick={(e) => remove()}></Button>
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
    </Box>
  );
}
