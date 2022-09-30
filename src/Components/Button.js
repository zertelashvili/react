import React from "react";
class Button extends React.Component {
    sayHello = (name) => {

        alert('hello' + name)
    }
    render() {
        return (
            <button onClick={() => this.sayHello(' tiko')} style={{ width: '100px', height: '100px', backgroundColor: 'pink' }}>sayHello</button>
        )
    }

}
export default Button;