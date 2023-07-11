import React from "react";
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

const useStyles = makeStyles(styles);
export default function CardTemplate({index}) {
  const classes = useStyles();
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
          <p className={classes.textCenter}>Card title</p>
        </h1>
        <div className="rowC">
          <p className={classes.textLeft}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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