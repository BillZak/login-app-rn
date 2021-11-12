import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Naruto",
    type: "Naruto Series",
    age: "17 years old",
    location: "Hokage",
    source: require("./assets/naruto.jpeg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Asta",
    type: "Black Clover",
    age: "16 years old",
    location: "Wizard King",
    source: require("./assets/asta.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Luffy",
    type: "One Piece",
    age: "19 years old",
    location: "Pirate King",
    source: require("./assets/luffy.jpeg"),
  },
];

const Item = ({ item, onPress }) => (
  <View style={styles.list}>
    <Image
      style={{ height: 200, width: 170, borderRadius: 20 }}
      source={item.source}
    />

    <View onPress={onPress} style={styles.info}>
      <Text style={{ fontSize: 20, color: "#0E3870", fontWeight: "bold" }}>
        {item.name}
      </Text>
      <Text style={styles.title}>{item.type}</Text>
      <Text style={styles.title}>{item.age}</Text>
      <Text style={styles.title}>{item.location}</Text>
    </View>
  </View>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <IconEvilIcons
          style={{
            position: "absolute",
            fontSize: 25,
            top: 15,
            left: 40,
          }}
          name="search"
        />
        <TextInput
          style={styles.searchbtn}
          placeholder="Search Anime Character"
        />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E7E8",
    marginTop: StatusBar.currentHeight || 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
  },
  list: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 25,
    marginVertical: 15,
  },
  info: {
    backgroundColor: "#fff",
    width: 140,
    marginVertical: 20,
    marginRight: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
  },
  searchbtn: {
    backgroundColor: "white",
    position: "relative",
    borderRadius: 15,
    marginHorizontal: 25,
    paddingVertical: 10,
    paddingLeft: 50,
  },
  title: {
    fontSize: 14,
    marginVertical: 5,
    color: "#BEBFC1",
  },
});

export default App;
