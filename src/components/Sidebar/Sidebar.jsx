import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import "./Sidebar.css";

import importRoutes from "details/routes";

export default function Sidebar() {
    const location = useLocation();
    const [selectedUrl, setSelectedUrl] = useState(null);

    useEffect(() => setSelectedUrl(location.pathname), [location]);

    return (
        <div id="sidebar">
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem onClick={() => setSelectedUrl('/')} active={selectedUrl === '/'}>
                    <Link to="/"> 
                        Home
                    </Link> 
                 </MenuItem>
                <SubMenu title="External app 1" defaultOpen={true}>
                    {importRoutes.map( (route, index) => (
                        <MenuItem key={index} onClick={() => setSelectedUrl(route.path)} active={selectedUrl === route.path}>
                            <Link to={route.path}>
                                {route.name}
                            </Link>
                        </MenuItem>

                    ))}
                </SubMenu>
                <MenuItem onClick={() => setSelectedUrl('/vue-app')} active={selectedUrl === '/vue-app'}>
                    <Link to="/vue-app"> 
                        Vue App
                    </Link> 
                 </MenuItem>
            </Menu>
        </ProSidebar>
        </div>
    )
}
