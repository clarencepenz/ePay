import React, { Component } from 'react'
import { Link } from '@reach/router';

export default class Home extends Component {
    render() {
        return (
            <div style={{margin: '0 auto', width: '120px', paddingTop: '30vh'}}>
                <Link to='/pay' style={{textDecoration: 'none', color: '#fff' }}>
                    <h3 style={{padding: '10px 20px', backgroundColor: 'orange', textAlign: 'center', borderRadius: '25px'}}>Pay Me</h3>
                </Link>
            </div>
        )
    }
}
