import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [cartitems, setcartitems] = useState({})

    const addtocart = (itemid) => {
        if (!cartitems[itemid]) {
            setcartitems((prev) => ({ ...prev, [itemid]: 1 }))
        }
        else {
            setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }
    }

    const removefromcart = (itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }



    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item)
                totalamount += iteminfo.price * cartitems[item];
            }

        }
        return totalamount;
    }

    // useEffect(()=>{
    //     console.log(cartitems)
    // },[cartitems])

    const contextvalue = {
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        gettotalcartamount
    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider