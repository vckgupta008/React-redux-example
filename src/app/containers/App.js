import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { Todo } from "../components/Todo";
import { setName } from "../actions/userActions";
import { addList } from "../actions/todoActions"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
                <Todo list={this.props.todo} addList={(list)=>this.props.addList(list)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math,
      todo: state.todo
  };
};

const mapDispatchToProps = (dispatch) => {
    
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        addList: (list) => {
            console.log("dispatch set");
            dispatch(addList(list));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
