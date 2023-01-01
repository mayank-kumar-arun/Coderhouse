import React from 'react';
import styles from './Home.module.css';
import {RdsButton , RdsTextEditor, RdsAlert ,RdsDatePicker} from "vik-may-shared-lib"
import { useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const navigate = useNavigate();
    function startRegister() {
        navigate('/authenticate');
    }
    return (
        <div className="cardWrapper">
            <RdsButton halwa="gajarka" label="hellonpmworld" colorVariant="primary" ></RdsButton>
            <RdsTextEditor></RdsTextEditor>
            <RdsDatePicker></RdsDatePicker>
            <RdsAlert alertmessage="df" label="sdfgbnhj"></RdsAlert>
            <Card title="Welcome to Codershouse!" icon="https://raw.githubusercontent.com/codersgyan/codershouse-mern/part-3/frontend/public/images/logo.png">
                <p className={styles.text}>
                    We’re working hard to get Codershouse ready for everyone!
                    While we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks
                </p>
                <div>
                    <Button onClick={startRegister} text="Let's go" />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>
                        Have an invite text?
                    </span>
                    
                </div>
            </Card>
        </div>
    );
};

export default Home;