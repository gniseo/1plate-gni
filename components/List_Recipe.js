import React, { useEffect } from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity,Platform} from 'react-native'

export default function Recipe({content,navigation}){
    return (

        <TouchableOpacity style={styles.textContainer_button} onPress={() => {
                  setCateState(cateState.map(i => i.recipe === content.recipe ? {...i, focus: !i.focus} : {...i}));
                 }}>
            <Text style={content.focus ? styles.ingredient_focus : styles.ingredient_notfocus}> {content.recipe} </Text>
                
        </TouchableOpacity>

    )
            
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ede6df"
    },
    container_main: {
      flex: 1,
    },
    imageContainer: {
      flex: 1,
      borderWidth:1,
      marginRight: 20,
      marginLeft: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: 320,
      height: 320,
      marginTop: 40,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image_container: {
      flex:1,
      borderWidth:1,
      flexDirection: "row",
      flexWrap: "wrap",
      width: 200,
      height: 200,
      marginTop: 60,
      marginBottom: 60,
      justifyContent: 'center',
      alignSelf: 'center'
    },
    image_outbox: {
      flex:1,
      borderWidth:1,
      width: 200,
      height: 200,
      marginTop: 0,
      marginBottom: 0,
      justifyContent: 'flex-start',
      alignSelf: 'flex-start'
    },
    image_inbox: {
      flex:1,
      borderWidth:1,
      width: 100,
      height: 100,
      marginTop: 0,
      marginBottom: 0,
      resizeMode: "center",
      justifyContent: 'flex-start',
      alignSelf: 'flex-start'
    },
    image_logo: {
      width: 70,
      height: 35,
      marginTop: 10,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image_ingredient: {
      width: 60,
      height: 60,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    middleContainer: {
      marginTop: 1,
      marginBottom: 10,
      marginLeft: 20,
      //height:60
    },
    middleButton: {
      height: 25,
      marginRight: 20,
      backgroundColor: "#ede6df",
    },
    middleButtonText: {
      color: "#fff",
      fontWeight: "700",
      //텍스트의 현재 위치에서의 정렬
      textAlign: "center"
    },
    middleButtonText_focus: {
      fontSize: 20,
      fontWeight: '700',
      color: "#6b5165",
      textAlign: "center"
    },
    middleButtonText_notfocus: {
      fontSize: 20,
      fontWeight: '500',
      color: "#ad948c",
      textAlign: "center"
    },
    textContainer: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      marginRight: 20,
      marginLeft: 20,
      alignItems: 'flex-start'
    },
    textContainer_button: {
      alignItems: 'flex-start',
    },
  
    ingredient_focus: {
      marginTop: 5,
      marginRight: 5,
      fontSize: 17,
      fontWeight: '700',
      color: "#6b5165"
    },
    ingredient_notfocus: {
      marginTop: 5,
      marginRight: 5,
      fontSize: 17,
      fontWeight: '500',
      color: "#ad948c",
      textAlign: "left"
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