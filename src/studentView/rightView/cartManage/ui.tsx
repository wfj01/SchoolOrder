import React from "react";
import { ShoppingCartView } from "./shoppingCart/listview/ui";


/** 购物车管理视图 */
export class CartManageView extends React.Component{
    public render(){
        return(
            <>
            <ShoppingCartView/>
            </>
        )
    }
}