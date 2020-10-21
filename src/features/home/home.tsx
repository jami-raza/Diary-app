import React, { FC } from 'react';
import Diaries from '../Diary/Diary';
import Editor from '../Entry/Editor';
const Home : FC = () => {
    return (
        <div className="two-cols">
            <div className="left">
                <Diaries/>
            </div>
            <div className="right">
                <Editor/>
            </div>
        </div>
    )
}
export default Home;