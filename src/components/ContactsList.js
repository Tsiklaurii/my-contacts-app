import { SectionList, StyleSheet, Text } from "react-native";
import Row from "./Row";

const renderItem = ({ item }) => <Row name={item.name} phone={item.phone} />;

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

const ContactsList = ({ contacts }) => {
    const contactsByLetter = contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        };
    }, {});

    const sections = Object.keys(contactsByLetter)
        .sort()
        .map((letter) => ({
            title: letter,
            data: contactsByLetter[letter],
        }));

    return (
        <SectionList
            sections={sections}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
        />
    );
};

export default ContactsList;

const styles = StyleSheet.create({});
