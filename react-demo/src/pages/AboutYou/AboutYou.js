import React from "react";

class AboutYou extends React.Component{
    constructor(){
        super();
            this.state = {
                firstName: 'Monday Xiong',
                dateOfBirth: '',
                currentDate: '032921',
            }
    }

    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}

export default AboutYou;