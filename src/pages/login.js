import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Lógica de login
        // console.log(`Email: ${email}, Senha: ${password}`);
        if (email === '' && password === '') {
            navigation.navigate('Main');
        } else {
            Alert.alert('E-mail ou senha inválidos!');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={true} />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    button: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Login;