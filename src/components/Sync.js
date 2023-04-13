import * as React from "react";//let this component have access to React and other components and facilities


export default function Sync () {

    return (
        <pre>
            CODE
        </pre>
    )
}
{/*
PCode: for local storage operation
1. make a copy of list.items, and apply a control flow, that when that array changes in length, we update our copy of the array
2. translate this varaible into an object and store it on localStorage
3. control flow - on page load, if localStorage has object - populate those data else view default



*/}