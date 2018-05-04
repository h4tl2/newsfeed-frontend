import React from 'react';
import {
    Container, Header, Content, Left, Body, Right, Title, Button, Icon, Text,
    Tabs, Tab, TabHeading, Footer
} from 'native-base';
import { StyleSheet } from 'react-native';

import { rootStyle } from '../shared/app.style';

import NewsFeed from './tabs//NewsFeed';

export default class App extends React.PureComponent {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <Container>

                <NewsFeed />

                <Footer>
                    <Tabs>
                        <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                            <Text>Page1</Text>
                        </Tab>
                        <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
                            <Text>Page2</Text>
                        </Tab>
                        <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
                            <Text>Page3</Text>
                        </Tab>
                    </Tabs>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    footerTabBtn: {

    }
});