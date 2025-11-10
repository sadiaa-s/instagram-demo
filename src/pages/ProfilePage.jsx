import Header from "../components/Header";
import BottomNav  from "../components/BottomNav";
import Posts from "../components/Posts";

export default function ProfilePages() {
  return (
    <>
    <div className="page">
      <Header/>
      <Posts />
      <BottomNav />
      </div>
    </>
  )
}