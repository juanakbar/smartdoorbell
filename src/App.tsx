import React, { useState } from 'react'
import AgoraUIKit, { PropsInterface } from 'agora-react-uikit'

const App: React.FunctionComponent = () => {
    const [videocall, setVideocall] = useState(true)
    const props: PropsInterface = {
        rtcProps: {
            appId: 'dbef1bef8c344aeabd263367c1f28bea',
            channel: 'smartdoorbell',
            token: '007eJxTYPiQ/v/a+9pnPEfWnHD/Mm//bhXvjMsPYt455O/SiAhe7b5RgSElKTXNEIgtko1NTBJTE5NSjMyMjc3Mkw3TjCySUhOnb/qR0hDIyDDjNS8rIwMEgvi8DMW5iUUlKfn5RUmpOTkMDAAk9ihL', // pass in channel token if the app is in secure mode
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
