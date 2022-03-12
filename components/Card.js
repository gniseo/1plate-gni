import React, { useEffect } from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity,Alert} from 'react-native'

function Card({content,navigation, stateMain}){
    const URL = {
        favorite_on : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ffavoriteon.png?alt=media&token=ecc3235f-9e9d-4980-8463-eb9df2f01ec9",
        favorite_off : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ffavoriteoff.png?alt=media&token=83c52035-e01e-47a0-aedd-cd8810a67779",
        bookmark_on : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fbookmarkon.png?alt=media&token=7502b32c-3641-4ecd-970b-2b431e79c344",
        bookmark_off : "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fbookmarkoff..png?alt=media&token=d57b03fd-1fd7-43f2-8692-2eaf89d0806d"
    }
    const popup_favorite = () => {
        if (content.favorite_focus === false) {
            content.favorite_focus===true 
            Alert.alert("좋아요!")
        } else (content.favorite_focus==false)
    }
    const popup_bookmark = () => {
        Alert.alert("북마크!")
        return content.bookmark_focus==!content.bookmark_focus
    }
    const Detail = (content) => {
        //const selectedRecipe = stateMain.map(ingredient=>ingredient.focus);
        navigation.navigate('DetailPage', {oneplate:content}, {stateMain:stateMain})
    }

    return (

      <TouchableOpacity style={styles.container_main} onPress={() => Detail(content)}>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: content.IMG_URL}}/>
      <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
      <View style={styles.maintitleContainer}>
      <View style={styles.maintitleContainer}>
      <Text style={styles.title} numberOfLines={1}>{content.RECIPE_NM_KO}</Text>
      </View>
      </View>
      <View style={styles.buttontitleContainer}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.favorite} onPress={() => popup_favorite()}>
      <Image style={styles.favorite} source={content.favorite_focus ? {uri: URL.favorite_on} : {uri: URL.favorite_off}}/>
      </TouchableOpacity>
      </View>
      <View style={styles.buttoncountContainer}>
      <Text style={styles.favorite_count}>{content.favorite_count}</Text>
      </View>
      </View>
      <View style={styles.buttontitleContainer}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.bookmark} onPress={() => popup_bookmark()}>
      <Image style={styles.bookmark} source={content.bookmark_focus ? {uri: URL.bookmark_on} : {uri: URL.bookmark_off}}/></TouchableOpacity>
      </View>
      <View style={styles.buttoncountContainer}>
      <Text style={styles.favorite_count}> </Text>
      </View>
      </View>
      </View>
      <View style={styles.bestContainer}>
      <Text style={styles.best_level_time} numberOfLines={1}>#{content.TY_NM} #{content.CALORIE} #{content.LEVEL_NM} #{content.COOKING_TIME}</Text>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.desc} numberOfLines={3}>{content.SUMRY}  </Text>
      </View>
      </View>
      </View>
      </TouchableOpacity>
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

export default Card;