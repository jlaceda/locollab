import React, { Component } from 'react';
import Main from '../components/Main/index';
import Row from '../components/Row/index';
import Account from '../components/Account/index';

class NewAccount extends Component {
    render() {
        return(
            <div>
                <Main>
                    <Row>
                        <Account />
                    </Row>
                </Main>
            </div>
        )
    }
}

export default NewAccount;