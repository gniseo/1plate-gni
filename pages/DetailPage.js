import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
//import Video from "react-native-video";

export default function DetailPage({navigation,route}) {


    const plate = {
        "category":"생선해산물",
        "title":"새우 아보카도 카레덮밥",
        "image":"https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fplate_avocadoshrimp.png?alt=media&token=d496a777-20b0-4bf3-bc65-432d5252223f",
        "favorite":"https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ffavoriteon.png?alt=media&token=ecc3235f-9e9d-4980-8463-eb9df2f01ec9",
        "bookmark":"https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fbookmarkon.png?alt=media&token=7502b32c-3641-4ecd-970b-2b431e79c344",
        "best" : "BEST2021",
        "level" : "난이도3.0",
        "time" : "조리20분이내",
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
        "recipe02" : "3. 두부는 3cm의 깍뚝썰기로 썰어 물기를 빼고 후라이팬에 구워준비한다.",
        "recipe03" : "4. 계란1개를 후라이팬에 후라이를 해준다.",
        "recipe04" : "5. 카레는 100g을 물 100ml에 잘 갠 후 냄비에 넣고 끓여준다.",
        "recipe05" : "6. 따뜻한 밥을 한공기 준비하여 카레소스를 밥 주변에 뿌린다.",
        "recipe06" : "7. 그 위에 준비해둔 새우, 아보카도, 두부를 순서대로 얹고계란을  올려준다.",
        "recipe07" : "8. 맨 마지막에 김가루와 통참깨를 뿌려 보기 좋게 준비하면 완성.",
        "favorite_count":"53"
    }

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
            <Image style={styles.image} source={{uri:plate.image}}/>
            </View>
            <View style={styles.titleContainer}>
            <View style={styles.titleContainer_main}>
                <Text style={styles.title}>{plate.title}</Text>  
            </View>  
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.favorite} onPress={()=>popup_favorite()}><Image style={styles.favorite} source={{uri:plate.favorite}}/></TouchableOpacity>
            <TouchableOpacity style={styles.bookmark} onPress={()=>popup_bookmark()}><Image style={styles.bookmark} source={{uri:plate.bookmark}}/></TouchableOpacity>
            </View>    
            </View>
            <View style={styles.titleContainer}>
            <View style={styles.titleContainer_text}>       
                <Text style={styles.best_level_time}>{plate.best}  {plate.level}  {plate.time}</Text>
            </View>
            <View style={styles.buttonContainer}>
            </View>    
  
            </View>
            <View style={styles.textContainer_main}>
                <Text style={styles.desc}>{plate.desc}</Text>
                <Text style={styles.ingredient_title}>재료</Text> 
                <Text style={styles.ingredient}>{plate.ingredient}</Text>
            </View>
            <View style={styles.ingredientContainer}>
            <View style={styles.ingredientContainer_detail}>
            <Image style={styles.image_ingredient} source={{uri:plate.ingredient00}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate.ingredient01}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate.ingredient02}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate.ingredient03}}/></View>
            </View>
            <View style={styles.ingredientContainer}>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate.ingredient04}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate.ingredient05}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate.ingredient06}}/></View>
            <View style={styles.ingredientContainer_detail}><Image style={styles.image_ingredient} source={{uri:plate.ingredient07}}/></View>
            </View>
            <View style={styles.textContainer_main}>
                <Text style={styles.ingredient_title}>레시피</Text> 
                <Text style={styles.ingredient}> 1 재료손질 | 2 조리 | 3 플레이팅 </Text>
            </View>
            <View style={styles.imageContainer}>
            <Text style={styles.ingredient_title}>동영상 링크</Text> 
            </View>
            <View style={styles.textContainer_main}>
                <Text style={styles.recipe}> {plate.recipe00} </Text>
                <Text style={styles.recipe}> {plate.recipe01} </Text>
                <Text style={styles.recipe}> {plate.recipe02} </Text>
                <Text style={styles.recipe}> {plate.recipe03} </Text>
                <Text style={styles.recipe}> {plate.recipe04} </Text>
                <Text style={styles.recipe}> {plate.recipe05} </Text>
                <Text style={styles.recipe}> {plate.recipe06} </Text>
                <Text style={styles.recipe}> {plate.recipe07} </Text>
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