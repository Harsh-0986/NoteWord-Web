import { useCallback, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { io } from 'socket.io-client'

const TOOLBAR_OPTIONS = [
    [{ header: [1,2,3,4,5,6,false] }],
    [{ font: []}],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script:"sub" }, { script:"super"}],
    [{align: [] }],
    ["image", "blockquote", "code-block", "clean"]
]

export default function TextEditor() {
    useEffect(() =>{
        const socket = io('https://3002-olive-mouse-9jgw3b73.ws-us04.gitpod.io')
        console.log("connected")
        return () => {
            socket.disconnect()
        }
    }, [])

    const wrapperRef = useCallback((wrapper) =>{
        if (wrapper == null) return

        wrapper.innerHTML = ""
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(editor, {theme: "snow", modules:{toolbar: TOOLBAR_OPTIONS}})
    }, [])

    return <div className="container" ref={wrapperRef}></div>
}
