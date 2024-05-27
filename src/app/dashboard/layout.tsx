export default function Layout({ admin, user }: any) {
  let routes = "admin"

  return <div>{routes === "admin" ? admin : user}</div>
}
