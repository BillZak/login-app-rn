import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: "#5F2585",
            paddingLeft: 35,
            marginTop: 60,
            fontSize: 35,
          }}
        >
          Sign Up
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.inputs} placeholder="Username" />
        <TextInput style={styles.inputs} placeholder="Email" />
        <TextInput style={styles.inputs} placeholder="Password" />
        <TextInput style={styles.inputs} placeholder="Password again" />
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              color: "#fff",
              textAlign: "center",
              marginTop: 40,
              backgroundColor: "#5F2585",
              marginRight: 35,
              marginLeft: 35,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.suggestion}>
        <Text style={{ fontSize: 13 }}>
          You already have an account?
          <Text style={{ color: "#5F2585" }}>Log in</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 100,
    marginRight: 20,
    marginLeft: 20,
    elevation: 5,
    borderRadius: 10,
  },
  header: {
    flex: 2,
    width: "90%",
  },
  form: {
    flex: 3,
    width: "90%",
    padding: 30,
  },
  button: {
    flex: 2,
    width: "90%",
  },
  suggestion: {
    flex: 2,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    fontSize: 15,
    borderBottomWidth: 2,
    margin: 10,
    borderBottomColor: "#5F2585",
  },
});
