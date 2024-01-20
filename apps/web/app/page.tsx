import { trpc } from "@web/app/trpc";

export default async function Home() {
  const { users } = await trpc.user.list.query();
  const { posts } = await trpc.post.list.query();
  return (
    <>
      <h1>HOME</h1>
      <h2>USER</h2>
      {users.map((user) => (
        <div key={user.id}>
          {user.id} - {user.name}
        </div>
      ))}

      <h2>POST</h2>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id} - {post.title}
        </div>
      ))}
    </>
  )
}
