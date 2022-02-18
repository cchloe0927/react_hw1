  //StarPage에서 평점에 색을 부여하기 위해 생각했던 방법들!
  
  
  // const s_circle = React.useRef(null);
  // Ref를 사용할 수 있게 하는 훅  null: 초기값으로 지정할 값

  // const hoverEvent = () => {
  //   s_circle.current.style.background = "yellow";
  // };

  // React.useEffect(() => {
  //   s_circle.current.addEventListener("click", hoverEvent);
  //   return () => {
  //     s_circle.current.removeEventlistener("click", hoverEvent);
  //   };
  // }, []);
  //