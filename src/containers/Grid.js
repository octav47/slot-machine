import React, { Fragment } from 'react'
import { Wheel } from 'Containers/'

const Grid = () => {
    return (
        <Fragment>
            <Wheel index={0} />
            <Wheel index={1} />
            <Wheel index={2} />
        </Fragment>
    )
}

export default Grid
