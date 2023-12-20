import { useState } from "react"
import { Input } from "./components/Input"
import { Button, Wrapper } from "./styles"

interface Post {
  title: string
  autor: string
  category: string
  date: string
}

export function Form() {
  const [postsState, setPostsState] = useState<Post[]>([])
  const [postState, setPostState] = useState<Post>({
    title: "",
    autor: "",
    category: "",
    date: ""
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setPostState(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    const newPost: Post = {

    }
    console.log(postState)
    console.log(postsState)
    setPostsState(prev => [...prev, postState])
  }

  return (
    <Wrapper>
      <Input
        name="title"
        type="text"
        value={postState.title}
        placeholder="Título"
        onChange={handleChange}
        required
      />
      <Input
        name="autor"
        type="text"
        value={postState.autor}
        placeholder="Autor"
        onChange={handleChange}
        required
      />
      <Input
        name="category"
        type="text"
        value={postState.category}
        placeholder="Categoria"
        onChange={handleChange}
        required
      />
      <Input
        name="date"
        type="date"
        placeholder="Data"
        value={postState.date}
        onChange={handleChange}
        required
      />
      <Button onClick={handleSubmit}>Publicar Post</Button>
    </Wrapper>
  )
}
