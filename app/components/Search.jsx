import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes} from "styled-components";
import ArrowRightIcon from "../assets/IconRightArrow";
import { IoMdSearch } from "react-icons/io";
import { getListProperty } from "./API";
import Link from "next/link";
import PropTypes from 'prop-types';

const SearchWrapper = styled.div`
position: absolute;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 100%;
  border: 0.5px solid #535353;
  padding: 5px;
  background: #222831;
  transition: all 0.5s ease-out;
  right:0;
  margin-right: 6px;
  margin-bottom: 1px;
  z-index: 9;

  ${({ hover }) =>
    hover &&
    css`
      width: 97%;
      height: 30px;
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
    
    `}
`;
const SearchInput = styled.input`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 14px;
  border-radius: 100px;
  padding: 0 20px;
  margin: 0;
  z-index: 10;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};`;
  
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const IconCommonCss = css`
height: 18px;
width: 18px;
fill: #fff;
z-index: 9;
animation: ${fadeIn} 1s linear;
`;

const IconRightArrow = styled(ArrowRightIcon)`
position: absolute;
${IconCommonCss}
z-index: 10;
cursor: pointer;
&:hover {
  fill: #00adb5;
}
`;
SearchWrapper.propTypes = {
  hover: PropTypes.bool, 
  showSearchInput: PropTypes.bool
}

SearchWrapper.shouldForwardProp = (prop) => 
  prop !== 'hover' && prop !== 'showSearchInput';

  SearchInput.propTypes = {
    showSearchInput: PropTypes.bool  
  };
  
  SearchInput.shouldForwardProp = prop => 
    prop !== 'showSearchInput';

const IconMagnifyingGlass = styled(IoMdSearch)`
${IconCommonCss}
`;

export default function Search() {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const showSearchInput = isHovered || isFocused;
  const handleBlur = () => {
    setTimeout(() => {
      setSearchTerm('');
      setIsFocused(false);
    }, 200);
  };
  const convertPrice = (price) => {
    const hasTrailingZeros = price % 1000000 === 0;
    if (price >= 1000000000 && hasTrailingZeros) {
      return `${(price / 1000000000).toFixed(0)} tỷ`;
    } else if (price >= 1000000) {
      return `${(price / 1000000).toFixed(0)} triệu`;
    } else {
      return `${price}`;
    }
  };
  const filteredData = data.filter(item => 
    item.property_name.toLowerCase().includes(searchTerm.toLowerCase())
  );  useEffect(() => {
    getListProperty().then((res) => {
      setData(res.elements);
    });
  }, []);  
  return (
    
<>
    <SearchWrapper
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onFocus={() => setIsFocused(true)}
    onBlur={handleBlur  }
    hover={showSearchInput}>
      <SearchInput ref={targetRef} showSearchInput={showSearchInput} value={searchTerm}   onChange={(e) => setSearchTerm(e.target.value)}></SearchInput>
      {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
    </SearchWrapper>
    {searchTerm && filteredData.length > 0 && (
    <div className="absolute top-0 translate-y-12 bg-[#fff] shadow-md rounded-lg w-[388px] max-h-[350px] h-auto flex-wrap overflow-y-scroll p-1 ">
      {filteredData.map(item => (
        <Link href={`/properties/${item.property_id}`}>
        <div 
        className="flex flex-row  max-w-[388px] mb-[5px] shadow-md rounded-lg"
        key={item.property_id}>
          <img src={item.image_url} className="w-[100px] h-[100px] rounded-lg"/>
          <div className="flex flex-col ml-1 gap-y-2 ">
            <span className="text-[#000] text-xl font-semibold ">{`${item.property_name}`}</span>
            <span className="text-[#806056] text-base font-bold"><span className="text-[#000] text-base font-bold">Giá: </span>{`${convertPrice(item.price)}`}</span>
            <span className="text-[#000] text-sm font-semibold">{`Địa chỉ: ${item.district_name}, ${item.province_name}`}</span>
            </div>
        </div>
      </Link>
      ))}
    </div>
  )}
  </>
  
  
  )

}


