import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ProFormText } from '@ant-design/pro-form';

const SignInForm = () => {
    return <>
    <ProFormText name="username" fieldProps={{
        size: 'large',
        prefix: <UserOutlined className={'prefixIcon'}/>,
    }} placeholder={'Username'} rules={[
        {
            required: true,
            message: 'Please enter user name',
        },
    ]}/>
    <ProFormText.Password name="password" fieldProps={{
        size: 'large',
        prefix: <LockOutlined className={'prefixIcon'}/>,
    }} placeholder={'Password'} rules={[
        {
            required: true,
            message: 'Please enter password',
        },
    ]}/>
  </>
}

export default SignInForm;