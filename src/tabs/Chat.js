import React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Text, Icon } from 'native-base';
import { variableStyle, rootStyle } from '../../shared/app.style';

export default class Chat extends React.PureComponent {

    static navigationOptions = {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor, focused }) => (

            <Icon name="ios-chatbubbles-outline"
            style={{ fontSize: variableStyle.tabIconSize, color: focused ? variableStyle.tabIconFocused : variableStyle.tabIcon }} />
        )
    }

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content>
                    <View style={rootStyle.headerBG}>
                        <Text style={rootStyle.headerText}>Chat</Text>
                    </View>
                    <Text>Hello from Chat.js</Text>
                </Content>
            </Container>
        );
    }
}