import React from "react";
import MyForm from "./components/form.js";
import { Link } from 'react-router-dom';
 

class ListPage extends React.Component {
    render() {
        return <div className="ListPage">
            <MyForm />
            <div className="HomePagebtn">
                <Link to='/'>
                    <button>返回首頁</button>
                </Link>
            </div>
        </div>
    }
}
export default ListPage;
