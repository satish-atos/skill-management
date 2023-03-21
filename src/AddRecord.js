import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { GenericStyle } from "./GenericStyle";

const AddRecord = ({ onAddRecord }) => {
  const [exp, setExp] = useState("");
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Exp"
        style={GenericStyle.input}
        onChangeText={setExp}
        value={exp}
      />
      <TextInput
        placeholder="Description"
        style={GenericStyle.input}
        onChangeText={setDescription}
        value={description}
      />
      <TextInput
        placeholder="Skill"
        style={GenericStyle.input}
        onChangeText={setSkill}
        value={skill}
      />

      <Button title="Add" style={GenericStyle.button} onPress={onAddRecord} />
    </View>
  );
};

export default AddRecord;
