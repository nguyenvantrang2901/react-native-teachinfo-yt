import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from 'react-native'
import React, {useState} from 'react'

const Movie = ({navigation}) => {
    const [searchMovie, setSearchMovie] = useState('')
    const [movieList, setMovieList] = useState()
    const handleInputChange=(inputText)=>{
        setSearchMovie(inputText)
    }
    const handleBtnSearch = async() => {
       let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=27fb9f0d&s=${searchMovie}`)
       let movieData = await res.json()
       console.log(movieData.Search)
       setMovieList(movieData.Search)
    }
  return (
    <View style={styles.container}>
      <TextInput 
      onChangeText={handleInputChange}
        style={styles.inputSearch}
        placeholder='Search Movie 1 ...'
      />
      <View style={styles.btnSearch}>
        <Button
            title="Go Home page"
            onPress={handleBtnSearch}
        />
      </View>

      <View>
        {movieList && <Text> Result {movieList?.length} : Movies found</Text>}
        <FlatList
            data={movieList}    
            renderItem={({item, index})=>{
                return(
                    <View key={index}>
                        <Text style={{borderBottomWidth:1}}>
                            {index+1} : {item?.Title}
                            <Image style={{height:40, width: 40, paddingHorizontal:30}} src={item?.Poster}/>
                        </Text>
                    </View>
                )
            }}
        />
      </View>
    </View>
  )
}

export default Movie

const styles = StyleSheet.create({
    container: {
        alignItems:'center', 
        justifyContent: 'center'
    },
    btnSearch: {
        paddingTop: 10,
        borderRadius: 15
    },
    inputSearch: {
        width: '70%',
        height: "100",
        borderWidth:1,
        padding: 10,
        borderColor: "#ccccc",
        borderRadius: 10,
        backgroundColor:"#fff",
        marginTop: 120
    }
})