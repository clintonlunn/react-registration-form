import React from 'react';


// export default class Form extends React.Component {
class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        NPINumber: '',
        businessAddress: '',
        telephoneNumber: '',
        emailAddress: ''
    }

    render() {
        return (
            <form>
                <input placeholder="first name" value={this.state.firstName} />
                <input placeholder="last name" value={this.state.lastName} />
                <input placeholder="npi number" value={this.state.NPINumber} />
                <input placeholder="business address" value={this.state.businessAddress} />
                <input placeholder="telephone number" value={this.state.telephoneNumber} />
                <input placeholder="email address" value={this.state.emailAddress} />
                <button>submit</button>
            </form>
        )
    }
}
export { Form };