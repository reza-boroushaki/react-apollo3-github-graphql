import React from 'react';
import {nameToEmoji} from 'gemoji';
import './reactions.scss';

export default function Reactions({ content }){
    return(
        <div className="lists reactions">
            <span>{nameToEmoji[(content).toLowerCase()]}<b>1</b></span>
        </div>
    )
}