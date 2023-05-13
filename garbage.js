import { getComponent } from "../CustomProfileComponents";
import "../styles/CellV1.css";
import { useDrag } from "react-dnd";
import { useState, useRef, useEffect } from "react";

const CellV2 = ({
  customIndex,
  component,
  x,
  y,
  width,
  height,
  color,
  index,
  profileData,
  editing,
  handleDelete,
  setEditing,
  editComponent,
  addComponent,
  setColor,
  setCoords,
}) => {
  const ref = useRef(null);
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const refTop = useRef(null);
  const refBottom = useRef(null);
  const [cursorPos, setCursorPos] = useState({
    x: null,
    y: null,
    height: null,
    offsetLeft: null,
    offsetTop: null,
  });
  const cursorPosRef = useRef({});
  // cursorPosRef.current = {
  //   ...cursorPos,
  //   ...cursorPosRef.current,
  // };
  const [showActions, setShowActions] = useState(false);

  console.log("====cursorPosRef.current====", cursorPosRef.current);

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "component",
    item: {
      id: index,
      label: component,
      ref: cursorPosRef,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let x = 0;
    let y = 0;

    // ----------- Right -------------------

    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      setCoords(index, resizeableEle.getBoundingClientRect());
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizeableEle.style.left = styles.left;
      resizeableEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // ----------- Left -------------------

    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = (event) => {
      setCoords(index, resizeableEle.getBoundingClientRect());
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      x = event.clientX;
      resizeableEle.style.right = styles.right;
      resizeableEle.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // ----------- Top -------------------

    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - y;
      height = height - dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpTopResize = (event) => {
      setCoords(index, resizeableEle.getBoundingClientRect());
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // ----------- Bottom -------------------

    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - y;
      height = height + dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event) => {
      setCoords(index, resizeableEle.getBoundingClientRect());
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.top = styles.top;
      resizeableEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);
    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);
    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
    };
  }, []);

  const handleComponentEdit = (e, comp) => {
    e.preventDefault();
    if (editing === comp) setEditing("");
    else setEditing(comp);
  };
  // console.log("====ref.current.offsetTop====", ref.current?.offsetTop);
  // if(ref.current?.offsetTop){
  //   cursorPosRef.current.offsetTop = ref.current.offsetTop;
  //   cursorPosRef.current.offsetLeft = ref.current.offsetLeft;
  // }

  const handleCursorMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    // var x = e.clientX - rect.left; //x position within the element.
    //   var y = e.clientY - rect.top;  //y position within the element.
    //   console.log("Left? : " + x + " ; Top? : " + y + ".");

    // cursorPosRef.current.x =  e.screenX - e.clientX;
    // cursorPosRef.current.y =  e.screenY - e.clientY;
    // cursorPosRef.current.height =  ref.current.getBoundingClientRect().height;
    // cursorPosRef.current.cursorX =  e.clientX - rect.left;
    // cursorPosRef.current.cursorY =  e.clientY - rect.top;;
  };
  return (
    <div
      className="cell-container-v1"
      style={{
        top: y ? y : 10,
        left: x ? x : 10,
        background: color ? color : "white",
        width: width ? width + "px" : "auto",
        height: height ? height + "px" : "auto",
      }}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      ref={ref}
    >
      <div
        className={`resizer-v1 resizer-r-v1 ${
          component === "Vertical Line" ? "resizer-hidden" : ""
        }`}
        ref={refRight}
      ></div>
      <div
        className={`resizer-v1 resizer-l-v1 ${
          component === "Vertical Line" ? "resizer-hidden" : ""
        }`}
        ref={refLeft}
      ></div>
      <div
        className={`resizer-v1 resizer-t-v1 ${
          component === "Horizontal Line" ? "resizer-hidden" : ""
        }`}
        ref={refTop}
      ></div>
      <div
        className={`resizer-v1 resizer-b-v1 ${
          component === "Horizontal Line" ? "resizer-hidden" : ""
        }`}
        ref={refBottom}
      ></div>
      {component !== "Horizontal Line" && component !== "Vertical Line" ? (
        <div
          className="cell-v1"
          ref={dragRef}
          onMouseDown={handleCursorMove}
          style={{ background: color ? color : "white" }}
        >
          {showActions && (
            <div className="buttons-container">
              <button onClick={(e) => handleComponentEdit(e, component)}>
                <img
                  src={
                    component !== "Title" && editing === component
                      ? "/close.png"
                      : "/edit-blue.png"
                  }
                  alt={editing === component ? "close" : "edit"}
                  className="cell-action"
                />
              </button>
              <button>
                <img
                  src="/trash-blue.png"
                  alt="Delete"
                  className="cell-action"
                  onClick={() => handleDelete(component)}
                />
              </button>
              <button>
                <label>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(index, e.target.value)}
                    className="color-input cell-action"
                  />
                  <img
                    src="/color-picker-blue.png"
                    alt="Delete"
                    className="cell-action color-picker-image"
                  />
                </label>
              </button>
            </div>
          )}
          {getComponent({
            component,
            data: profileData,
            editing,
            editComponent,
            addComponent,
            customIndex,
          })}
        </div>
      ) : component === "Horizontal Line" ? (
        <div
          className="horizontal-line-container"
          style={{
            width: width ? "100%" : "200px",
            height: "4px",
          }}
          ref={dragRef}
          onMouseDown={handleCursorMove}
        >
          <div>
            <button
              className="remove-horizontal-line"
              onClick={() => handleDelete(component)}
            >
              <img src="/close.png" />
            </button>
            <button className="colorpicker-v1">
              <label>
                <img
                  src="/color-picker-blue.png"
                  alt="Delete"
                  className="cell-action color-picker-image"
                />
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(index, e.target.value)}
                  className="color-input cell-action"
                />
              </label>
            </button>
          </div>
        </div>
      ) : (
        <div
          className="vertical-line-container"
          style={{
            height: width ? "100%" : "200px",
            width: "4px",
          }}
          ref={dragRef}
          onMouseDown={handleCursorMove}
        >
          <div>
            <button
              className="remove-vertical-line"
              onClick={() => handleDelete(component)}
            >
              <img src="/close.png" />
            </button>
            <button className="colorpicker-v1-vertical">
              <label>
                <img
                  src="/color-picker-blue.png"
                  alt="Delete"
                  className="cell-action color-picker-image"
                />
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(index, e.target.value)}
                  className="color-input cell-action"
                />
              </label>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CellV2;
