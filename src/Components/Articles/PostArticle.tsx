import { useContext, type FormEvent } from "react";
import localSiteDemo from "../../../public/localSiteDemo";
import { LoginContextProvider } from "../../Contexts/LoginContextProvider";
import { UserContextProvider } from "../../Contexts/UserContextProvider";

export default function PostArticle() {
    const login = useContext(LoginContextProvider)
    const user = useContext(UserContextProvider)
    const post: {'author': string, 'title':string, 'featured_image': any, 'content': string, 'status': string} = {
        'author': user.id,
        'title': '',
        'featured_image':'',
        'content': '',
        'status': 'publish'
    }
    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        for (const [key, value] of formData.entries()) {
            post[key as keyof typeof post] = value;
        }
            console.log(post)
    await fetch(`${localSiteDemo}/wp/v2/posts`, { method: 'POST', headers: {'Content-Type': 'application/json','Authorization': `Bearer ${login.token}` },body: JSON.stringify(post) }
          ).then((res) => res.json()).catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col w-5/10">
                <label>Title</label>
                <input type="text" name="title" className="bg-white"/>
                <label>Content</label>
                <input type="text" name="content" className="bg-white"/>
                <label>Image</label>
                <input type="file" id="avatar" name="featured_image" accept="image/png, image/jpeg" className="bg-white"/>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}