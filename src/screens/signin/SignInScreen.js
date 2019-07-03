import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
    UIManager,
    TouchableOpacity
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Logo, SignInInput, SignInButton, SignInSocial } from '../../components/signin'

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.state = {
            fontLoaded: true,
            email: 'email@gmail.com',
            isEmailValid: true,
            password: '11111111',
            isPasswordValid: true,
            isLoading: false,
            isSignIn: false
        };
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    signIn() {
        const { email, password } = this.state;
        this.setState({ isLoading: true });
        // Simulate an API call
        setTimeout(() => {
            LayoutAnimation.easeInEaseOut();
            this.setState({
                isLoading: false,
                isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
                isPasswordValid: password.length >= 8 || this.passwordInput.shake(),
            });
            if ((this.validateEmail(email) || this.emailInput.shake())
                && (password.length >= 8 || this.passwordInput.shake())) {
                this.props.navigation.navigate('App');
            }
        }, 1500);
    }

    render() {
        const { email, password, isEmailValid, isPasswordValid, isLoading } = this.state;
        return (
            <View style={styles.container}>
                {this.state.fontLoaded ? (
                    <View style={styles.signInView}>
                        <Logo />
                        <SignInInput />
                        <SignInButton onPress={this.signIn} isLoading={isLoading} />
                        <View style={{ height: 50 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#03a5db' }}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%', height: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            // backgroundColor: 'green',
                            marginBottom: 30
                        }}>
                            <Divider style={{ height: 1, width: '35%', backgroundColor: 'white' }} />
                            <Text style={{ color: 'white', marginHorizontal: 5 }}>Login With</Text>
                            <Divider style={{ height: 1, width: '35%', backgroundColor: 'white' }} />
                        </View>
                        <SignInSocial />
                        <View style={styles.registerAccount}>
                            <Text style={{ color: 'white' }}>Don't have a MWGPay account? </Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#03a5db' }}>Register Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                        <Text>Loading...</Text>
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    signInView: {
        flex: 1,
        top: 100,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    mwgLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        backgroundColor: "yellow",
        borderRadius: 75,
        marginBottom: 50
    },
    mwgLogoTitle: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
    },
    signInInput: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    signInSocial: {
        width: '90%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    registerAccount: {
        width: '90%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'red'
    }
});