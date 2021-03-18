import React, { Component } from 'react'
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import popularData from '../../../assets/data/popularData'
import categoriesData from '../../../assets/data/categoriesData'
import COLOR from '../../../colors'

Feather.loadFont()

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image source={require('../../../assets/images/profile.png')} style={styles.profileImage}/>
                        <Feather name='menu' size={24} color={COLOR.textLight}/>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}
const styles = StyleSheet.create({

})