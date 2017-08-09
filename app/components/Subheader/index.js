/**
*
* Subheader
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Menu, Container, Dropdown, Image, Button, Icon } from 'semantic-ui-react';

class Subheader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
            <div>
        <Menu color="grey" inverted attached>
      <Container>
        <Menu.Item as='a' header>
          Partition of India
        </Menu.Item>
        <Dropdown item simple text='English'>
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Hindi</Dropdown.Item>
            <Dropdown.Item>Urdu</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon='add' text='Add Language' />
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button>Mobile Preview</Button>
          </Menu.Item>
          <Menu.Item as='a'><Icon name="setting" /></Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
      </div>
    );
  }
}

Subheader.propTypes = {

};

export default Subheader;
