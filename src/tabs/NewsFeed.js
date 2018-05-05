import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import {
    Container, Header, Content, Left, Body, Right, Text, Icon, Item, ListItem,
    Button, List, Thumbnail, Grid, Row, Col
} from 'native-base';
import { rootStyle, variableStyle } from '../../shared/app.style';

export default class NewsFeed extends React.PureComponent {

    static navigationOptions = {
        tabBarLabel: 'NewsFeed',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon name="ios-paper-outline"
                style={{ fontSize: variableStyle.tabIconSize, color: focused ? variableStyle.tabIconFocused : variableStyle.tabIcon }} />
        )
    }

    constructor() {
        super();
        this.state = {}
    }

    //Mock Data
    treadingData = [
        { name: "Avenger", uri: "https://icon.kisspng.com/20180320/qsw/kisspng-captain-america-thor-logo-library-icon-avengers-5ab1351c0a8d37.9870427615215629080432.jpg" },
        { name: "เสือดำ", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
        { name: "BNK48", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
        { name: "bodyslam", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
        { name: "Magicskin", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
        { name: "Ironman", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
        { name: "Dota2", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
        { name: "ROV", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
        { name: "PUBG", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
        { name: "Tencent", uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" },
    ]
    mockLikeIcon = [
        "https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg",
        "https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg",
        "https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg",
    ]
    render() {

        return (

            <Container style={styles.container}>
                <Header style={rootStyle.headerStyle} />
                <Content>
                    {/* Top 10 Hashtag */}
                    <View style={rootStyle.headerBG}>
                        <Text style={rootStyle.headerText}>NewsFeed</Text>
                    </View>
                    <View style={styles.treadingView}>
                        <Item style={styles.noBottomBorder}>
                            <Icon name="ios-list" /><Text style={styles.trendingText}>Trending</Text>
                        </Item>
                        <List horizontal={true} dataArray={this.treadingData}
                            renderRow={(item) =>
                                <View style={styles.trendingList}>
                                    <Image source={{ uri: item.uri }} style={styles.trendingIcon} /> {"\n"}
                                    <Text style={styles.treadingTag}>#{item.name}</Text>
                                </View>
                            } />
                    </View>
                    {/* Most Voted News */}
                    <View style={styles.newsView}>
                        <ImageBackground source={require('../../images/avengerinfinitywar.jpg')} style={styles.mostImage} >
                            <View style={styles.mostImageView}>
                                <Text style={styles.mostImageText}>#AvengerInfinityWar</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.mostNewsContent}>
                            <Image source={require('../../images/the-verge.png')} resizeMode="cover" style={styles.newsIcon} />
                            <Text style={styles.mostNewsTitle}>
                                Avenger: Infinity War's bravest moment only works
                                because nobody takes it seriously
                            </Text>
                        </View>
                        <Item style={styles.noBottomBorder}>
                            <ListItem style={[styles.noBottomBorder, { marginLeft: 0 }]}>
                                {
                                    //รูป icon person
                                    this.mockLikeIcon.map((data, index) => {
                                        return (
                                            <Image key={index} style={[styles.likedNewsIcon, index == 0 ? { marginLeft: -2 } : ""]}
                                                source={{ uri: data }} />
                                        );
                                    })
                                }
                                <Text style={styles.readingMessage}> 145 read or talking about this</Text>
                            </ListItem>
                            <Item style={[styles.noBottomBorder, styles.userButtonGroup]}>
                                <Button transparent style={styles.userButton}>
                                    <Text style={styles.userButtonText}>Follow</Text>
                                </Button>
                                <Button transparent style={styles.userButton}>
                                    <Text style={styles.userButtonText}>Share</Text>
                                </Button>
                                <Button transparent style={styles.userButton}>
                                    <Text style={styles.userButtonText}>Save</Text>
                                </Button>
                            </Item>
                        </Item>
                    </View>
                    {/* News */}
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7', height: 200, width: '60%' }}></Col>
                        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6'
    },
    treadingView: {
        padding: 10,
    },
    trendingText: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#333'
    },
    trendingList: {
        paddingHorizontal: 7,
        borderBottomWidth: 0,
        alignItems: 'center',
    },
    treadingTag: {
        fontSize: 8,
        textAlign: 'center',
        paddingTop: 5,
        color: '#555'
    },
    trendingIcon: {
        width: 45,
        height: 45,
        borderRadius: 23,
    },
    noBottomBorder: {
        borderBottomWidth: 0,
    },
    newsView: {
        backgroundColor: '#FFF',
        padding: 10
    },
    mostImage: {
        height: 175,
        width: '100%',
    },
    mostImageView: {
        position: 'absolute',
        top: 7,
        left: 7,
        backgroundColor: '#009DD3',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    mostImageText: {
        fontSize: 10,
        color: '#FFF',
        fontWeight: 'bold'
    },
    newsIcon: {
        height: 10,
    },
    mostNewsContent: {
        paddingVertical: 10
    },
    mostNewsTitle: {
        paddingVertical: 8,
        color: '#333',
        fontWeight: 'bold',
        fontSize: 13
    },
    readingMessageGroup: {
        marginLeft: 0,
        borderBottomWidth: 0,
    },
    likedNewsIcon: {
        height: 25,
        width: 25,
        borderRadius: 13,
        marginLeft: -9
    },
    readingMessage: {
        fontSize: 8,
        color: '#444'
    },
    userButtonGroup: {
        alignSelf: 'flex-end',
    },
    userButton: {
        paddingHorizontal: 3,
        marginVertical: 3
    },
    userButtonText: {
        fontSize: 9,
        paddingRight: 5,
        paddingLeft: 5
    }
});