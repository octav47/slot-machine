import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'Components/'

import { spinWheelsStart, spinWheelsStop } from 'Actions/wheelActions'

class Buttons extends Component {
    selfStartTimer = null
    selfStopTimer = null

    componentDidMount () {
        this.selfGame()
    }

    componentDidUpdate () {
        this.selfGame()
    }

    componentWillUnmount () {
        this.clearTimers()
    }

    clearTimers = () => {
        if (this.selfStartTimer) {
            clearTimeout(this.selfStartTimer)
        }

        if (this.selfStopTimer) {
            clearTimeout(this.selfStopTimer)
        }
    }

    selfGame = () => {
        const { isSpinning } = this.props

        this.clearTimers()

        if (isSpinning) {
            this.selfStopTimer = setTimeout(() => {
                this.handleSpinStop()
            }, 10000)
        } else {
            this.selfStartTimer = setTimeout(() => {
                this.handleSpinStart()
            }, 5000)
        }
    }

    handleSpinStart = () => {
        const { spinStart } = this.props

        spinStart()
    }

    handleSpinStop = () => {
        const { spinStop } = this.props

        spinStop()
    }

    render () {
        const { isSpinning } = this.props

        return (
            <div>
                {isSpinning ? (
                    <Button
                        title="Stop"
                        onClick={this.handleSpinStop}
                    />
                ) : (
                    <Button
                        title="Spin!"
                        onClick={this.handleSpinStart}
                    />
                )}
            </div>
        )
    }
}

Buttons.propTypes = {
    isSpinning: PropTypes.bool.isRequired,
    spinStart: PropTypes.func.isRequired,
    spinStop: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        isSpinning: state.wheels.isSpinning,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        spinStart: () => {
            dispatch(spinWheelsStart())
        },
        spinStop: () => {
            dispatch(spinWheelsStop())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
