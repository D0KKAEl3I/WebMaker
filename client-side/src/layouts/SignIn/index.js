import axios from 'axios'
import styles from './signin.module.css'
export default function SignIn() {

    const signinToServer = (e) => {
        e.preventDefault()
        const { id, password } = e.target
        axios.post('http://localhost:8090/auth/signin', { id: id.value, password: password.value }).then(r => {

        }).catch(e => {
            alert('로그인 실패')
        })
    }

    return (
        <div className={styles.container}>
            <form className={styles.loginbox} onSubmit={signinToServer}>
            <img src="/img/login.png"></img>
                <input name="id" type="text" placeholder="아이디"></input>
                <input name="password" type="password" placeholder="비밀번호 "></input>
                {/* <label><input type="checkbox" name="stilllogin" className={styles.checkbox}></input>아이디 저장</label> */}
                <input type="submit" value="로그인" className={styles.submit}></input>
            </form>
        </div>
    )
}
