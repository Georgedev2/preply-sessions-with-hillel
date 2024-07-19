import TextInput from '../components/ui/TextInput';
import styles from './login.module.css';

const LoginPage = () => {
  return (
    <form className={styles.loginForm }>
<h3>Login Form</h3>
      <TextInput />
      <TextInput />
      <TextInput />
    </form>
  );
};

export default LoginPage;
