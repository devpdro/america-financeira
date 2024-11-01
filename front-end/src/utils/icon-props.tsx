import React from 'react'

import { IconBaseProps } from 'react-icons'

const IconWithProps = (props: IconBaseProps & { onClick?: () => void; className?: string }) => {
  const { onClick, className, children, ...restProps } = props
  return (
    <span onClick={onClick} className={className}>
      {React.cloneElement(children as React.ReactElement, restProps)}
    </span>
  )
}

export default IconWithProps
