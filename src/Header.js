import React, { Component } from 'react'
import {
        Text,
        View,
} from 'react-native'
import styles from "./CSS";

const Header = ({title}) => {
        return (<View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
        </View>)
}

export default Header