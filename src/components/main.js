import React from "react";
import { Link } from 'react-router-dom';
class Main extends React.Component{
    render(){
        return <div className = "main">
            <Link to='/ListPage'>
                <button>點此開始</button>
            </Link>
        </div>
    }
    ClickHandler(e){

    }
}
export {Main};