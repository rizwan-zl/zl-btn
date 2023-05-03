import React from 'react';
import { View, Text } from 'react-native';
import { BadgeStyles } from './badge.styles';

export type BadgeType = "PRIMARY" | "SECONDARY";

type BadgeProps = {
    count: number,
    badgeType: BadgeType
}

export default function BadgeComponent (props: BadgeProps){
    const count = props.count;
    const badgeType = props.badgeType;
    return (
        <View style={BadgeStyles.badgeContainer}>
            <Text style={BadgeStyles.badgeText}>
                {count}
            </Text>
        </View>
    )
}