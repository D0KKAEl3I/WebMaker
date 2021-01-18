import axios from 'axios'
import styles from './signup.module.css'
export default function SignUp() {

    const signupToServer = (e) => {
        e.preventDefault()
        const { id, password, first_name, last_name, username } = e.target
        axios.post('http://localhost:8090/auth/signup', { id: id.value, password: password.value, first_name: first_name.value, last_name: last_name.value, username: username.value }).then(r => {

        }).catch(e => {
            alert('회원가입 실패')
        })
    }

    return (
        <div className={styles.container}>
            <form className={styles.loginbox} onSubmit={signupToServer}>
                <input name="first_name" type="text" placeholder="성"></input>
                <input name="last_name" type="text" placeholder="이름"></input>
                <input name="username" type="text" placeholder="닉네임"></input>
                <input name="id" type="text" placeholder="아이디"></input>
                <input name="password" type="password" placeholder="비밀번호 "></input>
                <input type="submit" value="회원가입" className={styles.submit}></input>
            </form>
        </div>
    )
}
