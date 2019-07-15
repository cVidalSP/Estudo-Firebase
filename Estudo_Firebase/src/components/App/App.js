import React, {Component} from 'react';
import {MuiThemeProvider,createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import red from 'material-ui/colors/red';
import { DataTable } from '../DataTable/DataTable';
import FirebaseService from '../../utils/services/FirebaseService';

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

class App extends Component {

  state = {
    data: []
  }

  componentDidMount(){
    FirebaseService.getDataList('usuarios', (dataReceived) =>    this.setState({data: dataReceived}))
  }

    render() {
      console.log("AAA",this.state.data);
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography type="title" color="inherit">
                                My Awesome React App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <DataTable data={this.state.data}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;