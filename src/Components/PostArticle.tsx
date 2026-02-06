import { type FormEvent } from "react";
// import localSiteDemo from "../../public/localSiteDemo";
// import { LoginContextProvider } from "../Contexts/LoginContextProvider";
// import { UserContextProvider } from "../Contexts/UserContextProvider";

export default function PostArticle() {
    // const login = useContext(LoginContextProvider)
    // const user = useContext(UserContextProvider)
    // const post = {
    //     'author': user.id,
    //     'title': '',
    //     'featured_image':'',
    //     'content': '',
    //     'status': 'publish'
    // }
    

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    //     const formData = new FormData(e.target)
    //     for (let entry of formData.entries()) {
    //         let key = entry[0]
    //         post[key] = entry[1]
    //     }
    //         console.log(post)
    // await fetch(`${localSiteDemo}/wp/v2/posts`, { headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${login.token}`, method: 'POST', body: JSON.stringify(post) } }
    //       ).then((res) => res.json()).catch((err) => console.log(err))
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