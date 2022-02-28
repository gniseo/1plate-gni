import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
//import Video from "react-native-video";
import recipe_main from '../recipe_main.json'
import recipe_ingredient from '../recipe_ingredient.json'
import recipe_description from '../recipe_description.json'
import Loading from '../components/Loading';

export default function DetailPage({navigation,route}) {

    //const [recipeMainState, setRecipeMainState] = useState([])
    //const [recipeIngredientState, setRecipeIngredientState] = useState([])
    //const [ready, setReady] = useState(true)


    const plate = [{
        "category":"생선해산물",
        "title":"새우 아보카도 카레덮밥",
        "IMG_URL":"https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fplate_avocadoshrimp.png?alt=media&token=d496a777-20b0-4bf3-bc65-432d5252223f",
        "favorite":"https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ffavoriteon.png?alt=media&token=ecc3235f-9e9d-4980-8463-eb9df2f01ec9",
        "bookmark":"https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fbookmarkon.png?alt=media&token=7502b32c-3641-4ecd-970b-2b431e79c344",
        "desc":"20분이면 근사한 덮밥 한그릇을 뚝딱~ 성수맛집 줄서서 먹던 그 아보카도덮밥 간단히 만드는 비법",
        "ingredient" : "새우2마리, 아보카도¼, 계란1개, 밥150g, 두부¼, 김가루, 통참깨, 카레100g",
        "ingredient00" : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fshrimp_large.png?alt=media&token=433fd709-c0cd-4573-bcba-9cf5f799d467",
        "ingredient01" : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Favocado.png?alt=media&token=34ffec4c-2042-4ecb-a9a2-001ded27343f",
        "ingredient02" : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fegg_fry.png?alt=media&token=334d7a20-9dc9-49fc-b659-8367ff814f67",
        "ingredient03" : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Frice.png?alt=media&token=3bc36b9e-81f8-4f07-aa84-c1bf51001790",
        "ingredient04" : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ftofu.png?alt=media&token=2b94bf1b-0366-4fd8-86f2-7e9f30481d69",
        "ingredient05" : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Flaver.png?alt=media&token=b61f34c0-6189-4358-8b8e-3b789453fee6",
        "ingredient06" : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fpepper.png?alt=media&token=87c3e82f-9669-4b59-9ef6-1ab7f2b3490c",
        "ingredient07" : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fcurry.png?alt=media&token=d1b951c7-135c-461a-8f89-89fed1c186a7",
        "recipe00" : "1. 새우를 씻어 손질한다. 냉동한것은 잘 씻어 물기를 뺀다.",
        "recipe01" : "2. 아보카도는 내부의 씨를 제거한 후에 ¼을 썰어 길게 모양을 내어 썬다.",
        "favorite_count":"53"
    },
    {
        "RECIPE_ID": 1,
        "RECIPE_NM_KO": "나물비빔밥",
        "SUMRY": "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
        "NATION_CODE": 3020001,
        "NATION_NM": "한식",
        "TY_CODE": 3010001,
        "TY_NM": "밥",
        "COOKING_TIME": "60분",
        "CALORIE": "580Kcal",
        "QNT": "4인분",
        "LEVEL_NM": "보통",
        "IRDNT_CODE": "곡류",
        "PC_NM": "5,000원",
        "IMG_URL": "http://file.okdab.com/UserFiles/searching/recipe/000200.jpg",
        "DET_URL": "http://www.okdab.com/consumer/recipe/recipeView.do?recipeSn=1"
      },
      {
        "RECIPE_ID": 1,
        "IRDNT_SN": 1,
        "IRDNT_NM": "쌀",
        "IRDNT_CPCTY": "4컵",
        "IRDNT_TY_CODE": 3060001,
        "IRDNT_TY_NM": "주재료"
      },
      {
        "RECIPE_ID": 1,
        "COOKING_NO": 1,
        "COOKING_DC": "양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어 고슬고슬하게 밥을 짓는다.",
        "STRE_STEP_IMAGE_URL": "http://file.okdab.com/UserFiles/searching/recipe/000200_p01.jpg",
        "STEP_TIP": ""
      }]

    const popup_favorite = () => {
        Alert.alert("좋아요!")
    }
    const popup_bookmark = () => {
        Alert.alert("북마크!")
    }
    /* const VideoPlayer = () => {
        return (
          <View style={styles.container}>
            <Video
              source={{ uri: "video url" }}
              style={styles.fullScreen}
              paused={false} // 재생/중지 여부
              resizeMode={"cover"} // 프레임이 비디오 크기와 일치하지 않을 때 비디오 크기를 조정하는 방법을 결정합니다. cover : 비디오의 크기를 유지하면서 최대한 맞게
              onLoad={e => console.log(e)} // 미디어가 로드되고 재생할 준비가 되면 호출되는 콜백 함수입니다.
              repeat={true} // video가 끝나면 다시 재생할 지 여부
              onAnimatedValueUpdate={() => {}}
            />
          </View>
        );
      };
      */

    return ( 
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:plate[0].IMG_URL}}/>
            </View>
            <View style={styles.titleContainer}>
            <View style={styles.titleContainer_main}>
                <Text style={styles.title}>{plate[1].RECIPE_NM_KO}</Text>  
            </View>  
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.favorite} onPress={()=>popup_favorite()}><Image style={styles.favorite} source={{uri:plate[0].favorite}}/></TouchableOpacity>
            <TouchableOpacity style={styles.bookmark} onPress={()=>popup_bookmark()}><Image style={styles.bookmark} source={{uri:plate[0].bookmark}}/></TouchableOpacity>
            </View>    
            </View>
            <View style={styles.titleContainer}>
            <View style={styles.titleContainer_text}>       
                <Text style={styles.best_level_time}>열량-{plate[1].CALORIE}  난이도-{plate[1].LEVEL_NM}  조리-{plate[1].COOKING_TIME}</Text>
            </View>
            <View style={styles.buttonContainer}>
            </View>    
  
            </View>
            <View style={styles.textContainer_main}>
                <Text style={styles.desc}>{plate[1].SUMRY}</Text>
                <Text style={styles.ingredient_title}>재료</Text> 
                <Text style={styles.ingredient}>{plate[2].IRDNT_NM}{plate[2].IRDNT_CPCTY}</Text>
            </View>
            <View style={styles.ingredientContainer}>
            <View style={styles.ingredientContainer_detail}>
            <Image style={styles.image_ingredient} source={{uri:plate[0].ingredient00}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient01}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient02}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient03}}/></View>
            </View>
            <View style={styles.ingredientContainer}>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient04}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient05}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient06}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate[0].ingredient07}}/></View>
            </View>
            <View style={styles.textContainer_main}>
                <Text style={styles.ingredient_title}>레시피</Text> 
                <Text style={styles.ingredient}> 1 재료손질 | 2 조리 | 3 플레이팅 </Text>
            </View>
            <View style={styles.imageContainer}>
            <Text style={styles.ingredient_title}>동영상 링크</Text> 
            </View>
            <View style={styles.textContainer_main}>
                <Text style={styles.recipe}> {plate[3].COOKING_NO}. {plate[3].COOKING_DC} </Text>
                <Image style={styles.image_description} source={{uri:plate[3].STRE_STEP_IMAGE_URL}}/>
            </View>
            </ScrollView>

            <View style={styles.container_menu}>
            <Text style={styles.menu_title}>Home 1Plate + Myplate Bookmark</Text>
            </View>
        </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ede6df"       
    },
    imageContainer:{
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
        resizeMode: "center",
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
        alignItems:'center'
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
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer_main:{
        flex:7,
        padding:5,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer_text:{
        flex:7,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        flex:1,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer: {
        flex:1,
        marginRight:20,
        flexDirection:"row",
        justifyContent:'flex-end'
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
        color:"#6b5165"
    },
    ingredient_title:{
        marginTop:20,
        fontSize:17,
        fontWeight:'500',
        color:"#ad948c"
    },
    ingredient:{
        marginTop:10,
        fontSize:13,
        fontWeight:'500',
        color:"#ad948c"
    },
    recipe_title:{
        marginTop:20,
        fontSize:17,
        fontWeight:'500',
        color:"#ad948c"
    },
    recipe:{
        marginTop:3,
        fontSize:15,
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
      },
})