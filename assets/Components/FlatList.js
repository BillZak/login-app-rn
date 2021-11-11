import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Person",
    number: "0234-488-548",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Person",
    number: "0234-438-548",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Person",
    number: "023-499-9548",
  },
  {
    id: "5864a0f-3da1-471f-bd96-145571e29d72",
    name: "Fourth Person",
    number: "023-499-9548",
  },
  {
    id: "5869a0f-3da1-471f-bd96-145571e29d72",
    name: "Fifth Person",
    number: "023-499-9548",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14551e29d72",
    name: "Sixth Person",
    number: "023-499-9548",
  },
  {
    id: "5864a0f-3da1-471f-bd96-145571e9d72",
    name: "Seventh Person",
    number: "023-499-9548",
  },
  {
    id: "5869a0f-3da1-471f-bd96145571e29d72",
    name: "Eight Person",
    number: "023-499-9548",
  },
  {
    id: "58694a0f-3da1-47f-bd96-145571e29d72",
    name: "Nineth Person",
    number: "023-499-9548",
  },
  {
    id: "5864a0f-3da1-471f-bd9-145571e29d72",
    name: "Tenth Person",
    number: "023-499-9548",
  },
  {
    id: "5869a0f-3a1-471f-bd96-145571e29d72",
    name: "Ele Person",
    number: "023-499-9548",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={styles.container}>
    <Image
      style={{ height: 60, width: 60, borderRadius: 100 }}
      source={require("./assets/np.jpeg")}
    />
    <View style={styles.contact}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
      <Text style={{ color: "grey" }}>{item.number}</Text>
    </View>
    <View style={[styles.icons, backgroundColor]}>
      <IconMaterialCommunityIcons
        name="phone"
        style={{ fontSize: 25, color: "#31D8F3" }}
      />
      <IconMaterialCommunityIcons
        name="message-processing"
        style={{ fontSize: 25, marginHorizontal: 15, color: "#31D8F3" }}
      />
      <IconFeather
        name="more-vertical"
        style={{ fontSize: 25, color: "silver" }}
      />
    </View>
  </View>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "white" : "white";
    const color = item.id === selectedId ? "grey" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
    flexDirection: "row",
    margin: 10,
    marginTop: 20,
  },
  contact: {
    flex: 2,
    marginTop: 10,
    marginLeft: 15,
  },
  icons: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default App;
