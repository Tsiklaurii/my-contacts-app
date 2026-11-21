import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import ContactsList from "./ContactsList";

const SearchContacts = ({ contacts, showContacts }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <TextInput
        style={styles.search}
        placeholder="Search contacts"
        accessibilityLabel="Search contacts"
        value={search}
        onChangeText={setSearch}
      />
      {showContacts && (<ContactsList contacts={contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.trim().toLowerCase())
      )} />)}
    </>
  );
};

export default SearchContacts;

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
});
