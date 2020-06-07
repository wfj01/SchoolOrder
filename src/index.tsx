import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ListView } from './listview/ui';
import DemoStore from './stores';
import { MenuView } from './studentView/listView/ui';

/**
 * 程序运行入口
 */
export class Demo extends React.Component{
  public render(){
      return(
          <Provider{...DemoStore}>
              <ListView/>
          </Provider>
      )
  }
}

ReactDOM.render(
  <BrowserRouter>   
      <Demo />
  </BrowserRouter>,
  document.getElementById('root'));