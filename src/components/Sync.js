import { Box } from "@mui/system";
import * as React from "react";//let this component have access to React and other components and facilities

import { useSelector, useDispatch } from 'react-redux';//useSelector - collects the current state of a given object (full on parent or child) in the redux world //use Dispatch is use to update that object in the redux world


export default function Sync () {

    const payload = useSelector(state => state)//assigning the collected data state of the entire state to a variable 
    //console.log(payload); -> make it JSON format
    const json = JSON.stringify(payload, null, 4);//squishes all data into a single line

    window.localStorage.setItem("payload", json);


    return (

        <Box>
            <hr></hr>
            <pre>
                {json}
            </pre>          
        </Box>
    )
}
{/*
PCode: for local storage operation
1. make a copy of list.items, and apply a control flow, that when that array changes in length, we update our copy of the array
2. translate this varaible into an object and store it on localStorage
3. control flow - on page load, if localStorage has object - populate those data else view default

CK:
1. we want to capture the entierty of the data model, not just a subset BUT from state to all the leaves
I think we make a call to the store and get its reducer?

*/}