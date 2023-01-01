import Button from "../../../../components/shared/Button/Button";
import Card from "../../../../components/shared/Card/Card";
import styles from "../StepPhoneEmail.module.css";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import { useState } from "react";
import { sendOtp } from '../../../../http/index';
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/authSlice';

const Phone = ({onNext}) =>{
  const [phonenumber,setphonenumber] = useState("");
  const dispatch = useDispatch();

 const onsubmit=(e)=>{
  const a = e.target.value
  setphonenumber(a);
 }

  async function submit() {
    const { data } = await sendOtp({ phone : phonenumber });
    console.log(data);
    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    onNext();
  }
  return (
  <Card title="Enter Your Phone Number" icon="https://raw.githubusercontent.com/codersgyan/codershouse-mern/part-4/frontend/public/images/phone.png">
    <TextInput value={phonenumber} onChange={onsubmit}></TextInput>
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text={"Next"} onClick={submit}>  </Button>
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
</Card>
  )
}

export default Phone;