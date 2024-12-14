import React from "react";
import type { PropsWithChildren } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string;

}>

export default function Icons({name} : IconsProps) {
    switch (name) {
        case 'circle':
            return <Icon name="circle-then" size={38}
            color='#F7CD2E' />
            break;
            case 'cross':
                return <Icon name="times" size={38} color='#38CC77' />
                break;
    
        default:
            break;
    }
}