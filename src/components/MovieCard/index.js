import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MovieCard({ image }) {
  return (
    <TouchableOpacity>
      <Image source={image} style={styles.img} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    marginLeft: 16,

  },
})
