import React, { Component } from 'react'
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import popularData from '../../../assets/data/popularData'
import categoriesData from '../../../assets/data/categoriesData'
import COLOR from '../../../colors'
import { color } from 'react-native-reanimated'

Feather.loadFont()
MaterialCommunityIcons.loadFont()

const renderCategoriesItem = ({item}) => {
    return(
        <View style={[styles.categoriesItemWrapper, {
            backgroundColor: item.selected ? COLOR.primary : COLOR.white,
            marginLeft: item.id == 1 ? 20 : 0
        }]}>
            <Image source={item.image} style={styles.categoriesItemImage}/>
            <Text style={styles.categoriesItemTitle}>{item.title}</Text>
            <View style={[styles.categoriesSelectedWrapper, {
                backgroundColor: item.selected ? COLOR.white : COLOR.secondary
            }]}>
                <Feather name='chevron-right' size={8} style={[styles.categoriesSelected, {
                    color: item.selected ? COLOR.black : COLOR.white
                }]}/>
            </View>
        </View>
    )
}
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
                        <TextInput placeholder='Search' style={styles.searchText}></TextInput>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                        data={categoriesData}
                        renderItem={renderCategoriesItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        />
                    </View>
                </View>

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => (
                        <View>
                            <Text>hello</Text>
                        </View>
                    ))}
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
        marginBottom:2
    },
    categoriesWrapper:{
        marginTop:30
    },
    categoriesTitle:{
        paddingHorizontal:20,
        fontFamily:'montserrat-Bold',
        fontSize:16
    },
    categoriesListWrapper:{
        paddingTop:15,
        paddingBottom:20
    },
    categoriesItemWrapper:{
        marginRight:20,
        borderRadius:20,
        backgroundColor:COLOR.primary
    },
    categoriesItemImage:{
        width:60,
        height:60,
        marginTop:25,
        marginHorizontal:20,
        alignSelf:'center'
    },
    categoriesItemTitle:{
        fontFamily:'montserrat-Semibold',
        textAlign:'center',
        fontSize:14,
        marginTop:10
    },
    categoriesSelectedWrapper:{
        width:26,
        height:26,
        alignSelf:'center',
        marginTop:20,
        justifyContent:'center',
        marginBottom:20,
        borderRadius:26
    },
    categoriesSelected:{
        alignSelf:'center'
    },
})