import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    Container, Header, Content, Left, Body, Right, Text, Icon, Item, ListItem,
    Button, List, Thumbnail,
} from 'native-base';
import { rootStyle, variableStyle } from '../../shared/app.style';

export default class NewsFeed extends React.PureComponent {

    static navigationOptions = {
        tabBarLabel: 'NewsFeed',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon name="ios-paper-outline"
                style={{ color: focused ? variableStyle.tabIconFocused : variableStyle.tabIcon }} />
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
    ]
    render() {

        return (

            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content>
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
                                    <Thumbnail source={{ uri: item.uri }} /> {"\n"}
                                    <Text style={styles.treadingTag}>#{item.name}</Text>
                                </View>
                            } />
                    </View>
                    <View style={styles.newsView}>
                        <Image source={require('../../images/captain_america.jpg')} style={styles.mostImage} />
                        <View style={styles.mostNewsContent}>
                            <Image source={require('../../images/the-verge.png')} resizeMode="cover" style={styles.newsIcon} />
                            <Text style={styles.mostNewsTitle}>
                                Avenger: Infinity War's bravest moment only works
                                because nobody takes it seriously
                            </Text>
                        </View>
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

                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    treadingView: {
        padding: 10,
    },
    trendingText: {
        fontWeight: 'bold',
    },
    trendingList: {
        paddingHorizontal: 7,
        borderBottomWidth: 0
    },
    treadingTag: {
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 5
    },
    noBottomBorder: {
        borderBottomWidth: 0,
    },
    newsView: {
        backgroundColor: "#FFF",
        padding: 10
    },
    mostImage: {
        height: 250,
        width: '100%',
    },
    newsIcon: {
        height: 12,
    },
    mostNewsContent: {
        paddingVertical: 10
    },
    mostNewsTitle: {
        paddingVertical: 8
    },
    userButtonGroup: {
        alignSelf: 'flex-end',
    },
    userButton: {
        paddingLeft: 0,
        marginLeft: 0
    },
    userButtonText: {
        fontSize: 12
    }
});