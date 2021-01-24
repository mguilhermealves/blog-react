import React from 'react';
import { 
    Link
} from 'react-router-dom';

class Menu extends React.Component{
    render() {
        return (
            <nav>
                <div className="container">
                    <ul>
                        <li>
                            <Link to={'/'}>Inicio</Link>
                        </li>
                        <li>
                            <Link to={'/notices'}>Notícias</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;