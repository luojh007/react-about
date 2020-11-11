import React, { useRef, useEffect } from "react";
import { Button } from "antd";
export default function EventAbout() {
  const nativeEleRef = useRef();
  const reactNativeRef = useRef();
  function reactClick() {
    console.log("react事件点击");
  }
  function reactNativeClick() {
    console.log('')
  }
  useEffect(() => {
    nativeEleRef.current.addEventListener("click", function native() {
      console.log("原生事件的点击");
    });
    reactNativeRef.current.addEventListener("click", function reactNative() {
      console.log("react+原生事件的点击");
    });
    console.log(nativeEleRef);
  }, []);
  return (
    <div>
      <Button onClick={reactClick}>react事件</Button>
      <button ref={nativeEleRef}>原生事件</button>
      <button ref={reactNativeRef} onClick={reactNativeClick}>
        react+原生事件
      </button>
    </div>
  );
}
