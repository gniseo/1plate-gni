import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';

import recipe_main from '../recipe_main.json'
import recipe_ingredient from '../recipe_ingredient.json'
import Card from '../components/Card.js';

const BookmarkPage = ({navigation, route}) => {

    const oneplate = route.params
    const selectedOneplate = oneplate.oneplate.map(ingredient => ingredient.recipe);
    const initialIngredientState = recipe_main.data.map(i => ({...i, 
        "favorite_focus": false,
        "favorite_count": 0,
        "bookmark_focus": false
    }))
    const URL = {
        favorite_on : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ffavoriteon.png?alt=media&token=ecc3235f-9e9d-4980-8463-eb9df2f01ec9",
        favorite_off : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ffavoriteoff.png?alt=media&token=83c52035-e01e-47a0-aedd-cd8810a67779",
        bookmark_on : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fbookmarkon.png?alt=media&token=7502b32c-3641-4ecd-970b-2b431e79c344",
        bookmark_off : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fbookmarkoff..png?alt=media&token=d57b03fd-1fd7-43f2-8692-2eaf89d0806d"
    }
    const popup_favorite = () => {
        Alert.alert("좋아요!")
    }
    const popup_bookmark = () => {
        Alert.alert("북마크!")
    }
    const Detail = (content) => {
        //const selectedRecipe = stateMain.map(ingredient=>ingredient.focus);
        navigation.navigate('DetailPage', {oneplate:content})
    }

    useEffect(() => {
        console.log(oneplate)
        setTimeout(() => {
            navigation.setOptions({
                title: '한그릇북마크',
                headerStyle: {backgroundColor: '#ece0d0'},
                headerTintColor: "#6b5165",
            })
            setCategory(category)
        }, 1000)
    }, [])

    const [category, setCategory] = useState([
        {name: '오늘의한그릇', focus: false},
        {name: '한그릇북마크', focus: true},
        {name: '계절식한그릇', focus: false},
        {name: '한그릇스토어', focus: false},
        {name: '식재료보관팁', focus: false}
    ])

    const [stateMain, setStateMain] = useState([
        {
            "RECIPE_ID": 9,
            "RECIPE_NM_KO": "오므라이스",
            "SUMRY": "각종 채소를 계란 속에 꼭꼭 숨겨 편식하는 아이들도 맛있게 먹어요~",
            "NATION_CODE": 3020002,
            "NATION_NM": "서양",
            "TY_CODE": 3010001,
            "TY_NM": "밥",
            "COOKING_TIME": "30분",
            "CALORIE": "630Kcal",
            "QNT": "4인분",
            "LEVEL_NM": "초보환영",
            "IRDNT_CODE": "곡류",
            "PC_NM": "",
            "IMG_URL": "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fommerice.png?alt=media&token=acc6b164-4d04-4c74-be2e-b93dc6719880",
            "ORG_URL": "http://file.okdab.com/UserFiles/searching/recipe/001800.jpg",
            "DET_URL": "http://www.okdab.com/consumer/recipe/recipeView.do?recipeSn=9"
        }
    ])


    const setCate = (cate) => {
        if (cate == "오늘의한그릇") {
            navigation.navigate('ListPage', {oneplate: oneplate})
        } else if (cate == "한그릇북마크") {
            navigation.navigate('BookmarkPage', {oneplate: oneplate})
        } else {
            Alert.alert("준비중입니다.")
        }
    }
    useEffect(() => {
        const recipeIDs = recipe_ingredient.data.filter((ingredient) => {
            return selectedOneplate.includes(ingredient.IRDNT_NM)
        }).map((ingredient) => ingredient.RECIPE_ID);
        console.log('recipeIDs', recipeIDs);
        setStateMain(
            initialIngredientState.filter((recipe) => recipeIDs.includes(recipe.RECIPE_ID))
        )
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container_top}>
                <ScrollView style={styles.topContainer} horizontal indicatorStyle={"white"}>
                    {category.map(content => {
                        return (
                        <TouchableOpacity style={styles.topButton} onPress={() => {
                        setCategory(category.map(i => i.name === content.name ? {...i, focus: true} : {...i,focus: false}));
                        setCate(content.name);
                        }}>
                        <Text style={content.focus ? styles.topButtonText_focus : styles.topButtonText_notfocus}>{content.name}</Text>
                        </TouchableOpacity>)})}
                </ScrollView>
            </View>
            <ScrollView>
                {stateMain.map((content,i) => {
                    return (
                        <Card content={content} key={i} navigation={navigation}/>)})}
            </ScrollView>
            {/*<View style={styles.container_menu}>
                <Text style={styles.menu_title}>Home 1Plate + Myplate Bookmark</Text>
                    </View>*/}
        </SafeAreaView>

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ece0d0"
      },
    container_top: {
        height : 45
      },
    topContainer: {
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        //height:60
      },
    topButton: {
        height: 50,
        width: 50,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#ece0d0",
        justifyContent: "space-around",
        alignItems: "center"
      },
    topButtonText_focus: {
        fontSize: 17,
        fontWeight: '700',
        color: "#6b5165",
        textAlign: "center",
      },
    topButtonText_notfocus: {
        fontSize: 17,
        fontWeight: '500',
        color: "#ad948c",
        textAlign: "center"
      },
    container_main: {
        flex: 1
      },
    imageContainer:{
        flex:1,
        borderBottomWidth:0.5,
        borderBottomColor: '#fff',
        width:350,
        height:160,
        marginTop:5,
        marginBottom:5,
        marginRight:20,
        marginLeft:20,
        flexDirection: "row",
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    image:{
        width:130,
        height:130,
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        resizeMode: "cover",
        justifyContent:'center',
        alignItems:'center'
    },
    cardContainer:{
        flex:1,
        width:190,
        flexDirection:"column",
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    titleContainer:{
        flex:1.5,
        marginTop:5,
        flexWrap:'wrap',
        flexDirection:"row",
    },
    maintitleContainer:{
        flex:6,
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'flex-start'
    },
    buttontitleContainer: {
        flex:1,
        resizeMode: "center",
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer: {
        flex:1,
        flexWrap: 'wrap',
        resizeMode: "center",
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center'
    },
    buttoncountContainer: {
        height:8,
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center'
    },
    bestContainer:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        flex:2,
        marginTop:10,
        marginBottom:10,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    favorite:{
        width:20,
        height:25,
        resizeMode: "center",
    },
    favorite_count:{
        width:20,
        marginBottom:8,
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
    title: {
        fontSize:17,
        fontWeight:'500',
        color:"#6b5165",
        alignItems:'flex-start',
        textAlign:'left'
    },
    best_level_time: {
        fontSize:11,
        fontWeight:'500',
        color:"#6b5165",
        flexWrap:'wrap',
        flexDirection:"row",
    },
    desc:{
        fontSize:13,
        fontWeight:'500',
        color:"#ad948c"
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
      }
})

export default BookmarkPage;