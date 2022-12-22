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
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    font-family: "iconfont" !important;
  }
`
export const InputContainer = styled.div`
  position: relative;
  height: 30px;
  margin-top: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #efefef;
  .input-label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 70px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
  }
`
export const UserNameInput = styled.input.attrs({
  type: "text",
  placeholder: "请输入用户名",
  name: "username",
})`
  width: calc(100% - 70px);
  height: 100%;
  padding: 0 0 0 80px;
  border: 0;
  outline: none;
`
export const PhotoFileInput = styled.input.attrs({
  type: "file",
  name: "photo"
})`
  display: none;
`
export const PhotoSelectButton = styled.button`
  height: 30px;
  margin-left: 80px;
  padding: 0 20px;
  border: 0;
  border-radius: 4px;
  background-color: #00cbcc;
  font-size: 14px;
  color: #fff;
  line-height: 30px;
` 
export const SubmitButton = styled.button.attrs({
  type: "submit"
})`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border: 0;
  border-radius: 25px;
  background-color: #00cbcc;
  color: #fff;
`
export const QuickButton = styled.p`
  margin-top: 20px;
  text-align: right;
`
export const QuickLogin = styled.span`
  color: #00000066;
`