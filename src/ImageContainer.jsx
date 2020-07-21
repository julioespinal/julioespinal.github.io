import React from 'react'

export default function ImageContainer(props) {

    return (
    <div className={props.containerStyleClass}>
        <img className={props.imgStyleClass} src={props.src} />
    </div>
    )
}