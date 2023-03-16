import React from 'react';
import './Select1.css';
import Button1 from './Button1';

export default function Select1() {
return (
    <div className='select'>
    <div className='container mx-2 my-4'>
        <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
    </div>
    <div className='container mx-2 my-4'>
    <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
</div>
</div>
    );
}
