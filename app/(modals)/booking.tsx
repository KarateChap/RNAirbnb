import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  const onClearAll = () => {};

  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      <Text>BOOK</Text>

      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={onClearAll}
            style={{ justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "mon-sb",
                textDecorationLine: "underline",
              }}
            >
              Clear all
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.back()}
            style={[defaultStyles.btn, { paddingRight: 50, paddingLeft: 20 }]}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color={"#fff"}
              style={defaultStyles.btnIcon}
            />
            <Text style={defaultStyles.btnText}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
