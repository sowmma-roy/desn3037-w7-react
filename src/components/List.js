import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useSelector, useDispatch } from 'react-redux'
import { define as reducerDefine, add as reducerAdd, remove as reducerRemove } from '../redux/list'



export default function BasicList() {

    const field = useSelector(state => state.list.field)
    const items = useSelector(state => state.list.items)
    const dispatch = useDispatch()//asks redux to make an upadate instead of pulling data

    function add () {

        {/* 1. get the data from TextField 2.pass it to itemsreducer 3.clear the field*/}
        dispatch(reducerAdd(field));
    }

    function remove (index) {

        {/* we dont have a remove func, go I guess we will define that functionality here
        1.collect the index number of the list item (i) 2.remove that indexed item from the itemList (delete based on index +action payload? 3.ask redux to update the itemList with indexnumbers 4. display the updatedlist real time
        */}
        dispatch(reducerRemove(index))
    }

    function define(value) {
        dispatch(reducerDefine(value))//take the value, and push it into action at reducer list. where action.payload works on it
    }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>

      <TextField label="" variant="outlined" value={field} sx={{ width: '100%', mb: 2}} onChange={(e) => define(e.target.value)} />
      <Button variant="contained" sx={{ width: '100%', mb:2}} onClick={(e) => add()}>Add</Button>

      {/* Button variant="contained" sx={{ width: '100%', mb:2}} onClick={(e) => dispatch(add())}>Add</Button> */}

      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
        
        {/* making a loop to generate as many list item as in the items array */}

        {items.map((item, i) => 
        
            <ListItem disablePadding key={i}>
            <ListItemButton>
              <ListItemText primary={item} />
                <Button variant="outlined" color='error' startIcon={<DeleteIcon sx={{marginLeft:"12px"}}/>} onClick={(e) => remove(i)}></Button>
            </ListItemButton>
          </ListItem>

        
        )}



        </List>
      </nav>
    </Box>
  );
}
