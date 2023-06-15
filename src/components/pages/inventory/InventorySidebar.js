import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

export const InventorySidebar = () => {
    const invetoryCartList = useSelector((state) => state.cart.cartItems);
    return (
        <>
            <Sidebar>
                <Menu>
                    <SubMenu label="Inventory">
                        <MenuItem  component={<Link to="/inventory/new" />}> Add </MenuItem>
                        <MenuItem  component={<Link to="/inventory/new" />}> Update </MenuItem>
                        <MenuItem  component={<Link to="/inventory" />}> List </MenuItem>
                        <MenuItem  component={<Link to="/inventory/cart" />}> Cart ({invetoryCartList.length}) </MenuItem>
                        <MenuItem  component={<Link to="/inventory/sales" />}> Sales </MenuItem>
                    </SubMenu>
                    <MenuItem  component={<Link to="/inventory" />}> Reports </MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}