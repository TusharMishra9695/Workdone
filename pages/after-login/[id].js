import { Button, Card, CardContent, Container, Paper } from "@material-ui/core";
import React from "react";
import { CartProvider, useCart } from "react-use-cart";
export default function Post({ postData }) {
  const {addItem } = useCart();
  return (
    <div>
      <Container>
        <Paper className="card2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "nowrap",
            }}
          >
            <div style={{ float: "left", marginLeft: "20px" }}>
              <img src={postData.image} alt="error" className="Handleimg2" />
              <hr style={{ width: "100%", maxWidth: "700px" }} align="left" />
              <strong cpmponent="p">Detail </strong>
              <br />
              {postData.description}
            </div>
            <div>
              <h2>{postData.title}</h2>

              <h2>Price || {postData.price} $</h2>
              <Button variant="contained" color="primary" onClick={() => addItem(postData)} >
                Add to cart
              </Button>
            </div>
          </div>
        </Paper>
      </Container>
     
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const postData = await res.json();
  return {
    props: {
      postData,
    },
  };
}
