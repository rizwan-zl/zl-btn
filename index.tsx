import React from 'react';
import { BadgeComponent } from './badge/badge.component'

export type BadgeType = "PRIMARY" | "SECONDARY";

type BadgeProps = {
    count: number,
    badgeType: BadgeType
}

export const index = (props: BadgeProps) => {
    const count = props.count;
    const badgeType = props.badgeType;
    return (
        // <BadgeComponent count={10} badgeType='PRIMARY' />
        <BadgeComponent count={count} badgeType={badgeType} />

    );
}