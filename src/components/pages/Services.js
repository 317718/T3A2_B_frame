import React from 'react';
import './Services.css';
import API from '../../api'
import Spinner from '../layout/Spinner'

class Services extends React.Component {
    state = {
        services: [],
        loading: false
    }

  componentDidMount () {
    this.setState({ loading: true })

    fetch(`${API}/services`)
    .then(response => response.json())
    .then(data => this.setState({services: data, loading: false}));  
  }

    render() {
        const {services} = this.state
        const {loading } = this.state
        
        if(!loading) {
        return (
            <>
                <div>
                    <h1>Services</h1>
                </div>
                {services.map(service => 
                    <table key={service.id}>
                        <tbody>
                            <tr >
                            <td>{service.service_name}</td>
                            <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
                            </tr>
                        </tbody>
                    </table>
                    )
                }
            </>
        )} else {
            return <Spinner />
        }

    }
}


export default Services
