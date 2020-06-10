import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BussinessView } from './businessView/MiddleView/listView/ui';
import './index.css';
import DemoStore from './stores';

/**
 * 程序运行入口
 */
export class Demo extends React.Component{
  public render(){
      return(
          <Provider{...DemoStore}>
              <BussinessView/>
          </Provider>
      )
  }
}

ReactDOM.render(
  <BrowserRouter>   
      <Demo />
  </BrowserRouter>,
  document.getElementById('root'));