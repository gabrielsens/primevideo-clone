import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, ScrollView } from "react-native";

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';
import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';
import MovieCard from "../../components/MovieCard";

import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MOVIESWATCH } from '../../utils/moviesWatch';
import { MOVIESCRIME } from '../../utils/moviesCrimes';


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Image source={PrimeVideoLogo} style={styles.primeLogoImg}/>
        <Image source={AmazonLogo} style={styles.amazonLogoImg} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity style={styles.movieImageThumbnail}>
          <Image source={MovieTheWhell} style={styles.movieImage}/>
        </TouchableOpacity>

        <Text style={styles.movieHeader}>Continue Watching</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={( { item: movie} ) => (
            <MovieCard image={movie.moviesURL} />
          )}
          contentContainerStyle={styles.contentList}
        />

        <Text style={styles.movieHeader}>Watch</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={( { item: movie} ) => (
            <MovieCard image={movie.moviesURL} />
          )}
          contentContainerStyle={styles.contentList}
        />

        <Text style={styles.movieHeader}>Crime Movies</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={( { item: movie} ) => (
            <MovieCard image={movie.moviesURL} />
          )}
          contentContainerStyle={styles.contentList}
        />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F3E',
    alignItems: 'flex-start'
  },
  header: {
    width: '100%',
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primeLogoImg: {

  },
  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30
  },
  category: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 28,
    marginBottom: 16,
  },
  categoryText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#fff'
  },
  movieImageThumbnail: {
    width: '100%',
    alignItems: 'center',
  },
  movieImage: {
    borderRadius: 16,
  },
  contentList: {
    paddingHorizontal: 8,
  },
  movieHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    padding: 16
  }
})
