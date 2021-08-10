import { NavigationContainer } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { store } from "../store/MoviesStore";
import { useQuery, useMutation } from "react-query";

export const FilterMovies = observer(({ navigation }: { navigation: any }) => {
  const [value, setValue] = React.useState("");

  const { isLoading, isError, isIdle, data } = useQuery(
    ["FilteredMovies", value],
    async () => {
      if (value === "") return;
      const sacekaj = await store.fetchFilteredMovies(value);
      //it works sa samo rijci umisto value
      return sacekaj;
    }
  );
  //primjer fetchanja samo po idu tj. dobivanje podatka po idu
  // function Todos({ todoId }) {
  //   const result = useQuery(['todos', todoId], () => fetchTodoById(todoId))
  // }
  //idk dali to rabin koristiti da postavin selectedMovie, ali oni us to nap za page routing
  if (isError) {
    return (
      <View
        style={{ padding: 32, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 30, margin: 50, fontWeight: "bold" }}>
          Something went wrong :(
        </Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View
        style={{ padding: 32, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 30, margin: 50, fontWeight: "bold" }}>
          Loading...
        </Text>
      </View>
    );
  }

  if (isIdle) {
    return null;
  }
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={(e) => setValue(e)}
        placeholder="go yes"
        style={{ marginTop: 100 }}
      ></TextInput>
      <View>
        {isError ? (
          <View
            style={{
              padding: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 30, margin: 50, fontWeight: "bold" }}>
              Something went wrong :(
            </Text>
          </View>
        ) : isLoading ? (
          <View
            style={{
              padding: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 30, margin: 50, fontWeight: "bold" }}>
              Loading...
            </Text>
          </View>
        ) : isIdle ? null : (
          <ScrollView>
            {store.filteredMovies.map((e, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    store.setSelectedMovie(e.key);
                    navigation.navigate("Details");
                  }}
                >
                  <Image
                    source={{ uri: e.poster }}
                    style={{ width: 300, height: 450 }}
                  ></Image>
                  <Text>{e.title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
});
