import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const inputHandler = event => {
    setInput(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (input.length <= 0) {
      return;
    }

    onSubmit(input);
    setInput('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={submitHandler}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputHandler}
          value={input}
        />
      </form>
    </header>
  );
};

// class Searchbar extends Component {
//   state = {
//     input: '',
//   };

//   inputHandler = event => {
//     const { target } = event;
//     this.setState({ input: target.value });
//   };

//   submitHandler = event => {
//     event.preventDefault();

//     if (this.state.input.length <= 0) {
//       return;
//     }

//     this.props.onSubmit(this.state);
//     this.setState({ input: '' });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.submitHandler}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.inputHandler}
//             value={this.state.input}
//           />
//         </form>
//       </header>
//     );
//   }
// }

export default Searchbar;
