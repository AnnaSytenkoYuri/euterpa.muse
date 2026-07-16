'use client';
import css from './BookingForm.module.css'
import { useEffect, useRef } from "react";


export default function BookingForm(){
   
    const nameInputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        nameInputRef.current?.focus();
    },[])

    return(
        <form className={css.form}>
            <h2 id="booking-modal-title" className={css.title}>Book a lesson</h2>
            <p>Fill out the form, and I will contact you to confirm.</p>
            <div>
                <input type="text" ref={nameInputRef} placeholder='Your name' />
                <input type="email" placeholder='Email' />
                <input type="phone" placeholder='Phone' />
            </div>
            <label htmlFor=""></label>
            <select name="" id=""></select>
            <label htmlFor=""></label>
            <select name="" id=""></select>
            <label htmlFor=""></label>
            {/* <DatePIcker/> */}
            <label htmlFor=""></label>
            <textarea name="" id=""></textarea>
            <button>book now</button>
            <p>By clicking `&quot`Book now`&quot` you agree to our Privacy Policy.</p>
        </form>
    )
}