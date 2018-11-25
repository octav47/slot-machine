import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './Root'

import configureStore from './store'

const store = configureStore()

render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>,
    document.getElementById('app'),
)

if (module.hot) {
    module.hot.accept('./Root', () => {
        const NewRoot = require('./Root').default

        render(
            <AppContainer>
                <NewRoot store={store} />
            </AppContainer>,
            document.getElementById('app'),
        )
    })
}
