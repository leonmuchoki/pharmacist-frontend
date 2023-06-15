import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom"

export const InventorySidebar = () => {
    return (
        <>
            <Sidebar>
                <Menu>
                    <SubMenu label="Inventory">
                    <MenuItem  component={<Link to="/inventory/new" />}> Add </MenuItem>
                    <MenuItem  component={<Link to="/inventory/new" />}> Update </MenuItem>
                    </SubMenu>
                    <MenuItem  component={<Link to="/inventory" />}> List </MenuItem>
                    <MenuItem  component={<Link to="/inventory" />}> Reports </MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}