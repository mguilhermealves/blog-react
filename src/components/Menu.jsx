import React from 'react';
import { 
    Link
} from 'react-router-dom';

class Menu extends React.Component{
    render() {
        return (
            <ul>
                <li>
                    <Link to={'/'}>Inicio</Link>
                </li>
                <li>
                    <Link to={'/notices'}>Noticias</Link>
                </li>
            </ul>
        )
    }
}

export default Menu;