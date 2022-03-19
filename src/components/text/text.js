import { SENTENCES } from "../../constants/sentences";
import './text.css'

const Text = () => {
    const sentence = SENTENCES[7]
    return (
        <>
            <div className="text">{sentence}</div>
        </>
    )
}

export default Text;
