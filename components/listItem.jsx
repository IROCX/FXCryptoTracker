import {Image, StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import React from "react";



export default function ListItem({data}) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const {id, name, symbol, image, market_cap, current_price, market_cap_rank, price_change_24h} = data
    return (
        <View style={styles.listItem}>
            <View style={{
                backgroundColor: "#FEF9EF",
                borderRadius: 4,
                padding: 5,
                marginRight: 10
            }}>
                <Image
                    style={{
                        height: 50,
                        width: 50,
                        alignSelf: 'center'
                    }}
                    source={{
                        uri: image.toString()
                    }}
                />
            </View>
            <View>
                <Text style={styles.title}>{name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.rank}>{market_cap_rank}</Text>
                    <Text style={styles.text}>{symbol.toString().toUpperCase()}</Text>
                </View>
                <Text style={styles.text}>Market Cap. {numberWithCommas(market_cap)}</Text>
            </View>
            <View style={{marginLeft: "auto", alignItems: 'flex-end'}}>
                <Text style={styles.title}>{current_price}</Text>
                <Text style={styles.text}>
                    <AntDesign name={price_change_24h > 0 ? "caretup" : "caretdown"} size={12}
                               color={price_change_24h > 0 ? "green" : "red"}/> {price_change_24h.toFixed(3)}%</Text>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    listItem: {
        alignSelf: 'center',
        width: '95%',
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth:StyleSheet.hairlineWidth ,
        borderBottomColor: "#282828"
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    text: {
        color: '#c4c4c4',
        marginRight: 5
    },
    rank: {
        color: '#fff',
        backgroundColor: "#666",
        paddingHorizontal: 4,
        borderRadius: 4,
        marginRight: 5,
        fontSize: 12,
        fontWeight: "bold",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    }
});