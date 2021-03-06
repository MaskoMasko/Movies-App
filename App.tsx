import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { QueryClient, QueryClientProvider } from "react-query";
import { HomeScreen } from "./screens/HomeScreen";
import { FavoritesScreen } from "./screens/FavoriteMoviesScreen";
import { MovieDetailsScreen } from "./screens/MovieDetailsScreen";
import { FilterMoviesScreen } from "./screens/FilterMoviesScreen";
import { FilteredByGenreScreen } from "./screens/FilteredByGenreScreen";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./styles/theme";
import { DownloadPosterScreen } from "./screens/DownloadPosterScreen";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { ComingSoonScreen } from "./screens/ComingSoonScreen";
import { ActorsScreen } from "./screens/ActorsScreen";
import { ActorDetailsScreen } from "./screens/ActorDetailsScreen";

const queryClient = new QueryClient();

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DrawerStack" options={{ headerShown: false }}>
              {() => {
                return (
                  <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{ title: "Home", headerTitle: "Movie Store" }}
                    />
                    <Drawer.Screen
                      options={{ title: "Filter Movies" }}
                      name="Filter"
                      component={FilterMoviesScreen}
                    ></Drawer.Screen>
                    <Drawer.Screen
                      name="Categories"
                      component={CategoriesScreen}
                    />
                    <Drawer.Screen
                      name="Actors"
                      component={ActorsScreen}
                    ></Drawer.Screen>
                    <Drawer.Screen
                      name="CommingSoon"
                      options={{ title: "Coming Soon" }}
                      component={ComingSoonScreen}
                    ></Drawer.Screen>
                    <Drawer.Screen
                      options={{ title: "Download Movie Posters" }}
                      name="Download"
                      component={DownloadPosterScreen}
                    ></Drawer.Screen>
                    <Drawer.Screen
                      name="Favorites"
                      options={{ title: "Favorite Movies" }}
                      component={FavoritesScreen}
                    ></Drawer.Screen>
                  </Drawer.Navigator>
                );
              }}
            </Stack.Screen>
            <Stack.Screen
              name="Details"
              component={MovieDetailsScreen}
              options={{ title: "Movie Details" }}
            ></Stack.Screen>
            <Stack.Screen
              name="Genres"
              component={FilteredByGenreScreen}
              options={{ title: "Genre Movies" }}
            ></Stack.Screen>
            <Stack.Screen
              name="ActorDetails"
              component={ActorDetailsScreen}
              options={{ title: "Actor Details" }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
