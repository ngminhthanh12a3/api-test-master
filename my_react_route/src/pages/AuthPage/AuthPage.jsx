import { LoginForm } from '@ant-design/pro-form';
import { Row, Tabs } from 'antd';
import { useState } from 'react';
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import styles from './index.less';

export default () => {
    const [loginType, setLoginType] = useState('signin');
    return (<div style={{ backgroundColor: 'white' }}>
        {/* <Row justify="center"> */}
        <div className={styles.container}>

            <LoginForm style={{minWidth: "328px", maxWidth: "500px"}} submitter={{ searchConfig: { submitText: 'Submit',restText: 'Submit'}}} title="Authentication Page" >
                <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey)}>
                <Tabs.TabPane key={'signin'} tab={'Signin'}/>
                <Tabs.TabPane key={'signup'} tab={'Signup'}/>
                </Tabs>
                {loginType === 'signin' && (<SignInForm/>)}
                {loginType === 'signup' && (<SignUpForm/>)}
                <div style={{
                    marginBottom: 24,
                }}>
                
                </div>
            </LoginForm>
        </div>
        {/* </Row> */}
    </div>);
};