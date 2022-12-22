import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'

import "../../assets/tracking"
import "../../assets/face-min"

import { 
  Container, 
  Title, 
  Mask,
  VideoBox
} from "./style"

import init from "./face"

function Login() {
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  }

  const videoEl = useRef(null);
  const screenshotCanvasEl = useRef(null);
  const canvasEl = useRef(null);
 
  useEffect(async () => {
    await init(videoEl, screenshotCanvasEl, canvasEl, navigate);
  }, [])
  return (
    (
      <Container>
        <Title><i className='back-arrow' onClick={onBack}></i> </Title>
          <VideoBox className="video-box">
            <video 
              id="video" 
              width="320" 
              height="240" 
              preload="preload" 
              autoPlay={true} 
              loop={true} 
              muted={true}
              ref={videoEl}
            />
            <canvas 
              id="canvas" 
              width="320" 
              height="240" 
              ref={canvasEl}
            />
            <canvas 
              id="screenshotCanvas" 
              width="320" 
              height="240" 
              ref={screenshotCanvasEl}
            />
          </VideoBox>
          <Mask />
      </Container>
    )
  )
}
export default React.memo(Login);
