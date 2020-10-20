import { combineReducers } from '@reduxjs/toolkit';
import  authReducer from './features/auth/authSlice';
import userReducer from './features/auth/userSlice';
import diariesReducer from './features/Diary/diarySlice';
import entriesReducer from './features/Entry/entrySlice';
import editorReducer from './features/Entry/editorSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    diaries: diariesReducer,
    entries: entriesReducer,
    user: userReducer,
    editor: editorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;