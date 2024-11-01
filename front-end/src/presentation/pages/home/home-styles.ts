import styled from 'styled-components'

export const Alert = styled.div`
  background-color: #fff;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
  top: 90px;
  left: 0;
  right: 0;
  z-index: 999;

  h1 {
    font-size: $size-extra-small;
    font-weight: $weight-normal;
    padding: 1.175rem 0;
    line-height: 1.275rem;
    padding-right: 1.575rem;
  }
  
  icon {
    @include hover-pointer;
    font-size: $size-medium;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 724px) {
      font-size: $size-large;
    }
  }
`
