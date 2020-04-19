import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.props.onSelectChange(value);
    }

    render() {
        let options = null;

        //console.log(this.props);
        if (this.props.availableOptions != null) {
            options = this.props.availableOptions.map((data) =>
                <option key={data.value} value={data.value}>
                    {data.label}
                </option>
            );
        }

        return (
            <select name={this.props.component + "Select"} className={this.props.component + "Select"} onChange={this.handleChange.bind(this)}>
                <option>Select a {this.props.component}...</option>
                {options}
            </select>
        )
    }
}

export default Select;
