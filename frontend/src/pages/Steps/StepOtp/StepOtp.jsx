import React from 'react';
import { useState } from 'react';
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import styles from "./StepOtp.module.css";
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

const StepOtp = ({ onNext }) => {
    const [otp,setOtp] = useState('');
    const { phone, hash } = useSelector((state) => state.auth.otp);
    const dispatch = useDispatch();

    async function submit () {
        try {
            const { data } = await verifyOtp({ otp, phone, hash });
            console.log(data);
            dispatch(setAuth(data));
            // onNext();
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <>


        <Card title="Enter the code we just texed you" icon="https://raw.githubusercontent.com/codersgyan/codershouse-mern/part-4/frontend/public/images/lock-emoji.png">
    
        <TextInput
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
                <div>
                    <div className={styles.actionButtonWrap}>
                        <Button text={"Next"} onClick={submit}/>
                    </div>
                    <p className={styles.bottomParagraph}>
                        By entering your number, you’re agreeing to our Terms of
                        Service and Privacy Policy. Thanks!
                    </p>
                </div>
        </Card>
        </>
    );
};

export default StepOtp;