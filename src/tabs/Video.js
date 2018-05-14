import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import { Container, Header, Content, Text, Icon, Left, Body, Right, Card, CardItem, List, Item } from 'native-base';
import { rootStyle, variableStyle } from '../../shared/app.style';

export default class NewsFeed extends React.PureComponent {

    static navigationOptions = {
        tabBarLabel: 'Video',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon name="md-play"
                style={{ fontSize: variableStyle.tabIconSize, color: focused ? variableStyle.tabIconFocused : variableStyle.tabIcon }} />
        )
    }

    constructor() {
        super();
        this.state = {}
        const { width } = Dimensions.get('window');
        this.width85 = width * 85 / 100;
    }

    mockVideo = [
        'https://image.ibb.co/muhXVd/suggested_videos_1.jpg',
        'https://image.ibb.co/ihamqd/suggested_videos_2.jpg',
        'https://image.ibb.co/muhXVd/suggested_videos_1.jpg',
    ];

    mockChannel = [
        { title: 'Thairath TV', uri: 'https://image.ibb.co/f7chVd/Screen_Shot_2561_05_14_at_7_52_39_PM.png' },
        { title: 'Nation Channel', uri: 'https://image.ibb.co/k1bbqd/Screen_Shot_2561_05_14_at_7_52_42_PM.png' },
        { title: 'Now26', uri: 'https://image.ibb.co/cZq2Vd/Screen_Shot_2561_05_14_at_7_52_46_PM.png' },
        { title: 'ThaiPBS', uri: 'https://image.ibb.co/nkmbqd/Screen_Shot_2561_05_14_at_7_53_13_PM.png' },
        { title: 'Thairath TV', uri: 'https://image.ibb.co/f7chVd/Screen_Shot_2561_05_14_at_7_52_39_PM.png' },
    ];

    mockTreadingNews = [
        { agency: 'Thairath TV', title: 'เสียงชายปริศนา รับไม่ได้ซ์้อหวยรางวัลที่ 1', uri: 'https://image.ibb.co/kLquRJ/Screen_Shot_2561_05_14_at_8_24_32_PM.png' },
        { agency: 'Thai PBS', title: 'การประชุมสุดยอดครั้งประวัติศาสตร์เกาหลีเหนือ', uri: 'https://image.ibb.co/kLquRJ/Screen_Shot_2561_05_14_at_8_24_32_PM.png' }
    ]

    render() {
        return (

            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content style={{ backgroundColor: '#FFF' }}>
                    <View style={rootStyle.headerBG}>
                        <Text style={rootStyle.headerText}>Saved</Text>
                    </View>
                    {/* Top Video */}
                    <List horizontal={true} dataArray={this.mockVideo} style={{ margin: 10 }}
                        renderRow={(item) =>
                            <Image style={{ height: 175, width: this.width85, marginRight: 10, marginVertical: 20, borderRadius: 3 }} source={{ uri: item }} />
                        } />

                    <View style={styles.hr} />

                    {/* Channel */}
                    <View style={{ padding: 10 }}>
                        <Text style={styles.title}>Channels</Text>
                        <List horizontal={true} dataArray={this.mockChannel} style={{ paddingVertical: 5 }}
                            renderRow={(item, index) =>
                                <View style={{ marginVertical: 10, marginRight: 10, marginVertical: 15 }}>
                                    <Image style={[{ height: 80, width: 80, borderRadius: 3 }, index == 0 ? { marginLeft: 0 } : ""]} source={{ uri: item.uri }} />
                                    <Text style={{ textAlign: 'center', fontSize: 11, paddingTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
                                </View>
                            } />
                    </View>

                    <View style={styles.hr} />

                    <View style={{ padding: 10 }}>
                        <Text style={styles.title}>Treading Videos</Text>
                        <List dataArray={this.mockTreadingNews} style={{ paddingVertical: 5 }}
                            renderRow={(item, index) =>
                                <View style={{ marginVertical: 10, marginRight: 10, marginVertical: 15 }}>
                                    <Image style={[{ height: 80, width: 80, borderRadius: 3 }, index == 0 ? { marginLeft: 0 } : ""]} source={{ uri: item.uri }} />
                                    <Text style={{ textAlign: 'center', fontSize: 11, paddingTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
                                </View>
                            } />
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    hr: {
        borderBottomWidth: 0.5,
        borderColor: '#CCC'
    },
    title: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    }
});