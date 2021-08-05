import { CartProvider, useCart } from "react-use-cart";
import { Container,Paper, Typography ,Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { useState } from "react";
export default function Cart() {
    const [total,setTotal]=useState(0)
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

//   if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>
<Container>
<div style={{backgroundColor:"rgb(238, 237, 237)",borderRadius:"20px",paddingBottom:"20px"}}>
    <center>
    <Typography style={{fontSize:"25px",paddingTop:"20px"}} color="primary"> My Shopping Cart</Typography>
    <h6 style={{marginTop:"0px"}}>You have {totalUniqueItems} items in Shopping Cart</h6>
    </center>
    <Container >
    <div style={{backgroundColor:"white",marginTop:"20px",width:"100%",maxWidth:"1100px"}}>
        
        {/* <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        <div>
            <h4>
                Product Description 
            </h4>
        </div>
        <div>
            <h4>
               Quantity
            </h4>
        </div>
        <div>
            <h4>
               Price
            </h4>
        </div>
        <div>
            <h4>
              Remove
            </h4>
        </div>
        </div>
         */}
    <Container>

{items.map((item) => (
  <div key={item.id} style={{paddingTop:"20px"}}>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}> 
      <div>
          <img src={item.image} alt="error" className="Handleimg3" />
          </div>
          <div>
              <h4>{item.title}</h4>
          </div>
          <div  >
          
           <RemoveIcon   size="small"  onClick={() => updateItemQuantity(item.id, item.quantity - 1)} style={{marginTop:"20px"}}/>
           <Button variant="outlined" size="small" style={{marginTop:"-12px"}}>  {item.quantity}</Button>
           <AddIcon size="small"      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}/>
        
          </div>
          <div >
          <h4 >  {item.price} $</h4> 
          </div>
          <div >
         
          < ClearRoundedIcon onClick={() => removeItem(item.id)} style={{marginTop:"20px"}}/>
          </div>
          </div>
          <hr />
  </div>
))}

</Container>

    </div>
    
    </Container>

</div>

</Container>

    </>
  );
}
