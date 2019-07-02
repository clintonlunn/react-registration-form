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

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form>
                <input name="firstName" placeholder="first name" value={this.state.firstName} onChange={e => this.change(e)} /><br />
                <input name="lastName" placeholder="last name" value={this.state.lastName} onChange={e => this.change(e)} /><br />
                <input name="NPINumber" placeholder="npi number" value={this.state.NPINumber} onChange={e => this.change(e)} /><br />
                <input name="businessAddress" placeholder="business address" value={this.state.businessAddress} onChange={e => this.change(e)} /><br />
                <input name="telephoneNumber" placeholder="telephone number" value={this.state.telephoneNumber} onChange={e => this.change(e)} /><br />
                <input name="emailAddress" placeholder="email address" value={this.state.emailAddress} onChange={e => this.change(e)} /><br />
                <button onClick={(e) => this.onSubmit(e)}>submit</button>
            </form>
        )
    }
}
export { Form };


{/* <input placeholder="last name" value={this.state.lastName} />
<input placeholder="npi number" value={this.state.NPINumber} />
<input placeholder="business address" value={this.state.businessAddress} />
<input placeholder="telephone number" value={this.state.telephoneNumber} />
<input placeholder="email address" value={this.state.emailAddress} /> */}