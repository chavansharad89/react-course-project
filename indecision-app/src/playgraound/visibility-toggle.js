
class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleShowHide = this.handleShowHide.bind(this);
        this.state = {
            showToggle : false
        };
    }

    handleShowHide() {
        this.setState((prevState) => {
            return {
                showToggle: !prevState.showToggle
            }
        });
    }

     render() {
         return (
             <div>
                 <button onClick={this.handleShowHide}>{this.state.showToggle ? 'Hide Details': 'Show Details' }</button>
                 {
                     this.state.showToggle && (
                     <div>
                         <p>Hey there are some details, you can see!</p>
                     </div>
                     )
                 }
             </div>
         );
     }
 }

 ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));