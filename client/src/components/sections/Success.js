import React, { Component } from 'react'
import { Link } from '@reach/router';

export default class Success extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', color: '#fff'}}>
                <h1 style={{paddingTop: '20vh'}}>Payment Successful</h1>
                <Link to='/' style={{textDecoration: 'none', color: '#000'}}><p>Go back</p></Link>
            </div>
        )
    }
}
