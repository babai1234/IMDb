import { Message } from "@libs/types"
import { FunctionComponent } from "react"


const MessageBox: FunctionComponent<{message: Message}> = ({message}) => {
    const {text, type} = message
    console.log(`Message: ${text} Type: ${type}`)
    return (
        <div className={"p-2 max-w-min rounded-xl bg-blue-500" + 
            (type === 'send' ? "bg-blue-500 text-right" : "bg-white text-left")
        }>
            <p className="inline-block">{text}</p>
            <small className="text-xs text-right inline-block pl-6">7:39 PM</small>
        </div>
    )
}

export default MessageBox
