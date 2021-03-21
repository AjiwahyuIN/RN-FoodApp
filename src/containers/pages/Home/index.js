import React, { Component } from 'react'
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import popularData from '../../../assets/data/popularData'
import categoriesData from '../../../assets/data/categoriesData'
import COLOR from '../../../colors'
import { color } from 'react-native-reanimated'

Feather.loadFont()
MaterialCommunityIcons.loadFont()


const Home = ({navigation}) => {
    
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
        // const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
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
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', {
                            item:item,
                            })
                        }>
                            <View style={[styles.popularCardWrapper, {
                                marginTop: item.id == 1 ? 10 : 20
                            }]}>
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <MaterialCommunityIcons name='crown' size={12} color={COLOR.primary}/>
                                            <Text style={styles.popularTopText}>top of the week</Text>
                                        </View>
                                        <View style={styles.popularTitlesWrapper}>
                                            <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                            <Text style={styles.popularTitlesWeight}>{item.weight}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={styles.popularCardButtom}>
                                            <View style={styles.popularAddButton}>
                                                <Feather name='plus' size={10} color={COLOR.textDark}/>
                                            </View>
                                            <View style={styles.ratingWrapper}>
                                                <MaterialCommunityIcons name='star' size={10} color={COLOR.textDark}/>
                                                <Text style={styles.ratingText}>{item.rating}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                </ScrollView>
            </View>
        )
}

export default Home

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
        backgroundColor:COLOR.primary,
        shadowColor:COLOR.black,
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2
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
    popularWrapper:{
        paddingHorizontal:20
    },
    popularCardWrapper:{
        backgroundColor: COLOR.white,
        borderRadius:25,
        paddingTop:20,
        paddingLeft:20,
        flexDirection:'row',
        overflow:'hidden',
        shadowColor:COLOR.black,
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2
    },
    popularTitle:{
        fontFamily:'montserrat-Bold',
        fontSize:16
    },
    popularTopWrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    popularTopText:{
        marginLeft:10,
        fontFamily:'montserrat-Semibold',
        fontSize:14
    },
    popularTitlesWrapper:{
        marginTop:20
    },
    popularTitlesTitle:{
        fontSize:14,
        fontFamily:'montserrat-Semibold',
        color:COLOR.textDark,
        marginBottom:5
    },
    popularTitlesWeight:{
        fontFamily:'montserrat-Medium',
        fontSize:14,
        color:COLOR.textLight
    },
    popularCardButtom:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:-20
    },
    popularAddButton:{
        backgroundColor:COLOR.primary,
        paddingHorizontal:40,
        paddingVertical:20,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25
    },
    ratingWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20
    },
    ratingText:{
        fontFamily:'montserrat-Semibold',
        fontSize:12,
        color:COLOR.textDark,
        marginLeft:5 
    },
    popularCardRight:{
        marginLeft:40
    },
    popularCardImage:{
        width:210,
        height:125,
        resizeMode:'contain'
    },
})

