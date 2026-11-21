import { StyleSheet, Text, View } from "react-native";

const Row = ({ name, phone }) => {
    return (
        <View style={styles.row}>
            <Text>{name}</Text>
            <Text>{phone}</Text>
        </View>
    );
};

export default Row;

const styles = StyleSheet.create({
    row: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#ccc",
        display: "flex",
        alignItems: "center",
        marginBottom: 10,
        gap: 3,
    },
});
