import { useState } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import SearchContacts from "../components/SearchContacts.js";
import contacts, { compareNames } from "../data/contacts.js";

export default function Index() {
  const [showContacts, setShowContacts] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(contacts);

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const sort = () => {
    setSortedContacts((prev) => {
      return [...prev.sort(compareNames)];
    });
  };

  return (
    <SafeAreaView>
      <Button title="toggle contacts" onPress={toggleContacts} />
      <Button title="sort" onPress={sort} />
      <SearchContacts contacts={sortedContacts} showContacts={showContacts} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
