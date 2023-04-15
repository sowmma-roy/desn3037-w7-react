import { Box } from "@mui/system";
import * as React from "react";//let this component have access to React and other components and facilities
import { useSelector, useDispatch } from 'react-redux';//useSelector - collects the current state of a given object (full on parent or child) in the redux world //use Dispatch is use to update that object in the redux world


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, orderBy, query, limit } from 'firebase/firestore/lite';
import { Button } from "@mui/material";
import { WindowSharp } from "@mui/icons-material";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIHO-QgiJ4fuT54Q2Wx1Q91HoCu1RdZg",
  authDomain: "react-sample-72bbb.firebaseapp.com",
  projectId: "react-sample-72bbb",
  storageBucket: "react-sample-72bbb.appspot.com",
  messagingSenderId: "980334147826",
  appId: "1:980334147826:web:da3af209da7c471da8786b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function getSnapshots() {
    const col = collection(db, 'database');

    const q = query(col, orderBy('created_time', 'desc'), limit(5));

    const snapshot = await getDocs(q);
    const list = snapshot.docs.map(doc => doc.data());


    const json = list[0].data; //give us the lastest entry, and the data property gives us json

    window.localStorage.setItem("payload", json);//Why are we doing this step? - we are updating local storage with the current value and the reloading the app
    alert('Reloading app ...');
    window.location.reload();

    return list;
}

// Add a new document in collection "cities" - await function is a func, that does not wait on other code to finish (non dependant) and can work on its own 
async function addSnapshot () {
    const timestamp = String(new Date().getTime());
    const json = window.localStorage.getItem("payload");

    await setDoc(doc(db, "database", timestamp), { //2nd parameter is name of collection in the firebase app, 3rd parameter is reference to the name of the document in our database, and codeblock is the object we enter into it (eg: data: los angeles). Note: sometimes we want the name of the document to be unique so that we can populate it with new data (or else it overides previous data)
        data: json,
        created_time: timestamp,

    });
}



export default function Sync () {

    const payload = useSelector(state => state)//assigning the collected data state of the entire state to a variable 
    //console.log(payload); -> make it JSON format
    const json = JSON.stringify(payload, null, 4);//squishes all data into a single line

    window.localStorage.setItem("payload", json);


    return (
        <Box>
            <Button variant="outlined" onClick={(e) => getSnapshots()}>Load</Button>
            &nbsp;
            <Button variant="outlined" onClick={(e) => addSnapshot()}>Save</Button>
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