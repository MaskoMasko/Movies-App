import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useQuery } from "react-query";
import { Instance } from "mobx-state-tree";
import { MovieModel, store } from "../store/MoviesStore";
import { styles } from "../styles/styles";
import { getImagePath } from "../api/api";

export const ComingSoonScreen = () => {
  const { isLoading, isError, isIdle, data } = useQuery(
    ["FilteredMovies"],
    () => {
      return store.fetchAllData("fetchUpcomingMovies", "");
    },
    { keepPreviousData: true }
  );
  if (isLoading) {
    return (
      <View style={styles.errorAndLoadingViews}>
        <Text style={styles.errorAndLoading}>Loading...</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View style={styles.errorAndLoadingViews}>
        <Text style={styles.errorAndLoading}>Something went wrong :(</Text>
      </View>
    );
  }
  return (
    <View>
      <Text
        style={[
          styles.movieShortDescription,
          { alignSelf: "flex-start", margin: 10 },
        ]}
      >
        Upcoming Movies
      </Text>
      <FlatList
        data={data}
        keyExtractor={(data, id) => id.toString()}
        renderItem={({ item: page, index }) => {
          const filterano = page.filter((movie: any) => {
            const thisYear = new Date().getFullYear();
            const thisMonth = new Date().getMonth() + 1;
            const thisDay = new Date().getDate();
            const movieYear = movie.release_date.split("-")[0];
            const movieMonth = movie.release_date.split("-")[1];
            const movieDay = movie.release_date.split("-")[2];
            if (
              movieYear > thisYear ||
              (movieYear == thisYear && movieMonth > thisMonth) ||
              (movieYear == thisYear &&
                movieMonth == thisMonth &&
                movieDay > thisDay)
            ) {
              return movie;
            } else {
              return;
            }
          });
          return (
            <FlatList
              data={filterano}
              keyExtractor={(movie, id) => id.toString()}
              renderItem={({ item: movie, index }) => {
                return (
                  <TouchableOpacity
                    key={movie.key}
                    activeOpacity={0.5}
                    style={styles.filteredItemsContainer}
                  >
                    <Image
                      source={{
                        uri: getImagePath(movie.poster_path),
                      }}
                      style={styles.filteredItemsImage}
                    ></Image>
                    <Text style={styles.filteredItemsText}>{movie.title}</Text>
                  </TouchableOpacity>
                );
              }}
            ></FlatList>
          );
        }}
      ></FlatList>
    </View>
  );
};
