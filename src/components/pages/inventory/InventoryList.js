import { useEffect, useState } from "react";
import { inventoryApi } from "../../../api";
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart } from "../../features/cart/cartSlice";
import { ShoppingCartIcon }  from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

  export const InventoryList = () => {
    const dispatch = useDispatch();
    const invetoryCartList = useSelector((state) => state.cart.cartItems);

    const [invetoryList, setInventoryList] = useState([]);
    const [inputs, setInputs] = useState({
        quantity: 0,
        price: 0
    });

    useEffect(() => {
        async function fetchData() {
            const inventoryData = await inventoryApi.listInventory();
            console.log("inventory data..", inventoryData);
            setInventoryList(inventoryData.data.inventories);
        }
        fetchData();
      }, []);

      const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

      const addToCart = (itemSelected, quantitySold) => {
        console.log("addToCart", inputs.quantity, itemSelected);
        if(+inputs.quantity <= 0)  {
            alert("please add quantity greater than 0");
            return;
        }
        const item = {
            customerId: 0,//customer or non-customer(0)
            inventoryId: itemSelected.id,
            name: itemSelected.name,
            price: itemSelected.price,
            quantity: inputs.quantity 
        }
        dispatch(addItemToCart(item));
        setInputs({
            ...inputs,
            quantity: 0,
        });
      }
      

    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="flex justify-end mr-3">
                <Link to="/inventory/cart">
                    <ShoppingCartIcon className="block h-6 w-6" aria-hidden="true" />
                </Link>
                
                <Link to="/inventory/cart" className="text-green-600 hover:text-indigo-900">
                    {invetoryCartList.length}
                </Link>
              </div>
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
                      Item Description
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
                      Available
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity to Sell
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invetoryList && invetoryList.map(inv => (
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
                        <div className="text-sm text-gray-900">{inv.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className="px-2 inline-flex text-xs leading-5
                        font-semibold rounded-full bg-green-100 text-green-800"
                        >
                          {inv.price}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{inv.quantity}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <input
                            type="number"
                            className={
                                'p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'
                            }
                            name={'quantity'}
                            onChange={handleChange}
                            autoComplete={'off'}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => addToCart(inv)} className="text-indigo-600 hover:text-indigo-900">
                        Add to Cart
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }