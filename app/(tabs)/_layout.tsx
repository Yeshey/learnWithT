import { View, Text, Image, StyleSheet } from "react-native";
import { Tabs } from "expo-router";

import { icons } from "../../constants";

type TabIconProps = {
  icon: any; // what type is it?
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, { tintColor: color }]}
      />
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[
          styles.iconText,
          { color: color, fontFamily: focused ? "Poppins-Bold" : "Poppins-Regular" },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="calendar"
          options={{
            title: "Calendar",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.calendar}
                color={color}
                name="Calendar"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    maxWidth: 70, // Ensures text doesn’t overflow
  },
  icon: {
    width: 24, // Set a fixed width
    height: 24, // Set a fixed height
  },
  iconText: {
  //  fontSize: 12, // Ensure readable text size
  //  textAlign: "center", // Align text center
  },
});

export default TabsLayout;
