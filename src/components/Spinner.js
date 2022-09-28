import React, { PureComponent } from 'react'
import loading from './loading.gif'
class Spinner extends PureComponent {


    render() {
        return (
           <div className="text-center">
           <img className='my-3' src={loading} alt="loading" />
           </div> 
        )
    }
}

export default Spinner