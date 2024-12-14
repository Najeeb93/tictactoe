import React from "react";
import type { PropsWithChildren } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string;

}>

export default function Icons({name}) {
    switch (name) {
        case 'circle':
            return <Icon name="circle-then" size={38}
            color='#F7CD2E' />
            break;
    
        default:
            break;
    }
}