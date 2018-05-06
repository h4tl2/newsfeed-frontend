import React from 'react';
import {
    Modal, StyleSheet, View, Text, StatusBar, ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import Video from 'react-native-video';

export default class ModalVideo extends React.PureComponent {
    constructor() {
        super();
    }

    onCloseModal = () => {
        this.props.onCloseModal();
    }

    onClickReadmore = () => {
        this.props.onCloseModal();
        this.props.navigation.navigate('Detail', { newsId: 1 });
    }

    render() {
        return (
            <View>
                <StatusBar hidden={this.props.modalVisible} />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible} >
                    <ImageBackground source={require('../images/galaxy.jpg')} style={styles.container}>

                        <View style={styles.container}>
                            {/* Header */}
                            <View style={[styles.content, styles.headerContent]}>
                                <Text style={styles.headerText}>#1</Text>
                                <Text />
                                <Text style={styles.headerText}>'Avengers: Infinity War'</Text>
                                <Text style={styles.headerText}>
                                    Is Set Cross $1 Billion Box Office Mark in Record Time
                                </Text>
                            </View>
                            {/* Video Contain */}
                            <View style={styles.videoContent}>
                                <Video
                                    repeat
                                    source={require('../assets/avenger.mp4')}
                                    //muted={true}
                                    style={styles.video}
                                />
                            </View>
                            {/* Read more Contain */}
                            <View style={styles.content}>
                                <View style={styles.statusView}>
                                    <Text style={styles.statusText}>4.3k views</Text>
                                    <Text style={styles.statusText}>2.3k retweet</Text>
                                </View>
                                <TouchableOpacity style={styles.readButton} onPress={this.onClickReadmore}>
                                    <Text style={styles.readButtonText}>Read more</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.closeView} onPress={this.onCloseModal} >
                            <Icon name='md-close' style={styles.closeIcon} />
                        </TouchableOpacity>
                    </ImageBackground>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContent: {
        paddingHorizontal: '10%'
    },
    headerText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    videoContent: {
        flex: 1,
        backgroundColor: '#000'
    },
    video: {
        flex: 1
    },
    statusView: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    statusText: {
        color: '#FFF',
        paddingHorizontal: 5,
        fontWeight: 'bold'
    },
    readButton: {
        backgroundColor: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 45,
        borderRadius: 30,
    },
    readButtonText: {
        color: '#111'
    },
    closeView: {
        position: 'absolute',
        top: 20,
        right: 15
    },
    closeIcon: {
        color: 'white',
    }
});