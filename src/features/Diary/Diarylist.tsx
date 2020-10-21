import React, {FC, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import http from '../../Services/mirage/api';
import { Entry } from '../../interfaces/entry.interface';
import { setEntries } from '../Entry/entrySlice';
import { setCurrentlyEditing, setCanEdit } from '../Entry/editorSlice';
import dayjs from 'dayjs';
import { useAppDispatch } from '../../store';

const DiaryEntriesList: FC = () => {
    const { entries } = useSelector((state: RootState)=> state);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(()=>{
        if (id != null) {
            http
            .get<null, {entries:Entry[]}>(`/diaries/entries/${id}`)
            .then(({ entries: _entry })=> {
                if (_entry) {
                    const sortByLastUpdated = _entry.sort((a, b)=> {
                        return dayjs(b.updatedAt).unix() - dayjs(a.updatedAt).unix();
                    });
                    dispatch(setEntries(sortByLastUpdated));
                }
            });
        }
    },[id, dispatch]);
    return (
        <div className="entries">
            <header>
                <Link to = "/">
                    <h3>&llr; Go back</h3>
                </Link>
            </header>
            <ul>
                {entries.map((entry)=>(
                <li
                    key={entry.id}
                    onClick={() => {
                        dispatch(setCurrentlyEditing(entry));
                        dispatch(setCanEdit(true));
                    }}
                >
                    {entry.title}
                </li>
                ))}
            </ul>
        </div>
    )
}
export default DiaryEntriesList;