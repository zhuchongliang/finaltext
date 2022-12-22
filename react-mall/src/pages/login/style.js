import styled from "styled-components"
export const Container = styled.div`
  padding: 0 25px;
`
export const Title = styled.h4`
  position: relative;
  height: 44px;
  line-height: 44px;
  font-size: 17px;
  text-align: center;
  color: #000;
  .back-arrow {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    font-family: "iconfont" !important;
    color: #FFF;
  }
`
export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index： -1;
  width: 100vw;
  height: 100vh;
  background-color: #6f6f71;
`
export const VideoBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  transform: translate(-50%, -70%);
  #canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
  #screenshotCanvas {
    position: absolute;
    top: 0;
    left: 0;
  }
`