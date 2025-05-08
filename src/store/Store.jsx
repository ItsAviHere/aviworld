import {configureStore } from '@reduxjs/toolkit';
import listotactions from './Action';

export const mstaorage = configureStore({
    reducer:{
        counter:listotactions
    }
})