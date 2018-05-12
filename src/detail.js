import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {
    Container, Header, Content, Left, Body, Right, Text, Item, Icon, Button,
    List, ListItem, Card, CardItem, Thumbnail, Footer, FooterTab
} from 'native-base';
//import TweetEmbed from 'react-tweet-embed';
import { rootStyle } from '../shared/app.style';

export default class Detail extends React.PureComponent {
    constructor() {
        super();
        const { width } = Dimensions.get('window');
        this.topCommentWidth = width * 90 / 100;
    }

    onPressBackButton = () => {
        this.props.navigation.goBack();
    }

    mockLikeIcon = [
        "https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg",
        "https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg",
        "https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg",
    ]

    fromOtherData = [
        { uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/57/99/ab/5799abb0-57f0-4986-e63e-307e445f3ced/AppIcon-1x_U007emarketing-85-220-1.png/246x0w.jpg' },
        { uri: 'https://image.ibb.co/nNd6R7/CNN_Logo.jpg' },
        { uri: 'https://image.ibb.co/kX42zS/download.jpg' }
    ];
    mockTopComment = [
        {
            avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg', name: 'Trey @TreyTheArtist', from: 'Twitter',
            comment: '#InfinityWar si a true a spectacle. A true culmination of 10-years. I\'m so glad to be apart of the journey' +
                ' and I can\'t stop thinking about it. Go see it. This is the absolute Best Marvel Movie to date...\n#AvengerInfinityWar @MarvelStudio'
        },
        {
            avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg', name: 'Chen Angelo', from: 'Facebook',
            comment: 'Lorem ipsum dolor sit amet, ne case veri delicatissimi mea. His porro aperiam ceteros no, nec in sumo volutpat constituto. Et odio vulputate vis' +
                ' Aeterno habemus apeirian eum et \n#AvengerInfinityWar'
        },
        {
            avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg', name: 'Barry Allen', from: 'Instagram',
            comment: '#InfinityWar si a true a spectacle. A true culmination of 10-years. I\'m so glad to be apart of the journey' +
                ' and I can\'t stop thinking about it. \n#AvengerInfinityWar'
        },
    ]
    render() {
        return (
            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content>

                    {/* Top 10 Hashtag */}
                    <View style={styles.content}>
                        <Item style={[rootStyle.headerBG]}>
                            <Left>
                                <Button transparent onPress={this.onPressBackButton}>
                                    <Icon name='arrow-back' />
                                </Button>
                            </Left>
                            <Body>
                                <Image source={require('../images/the-verge.png')} />
                            </Body>
                            <Right />
                        </Item>
                        <View style={styles.detail}>
                            <Text style={styles.newsTag}>#AvengerInfinityWar</Text>
                            <Text style={styles.headerText}>'Avengers: Infinity War' Is Set to Cross $1 Billion Box Office Mark in Record Time</Text>
                            <Image source={require('../images/avengerinfinitywar.jpg')} style={styles.newsImage} />

                            {/* Liked Image*/}
                            <ListItem
                                style={[styles.noBorderBottom, styles.listLikeItem]}>
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
                            {/* News Content Detail */}
                            <View>
                                <Text style={styles.contentText}>
                                    Lorem ipsum dolor sit amet, ne case veri delicatissimi mea. His porro aperiam ceteros no, nec in sumo volutpat constituto. Et odio vulputate vis.
                                    Aeterno habemus apeirian eum et, placerat salutatus has an, ei esse perpetua vix. Vis viris dictas deleniti ex, cum ad probo pertinax.
                                    Eos ne iriure convenire, ei erat lucilius vim. Nam cu essent commodo, ne inermis persecuti ius, dicunt conceptam vim ex. Cu est affert mentitum.
                                    Id mei invidunt pertinax rationibus, ius homero altera no. In nam habemus reprimique assueverit, ea his doctus lucilius disputationi,
                                    ea falli reprehendunt eam. Habemus nominati adipiscing usu cu.
                            </Text>
                                <Text />
                                <Text style={styles.contentText}>
                                    At cum purto nemore impetus, case tantas invidunt cu qui, utinam laudem adolescens an mea. Ea saepe aeterno mei, solet definitiones usu no,
                                    et corpora iracundia pro. Partem adversarium vim an, no malis ocurreret repudiare vix, nam ex nobis dolorem. Eam at purto option argumentum,
                                    eu summo periculis ius. Nec in aeque contentiones.
                                    Idque delectus corrumpit ut nec. Pro autem veritus ne, ad paulo dolorum per, duis iracundia aliquando nec no. Te recteque instructior mea.
                                    Legere alterum per ne, ex iisque commune cum. Id porro ubique periculis sea, quo cu probo prodesset.
                            </Text>
                                <Text style={{ color: '#999', fontSize: 12, paddingTop: 10, alignSelf: 'flex-end' }}>
                                    4.3K views | 2.3K retweet
                            </Text>
                            </View>
                            {/* From other source ex. sanook,CNN*/}
                            <Text style={styles.fromOtherTitle}>From other source</Text>
                            <List horizontal={true} dataArray={this.fromOtherData} style={styles.fromOtherList}
                                renderRow={(item) =>
                                    <TouchableOpacity onPress={() => { /* some logic */ }}>
                                        <View style={styles.fromOtherView}>
                                            <Image source={{ uri: item.uri }} style={styles.fromOtherIcon} />
                                        </View>
                                    </TouchableOpacity>
                                } />
                        </View>
                    </View>
                    {/* Top Comment */}
                    <View style={[styles.commentContainer, styles.detail]}>
                        <Item style={styles.noBorderBottom}>
                            <Left>
                                <Text style={[styles.commentHeaderText, { fontWeight: 'bold' }]}>
                                    Top comments
                                    </Text>
                            </Left>
                            <Right>
                                <Text style={[styles.commentHeaderText, { color: '#5A5A5A' }]}>See All</Text>
                            </Right>
                        </Item>
                        {/* Comment View */}

                        <List horizontal={true} dataArray={this.mockTopComment}
                            renderRow={(item) =>
                                <Card style={[{ width: this.topCommentWidth }]}>
                                    <CardItem style={{ borderBottomWidth: 0.4, borderColor: '#A8A8A8' }}>
                                        <Left>
                                            <Thumbnail small source={{ uri: item.avatar }} />
                                            <Body>
                                                <Text style={{ fontSize: 14 }}>{item.name}</Text>
                                                <Text note style={{ fontSize: 12, paddingTop: 5 }}>via {item.from}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody style={{ paddingTop: 8, paddingBottom: 15, paddingHorizontal: 15 }}>
                                        <Text style={{ fontSize: 12, color: '#5A5A5A', lineHeight: 20, }} numberOfLines={8}>
                                            {item.comment}
                                        </Text>
                                    </CardItem>
                                </Card>
                            } />
                    </View>
                    {/* Embed twitter */}
                    
                </Content>
                <Footer>
                    <FooterTab>
                        <Button transparent onPress={() => {}}>
                            <Item style={styles.noBorderBottom}>
                                <Icon name="ios-add-circle" />
                                <Text style={{ fontSize: 14 }}>Follow</Text>
                            </Item>
                        </Button>
                        <Button transparent onPress={() => {}}>
                            <Item style={styles.noBorderBottom}>
                                <Icon name="ios-share-alt" />
                                <Text style={{ fontSize: 14 }}>Share</Text>
                            </Item>
                        </Button>
                        <Button transparent onPress={() => {}}>
                            <Item style={styles.noBorderBottom}>
                                <Icon name="ios-bookmark" />
                                <Text style={{ fontSize: 14 }}>Save</Text>
                            </Item>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#FFF'
    },
    detail: {
        padding: 10
    },
    noBorderBottom: {
        borderBottomWidth: 0,
    },
    newsTag: {
        fontSize: 11,
        color: '#00A9E2',
        fontWeight: 'bold',
        paddingTop: 2
    },
    newsImage: {
        height: 175,
        width: '100%',
    },
    headerText: {
        fontSize: 18,
        color: '#333',
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    listLikeItem: {
        marginLeft: 0,
        paddingRight: 0,
        marginVertical: 5
    },
    likedNewsIcon: {
        height: 23,
        width: 23,
        borderRadius: 13,
        marginLeft: -9
    },
    readingMessage: {
        fontSize: 10,
        color: '#444'
    },
    contentText: {
        color: '#5A5A5A',
        fontSize: 14,
        lineHeight: 20
    },
    fromOtherTitle: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 5
    },
    fromOtherList: {
        marginTop: 5,
        marginBottom: 10
    },
    fromOtherView: {
        paddingHorizontal: 5,
        borderBottomWidth: 0,
        alignItems: 'center'
    },
    fromOtherIcon: {
        width: 45,
        height: 45,
        borderRadius: 23,
        borderWidth: 0.5,
        borderColor: '#999'
    },
    commentContainer: {
        backgroundColor: '#EBEBEB',
        paddingVertical: 20
    },
    commentHeaderText: {
        fontSize: 14
    },
    userButton: {
        paddingTop: 0,
    }
});