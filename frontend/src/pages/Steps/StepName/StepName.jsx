import React from 'react';
import { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './StepName.module.css';
import { useDispatch , useSelector } from 'react-redux';
import { setName } from '../../../store/activateSlice';

const StepName = ({ onNext }) => {
    const { name } = useSelector((state) => state.activate)
    const dispatch = useDispatch();
    const [fullname,setFullname] = useState(name)

    function submit () {
        if (!fullname) {
            return;
        }
        dispatch(setName(fullname));
        onNext();

    }
    return (
        <>
            <Card title="what's your full name" icon="https://raw.githubusercontent.com/codersgyan/codershouse-mern/part-5/frontend/public/images/goggle-emoji.png"> 
                <TextInput
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                        <div>
                            <p className={styles.paragraph}>
                            People use real names at codershouse :) !   
                            </p>
                            <div className={styles.actionButtonWrap}>
                                <Button text={"Next"} onClick={submit}/>
                            </div>
                        </div>
            </Card>
        </>
    );
};

export default StepName;