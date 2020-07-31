import React, {useState} from 'react';
import Header from '../sections/header/Header';
import Main from '../sections/main/Main';
import classes from './Layout.module.scss';
import WhatWeDo from '../sections/whatwedo/WhatWeDo'
import Resources from '../sections/resources/Resources';
import Newsletter from '../sections/newsletter/Newsletter';
import Footer from '../sections/footer/Footer';
import Copyright from '../sections/copyright/Copyright';
import Mentors from '../sections/mentors/Mentors';
import SideDrawer from '../components/sidedrawer/SideDrawer';
import BackDrop from '../components/backdrop/BackDrop';

const Layout = () => {
    const [state, setState] = useState(false)
    const toggled = ()=>{
        setState((prev)=>!prev)
    }
    return (
        <div className={classes.Layout}>
            {/* {state? */}
            <SideDrawer closed={toggled} open={state}/>
            {/* : ""} */}
            <BackDrop clicked={toggled} show={state}/>
           <Header toggleNav = {toggled}/>        
           <Main />
           <WhatWeDo />
           <Mentors/>
           <Resources text="Resources" resource="Resources for student artists"/>
           <Resources  resource="Resources for graduate artists"/>
           <Newsletter />
           <Footer />
           <Copyright />
        </div>
    )
}

export default Layout;
