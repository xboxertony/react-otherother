import React from "react";
import {Nav} from "./components/nav.js";
import {Main} from "./components/main.js";
import {Section} from "./components/section.js";


class HomePage extends React.Component{
    render(){
        return <>
        <Nav/>
        <Section/>
        <Main/>
        </>
    }
}
export default HomePage;
