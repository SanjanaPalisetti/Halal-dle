import { SENTENCES } from "../../constants/sentences";
import './text.css'

const Text = () => {
    const sentence = SENTENCES[2]
    return (
        <>
            <div className="text">{sentence}</div>
        </>
    )
}

export default Text;