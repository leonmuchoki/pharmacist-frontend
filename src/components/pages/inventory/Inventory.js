import { Link, Outlet } from "react-router-dom"
import { InventorySidebar } from "./InventorySidebar"
import { InventoryList } from "./InventoryList"

export const Inventory = () => {
    return (
        <>
            <div class="grid grid-cols-5 gap-3">
                <div><InventorySidebar /></div>
                <div class="col-span-4"><Outlet /></div>
            </div>
        </>
    )
}