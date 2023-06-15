import { useEffect, useState } from "react";
import { inventoryApi } from "../../../api";
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromCart, clearCart } from "../../features/cart/cartSlice";

export const InventoryCart = () => {
    //const [invetoryCartList, setInventoryList] = useState([]);
    const invetoryCartList = useSelector((state) => state.cart.cartItems);
    console.log("InvetoryCart: ", invetoryCartList)
    //items && setInventoryList(items);

    const removeFromCart = () => {}

    const getTotal = () => {
        const total = invetoryCartList.reduce((a,b) => {
           return a + b.price*b.quantity
        }, 0)
        console.log("getTotal", total)
        return total;
    }

    const getTotalPrice = () => {
        return invetoryCartList.reduce((a,b) => a + +b.price, 0);
    }

    const getTotalQuantity = () => {
        return invetoryCartList.reduce((a,b) => a + +b.quantity, 0);
    }

    const completeSale = () => {}

    return (
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Item Name
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Price
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Quantity
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        TOTAL
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Action</span>
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {invetoryCartList && invetoryCartList.map(inv => (
                    <tr key={inv.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{inv.name}</div>
                            </div>
                        </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{inv.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inv.quantity}
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap">
                        <span
                            className="px-2 inline-flex text-xs leading-5
                        font-semibold rounded-full bg-green-100 text-green-800"
                        >
                            {+inv.price * +inv.quantity}
                        </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => removeFromCart()} className="text-indigo-600 hover:text-indigo-900">
                        Remove
                        </button>
                        </td>
                    </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td>{getTotalPrice()}</td>
                        <td>{getTotalQuantity()}</td>
                        <td  className="px-6 py-4 whitespace-nowrap justify-end">{getTotal()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => completeSale()}  className={'pt-3 pb-3 pl-5 pr-5 btn-primary rounded-lg  border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'}>
                            Complete Sale
                            </button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
);
}