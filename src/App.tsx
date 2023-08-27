import React, { useState } from 'react'
import AgoraUIKit, { PropsInterface } from 'agora-react-uikit'

const App: React.FunctionComponent = () => {
    const [videocall, setVideocall] = useState(true)
    const props: PropsInterface = {
        rtcProps: {
            appId: 'dbef1bef8c344aeabd263367c1f28bea',
            channel: 'smartdoorbell',
            token: '007eJxTYBCYkil2KkZXPNGG+3fAcf6zPGs4+vac2ya/gXvin78XXt5VYEhJSk0zBGKLZGMTk8TUxKQUIzNjYzPzZMM0I4uk1MRLW16nNAQyMvhzu7IyMkAgiM/LUJybWFSSkp9flJSak8PAAACmVyRt', // pass in channel token if the app is in secure mode
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
