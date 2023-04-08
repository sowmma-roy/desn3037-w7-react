import { Tab, Tabs } from "@mui/material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Menu () {

    const { pathname } = useLocation;


    return (

        <div>
            <Tabs value={pathname}>
                <Tab component={Link} to="/about" value="/about" label="About" />
                <Tab component={Link} to="/clients" value="/clients" label="Clients" />
                <Tab component={Link} to="/contact" value="/contact" label="Contact" />
                <Tab component={Link} to="/counter" value="/counter" label="Counter" />
            </Tabs>

            {/*

            1. need to connect tab above with a corresponding tab panel
            2. tab panel in the bottom needs to call corresponding URL and display that the output of that function
            3. when respective function loads, the tab should reflect that it is selected 


            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>

            */}
        </div>



    )
}