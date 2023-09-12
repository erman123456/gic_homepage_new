import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Label from '../../../components/atoms/Label'
import MainInput from '../../../components/atoms/MainInput'
import MainButton from '../../../components/atoms/MainButton'
import MainContent from '../../../components/atoms/MainContent'
import PhoneNumberInput from '../../../components/atoms/PhoneNumberInput'
import SectionTitle from '../../../components/atoms/SectionTitle'
import { MainColor } from '../../../config/Design/Color'
import { useHistory } from 'react-router-dom'
import InputInfo from '../../../components/atoms/InputInfo'
import ReCAPTCHA from "react-google-recaptcha";

const RegisterForm = () => {
    const [isError ,setIsError] = useState(false)  // eslint-disable-line
    const [isSuccess,setIsSuccess] = useState(false) // eslint-disable-line
    const {t} = useTranslation()
    const history = useHistory()
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 col-lg-5 text-center">
                        <SectionTitle title={t('register-page.title')}/>
                    </div>
                    <div className="col-12 mt-5">
                        {isError &&
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-5">
                                    <InputInfo error={isError} />
                                </div>
                            </div>
                        }
                        {isSuccess &&
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-5">
                                    <InputInfo success={isSuccess} />
                                </div>
                            </div>
                        }
                        <div className="row justify-content-center mt-5">
                            <div className="col-12 col-lg-5">
                                <Label title={t('register-page.email')} required />
                                <MainInput  />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="col-12 col-lg-5">
                                <Label title={t('register-page.password')} required />
                                <MainInput type="password"  />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="col-12 col-lg-5">
                                <Label title={t('register-page.phone')} required />
                                <PhoneNumberInput />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="col-12 col-lg-5">
                                <Label title={t('register-page.referral')} />
                                <MainInput  />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="col-12 col-lg-3">
                                <ReCAPTCHA
                                    sitekey="6Le6WsobAAAAAAhXTw1Pz5xvMQhgS6nCjQW1KpOj"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-12 col-lg-5">
                                <MainButton style={{width:'100%'}} title={t('register-page.button')}/>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-12 col-lg-5 text-center">
                                <MainContent style={{fontSize:14}} content={t('register-page.already')} /> 
                                <MainContent onClick={() => {history.push('/login')}} style={{marginLeft:5, color:MainColor, fontSize:14, cursor:'pointer'}} content={t('register-page.login')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
