import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Content, Text, Icon } from 'native-base';
import { rootStyle, variableStyle } from '../../shared/app.style';

export default class NewsFeed extends React.PureComponent {

    static navigationOptions = {
        tabBarLabel: 'Discover',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon name="ios-globe-outline"
                style={{ fontSize: variableStyle.tabIconSize, color: focused ? variableStyle.tabIconFocused : variableStyle.tabIcon }} />
        )
    }

    constructor() {
        super();
        const { width } = Dimensions.get('window');
        this.screen80 = width * 85 / 100;
    }

    render() {
        return (

            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content>
                    <View style={{ flex: 1 }}>
                        <View style={rootStyle.headerBG}>
                            <Text style={rootStyle.headerText}>Discover List</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Discover Screen</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});