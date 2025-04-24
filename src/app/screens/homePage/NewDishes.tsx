import React from "react";
import {Box, Container, Stack} from "@mui/material";
import {CssVarsProvider} from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";
import AspectRatio from "@mui/joy/AspectRatio";
import FavoriteIcon from '@mui/icons-material/Favorite';

import {useSelector} from "react-redux";
import {createSelector} from "reselect";
import {retrieveNewDishes} from "./selector";
import {Product} from "../../../lib/types/product";
import {serverApi} from "../../../lib/config";
import {ProductCollection} from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR **/
const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
    newDishes,
}));

export default function NewDishes() {
    const {newDishes} = useSelector(newDishesRetriever);
    console.log("newDishes:", newDishes);

    return (
        <div className="new-products-frame">
            <Container>
                <Stack className="main">
                    <Box className="category-title">Fresh <span style={{color: "#1a906b"}}>Menu</span></Box>
                    <Stack className="cards-frame">
                        <CssVarsProvider>
                            {newDishes.length !== 0 ? (
                                newDishes.map((product: Product) => {
                                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                                    const sizeVolume =
                                        product.productCollection === ProductCollection.DRINK
                                            ? product.productVolume + "l"
                                            : product.productSize + " size";
                                    return (
                                        // <Card
                                        //   key={product._id}
                                        //   variant="outlined"
                                        //   className={"card"}
                                        // >
                                        //   <span></span>
                                        //   <CardOverflow>
                                        //     <div className="product-sale">{sizeVolume}</div>
                                        //     <AspectRatio ratio="1">
                                        //       <img src={"/img/cutlet.webp"} alt="" />
                                        //     </AspectRatio>
                                        //   </CardOverflow>
                                        //
                                        //   <CardOverflow variant="soft" className="product-detail">
                                        //     <Stack className="info">
                                        //       <Stack flexDirection={"row"}>
                                        //         <Typography className={"title"}>
                                        //           {product.productName}
                                        //         </Typography>
                                        //         <Box sx={{ paddingLeft: "5px" }}>
                                        //           <Divider width="2" height="24" bg="#d9d9d9" />
                                        //         </Box>
                                        //         <Typography className={"price"}>
                                        //           ${product.productPrice}
                                        //         </Typography>
                                        //       </Stack>
                                        //       <Stack>
                                        //         <Typography className={"views"}>
                                        //           {product.productViews}
                                        //           <VisibilityIcon
                                        //             sx={{ fontSize: 20, marginLeft: "5px" }}
                                        //           />
                                        //         </Typography>
                                        //       </Stack>
                                        //     </Stack>
                                        //   </CardOverflow>
                                        // </Card>

                                        <div className="card_dish"  key={product._id}>
                                            <div className="card_dish_img" style={{background:`url(/img/cutlet.webp)` , backgroundSize:"cover"}}>
                                                <div className="card_dish_save">
                                                   <FavoriteIcon/>
                                                </div>
                                            </div>

                                            <div className="card_dish_text">
                                                <p className="card_dish_h3">{product.productName}</p>
                                                <p className="card_dish_p"> ${product.productPrice} </p>

                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <Box className="no-data">New products are not available !</Box>
                            )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}
