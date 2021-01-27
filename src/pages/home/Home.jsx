import React from 'react';
import Dashboard from '../../layouts/Dashboard';
import NoticeService from '../../app/services/Notices';
class Home extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            news: [],
            loading: true,
        }
    }

    componentDidMount = () => {
        this.setState({
          loading: true
        }, async () => {
          this.getNoticesAll();
        });
    }

    getNoticesAll = async () => {    
        this.setState({
          loading: true,
        }, () => {
            NoticeService.getNotices({
          }).then(({ data }) => {
            this.setState({
                news: data,
                loading: false,
            });
          });
        });
    }
    render() {
        const { news } = this.state;
        return (
            <Dashboard>
                <div className="row">
                    <div className="col">
                        <div className="container">  
                        {news.map((news, index) => {
                            return <div className="card" id="home" key={index}>
                            <div className="card-body">
                                <h2 className="card-title">{news.title}</h2>
                                <p className="card-text">{news.descript}</p>
                                <h6 className="card-title">Categoria: {news.categories.title}</h6>
                                <a href="#" className="btn btn-primary">Leia</a>
                            </div>
                        </div>
                        })}
                        </div>
                    </div>
                </div>
            </Dashboard> 
        )
    }
}

export default Home;