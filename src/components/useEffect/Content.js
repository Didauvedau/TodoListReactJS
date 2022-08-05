import React, { useEffect, useRef, useState } from "react";

const listApis = ["posts", "comments", "albums", "photos", "todos", "users"];

const Content = () => {
  //useEffect(callback,[deps])

  //1. useEffect(callback)
  //   - [Goi callback moi khi component re-render]
  //   - [Gọi callback sau khi component thêm element vào DOM]

  //2. useEffect(callback,[])
  //   - chỉ gọi callback 1 lần

  //3. useEffect(callback,[deps])
  // - goin callback mỗi khi deps thay đổi

  //   cleanup function luôn được gọi trước khi component unmounted
  //

  const [title, setTitle] = useState("posts");

  const [posts, setPosts] = useState([]);

  const [api, setApi] = useState("posts");

  const [showScroll, setShowScroll] = useState(false);

  //get APi data and change title
  useEffect(() => {
    document.title = title;

    fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then((res) => res.json())
      .then((value) => {
        setPosts(value);
      });
  }, [api, title]);

  //Hide and Show button goto Top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setTitleApi = (value) => {
    setApi(value);
    setTitle(value);
  };

  return (
    <div className="mt-2">
      <h1>Hello World</h1>
      <div className="mt-2 p-3 border border-danger d-flex justify-content-center align-items-center">
        {listApis.map((listApi) => (
          <button
            key={listApi}
            style={
              listApi === api
                ? {
                    color: "white",
                    backgroundColor: "violet",
                    border: "1px solid violet",
                  }
                : {}
            }
            onClick={() => setTitleApi(listApi)}
            className="m-2 btn btn-outline-primary"
          >
            {listApi}
          </button>
        ))}
      </div>
      {showScroll && (
        <button
          className="scroll btn btn-outline-success fs-2 rounded-circle"
          onClick={() => window.scrollTo(0, 0)}
        >
          ^
        </button>
      )}
      <div className="m-2">
        <ul className="d-flex flex-nowrap flex-column justify-content-start align-content-start text-start p-2">
          {posts.map((post) => (
            <li key={post.id} className="m-2">
              id : {post.id} and title : {post.title || post.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
