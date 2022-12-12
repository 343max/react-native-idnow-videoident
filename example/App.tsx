import { StyleSheet, Text, View } from 'react-native';

import * as TokenstreetReactNativeIdnowVideoident from '@tokenstreet/react-native-idnow-videoident';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>{TokenstreetReactNativeIdnowVideoident.hello()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
