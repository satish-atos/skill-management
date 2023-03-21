import React from "react";
import { View, Text } from "react-native";
import AddRecord from "./AddRecord";
import { ProfileStyle } from "./ProfileStyle";

const Profile = (props) => {
  return (
    <View>
      <Text> Test message</Text>
      <View style={ProfileStyle.tabContainer}>
        <View>
          <Text>First</Text>
        </View>

        <View>
          <Text>Second</Text>
        </View>

        <View>
          <Text>Third</Text>
        </View>
      </View>

      <AddRecord />
    </View>
  );
};

export default Profile;
