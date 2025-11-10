export default function Myposts({ posts }) {
  return (
    <>
      {posts.map(item  => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}