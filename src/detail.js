import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Text, Item, Icon, Button } from 'native-base';
import { rootStyle } from '../shared/app.style';

export default class Detail extends React.PureComponent {
    constructor() {
        super();
    }

    onPressBackButton = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content>
                    {/* Top 10 Hashtag */}
                    <Item style={[rootStyle.headerBG, styles.noBorderBottom]}>
                        <Left>
                            <Button transparent style={styles.backButton} onPress={this.onPressBackButton}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Image source={require('../images/the-verge.png')} />
                        </Body>
                        <Right />
                    </Item>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    noBorderBottom: {
        borderBottomWidth: 0,
    },
    backButton: {
        
    }
});