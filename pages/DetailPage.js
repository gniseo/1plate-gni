import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
//import Video from "react-native-video";

import recipe_ingredient from '../recipe_ingredient.json'
import recipe_description from '../recipe_description.json'

const DetailPage = ({navigation, route}) => {
    
    const {oneplate} = route.params
    const [IngreState, setIngreState] = useState([
        {
            "RECIPE_ID": 1,
            "IRDNT_SN": 1,
            "IRDNT_NM": "쌀",
            "IRDNT_CPCTY": "4컵",
            "IRDNT_TY_CODE": 3060001,
            "IRDNT_TY_NM": "주재료"
          }
    ])
    const [DescState, setDescState] = useState([
        {
            "RECIPE_ID": 1,
            "COOKING_NO": 1,
            "COOKING_DC": "양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어 고슬고슬하게 밥을 짓는다.",
            "STRE_STEP_IMAGE_URL": "http://file.okdab.com/UserFiles/searching/recipe/000200_p01.jpg",
            "STEP_TIP": ""
      }
    ])

    const URL = {
        favorite_on : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ffavoriteon.png?alt=media&token=ecc3235f-9e9d-4980-8463-eb9df2f01ec9",
        favorite_off : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ffavoriteoff.png?alt=media&token=83c52035-e01e-47a0-aedd-cd8810a67779",
        bookmark_on : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fbookmarkon.png?alt=media&token=7502b32c-3641-4ecd-970b-2b431e79c344",
        bookmark_off : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fbookmarkoff..png?alt=media&token=d57b03fd-1fd7-43f2-8692-2eaf89d0806d"
    }
    const popup_favorite = () => {
        if (oneplate.favorite_focus === false) {
            oneplate.favorite_focus===true 
            Alert.alert("좋아요!")
        } else (oneplate.favorite_focus==false)
    }
    const popup_bookmark = () => {
        Alert.alert("북마크!")
        return oneplate.bookmark_focus==true
    }
      useEffect(() => {
        const Description = recipe_description.data.filter((recipe) => {
            return oneplate.RECIPE_ID === recipe.RECIPE_ID
        });
        setDescState(Description);
        const Ingredient = recipe_ingredient.data.filter((ingredient) => {
            return oneplate.RECIPE_ID === ingredient.RECIPE_ID
        });
        setIngreState(Ingredient);

        setTimeout(() => {
            navigation.setOptions({
                title:oneplate.RECIPE_NM_KO,
                headerStyle: { backgroundColor: '#ede6df'},
                headerTintColor: "#6b5165",
            })
        }, 1000)  
        console.log('oneplate',oneplate) 
    }, []) 

    return ( 
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:oneplate.IMG_URL}}/>
            </View>
            <View style={styles.titleContainer}>
            <View style={styles.titleContainer_main}>
                <Text style={styles.title}>{oneplate.RECIPE_NM_KO}</Text>  
            </View>  
            <View style={styles.button1Container}>
            <TouchableOpacity style={styles.favorite} onPress={()=>popup_favorite()}><Image style={styles.favorite} source={oneplate.favorite_focus ? {uri: URL.favorite_on} : {uri: URL.favorite_off}}/></TouchableOpacity>
            </View>
            <View style={styles.button2Container}>
            <TouchableOpacity style={styles.bookmark} onPress={()=>popup_bookmark()}><Image style={styles.bookmark} source={oneplate.bookmark_focus ? {uri: URL.bookmark_on} : {uri: URL.bookmark_off}}/></TouchableOpacity>
            </View>    
            </View>
            <View style={styles.titleContainer}>
            <View style={styles.titleContainer_text}>       
                <Text style={styles.best_level_time}>
                #{oneplate.NATION_NM} #{oneplate.IRDNT_CODE}
                #{oneplate.TY_NM} #{oneplate.CALORIE} #{oneplate.LEVEL_NM} #{oneplate.COOKING_TIME} 

                </Text>
            </View>
            <View style={styles.button1Container}>
            <Text style={styles.favorite_count}>{oneplate.favorite_focus ?oneplate.favorite_count+1 : oneplate.favorite_count}</Text></View>
            <View style={styles.button2Container}>
            <Text style={styles.favorite_count}></Text>
            </View>  
              
            </View>

            <View style={styles.textContainer_main}>
                <Text style={styles.desc}>{oneplate.SUMRY}</Text>
                <Text style={styles.ingredient_title}>재료</Text> 
                <View style={styles.ingredientContainer}>
                {IngreState.map((value) => {
                    return (
                    <Text style={styles.ingredient}>{value.IRDNT_NM}{value.IRDNT_CPCTY}</Text>
                    )})}
                    </View>
            </View>

            {/* <View style={styles.ingredient_images_Container}>
            <View style={styles.ingredientContainer_detail}>
            <Image style={styles.image_ingredient} source={{uri:plate[0].ingredient00}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient01}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient02}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient03}}/></View>
            </View>
            <View style={styles.ingredient_images_Container}>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient04}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient05}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient06}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient07}}/></View>
            </View> */}

            <View style={styles.textContainer_main}>
                <Text style={styles.ingredient_title}>레시피</Text> 
                {DescState.map((value) => {
                    return (
                <Text style={styles.recipe}>{value.COOKING_NO}. {value.COOKING_DC}</Text>
                )})}
            </View>
            </ScrollView>

        </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ede6df"       
    },
    imageContainer:{
        //borderWidth:1,
        flex:1,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:320,
        height:320,
        marginTop:40,
        marginBottom:20,
        resizeMode: "cover",
        justifyContent:'center',
        alignItems:'center'
    },
    image_ingredient:{
        width:60,
        height:70,
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        resizeMode: "center",
        justifyContent:'center',
        alignItems:'center',

    },
    ingredientContainer:{
        flex:1,
        marginRight:20,
        marginLeft:20,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    ingredientContainer_detail:{
        flex:1,
        marginRight:3,
        marginLeft:3,
        justifyContent:'center',
        alignItems:'center'
    },
    image_description:{
        width:300,
        height:300,
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        resizeMode: "center",
        justifyContent:'center',
        alignItems:'center'
    },
    favorite:{
        //borderWidth:1,
        width:20,
        height:25,
        marginRight:5,
        resizeMode: "center",
    },
    favorite_count:{
        width:20,
        height:12,
        fontSize:9,
        fontWeight:'300',
        color:"#6b5165",
        textAlign:'center',
    },
    bookmark:{
        width:20,
        height:25,
        resizeMode: "center",

    },
    titleContainer:{
        //borderWidth:1,
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer_main:{
        //borderWidth:1,
        flex:13,
        padding:5,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer_text:{
        //borderWidth:1,
        flex:13,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        borderWidth:1,
        flex:1,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    button1Container: {
        //borderWidth:1,
        flex:1,
        //marginRight:20,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    button2Container: {
        //borderWidth:1,
        flex:1,
        marginRight:20,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer_main:{
        padding:5,
        marginTop:10,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    title: {
        fontSize:22,
        fontWeight:'700',
        color:"#6b5165",
        alignItems:'center'
    },
    best_level_time: {
        fontSize:12,
        fontWeight:'500',
        color:"#6b5165"
    },
    desc:{
        marginTop:10,
        fontSize:15,
        fontWeight:'500',
        color:"#ad948c"
    },
    ingredient_title:{
        marginTop:20,
        fontSize:17,
        fontWeight:'600',
        color:"#6b5165"
    },
    ingredientContainer: {
        //borderWidth:1,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'flex-start'
      },
      ingredient_images_Container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'flex-start'
      },
    ingredient:{
        //borderWidth:1,
        marginRight:2,
        marginLeft:2,
        marginTop:5,
        fontSize:13,
        fontWeight:'500',
        color:"#6b5165",
        alignItems: 'flex-start'
    },
    recipe_title:{
        borderWidth:1,
        marginTop:20,
        fontSize:17,
        fontWeight:'500',
        color:"#6b5165"
    },
    recipe:{
        //borderWidth:1,
        marginTop:5,
        fontSize:15,
        fontWeight:'500',
        color:"#6b5165"
    },
    container_menu: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
      },
    menu_title: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
        color: "#ffffff",
      },
})

export default DetailPage;