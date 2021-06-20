import React from "react";

function MyList(props){
    const items = props.items;
    const listItems = items.map((item) =>
    {
        return <div className="list" key={item.key}>
        <div className="record">{item.text}
            <button className="outputtext" onClick={()=> props.deleteItem(item.key)
            }>刪除</button>
        </div>
    </div>

    })
        console.log(listItems)
    return (
        <div>{listItems}</div>
    )
}

export default MyList;