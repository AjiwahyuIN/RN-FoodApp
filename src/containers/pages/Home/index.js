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
                        <Feather name='menu' size={24} color={COLOR.textDark}/>
                    </View>
                </SafeAreaView>

                {/* title */}
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleFood}>Food</Text>
                    <Text style={styles.titleDelivery}>Delivery</Text>
                </View>

                {/* search */}
                <View style={styles.searchWrapper}>
                    <Feather name='search' size={16} color={COLOR.textDark}/>
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerWrapper:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingTop:20,
        alignItems:'center'
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40
    },
    titleWrapper:{
        marginTop:30,
        paddingHorizontal:20
    },
    titleFood:{
        fontFamily:'montserrat-Regular',
        fontSize:16,
        color:COLOR.textDark
    },
    titleDelivery:{
        fontFamily:'montserrat-Bold',
        fontSize:32,
        color:COLOR.textDark,
        marginTop:5
    },
    searchWrapper:{
        flexDirection:'row',
        paddingHorizontal:20,
        marginTop:30,
        alignItems:'center'
    },
    search:{
        flex:1,
        marginLeft:10,
        borderBottomColor:COLOR.textLight,
        borderBottomWidth:2
    },
    searchText:{
        fontFamily:'montserrat-Semibold',
        color:COLOR.textLight,
        fontSize:14,
        marginBottom:5
    }
})