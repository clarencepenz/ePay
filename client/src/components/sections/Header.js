import React, { Component } from 'react'
import { Link } from '@reach/router';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <h2 style={{paddingLeft: '60px', fontSize: '30px'}}>ePay</h2>
                </Link>
            </div>
        )
    }
}
