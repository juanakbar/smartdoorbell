import React, { useState } from 'react'
import AgoraUIKit, { PropsInterface } from 'agora-react-uikit'

const App: React.FunctionComponent = () => {
    const [videocall, setVideocall] = useState(true)
    const props: PropsInterface = {
        rtcProps: {
            appId: 'dbef1bef8c344aeabd263367c1f28bea',
            channel: 'smartdoorbell',
            token: '007eJxTYOCYdKODrb0j6M7aktDYYs5Ws8aErxa/pqgKNwiyRhxeLqjAkJKUmmYIxBbJxiYmiamJSSlGZsbGZubJhmlGFkmpiU6ur1IaAhkZfjzew8rIAIEgPi9DcW5iUUlKfn5RUmpODgMDADApIz4=', // pass in channel token if the app is in secure mode
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
