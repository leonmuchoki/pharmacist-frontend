import { useEffect, useState } from "react"
import { inventoryApi } from "../../../api"

export const InventorySales = () => {
    const [invetorySaleList, setInvetorySaleList] = useState([]);
    useEffect(() => {
        const fetchData=async()=> {
            const sales = await inventoryApi.listInventorySales();
            console.log("InventorySales::", sales)
            setInvetorySaleList(sales.data.inventorySales);
        }
        fetchData();
    }, [])

    const viewDetails =()=> {}

    return (
        <>
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
                        Customer Type
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
                        Quantity Sold
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
                    {invetorySaleList && invetorySaleList.map(inv => (
                    <tr key={inv.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{inv.inventory.name}</div>
                            </div>
                        </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{inv.customerId == 1 ? `Non-Customer` : `Customer`}</div>
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
                        <button onClick={() => viewDetails()} className="text-indigo-600 hover:text-indigo-900">
                        View
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
        </>
    )
}