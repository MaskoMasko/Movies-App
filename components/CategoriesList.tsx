import React from "react";
import { Text, View } from "react-native";
import { store } from "../store/MoviesStore";
import { styles } from "../styles/styles";
import { NavigationProp } from "@react-navigation/core";

export const CategoriesList = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginLeft: 10 }}>
      {store.genreList.map((genre, index: number) => {
        return (
          <Text
            style={styles.movieGenres}
            key={index}
            onPress={() => {
              store.setPagination("category", "reset");
              store.setGenre(genre);
              navigation.navigate("Genres");
            }}
          >
            {genre.name}
          </Text>
        );
      })}
    </View>
  );
};
