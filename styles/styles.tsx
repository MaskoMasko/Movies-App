import { StyleSheet } from "react-native";

// const palette = {
//   purpleLight: '#8C6FF7',
//   purplePrimary: '#5A31F4',
//   purpleDark: '#3F22AB',

//   greenLight: '#56DCBA',
//   greenPrimary: '#0ECD9D',
//   greenDark: '#0A906E',

//   black: '#0B0B0B',
//   white: '#F0F2F3',
// };

// /**
//  * small = 10, medium = 16 large = 35
//  */
// const fontSizeSmall = 10
// /**
//  * small = 10, medium = 16 large = 35
//  */
// const fontSizeMedium = 10
// /**
//  * small = 10, medium = 16 large = 35
//  */
// const fontSizeLarge = 10

// fontSizeLarge

// const theme = {
//   colors: {
//     mainBackground: palette.white,
//     cardPrimaryBackground: palette.purplePrimary,
//   },
//   spacingSmall: {
//     s: 8,
//     m: 16,
//     l: 24,
//     xl: 40,
//   },
// };

export const styles = StyleSheet.create({
  customButton: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    fontWeight: "bold",
  },
  mainHeader: {
    fontSize: 32,
    margin: 10,
    fontWeight: "bold",
    marginBottom: 30,
  },
  movieGenres: {
    padding: 5,
    paddingHorizontal: 7,
    margin: 5,
    borderRadius: 15,
    color: "orange",
    borderWidth: 1,
    borderColor: "orange",
  },
  detailsText: { fontSize: 20, margin: 10 },
  imageStyle: { width: 370, height: 500, alignSelf: "center", margin: 20 },
  movieContainer: {
    width: 300,
    height: 500,
    // borderWidth: 2,
    // borderColor: "black",
    alignSelf: "center",
    borderRadius: 20,
    margin: 10,
  },
  moviePoster: {
    width: 250,
    height: 300,
    margin: 20,
    alignSelf: "center",
    borderRadius: 20,
  },
  movieShortDescription: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  movieDescText: {
    margin: 10,
    marginHorizontal: 25,
    fontSize: 12,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  removeButton: {
    backgroundColor: "black",
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: 100,
    justifyContent: "center",
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  noItemsInList: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    // width: 350,
    marginHorizontal: 30,
    marginTop: 300,
  },
  favListItemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    marginLeft: 10,
    width: 200,
  },
  favListItemContainer: {
    width: 370,
    backgroundColor: "orange",
    margin: 20,
    minHeight: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pageNumber: {
    padding: 10,
    height: 45,
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "black",
    borderRadius: 10,
  },
  errorAndLoading: { fontSize: 30, margin: 50, fontWeight: "bold" },
  errorAndLoadingViews: {
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  filteredItemsContainer: {
    margin: 20,
    marginTop: 5,
    borderRadius: 15,
    borderColor: "orange",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  filteredItemsText: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgba(240, 240, 214, 0.5)",
    width: 300,
    borderRadius: 5,
    marginBottom: 15,
    textAlign: "center",
  },
  filteredItemsImage: {
    width: 300,
    height: 450,
    marginTop: 15,
    borderRadius: 5,
  },
});
