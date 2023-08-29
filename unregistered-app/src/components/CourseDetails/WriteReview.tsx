import { AiFillStar } from "react-icons/ai";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function openReviewForm() {
    const openEvent = new Event("show-review-form");
    window.dispatchEvent(openEvent);
}

export function closeReviewForm() {
    const closeEvent = new Event("hide-review-form");
    window.dispatchEvent(closeEvent);
}

export default function WriteReview() {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener('show-review-form', () => setShow(true));
        window.addEventListener('hide-review-form', () => setShow(false));
        return () => {
            window.removeEventListener('show-review-form', () => setShow(true));
            window.removeEventListener('hide-review-form', () => setShow(false));
        }
    }, [])
    
    return (
    <>
        <div className={`grid justify-center items-center p-4 fixed top-0 left-0 right-0 bottom-0 transition-all ${show ? "opacity-1 z-50" : "opacity-0 -z-50"}`}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-dark-gray bg-opacity-40 -z-10" onClick={closeReviewForm}></div>
            <div className={`p-6 rounded-lg bg-white z-10 shadow ${show ? "translate-y-0" : "-translate-y-4"} transition-all`}>
                <p className="text-dark-gray pb-6">Write review</p>
                <div className="flex gap-1 pb-6">
                    <button className="text-dark-gray hover:text-bright-orange transition-all"><AiFillStar /></button>
                    <button className="text-dark-gray hover:text-bright-orange transition-all"><AiFillStar /></button>
                    <button className="text-dark-gray hover:text-bright-orange transition-all"><AiFillStar /></button>
                    <button className="text-dark-gray hover:text-bright-orange transition-all"><AiFillStar /></button>
                    <button className="text-dark-gray hover:text-bright-orange transition-all"><AiFillStar /></button>
                </div>
                <textarea className="w-full border rounded-lg p-4 resize-none" placeholder="Write here ...." name="review" id="review" cols={50} rows={5}></textarea>
                <div className="pt-6">
                    <button className="btn">Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}
