import React from 'react';
import { Card } from 'antd';
import { ItemPanel, Item } from '@src';
import styles from './index.less';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class FlowItemPanel extends React.Component {

  render() {
    return (
      // <ItemPanel className={styles.itemPanel}>
      //   <Card bordered={false}>
      //     <Item
      //       type="node"
      //       size="72*72"
      //       shape="flow-circle"
      //       model={{
      //         color: '#FA8C16',
      //         label: '起止节点',
      //       }}
      //       //src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
      //     />
      //     <Item
      //       type="node"
      //       size="80*48"
      //       shape="flow-rect"
      //       model={{
      //         color: '#1890FF',
      //         label: '常规节点',
      //       }}
      //       src="https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg"
      //     />
      //     <Item
      //       type="node"
      //       size="80*72"
      //       shape="flow-rhombus"
      //       model={{
      //         color: '#13C2C2',
      //         label: '分叉节点',
      //       }}
      //       src="https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg"
      //     />
      //     <Item
      //       type="node"
      //       size="80*48"
      //       shape="flow-capsule"
      //       model={{
      //         color: '#722ED1',
      //         label: '模型节点',
      //       }}
      //       src="https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg"
      //     />
      //     <button>hello</button>
      //   </Card>
      // </ItemPanel>
      
      <Menu
      span={4}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      className={styles.scrollapp}
    >
      <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Mnist</span></span>}>
        <MenuItemGroup key="g1" title="Data">
        
          <Menu.Item key="1"><ItemPanel><Item
            type="node"
            size="200*40"
            shape="flow-rect"
            model={{
              // color: '#FA8C16',
              label: 'Input',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
          /></ItemPanel></Menu.Item>
          <Menu.Item key="2"><ItemPanel><Item
            type="node"
            size="200*40"
            shape="flow-rect"
            model={{
              // color: '#FA8C16',
              label: 'Output',
            }}
            
            src="https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg"
          /></ItemPanel></Menu.Item>
        
        </MenuItemGroup>
        <MenuItemGroup key="g2" title="Model">
       
          <Menu.Item key="3"><ItemPanel><Item
            type="node"
            size="200*40"
            shape="flow-rect"
            model={{
              // color: '#13C2C2',
              label: 'ConvNet',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg"
          /></ItemPanel></Menu.Item>
          <Menu.Item key="4"><ItemPanel><Item
            type="node"
            size="200*40"
            shape="flow-rect"
            model={{
              // color: '#722ED1',
              label: 'DenseNet',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg"
          /></ItemPanel></Menu.Item>
          
        </MenuItemGroup>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Iris</span></span>}>
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Titanic</span></span>}>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>

    );
  }
}

export default FlowItemPanel;
