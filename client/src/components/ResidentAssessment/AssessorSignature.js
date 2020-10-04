import React, { useEffect, useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import Popup from "reactjs-popup";
import "../../../src/App.css";
import "./sigCanvas.css";

function Sig() {
    const [imageURL, setImageURL] = useState(null); // create a state that will contain our image
    const sigCanvas = useRef({}); // create a ref using react useRef hook

    /* a function that uses the canvas ref to clear the canvas
    via a method given by react-signature-canvas */
    const clear = () => sigCanvas.current.clear();

        /* a function that uses the canvas ref to trim the canvas
    from white space via a method given by react-signature-canvas
    then saves it in our state */
    const save = (ref) =>
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))


    return(
        <div className="App" type="button">
            <h5>Signature Pad Example</h5>
            <Popup 
                modal
                trigger={<button type="button" preventdefault="true">Open Signature Pad</button>}
                closeOnDocumentClick={false}
                
                >
                {close => (
                    <>
                    <SignaturePad
                    ref={sigCanvas}
                    canvasProps={{
                        className: "signatureCanvas"
                    }}
                    />
                    <button onClick={save} type="button">Save</button>
                    <button onClick={clear}>Clear</button>
                    <button onClick={close}>Close</button>
                    
                    </>
                )}
                </Popup>
        </div>
    );
}

export default Sig;

