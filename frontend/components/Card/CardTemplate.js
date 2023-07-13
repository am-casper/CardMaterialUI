import React, { useEffect, useState } from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "styles/css/styles.css";
// core components
import Button from "/components/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
// import axios from 'axios';
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "/styles/nextjs-material-kit.js";
import imagesStyles from "/styles/imagesStyles.js";
import Image from "next/image";
import Api from "../../utils/api";
const styles = {
  ...imagesStyles,
  cardTitle,
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
  cardLink,
  cardSubtitle,
};

const myStyles = makeStyles(styles);

export default function CardTemplate({ index }) {
  // console.log(index)
  let [data, setData] = useState({});
  useEffect(() => {
    console.log("hi");
    const func = async () => {
      data = await Api(index);
      setData(data);
      // console.log(data.itemName)
    };
    func();
  }, []);
  // console.log(data)
  const classes = myStyles();
  // console.log(data.itemName)
  return (
    <Card>
      <Image
        width="180"
        height="180"
        alt="image"
        className={classes.imgCardTop}
        src="/vercel.svg"
      />

      <CardBody>
        <h1 className={classes.cardTitle}>
          <p className={classes.textCenter}>{data.itemName}</p>
        </h1>
        <div className="rowC">
          <p className={classes.textLeft}>
            {data.itemDesc} <br />
            Rs.{data.itemPrice}
          </p>
          <div className={classes.textRight}>
            <Button color="primary">
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
