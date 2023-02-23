import {ChangeEvent, useCallback, useState} from 'react'

type LoginFormType = Record<'id' | 'password', string>
const initialFormState = {id: '', password: ''}

export default function Login() {
  const [{id, password}, setForm] = useState<LoginFormType>(initialFormState)

  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: e.target.value}))
    },
    []
  )

  const loginAccount = useCallback(() => {
    console.log(id)
    console.log(password)
  }, [id, password])

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="아이디" value={id} onChange={changed('id')} />
      <input
        type="password"
        placeholder="패스워드"
        value={password}
        onChange={changed('password')}
      />
      <button type="submit" onClick={loginAccount}>
        로그인
      </button>
    </div>
  )
}
