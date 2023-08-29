import React, { useState } from 'react'
import AgoraUIKit, { PropsInterface } from 'agora-react-uikit'

const App: React.FunctionComponent = () => {
    const [videocall, setVideocall] = useState(true)
    const props: PropsInterface = {
        rtcProps: {
            appId: 'dbef1bef8c344aeabd263367c1f28bea',
            channel: 'smartdoorbell',
            token: '007eJxTYPCr2rxt3cHS6PxremsmdW3W1jDgUveb89mj7/DG7vKwTZwKDClJqWmGQGyRbGxikpiamJRiZGZsbGaebJhmZJGUmhhj/S6lIZCRoWJvFxMjAwSC+LwMxbmJRSUp+flFSak5OQwMALpVJD8=', // pass in channel token if the app is in secure mode
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
