import { useState } from "react";
import { useRouter } from 'next/router'
import { login } from '../services/auth.service'

export default function Login() {

  const [ user, setUser] = useState("");
  const [ password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasToken = await login( user, password)
    console.log(hasToken)
    if (hasToken) router.push("/");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="user">User</label>
        <input
          onChange={(e)=> setUser(e.target.value)}
          type="text"
          name="user"
          id="user"
        ></input>
        </div>
        <div>
        <label htmlFor="pwd">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="pwd"
          id="pwd"
        ></input>
        </div>
        <button>Login</button>
      </form>
    </main>
  )
}
