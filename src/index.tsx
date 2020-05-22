import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BusinessListView } from './businessView/listView/ui';
import './index.css';
import DemoStore from './stores';

/**
 * 程序运行入口
 */
export class Demo extends React.Component{
  public render(){
      return(
          <Provider{...DemoStore}>
              <BusinessListView/>
          </Provider>
      )
  }
}

ReactDOM.render(
  <BrowserRouter>   
      <Demo />
  </BrowserRouter>,
  document.getElementById('root'));