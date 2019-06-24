const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true,
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1,
            }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
