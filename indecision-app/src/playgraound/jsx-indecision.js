import React from 'react';
import ReactDOM from 'react-dom';


const  app = {
    title : 'Indicision App test 123',
    subtitle: "Without aim you are nothing",
    options: ['one', 'two']
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = ''; 
        renderDom();
    }
};

const onRemoveAll = (e) => {
    console.log(e.target);
    app.options = [];
    renderDom();
}

// const template = (
//     <div>
//         <h1> { app.title }</h1>
//         { app.subtitle && <p>{app.subtitle}</p>}
//         <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No Options'}</p>
//         <p>{app.options.length}</p>
//         <ol> 
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//         <form onSubmit = {onFormSubmit}> 
//             <input type="text" name="option" />
//             <button> Add Option</button>
//         </form>
//     </div>
// );

const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};

const onShowHideButton = (e) => {
    
}

const renderDom = () => {
    const template = (
        <div>
            <h1> { app.title }</h1>
            { app.subtitle && <p>{app.subtitle}</p>}
            <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onMakeDecision}  disabled = {app.options.length === 0} >What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol> 
            {
                app.options.map((option, index) => <li key={index}>{option}</li>)
            }
            </ol>
            <form onSubmit = {onFormSubmit}> 
                <input type="text" name="option" />
                <button> Add Option</button>
            </form>

            <button onClick={onShowHideButton}>Show Details </button>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderDom();
//ReactDOM.render(template, appRoot);
