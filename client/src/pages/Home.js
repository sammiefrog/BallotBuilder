
import React from 'react';
import TabPanel from '../components/TabPanel'

// where election info goes
// put centered tab on home page
// each election in a different component that is rendered on click
// candidates in small cards
// electiondata component - container - 3 of them (President, Senate, House)
// card component - map when I bring into election data
// around each card is a box and around the box is a grid list
// keep box in card component and grid list in container component
const Home = () => {
    return ( 
        <div>
            <h1>Home Page</h1>
            <TabPanel/>
        </div>
     );
}
 
export default Home;