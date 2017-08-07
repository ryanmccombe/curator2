/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Menu, Container, Dropdown, Image, Icon } from 'semantic-ui-react';
import messages from './messages';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Menu inverted attached size="huge">
      <Container>
        <Menu.Item as='a' header>
          Curator 2
        </Menu.Item>
        <Menu.Item as='a' active>Storylines</Menu.Item>
        <Menu.Item as='a'>Your Stories</Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown item simple text='Ryan McCombe'>
            <Dropdown.Menu>
              <Dropdown.Item>Sign Out</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         <Menu.Item as='a'><Icon name="question" /></Menu.Item>
       </Menu.Menu>
      </Container>
    </Menu>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
