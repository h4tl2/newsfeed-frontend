import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { Root } from 'native-base';
import App from '../src/App';

const StackRoutes = StackNavigator({
    App: {
        screen: App
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
}
);

export default class AppNavigator extends React.PureComponent {
    render() {
        return (
            <Root>
                <StackRoutes />
            </Root>
        );
    }
}

