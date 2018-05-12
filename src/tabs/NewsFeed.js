import React from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {
    Container, Header, Content, Left, Body, Right, Text, Icon, Item, ListItem,
    Button, List, Thumbnail, Grid, Row, Col
} from 'native-base';
import { rootStyle, variableStyle } from '../../shared/app.style';
import ModalVideo from '../ModalVideo';

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
        this.state = { 
            modalVisible: false,
            
        }
    }

    onCloseModal = () => {
        this.setState({ modalVisible: false });
    }

    openVideoModal = (videoId) => e => {
        this.setState({ modalVisible: true });
    }

    goDetailScreen = (newsId) => e => {
        this.props.navigation.navigate('Detail', { newsId: 1 });
        //axios.get('http://localhost:5000/usrdat/1/'+newsId)
    }


    //Mock Data
    treadingData = [
        { name: "Avenger", uri: "https://www.matichon.co.th/wp-content/uploads/2018/05/avengers-infinity-war3.jpg" },
        { name: "บุพเพสันนิวาส", uri: "https://mellobetaprd.s3.ap-southeast-1.amazonaws.com/rerun/2018/03/4784984703.jpg" },
        { name: "เสือดำ", uri: "https://pbs.twimg.com/profile_images/875720444078313472/UOJmph0w_400x400.jpg" },
        { name: "bodyslam", uri: "https://www.songdee.com/wp-content/uploads/2018/05/bodyslam-%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B2-510x510.jpg" },
        { name: "Magicskin", uri: "https://i.ebayimg.com/images/g/q8UAAOSwVFZZcY1Q/s-l300.jpg" },
        { name: "Ironman", uri: "https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/42e8028fdd1149f69bd13deada8e4715_Large.png" },
        { name: "Dota2", uri: "https://orig00.deviantart.net/97fe/f/2013/332/c/4/dota_2_icon_by_benashvili-d6w0695.png" },
        { name: "ROV", uri: "https://static-s.aa-cdn.net/img/gp/20600006696363/SPz_fSrVrO_hrfDAHFS9gwgr6nZLxh-LgYkUL5Ut_xnA1Oz3JvZZoZaSC-zVzcQvCA=w300" },
        { name: "PUBG", uri: "https://image.winudf.com/v2/image/Y29tLndQVUJHQmF0dGxlZ3JvdW5kc182MzgwNTEzX2ljb25fMTUxNjc1ODI1NF8wODg/icon.png?w=170&fakeurl=1&type=.png" },
        { name: "QQ", uri: "https://www.techxcite.com/uploads/20111121120831.jpg" },
    ]
    mockLikeIcon = [
        "https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg",
        "https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg",
        "https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg",
    ]
    mockNews1 = [
        { hashTag: 'Facebook', img: 'https://image.ibb.co/jgePES/mark.jpg', agencyImg: 'https://image.ibb.co/cueVon/huffpost.png',
            news: 'CEO Mark Zuckerberg Says Facebook Will Rank News Outlets By Trustworthlines', newsId: 2 },
        { hashTag: 'Twitter', img: 'https://image.ibb.co/j5aaM7/elon.jpg', agencyImg: 'https://image.ibb.co/muYC17/the_verge.png',
            news: 'Space X rocket technology poses major safety risk, Nasa advisers warn', newsId: 3 },
        { hashTag: 'Instagram', img: 'https://image.ibb.co/jm3Ug7/Bill_Gates.jpg', agencyImg: 'https://image.ibb.co/muYC17/the_verge.png',
            news: `Bill Gates reveals he turned down Trump's offer of a White House job`, newsId: 4 },
        { hashTag: 'Snapchat', img: 'https://image.ibb.co/dOkLon/104225995_95_A5004_530x298.jpg', agencyImg: 'https://image.ibb.co/cueVon/huffpost.png',
            news: `'If trade stops, war starts' Alibaba founder who visited Trump warns`, newsId: 5 },

    ];
    render() {

        return (

            <Container style={styles.container}>
                <Header style={rootStyle.headerStyle} />
                <Content>
                    {/* Top 10 Hashtag */}
                    <View style={rootStyle.headerBG}>
                        <Text style={rootStyle.headerText}>Newsfeed</Text>
                    </View>
                    <View style={styles.treadingView}>
                        <Item style={styles.noBottomBorder}>
                            <Icon name="ios-trending-up" style={{ fontSize: 18 }} /><Text style={styles.trendingText}>Trending</Text>
                        </Item>
                        <List horizontal={true} dataArray={this.treadingData} style={{ marginTop: 5 }}
                            renderRow={(item) =>
                                <TouchableOpacity onPress={this.openVideoModal(1)}>
                                    <View style={styles.trendingList}>
                                        <Image source={{ uri: item.uri }} style={styles.trendingIcon} /> {"\n"}
                                        <Text style={styles.treadingTag}>#{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            } />
                    </View>
                    {/* Most Voted News */}
                    <View style={styles.newsView}>
                        <TouchableOpacity onPress={this.goDetailScreen(1)}>
                            <ImageBackground source={require('../../images/avengerinfinitywar.jpg')} style={styles.mostImage} >
                                <View style={styles.mostImageView}>
                                    <Text style={styles.mostImageText}>#AvengerInfinityWar</Text>
                                </View>
                            </ImageBackground>
                            <View style={styles.mostNewsContent}>
                                <Image source={require('../../images/the-verge.png')} resizeMode="contain" />
                                <Text style={styles.mostNewsTitle}>
                                    'Avengers: Infinity War' Is Set to Cross $1 Billion Box Office Mark in Record Time
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Item style={[styles.noBottomBorder, styles.userControlGroup]}>
                            <ListItem
                                style={[styles.noBottomBorder, styles.listLikeItem]}>
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
                    <View style={{ padding: 10, paddingTop: 0, backgroundColor: '#FFF' }}>
                        {
                            this.mockNews1.map((data, key) => {
                                return (
                                    <View key={key}>
                                        <TouchableOpacity onPress={this.goDetailScreen(data.newsId)}>
                                            <Grid>
                                                <Col size={3}>
                                                    <Item style={styles.noBottomBorder}>
                                                        {
                                                            key % 2 == 0 ?
                                                            <Image source={require('../../images/huffpost.png')} resizeMode="contain" />
                                                            :
                                                            <Image source={require('../../images/the-verge.png')} resizeMode="contain" />
                                                        }
                                                        <Text style={styles.newsTag}> #{data.hashTag}</Text>
                                                    </Item>
                                                    <Text style={styles.mostNewsTitle}>
                                                        {data.news}    
                                                    </Text>
                                                </Col>
                                                <Col size={2} style={styles.newsImageContain}>
                                                    <Image source={{ uri: data.img }} style={styles.newsImage} />
                                                </Col>
                                            </Grid>
                                        </TouchableOpacity>
                                        <Item style={[styles.noBottomBorder, styles.userControlGroup]}>
                                            <ListItem
                                                style={[styles.noBottomBorder, styles.listLikeItem]}>
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
                                )
                            })
                        }
                    </View>
                </Content>
                <ModalVideo modalVisible={this.state.modalVisible} onCloseModal={this.onCloseModal}
                    navigation={this.props.navigation} />
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
        color: '#333',
    },
    trendingList: {
        paddingHorizontal: 7,
        borderBottomWidth: 0,
        alignItems: 'center',
    },
    treadingTag: {
        fontSize: 9,
        textAlign: 'center',
        paddingTop: 5,
        color: '#555'
    },
    trendingIcon: {
        width: 50,
        height: 50,
        borderRadius: 23,
    },
    noBottomBorder: {
        borderBottomWidth: 0,
    },
    newsView: {
        backgroundColor: '#FFF',
        padding: 10,
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
        paddingLeft: 1
    },
    mostNewsContent: {
        paddingVertical: 5
    },
    mostNewsTitle: {
        paddingVertical: 5,
        color: '#333',
        fontWeight: 'bold',
        fontSize: 13
    },
    userControlGroup: {
        flex: 1,
        justifyContent: 'space-between'
    },
    readingMessageGroup: {
        marginLeft: 0,
        borderBottomWidth: 0,
    },
    likedNewsIcon: {
        height: 23,
        width: 23,
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
        paddingVertical: 2
    },
    userButtonText: {
        fontSize: 9,
        paddingRight: 3,
        paddingLeft: 10,
        paddingBottom: 2
    },
    listLikeItem: {
        marginLeft: 0,
        paddingRight: 0
    },

    newsTag: {
        fontSize: 10,
        color: '#00A9E2',
        fontWeight: 'bold'
    },
    newsImage: {
        height: 75,
        width: '100%',
    },
    newsImageContain: {
        justifyContent: 'center',
    }
});