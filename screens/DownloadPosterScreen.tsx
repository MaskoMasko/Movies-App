import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  Platform,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import RNFetchBlob from "rn-fetch-blob";

export const DownloadPosterScreen = () => {
  return <Text>Yes</Text>;
};
// const REMOTE_IMAGE_PATH =
//   "https://image.dnevnik.hr/media/images/920x695/Jan2019/61629758.jpg";
// const checkPermission = async () => {
//   if (Platform.OS === "ios") {
//     downloadImage();
//   } else {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: "Storage Permission Required",
//           message: "App needs access to your storage to download Photos",
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("Storage Permission Granted.");
//         downloadImage();
//       } else {
//         alert("Storage Permission Not Granted");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   }
// };

// const downloadImage = () => {
//   let date = new Date();
//   let image_URL = REMOTE_IMAGE_PATH;
//   let ext: any = getExtention(image_URL);
//   ext = "." + ext[0];
//   const { config, fs } = RNFetchBlob;
//   let PictureDir = fs.dirs.PictureDir;
//   let options = {
//     fileCache: true,
//     addAndroidDownloads: {
//       useDownloadManager: true,
//       notification: true,
//       path:
//         PictureDir +
//         "/image_" +
//         Math.floor(date.getTime() + date.getSeconds() / 2) +
//         ext,
//       description: "Image",
//     },
//   };
//   config(options)
//     .fetch("GET", image_URL)
//     .then((res) => {
//       console.log("res -> ", JSON.stringify(res));
//       alert("Image Downloaded Successfully.");
//     });
// };

// const getExtention = (filename: string) => {
//   return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
// };

//   return (
//     <View style={styles.container}>
//        //     <View style={{ alignItems: "center" }}>
//   //       <Text style={{ fontSize: 30, textAlign: "center" }}>
//   //         React Native Image Download Example
//   //       </Text>
//   //       <Text
//   //         style={{
//   //           fontSize: 25,
//   //           marginTop: 20,
//   //           marginBottom: 30,
//   //           textAlign: "center",
//   //         }}
//   //       >
//   //         www.aboutreact.com
//   //       </Text>
//   //     </View>
//   //     <Image
//   //       source={{
//   //         uri: REMOTE_IMAGE_PATH,
//   //       }}
//   //       style={{
//   //         width: "100%",
//   //         height: 100,
//   //         resizeMode: "contain",
//   //         margin: 5,
//   //       }}
//   //     />
//   //     <TouchableOpacity style={styles.button} onPress={checkPermission}>
//   //       <Text style={styles.text}>Download Image</Text>
//   //     </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  button: {
    width: "80%",
    padding: 10,
    backgroundColor: "orange",
    margin: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  },
});
