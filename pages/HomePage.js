import React, {useState, useEffect, createContext, useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import data from '../data.json'
import Loading from '../components/Loading';

const HomePage =({navigation,route}) => {

  const initialCateState = data.ingredient.map(i => ({...i, focus: false}))
  const [state, setState] = useState([])
  const [cateState, setCateState] = useState([])
  const [imageState, setImageState] = useState([])
  const [props, setProps] = useState([])
  const [ready, setReady] = useState(true)

  const [category, setCategory] = useState([
    {name: '전체보기', focus: true},
    {name: '육류가공품', focus: false},
    {name: '생선해산물', focus: false},
    {name: '양념소스', focus: false},
    {name: '과일채소', focus: false},
    {name: '곡물나물류', focus: false},
    {name: '면빵떡', focus: false},
    {name: '가공유제품', focus: false},
    {name: '콩견과류', focus: false},
  ])
  const plate_empty = {
    "name" : "default",
    "image": "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Fhome_plate_vide.png?alt=media&token=fdb9efd8-aaa0-4ce9-8216-e12c26dd445f",
    "image_logo": "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Flogo%2Flogo_wh.png?alt=media&token=46a0a3ac-ba98-47e5-b882-9863df75126b",
    "empty": "https://firebasestorage.googleapis.com/v0/b/plate-gni.appspot.com/o/images%2Ficon%2Ftomato.png?alt=media&token=b984afba-7e71-4740-96b7-c5fb6cc0279c"
  }
  navigation.setOptions({
    title:' '})
    
  useEffect(() => {
    setTimeout(() => {
      setState(data.ingredient)
      setCateState(initialCateState)
      setCategory(category)
      setReady(false)
    }, 1000)
  }, [])

  const setCate = (cate) => {
    if (cate == "전체보기") {
      setCateState(state)
    } else {
      setCateState(state.filter((datum) => {
        return datum.category === cate
      }))
    }
  }
  const IngredientTouch = () => {
    const selectedIngredients = cateState.filter(ingredient=>ingredient.focus);
    navigation.navigate('ListPage', {oneplate: selectedIngredients})
  }

  return ready ? <Loading/> : (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.container_main}>
        <View style={styles.plateContainer}>
          <ImageBackground source={{uri: plate_empty.image}} style={{width:320,height:320,marginTop: 40, marginBottom: 20,}}>

            <View style={styles.imageContainer}>
              {cateState.map(
              ingredient => {
                if (ingredient.focus) {
                  return (
                  <View style={styles.image_outbox}>
                  <Image style={styles.image_inbox} source={{uri: ingredient.image}}/>
                  </View>) }
              })}
            </View>
          </ImageBackground>

          <TouchableOpacity style={styles.image_logo} onPress={IngredientTouch}>
            <Image style={styles.image_logo} source={{uri: plate_empty.image_logo}}/>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
          {category.map(content => {
            return(
              <TouchableOpacity style={styles.middleButton} onPress={() => {
                setCategory(category.map(i => i.name === content.name ? {...i, focus: true} : {...i, focus:false}
                ));
                setCate(content.name);
              }}>
                <Text style={content.focus ? styles.middleButtonText_focus :styles.middleButtonText_notfocus }>{content.name}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

        <View style={styles.textContainer}>
          {cateState.map((content,i) => {
            return (
              <TouchableOpacity style={styles.textContainer_button} onPress={() => {
                setCateState(cateState.map(i => i.recipe === content.recipe ? {...i, focus: !i.focus} : {...i}));
              }}>
                <Text style={content.focus ? styles.ingredient_focus : styles.ingredient_notfocus}> {content.recipe} </Text>

              </TouchableOpacity>
            )
          })
          }
        </View>
      </ScrollView>
      <View style={styles.container_menu}>
        <Text style={styles.menu_title}>Home 1Plate + Myplate Bookmark</Text>
      </View>
    </SafeAreaView>
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
  plateContainer: {
    flex: 1,
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
  imageContainer: {
    flex:1,
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
    width: 100,
    height: 100,
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  image_inbox: {
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
    resizeMode: "center",
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

export default HomePage;
