import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Text, Icon, Item, Grid, Col } from 'native-base';
import { rootStyle, variableStyle } from '../../shared/app.style';

export default class NewsFeed extends React.PureComponent {

    static navigationOptions = {
        tabBarLabel: 'Saved',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon name="ios-bookmark-outline"
                style={{ fontSize: variableStyle.tabIconSize, color: focused ? variableStyle.tabIconFocused : variableStyle.tabIcon }} />
        )
    }

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content style={styles.content}>
                    <View style={rootStyle.headerBG}>
                        <Text style={rootStyle.headerText}>Saved</Text>
                    </View>
                    <View style={styles.viewContent} >
                        <TouchableOpacity onPress={() => { }} >
                            <Grid>
                                <Col size={3}>
                                    <Item style={styles.noBottomBorder}>
                                        <Image source={require('../../images/huffpost.png')} resizeMode="contain" />
                                        <Text style={styles.newsTag}> #Facebook</Text>
                                    </Item>
                                    <Text style={styles.newsTitle}>
                                        CEO Mark Zuckerberg Says Facebook Will Rank News Outlets By Trustworthlines
                                    </Text>
                                    <Text style={styles.savedTime}>5h ago</Text>
                                </Col>
                                <Col size={2} style={styles.newsImageContain}>
                                    <Image source={require('../../images/mark-zuckerberg.jpg')} style={styles.newsImage} />
                                </Col>
                            </Grid>
                        </TouchableOpacity>
                    </View>
                    {/* ข่าวที่ 2 */}
                    <View style={styles.viewContent} >
                        <TouchableOpacity onPress={() => { }} >
                            <Grid>
                                <Col size={3}>
                                    <Item style={styles.noBottomBorder}>
                                        <Image source={require('../../images/the-verge.png')} resizeMode="contain" />
                                        <Text style={styles.newsTag}> #Twitter</Text>
                                    </Item>
                                    <Text style={styles.newsTitle}>
                                        CEO Mark Zuckerberg Says Facebook Will Rank News Outlets By Trustworthlines
                                    </Text>
                                    <Text style={styles.savedTime}>6h ago</Text>
                                </Col>
                                <Col size={2} style={styles.newsImageContain}>
                                    <Image source={require('../../images/mark-zuckerberg.jpg')} style={styles.newsImage} />
                                </Col>
                            </Grid>
                        </TouchableOpacity>
                    </View>


                </Content>
            </Container>
        );

    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#FFF'
    },
    viewContent: {
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: '#AAA',
    },
    noBottomBorder: {
        borderBottomWidth: 0,
    },
    newsTitle: {
        paddingVertical: 5,
        color: '#333',
        fontWeight: 'bold',
        fontSize: 13
    },
    newsImageContain: {
        justifyContent: 'center',
    },
    newsImage: {
        height: 75,
        width: '100%',
    },
    newsTag: {
        fontSize: 10,
        color: '#00A9E2',
        fontWeight: 'bold'
    },
    savedTime: {
        paddingTop: 8,
        color: '#999',
        fontSize: 11
    }

});
