import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { 
  Container, 
  Title, 
  InputContainer, 
  UserNameInput, 
  PhotoFileInput, 
  PhotoSelectButton,
  SubmitButton,
  QuickButton,
  QuickLogin
} from "./style"
import { uploadFacePhoto } from "../../api/request"
import actionToast from '../../baseUI/toast';

function Register() {
  const inputEle = useRef(null);
  const textInputEle = useRef(null);
  const onSelectPhoto = () => {
    inputEle.current.click();
  }

  const navigate = useNavigate();
  const onBack = () => {
    navigate("/")
  }
  const onLogin = () => {
    navigate("/login")
  }

  const onSubmit = () => {
    const formData = new FormData();
    const input = inputEle.current;
    const text = textInputEle.current.value;
    if (input.files.length >= 1 && text) {
      formData.append("photo", input.files[0]);
      formData.append("username", text);
      uploadFacePhoto(formData).then(() => {
        actionToast("上传人脸图片成功")
      }, () => {
        actionToast("上传人脸图片失败")
      });
    }
  }

  return (
    <Container>
      <Title><i className='back-arrow' onClick={onBack}></i>人脸识别注册</Title>
        <InputContainer>
          <label className='input-label'>用户名:</label>
          <UserNameInput ref={textInputEle}></UserNameInput>
        </InputContainer>
        <InputContainer>
          <label className='input-label'>选择相片:</label>
          <PhotoSelectButton onClick={onSelectPhoto}>点击选择</PhotoSelectButton>
          <PhotoFileInput ref={inputEle}></PhotoFileInput>
        </InputContainer>
        <SubmitButton onClick={onSubmit}>注册账号</SubmitButton>
        <QuickButton>
          <QuickLogin onClick={onLogin}>快速登录</QuickLogin>
        </QuickButton>
    </Container>
  )
}
export default React.memo(Register);