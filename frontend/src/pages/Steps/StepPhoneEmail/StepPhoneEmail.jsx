import React from 'react';
import { useState } from 'react';
import Email from './Email/Email';
import Phone from './Phone/Phone';
import styles from './StepPhoneEmail.module.css'
const PhoneEmailMap = {
    phone : Phone,
    email : Email
};

const StepEmailPhone = ({onNext}) =>{

    const [type, settype] = useState('phone');
    const Component = PhoneEmailMap[type];

//   function onNext() {
//       setStep(step + 1);
//   }
    return (
        <>
           <div className={styles.cardWrapper}>
              <div>
                <div className={styles.buttonWrap}>
                    <button onClick={()=> settype('phone')} className={`${styles.tabButton} ${   type === 'phone' ? styles.active : ''  }`}><img src='https://raw.githubusercontent.com/codersgyan/codershouse-mern/part-4/frontend/public/images/phone-white.png' alt='phone'></img></button>
                    <button onClick={()=> settype('email')} className={`${styles.tabButton} ${   type === 'email' ? styles.active : ''  }`}><img src='https://raw.githubusercontent.com/codersgyan/codershouse-mern/part-4/frontend/public/images/mail-white.png' alt='email'></img></button>

                </div>
                    <Component onNext={onNext}></Component>

              </div>


           </div>




        </>
    )

}

export default StepEmailPhone;