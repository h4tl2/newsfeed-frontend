import React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Text, Icon } from 'native-base';
import { rootStyle, variableStyle } from '../../shared/app.style';

export default class NewsFeed extends React.PureComponent {

    static navigationOptions = {
        tabBarLabel: 'Video',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon name="md-play"
                style={{ color: focused ? variableStyle.tabIconFocused : variableStyle.tabIcon }} />
        )
    }

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (

            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content>
                    <View style={rootStyle.headerBG}>
                        <Text style={rootStyle.headerText}>Video</Text>
                    </View>
                    <Text>Hello from Video.js</Text>
                </Content>
            </Container>
        );
    }
}