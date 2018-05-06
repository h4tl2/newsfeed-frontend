import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
    Container, Header, Content, Left, Body, Right, Text, Item, Icon, Button,
    ListItem
} from 'native-base';
import { rootStyle } from '../shared/app.style';

export default class Detail extends React.PureComponent {
    constructor() {
        super();
    }

    onPressBackButton = () => {
        this.props.navigation.goBack();
    }

    mockLikeIcon = [
        "https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg",
        "https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg",
        "https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg",
    ]
    render() {
        return (
            <Container>
                <Header style={rootStyle.headerStyle} />
                <Content style={styles.content}>

                    {/* Top 10 Hashtag */}
                    <Item style={[rootStyle.headerBG,]}>
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
                        </View>
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
    detail: {
        padding: 8
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
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    listLikeItem: {
        marginLeft: 0,
        paddingRight: 0,
        marginVertical: 3
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
        fontSize: 14
    }
});