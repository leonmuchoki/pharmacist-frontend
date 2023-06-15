import { Routes, Route } from "react-router-dom"
import { Inventory } from "./Inventory"
import InventoryAdd  from "./InventoryAdd"
import { InventoryList } from "./InventoryList"
import { InventoryView } from "./InventoryView"
import { NotFound } from "../NotFound"

export function InventoryRoutes() {
  return (
    <Routes>
      <Route element={<Inventory />}>
        <Route index element={<InventoryList />} />
        <Route path=":id" element={<InventoryView />} />
        <Route path="new" element={<InventoryAdd />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}