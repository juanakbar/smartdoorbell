import React, { useState } from 'react'
import AgoraUIKit, { PropsInterface } from 'agora-react-uikit'

const App: React.FunctionComponent = () => {
    const [videocall, setVideocall] = useState(true)
    const props: PropsInterface = {
        rtcProps: {
            appId: 'dbef1bef8c344aeabd263367c1f28bea',
            channel: 'smartdoorbell',
            token: '007eJxTYLj5hzHMqCm8ycNjnrzRh4bveqmP9xy7sOPAOl7J9L9fXU4qMKQkpaYZArFFsrGJSWJqYlKKkZmxsZl5smGakUVSaqKUz8+UhkBGhvw5DUyMDBAI4vMyFOcmFpWk5OcXJaXm5DAwAAA2nyWy', // pass in channel token if the app is in secure mode
        },
        callbacks: {
            EndCall: () => setVideocall(false),
        },
    }
    return (
        <div style={styles.container}>
            {videocall ? <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} /> : null}
        </div>
    )
}

const styles = {
    container: { width: '100vw', height: '100vh', display: 'flex', flex: 1 },
}

export default App
