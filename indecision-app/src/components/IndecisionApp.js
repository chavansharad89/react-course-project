import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOptions from './AddOptions';
import Options from './Options';


export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch(error) {
            console.log(error);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem('options', options);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options : [] }));
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({ 
            options : prevState.options.filter(value => value !== option)
         }))
    }

    handlePick = () => {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomOption]);
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid vlue to add item.';
        } else if(this.state.options.indexOf(option) !== -1) {
            return 'Item already exists.'
        }
        this.setState((previousState) => ({ options : [...previousState.options, option] }));
    }

    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in hands of computer';
 
        return (
            <div>
                <Header title = {title} subTitle = {subTitle} />
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick} 
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions handleAddOption = {this.handleAddOption} />
            </div>
        );
    }
}
