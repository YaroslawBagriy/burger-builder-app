import React, { Component  } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

// SideDrawer is in the Layout component since it
// is a core part of the layout.
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false 
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    
    sideDrawerToggleHandler = () => {
        // Clean way to set state based on old state
        this.setState((prevState) => {
             return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render () {
        return(
            <Aux>
                <Toolbar drawerToggleClicked={ this.sideDrawerToggleHandler  }/>
                <SideDrawer
                    open={ this.state.showSideDrawer }
                    closed={ this.sideDrawerClosedHandler }
                />
                <main className={ classes.Content }>
                    { this.props.children }
                </main>
            </Aux>
        )
    }
};

export default Layout;