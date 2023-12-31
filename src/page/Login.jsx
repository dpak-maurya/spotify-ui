import classes from './Login.module.css';

function Login() {
  return (
    <div className={classes['login-page']}>
      <div className={classes['brand-logo']}>
        <img
          className={classes['image-18']}
          src='images/image-18.png'
          alt='logo'
        />
      </div>
      <div className={classes['extra-space']}></div>
      <a className={classes['login']}>
        <div className={classes['login2']}>Login</div>
      </a>
    </div>
  );
}

export default Login;
