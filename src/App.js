import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';

import { rootStyle } from '../shared/app.style';

import NewsFeed from './tabs//NewsFeed';

export default class App extends React.PureComponent {

    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch({ type: 'Navigation/RESET', index: 0, actions: [{ type: 'Navigate', routeName: 'TabRoutes' }] })
        }, 1500);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Image source={require('../images/applogo.png')} resizeMode="cover" style={styles.Logo} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    Logo: {
        height: '100%',
        width: '100%'
    }
});