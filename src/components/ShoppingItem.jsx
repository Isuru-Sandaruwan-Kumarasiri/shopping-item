import { useState } from "react";

function ShoppingItem () {
    const [count,setcount]=useState(0);

    function handleAdd() {
        setcount(count+1);
    };
    function handleRemove() {
       setcount(count-1); 
    };
    
    
    return (  
        <div>
            <div style={{display:"flex",position:"absolute",left:"350px"}}>
                <div style={{width:"50px"}}>
                    <img style={{width:"200px",position:"relative",right:"200px",top:"30px"}} src="./image1.jpg" alt="" />
                </div>
                <div>
                    <h2>Item Name</h2>
                    <h3>{count<10? count:"Out of stock"}</h3>
                    <div style={{display:"flex"}}>
                        <button style={{marginRight:"20px",backgroundColor:"green"}}
                                onClick={handleAdd}
                                disabled={count===10?true:false}
                        >Add</button>
                        <button style={{backgroundColor:count===0 ? "lightgray":"red"}}
                                onClick={handleRemove}
                                disabled={count===0?true:false}
                        >Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingItem;