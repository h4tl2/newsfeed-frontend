import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Text, Item, Container, Content, Left, Body, Right, Button, Icon } from 'native-base';
import { rootStyle, variableStyle } from '../shared/app.style';

export default class ChatRoom extends React.PureComponent {
    constructor() {
        super();
        this.state = {

        }
    }

    onPressBackButton = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content>
                    <Item style={[rootStyle.headerBG]}>
                        <Left>
                            <Button transparent onPress={this.onPressBackButton}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Text style={[rootStyle.headerText, styles.headerTitle]} numberOfLines={1}>
                            {this.props.navigation.state.params.roomName}
                        </Text>
                        <Right />
                    </Item>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 16
    }
});