import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as COLOR, default as COLORS } from '../../../colors';

Feather.loadFont()
MaterialCommunityIcons.loadFont()



export default Detail = ({route, navigation}) => {
    const {item} = route.params
    console.log(item)

    const renderIngredientsItem = ({item}) => {
        return(
            <View style={[styles.ingredientsItemWrapper, {
                marginLeft: item.id === '1' ? 20 : 0
            }]}>
                <View>
                    <Image source={item.image} style={styles.ingredientsImage}/>
                </View>
            </View>
        )
    }

        return (
            <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.headerLeft}>
                                <Feather name='chevron-left' size={12} color={COLORS.textDark}/>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.headerRight}>
                            <MaterialCommunityIcons name='star' size={12} color={COLORS.white}/>
                        </View>
                    </View>
                </SafeAreaView>

                {/* title */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>

                {/* price */}
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>{item.price}</Text>
                </View>

                {/* pizza info */}
                <View style={styles.pizzaInfoWrapper}>
                    <View style={styles.pizzaInfoLeftWrapper}>
                        <View style={styles.infoItemWrapper}>
                            <Text style={styles.infoItemTitle}>size</Text>
                            <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}"</Text>
                        </View>
                        <View style={styles.crustWrapper}>
                            <Text style={styles.crustTitle}>crust</Text>
                            <Text style={styles.crustText}>{item.crust}</Text>
                        </View>
                        <View style={styles.deliveryWrapper}>
                            <Text style={styles.deliveryTitle}>Delivery In</Text>
                            <Text style={styles.deliveryText}>{item.deliveryTime} Min</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={item.image} style={styles.itemImage}/>
                    </View>
                </View>

                {/* ingredients */}
                <View style={styles.ingredientsWrapper}>
                    <Text style={styles.ingredientsTitle}>Ingredients</Text>
                    <View style={styles.ingredientsListWrapper}>
                        <FlatList
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* order */}
                <TouchableOpacity onPress={() => alert('your order has been placed!')}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Place an order</Text>
                    <Feather name='chevron-right' size={12} color={COLOR.textDark}/>
                </View>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerWrapper:{
        flexDirection:'row',
        paddingHorizontal:20,
        justifyContent:'center',
        paddingTop:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerLeft:{
        // width:40,
        // height:40,
        padding:12,
        borderRadius:10,
        borderColor:COLORS.textLight,
        borderWidth:2
    },
    headerRight:{
        backgroundColor:COLORS.primary,
        padding:12,
        borderWidth:2,
        borderColor:COLORS.primary,
        borderRadius:10
    },
    titlesWrapper:{
        paddingHorizontal:20,
        marginTop:30
    },
    title:{
        color:COLORS.textDark,
        fontFamily:'montserrat-Bold',
        width:'60%',
        fontSize:32
    },
    priceWrapper:{
        paddingHorizontal:20,
        marginTop:20
    },
    price:{
        fontFamily:'montserrat-Bold',
        color:COLORS.price,
        fontSize:32
    },
    pizzaInfoWrapper:{
        marginTop:60,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'

    },
    pizzaInfoLeftWrapper:{
        paddingLeft:20
    },
    infoItemWrapper:{
        marginBottom:20
    },
    infoItemTitle:{
        fontFamily:'montserrat-Medium',
        fontSize:14,
        color:COLORS.textLight
    },
    infoItemText:{
        fontFamily:'montserrat-SemiBold',
        fontSize:18,
        color:COLORS.textDark
    },
    crustWrapper:{
        marginBottom:20
    },
    crustTitle:{
        fontFamily:'montserrat-Medium',
        fontSize:14,
        color:COLORS.textLight
    },
    crustText:{
        fontFamily:'montserrat-SemiBold',
        fontSize:18,
        color:COLORS.textDark
    },
    deliveryWrapper:{
        marginBottom:20
    },
    deliveryTitle:{
        fontFamily:'montserrat-Medium',
        fontSize:14,
        color:COLORS.textLight
    },
    deliveryText:{
        fontFamily:'montserrat-SemiBold',
        fontSize:18,
        color:COLORS.textDark
    },
    itemImage:{
        resizeMode:'contain',
        marginLeft:50
    },
    ingredientsItemWrapper:{
        backgroundColor: COLOR.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: COLOR.black,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    ingredientsImage:{
        resizeMode:'contain'
    },
    ingredientsWrapper:{
        marginTop:40
    },
    ingredientsTitle:{
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: COLOR.textDark,
    },
    ingredientsListWrapper:{
        paddingVertical:20
    },
    orderWrapper:{
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: COLOR.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderText:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10,
    },
})