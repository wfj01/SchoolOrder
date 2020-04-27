import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BusinessListView } from './businessView/listview/ui';
import './index.css';
// import { ListView } from './listview/ui';
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
  <div>   
      <Demo />
  </div>,
  document.getElementById('root'));