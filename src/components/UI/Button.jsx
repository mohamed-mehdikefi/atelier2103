import React from 'react'
import {Button} from 'react-bootstrap'

function CustomButton({className,variant,name}) {
  return (
    <div>
        <Button className={className} variant={variant} > {name}
        </Button>
    </div>
  )
}

export default CustomButton