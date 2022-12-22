import React, {cloneElement} from 'react'
import styled, {keyframes} from 'styled-components'
import ReactDOM from 'react-dom';

const modalSlideInUp = keyframes`
  from {
    transform: translate3d(0, 50px, 0) scale(.5);
  }
  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
` 
const modalSlideInDown = keyframes`
	from {
		transform: translate3d(0, 0, 0) scale(1);
	}
	to {
		transform: translate3d(0, 50px, 0) scale(.5);
	}
`

const  modalFadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
` 
const modalFadeOut = keyframes `
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
const ModalComponent = styled.div`
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 999999;
		justify-content: center;
		align-items: center;
		background-color: rgba(#000, .5);
		&.show {
			animation: ${modalFadeIn} 300ms both;
			.modal-toast {
				animation: ${modalSlideInUp} 300ms both;
			}
		}
		&.hide {
			animation: ${modalFadeOut} 300ms both;
			.modal-toast {
				animation: ${modalSlideInDown} 300ms both;
			}
		}
    &.action-toast {
			background-color: transparent;
		}
`
const ModalToast = styled.div`
  overflow: hidden;
  padding: 5.25px 11.25px;
  border-radius: 3.75px;
  min-width: 37.5px;
  max-width: 210px;
  min-height: 22.5px;
  max-height: 70.5px;
  background-color: rgba(0, 0, 0, .8);
  line-height: 33px;
  text-align: center;
  font-size: 10.5px;
  color: #fff;
  word-break: break-all;
`
const Toast = function({ className, text }) {
	return (
		<ModalComponent className={`modal-component action-toast ${className}`}>
			<ModalToast>{text}</ModalToast>
		</ModalComponent>
	);
};

const WaitFor = (delay) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, delay)
})

export default async function actionToast(text = "提示") {
	const promise = new Promise((resolve) => {
		(async() => {
			if (document.getElementById("toast")) return;
			const toast = document.createElement("div");
			toast.setAttribute("id", "toast");
			const modal = <Toast className="show" text={text} />;
			document.body.append(toast);
			ReactDOM.render(modal, toast);
      await WaitFor(2000);
      ReactDOM.unmountComponentAtNode(toast);
      ReactDOM.render(cloneElement(modal, { className: "hide" }), toast);
      await WaitFor(300);
      ReactDOM.unmountComponentAtNode(toast);
      toast.remove();
      resolve(true);
		})().catch(err => console.log(err));
	});
}
