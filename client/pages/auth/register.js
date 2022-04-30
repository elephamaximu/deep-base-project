import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {registerRequest} from '@/modules/auth/register';
import {Register} from '@/components/auth/Register';

const RegisterPage = () => {
    const [user, setUser] = useState({
        userid: '',
        password: '',
        email: '',
        name: '',
        phone: '',
        birth: '',
        address: ''
    })
    const dispatch = useDispatch()
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        dispatch(registerRequest(user))
    }
    return (<Register onChange={onChange} onSubmit={onSubmit}/>);
};

// state -> 리덕스, props -> 리액트 , next -> mapper
const mapStateToProps = state => ({isRegistered: state.register.isRegistered});
const registerActions = {
    registerRequest
}

// 즉시 실행해서 위의 두 코드 동기화 -> 상태 동기화
export default connect(mapStateToProps, registerActions)(RegisterPage);