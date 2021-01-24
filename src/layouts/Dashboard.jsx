import React from 'react';
import Header from '../components/Header';

class Dashboard extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Header></Header>

                        <main className="main-content">
                        <div className="container">
                            { this.props.children }
                        </div>
                        </main>

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;