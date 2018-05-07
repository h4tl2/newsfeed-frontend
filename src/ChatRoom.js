import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Header, Text, Item, Container, Content, Left, Body, Right, Button, Icon, Footer, FooterTab, Input } from 'native-base';
import { rootStyle, variableStyle } from '../shared/app.style';

export default class ChatRoom extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            message: '',
            mockMessage: [
                { self: false, message: 'Lorem ipsum dolor sit amet, ne case veri delicatissimi mea. His porro aperiam ceteros no' },
                { self: false, message: 'At cum purto nemore impetus, case tantas invidunt cu qui' },
                { self: true, message: 'Thanks!' },
                { self: true, message: 'Again please!' },
                { self: false, message: 'At cum purto nemore impetus, case tantas invidunt cu qui' },
            ]
        }
    }

    onPressBackButton = () => {
        this.props.navigation.goBack();
    }

    onChangeMessage = message => {
        this.setState({ message });
    }

    onSendMessage = () => {
        mockMessage = this.state.mockMessage;
        mockMessage.push({
            self: true,
            message: this.state.message
        })
        this.refs.contentView._root.scrollToEnd({animated: true});
        this.setState({ message: '', mockMessage })
    }

    render() {
        return (
            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content style={{ backgroundColor: '#FFF' }} ref="contentView" >
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
                    {/*Chat Content*/}
                    <View style={styles.container} >
                        {
                            this.state.mockMessage.map((data, key) => {
                                return (
                                    <View key={key} style={[styles.chatBox, data.self ? styles.chatBoxSelf : '']}>
                                        <Text numberOfLines={10}>{data.message}</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </Content>
                <KeyboardAvoidingView behavior="padding" >
                    <Item rounded style={[styles.noBorderBottom, { height: 35, backgroundColor: '#FFF', margin: 5 }]}>
                        <Input placeholder='Type Message...' onChangeText={this.onChangeMessage} value={this.state.message} />
                        <TouchableOpacity>
                            <Icon name="md-happy" />
                        </TouchableOpacity>
                        {
                            this.state.message.length > 0 &&
                            <TouchableOpacity onPress={this.onSendMessage}>
                                <Icon name="md-send" style={{ color: 'blue' }} />
                            </TouchableOpacity>
                        }
                    </Item>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    noBorderBottom: {
        borderBottomWidth: 0,
    },
    headerTitle: {
        fontSize: 16
    },
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    chatBox: {
        maxWidth: '60%',
        paddingVertical: 9,
        paddingHorizontal: 13,
        backgroundColor: '#E4E8EB',
        borderRadius: 25,
        alignSelf: 'flex-start',
        marginVertical: 3
    },
    chatBoxSelf: {
        backgroundColor: '#BEF18C',
        alignSelf: 'flex-end',
    }
});