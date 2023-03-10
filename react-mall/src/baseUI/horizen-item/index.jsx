import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import Scroll from '../scroll'
import { PropTypes } from 'prop-types';
import style from '../../assets/Global-style';

//样式部分
const List = styled.div`
  /* position: fixed; */
  /* z-index: 999; */
  background-color: ${style["background-color"]};
  top: 0;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: center;
  overflow: hidden;
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 5px;
  border-radius: 10px;
  &.selected{
    color: ${style["theme-color"]};
    opacity: 0.8;
  }
`

function Horizen(props) {
  const [refreshCategoryScroll, setRefreshCategoryScroll] = useState(false);
  const Category = useRef(null);
  const { list, oldVal, title } = props;
  const { handleClick } = props;

  useEffect(() => {
    let categoryDOM = Category.current;
    let tagElems = categoryDOM.querySelectorAll("span");
    let totalWidth = 0;
    Array.from(tagElems).forEach(ele => {
      totalWidth += ele.offsetWidth;
    });
    totalWidth += 2;
    categoryDOM.style.width = `${totalWidth}px`;
    setRefreshCategoryScroll(true);
  }, [refreshCategoryScroll]);

  const clickHandle = (item) => {
    handleClick(item.key);
  }
  return (
    <Scroll direction={"horizental"} refresh={true}>
      <div ref={Category} >
        <List>
          <span>{title}</span>
          {
            list.map((item) => {
              return (
                <ListItem
                  key={item.key}
                  className={oldVal === item.key ? 'selected' : ''}
                  onClick={() => clickHandle(item)}>
                  {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  );
}

Horizen.defaultProps = {
  list: [],
  handleClick: null
};

Horizen.propTypes = {
  list: PropTypes.array,
  handleClick: PropTypes.func
};

export default memo(Horizen);