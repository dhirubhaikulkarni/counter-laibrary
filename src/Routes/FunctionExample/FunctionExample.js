import React, { Component} from 'react';
import Home from "../Home";

class FunctionExample extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){



        // api calling
    }

    render(){
        return(
            <div>
                <h1><Home /></h1>
                <h1>Function Example Page </h1>
                {/* //Display the list using component */}
            </div>

        )
    }

}

export default FunctionExample