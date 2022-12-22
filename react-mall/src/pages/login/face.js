import { checkForLoginByFace } from "../../api/request"

const sleep = (delay) => new Promise((resolve) =>{
  setTimeout(() => {
    resolve()
  }, delay)
})
const setUserInfo = (username) => {
  window.localStorage.setItem("username", username);
}

let video, screenshotCanvas, canvas, navigate;
let uploadLock = true;

async function init(videoEl, screenshotCanvasEl, canvasEl, nav) {
  navigate = nav;
  video = videoEl.current;
  screenshotCanvas = screenshotCanvasEl.current;

  canvas = canvasEl.current;
  let context = canvas.getContext("2d");

  // 固定写法
  let tracker = new window.tracking.ObjectTracker("face");
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  window.tracking.track("#video", tracker, {
    camera: true,
  });

  await sleep(2000);

  tracker.on("track", function (event) {
    // 检测出人脸 绘画人脸位置
    context.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach(function (rect) {
      context.strokeStyle = "#0764B7";
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);

      // 上传图片
      uploadLock && screenshotAndUpload();
    });
  });
}
async function screenshotAndUpload() {
  // 上锁避免重复发送请求
  uploadLock = false;

  // 绘制当前帧图片转换为base64格式
  let canvas = screenshotCanvas;
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  // 将图片保存为png格式
  let base64Img = canvas.toDataURL("image/png");

  // 使用 base64Img 请求接口即可
  let {data} = await checkForLoginByFace(base64Img);
  let username = data.msg[0];
  if (username && username != "no match") {
    setUserInfo(username);
    navigate("/my");
  } else {
    uploadLock = true;
  }
  
  //我后端地址是localhost:3000，我这里用了webpack代理解决跨域

  // 请求接口成功以后打开锁
  // await this.sleep(1500);
  // this.uploadLock = true;
};
export default init;