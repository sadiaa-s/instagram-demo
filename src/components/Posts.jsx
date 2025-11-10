import { useEffect, useState } from "react";
import Myposts from "./Myposts";
import axios from "axios";
import Button from "react-bootstrap/Button"

export default function Posts() {

  const[filtered,setFiltered]=useState([]);
  const [posts,setPosts]=useState([]);

  const fetchData = async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <>
      <div className="tab-nav">
        <button onClick={() => setFiltered(posts.filter((item)=>item.userId===1))}>Post</button>
        <button onClick={() => setFiltered(posts.filter((item)=>item.userId===2))}>Reels</button>
        <button onClick={() =>setFiltered(posts.filter((item)=>item.userId===3))}>Tagged</button>
      </div>
        <Myposts  posts={filtered}/>
    </>
  );
}