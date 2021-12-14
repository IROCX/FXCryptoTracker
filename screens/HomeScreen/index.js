import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import cryptocurrencies from './../../assets/data/cryptocurrencies.json'

import ListItem from "./../../components/listItem";

export default function HomeScreen() {

    return (
        <FlatList
            data={cryptocurrencies}
            renderItem={({item}) => <ListItem data={item}/>}
        />
    );
}

const styles = StyleSheet.create({});
