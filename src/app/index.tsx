import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#FF6B6B" }]}
        onPress={() => router.push("/page2")}
      >
        <Text style={styles.linkText}>ไปหน้าที่ 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#FF8E53" }]}
        onPress={() => router.push("/ex01")}
      >
        <Text style={styles.linkText}>Ex01</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#FFA726" }]}
        onPress={() => router.push("/ex02")}
      >
        <Text style={styles.linkText}>Ex02</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#FBC02D" }]}
        onPress={() => router.push("/ex03")}
      >
        <Text style={styles.linkText}>Ex03</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#9CCC65" }]}
        onPress={() => router.push("/ex04")}
      >
        <Text style={styles.linkText}>Ex04</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#4CAF50" }]}
        onPress={() => router.push("/ex05")}
      >
        <Text style={styles.linkText}>Ex05</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#26A69A" }]}
        onPress={() => router.push("/ex06")}
      >
        <Text style={styles.linkText}>Ex06</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#26C6DA" }]}
        onPress={() => router.push("/ex07")}
      >
        <Text style={styles.linkText}>Ex07</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#2196F3" }]}
        onPress={() => router.push("/ex08")}
      >
        <Text style={styles.linkText}>Ex08</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#5C6BC0" }]}
        onPress={() => router.push("/ex09")}
      >
        <Text style={styles.linkText}>Ex09</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#7E57C2" }]}
        onPress={() => router.push("/ex10")}
      >
        <Text style={styles.linkText}>Ex10</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#AB47BC" }]}
        onPress={() => router.push("/ex11")}
      >
        <Text style={styles.linkText}>Ex11</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.link, { backgroundColor: "#EC407A" }]}
        onPress={() => router.push("/ex12")}
      >
        <Text style={styles.linkText}>Ex12</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 110,
    paddingBottom: 60,
  },
  link: {
    marginVertical: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 240,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
