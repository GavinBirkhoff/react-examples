import { useId } from "react"

const Log = ()=>{
    const id = useId()
    const id2 = useId()
    const id3 = useId()
    return <div>{id}|{id2}|{id3}</div>
}
export default Log