import styles from './signin.module.css'
export default function SignIn(){
       return(
            <div className={styles.container}> 
                <form className={styles.loginbox} action="http://localhost:8090/auth/signin">
                    <input name="id" type="text" placeholder="아이디"></input>
                    <input name="password" type="password"  placeholder="비밀번호 "></input>
                    {/* <label><input type="checkbox" name="stilllogin" className={styles.checkbox}></input>아이디 저장</label> */}
                    <input type="submit" value="로그인" className={styles.submit}></input>
                </form>
            </div>
       )
}
 