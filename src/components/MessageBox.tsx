import { Message } from "@libs/types"
import { FunctionComponent } from "react"


const MessageBox: FunctionComponent<{message: Message}> = ({message}) => {
    const {text, type} = message
    // console.log(`Message: ${text} Type: ${type}`)
    return (
         <div className={"m-2 p-2 max-w-max rounded-xl "+ 
            (type === 'send' ? "bg-blue-500" : "bg-white")
         }>
            <p className="inline-block mr-4">{text}</p>
            <small className="text-xs text-right">{new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</small>
        </div>
    )
}

export default MessageBox
