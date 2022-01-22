import React from 'react';
import Corousel from '../COMPONENTS/Corousel';
import MenuTile from '../COMPONENTS/MenuTile';

type Props = {};

const Container = (props: Props) => {
    return (
        <div>
            <Corousel/>
            <MenuTile/>
        </div>
    )
};

export default Container;
