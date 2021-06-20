import React from "react";
import MyList from "./list.js";


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem:{
                text:'',
                key:''
            }
            
        };
        this.handleRecordChange = this.handleRecordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    render() {
        return <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="輸入資料" 
                className="inputtext"
                value={this.state.currentItem.text} 
                onChange={this.handleRecordChange} />

                <input type="submit" value="新增紀錄" />
            </form>
            <MyList items = {this.state.items}
            deleteItem={this.deleteItem}></MyList>
        </>
    }


    handleRecordChange(e) {
        this.setState({ 
            currentItem:{
                text: e.target.value,
                key:Date.now()
        }
    });

    }
    handleSubmit(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if (newItem.text !== ""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            }) //解構賦值 其餘運算符
            
        }
        
    }
    deleteItem(key){
        const filteredItems = this.state.items.filter(item =>
             item.key !== key);
             this.setState({
                 items:filteredItems
             })

    }


}


export default MyForm;