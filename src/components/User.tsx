import { useSelector } from 'react-redux'
import { selectUsername, setUsername } from '../redux/slices/userSlice'
import { useAppDispatch } from '../redux/store'
import { ChangeEvent, FormEvent, useState } from 'react'

const User = () => {
  const username = useSelector(selectUsername)
  const dispatch = useAppDispatch()
  const [newName, setNewName] = useState('')

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setUsername(newName))
  }

  return (
    <div>
      <h2>User: {username}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={handleChangeName} />
        <button type="submit">Change name</button>
      </form>
    </div>
  )
}

export default User
