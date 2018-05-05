import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Icon, ListItem, List, Left, Body, Right, Thumbnail } from 'native-base';
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

    mockChat = [
        { hashTag: 'AvengerInfinityWar', uri: 'https://www.matichon.co.th/wp-content/uploads/2018/05/avengers-infinity-war3.jpg', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'บุพเพสันนิวาส', uri: 'https://mellobetaprd.s3.ap-southeast-1.amazonaws.com/rerun/2018/03/4784984703.jpg', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'เสือดำ', uri: 'https://pbs.twimg.com/profile_images/875720444078313472/UOJmph0w_400x400.jpg', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'bnk48', uri: 'https://s3-ap-southeast-1.amazonaws.com/mellobetauat/activity/2018/01/8540792495.jpg', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'bodyslam', uri: 'https://www.songdee.com/wp-content/uploads/2018/05/bodyslam-%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B2-510x510.jpg', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'Magicskin', uri: 'https://i.ebayimg.com/images/g/q8UAAOSwVFZZcY1Q/s-l300.jpg', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'Ironman', uri: 'https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/42e8028fdd1149f69bd13deada8e4715_Large.png', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'Dota2', uri: 'https://orig00.deviantart.net/97fe/f/2013/332/c/4/dota_2_icon_by_benashvili-d6w0695.png', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'ROV', uri: 'https://static-s.aa-cdn.net/img/gp/20600006696363/SPz_fSrVrO_hrfDAHFS9gwgr6nZLxh-LgYkUL5Ut_xnA1Oz3JvZZoZaSC-zVzcQvCA=w300', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'PUBG', uri: 'https://image.winudf.com/v2/image/Y29tLndQVUJHQmF0dGxlZ3JvdW5kc182MzgwNTEzX2ljb25fMTUxNjc1ODI1NF8wODg/icon.png?w=170&fakeurl=1&type=.png', lastMessage: 'Doing What you like will always keep you happy' },
        { hashTag: 'QQ', uri: 'https://www.techxcite.com/uploads/20111121120831.jpg', lastMessage: 'Doing What you like will always keep you happy' },
    ]

    render() {
        return (
            <Container style={styles.container}>
                <Header style={rootStyle.headerStyle} />
                <Content>
                    <View style={rootStyle.headerBG}>
                        <Text style={rootStyle.headerText}>Chat</Text>
                    </View>
                    <List>
                        {
                            this.mockChat.map((data, key) => {
                                return (
                                    <ListItem key={key}>
                                        <Thumbnail small source={{ uri: data.uri }} />
                                        <Body>
                                            <Text>#{data.hashTag}</Text>
                                            <Text note>{data.lastMessage}</Text>
                                        </Body>
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF'
    }
});