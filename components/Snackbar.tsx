import React from "react";
import { Text, View } from "react-native";
import { Snackbar as Snack } from "react-native-paper";
import { store } from "../store/MoviesStore";
import { styles } from "../styles/styles";
import { Forsi } from "./Forsi";

export const Snackbar = (props: any) => {
  const { visible, text } = props;
  return (
    <Snack
      duration={3000}
      visible={visible}
      onDismiss={() => props.dismiss()}
      style={{
        backgroundColor: "orange",
        width: "95%",
        alignSelf: "center",
        height: "auto",
      }}
      action={{
        label: `${[text == "removed" ? "Undo" : null]}`,
        labelStyle: [
          text == "removed"
            ? {
                color: "white",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "black",
              }
            : null,
        ],
        onPress: () => {
          store.selectedMovie?.addToFavorites();
        },
      }}
    >
      <View>
        {text == "removed" ? (
          <Text style={[styles.removeButtonText, { width: 275 }]}>
            Removed {store.selectedMovie?.title} from favorites...
          </Text>
        ) : text == "add" ? (
          <Forsi></Forsi>
        ) : null}
      </View>
    </Snack>
  );
};
