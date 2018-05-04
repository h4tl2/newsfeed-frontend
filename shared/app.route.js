import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { Root } from 'native-base';
import Orientation from 'react-native-orientation'

import App from '../src/App';
import NewsFeed from '../src/tabs/NewsFeed';
import Chat from '../src/tabs/Chat';
import Video from '../src/tabs/Video';
import Discover from '../src/tabs/Discover';
import Saved from '../src/tabs/Saved';

var TabRoutes = TabNavigator({
    NewsFeed: { screen: NewsFeed },
    Chat: { screen: Chat },
    Video: { screen: Video },
    Discover: { screen: Discover },
    Saved: { screen: Saved },
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        labelStyle: {
            fontSize: 12,
             padding: 0
        }
    }
});

const StackRoutes = StackNavigator({
    App: {
        screen: TabRoutes
    },
},
{
    initialRouteName: "App",
    navigationOptions: {
        header: null
    },
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
});

export default class AppNavigator extends React.PureComponent {

    componentDidMount() {
        Orientation.lockToPortrait();
    }
    render() {
        return (
            <Root>
                <StackRoutes />
            </Root>
        );
    }
}

