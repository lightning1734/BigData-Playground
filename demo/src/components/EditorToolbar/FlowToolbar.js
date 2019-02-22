import React from 'react';
import { Tooltip, Divider, Modal, Button, Input, Link, HashRouter, Route  } from 'antd';
import { Toolbar, Command } from '@src';
import styles from './index.less';
import iconfont from '../../theme/iconfont.less';
import {AppendingLineChart} from "../linechart/linechart.ts";
import d3 from "d3"
import {run} from "../MnistTest/mnist"
import { withPropsAPI } from '@src';


class FlowToolbar extends React.Component {

  state = {
    visible: false,
    running : false,
     }

  showDetail(){
    this.setState({
      visible: true,
    });
    const { propsAPI } = this.props;
    console.log(propsAPI.save())
    
    var Sourc = propsAPI.save().nodes[0].id;
    var tag = 'Input';
    for (let indexN of propsAPI.save().nodes.keys()) {
      if ('Input' === propsAPI.save().nodes[indexN].label) {
        Sourc = propsAPI.save().nodes[indexN].id;
        break;
      }
    }

    for (var k = 0; k < propsAPI.save().nodes.length; k++) {

      // switch (tag) {
      //   case 'Input':

      //   case 'Output':

      //   case 'ConvNet':

      //   case 'DensenNet':

      //   default:
      //     throw new Error();
      // }

      for (let indexE of propsAPI.save().edges.keys()) {

        if (Sourc === propsAPI.save().edges[indexE].source) {
          Sourc = propsAPI.save().edges[indexE].target;
          console.log(Sourc);
          for (let indexN of propsAPI.save().nodes.keys()) {
            if (Sourc === propsAPI.save().nodes[indexN].id) {
              tag = propsAPI.save().nodes[indexN].label;
              console.log(tag);
              break;
            }
          }
          break;
        }
      }
    }
  }
  
 handleLegal() {
    const { propsAPI } = this.props;
    var isLegal = 0;
    var noneed = 1;
    const lenE = propsAPI.save().edges.length;
    const LenE =lenE;

    if (lenE > 0) {
      var Sourc;
      let path = new Array(propsAPI.save().nodes.length).fill(0);

      for (let indexN of propsAPI.save().nodes.keys()) {
        if ('Input' === propsAPI.save().nodes[indexN].label) {
          Sourc = propsAPI.save().nodes[indexN].id;
          path[indexN] = 1;
          noneed = 0;
          break;
        }
      }
      if(noneed === 0) {
        for (var k = 0; k < lenE; k++) {

          for (let indexE of propsAPI.save().edges.keys()) {
            if (Sourc === propsAPI.save().edges[indexE].source) {
              Sourc = propsAPI.save().edges[indexE].target;

              for (let indexN of propsAPI.save().nodes.keys()) {
                if (propsAPI.save().nodes[indexN].id === Sourc) {
                  if (path[indexN] === 0) {
                    if (k === LenE - 1 && propsAPI.save().nodes[indexN].label === 'Output') {
                      isLegal = 1;
                      break;
                    } else {
                      path[indexN] = 1;
                      break;
                    }
                  } else {
                    noneed = 1;
                    break;
                  }
                }
              }
              break;
            }
          }
          if (noneed === 1) {
            break;
          }
        }
      }
    }
    if(isLegal === 1) {
      alert('legal');
    }else{
      alert('illegal');
    }

  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  showLine = () =>{

    // var SVM = ML.SVM

    // var options = {
    //   C: 0.01,
    //   tol: 10e-4,
    //   maxPasses: 10,
    //   maxIterations: 10000,
    //   kernel: 'rbf',
    //   kernelOptions: {
    //     sigma: 0.5
    //   }
    // };

    // var svm = new SVM(options);

    // // Train the classifier - we give him an xor
    // var features = [[0,0],[0,1],[1,1],[1,0]];
    // var labels = [1, -1, 1, -1];
    // svm.train(features, labels);

    // // Let's see how narrow the margin is
    // var margins = svm.margin(features);

    // console.log(margins)

    // // Let's see if it is separable by testing on the training data
    // svm.predict(features); // [1, -1, 1, -1]

    // // I want to see what my support vectors are
    // var supportVectors = svm.supportVectors();
    
    // // Now we want to save the model for later use
    // var model = svm.toJSON();

    // /// ... later, you can make predictions without retraining the model
    // var importedSvm = SVM.load(model);
    // var res = importedSvm.predict(features); // [1, -1, 1, -1] 

    // console.log(res)
    run(100);
    // var lineChart = new AppendingLineChart(d3.select("#linechart"),
    //     ["#777", "black"]);

    // let i = 0;


    // let a1 = [];
    // let b1 = [];
    // for(let i = 0; i < 10; i++ ){
    //   let temp = Math.random()*10
    //   a1.push(temp);
    //   b1.push(2*temp+4.5+Math.random())
    // }

    // const train_x = tf.tensor1d(a1);
    // const train_y = tf.tensor1d(b1);
    // const f = x => w.mul(x).add(b);
    // const w = tf.variable(tf.scalar(Math.random()));
    // const b = tf.variable(tf.scalar(Math.random()));
    // const numIterations = 200;
    // const learningRate = 0.1;
    // const optimizer = tf.train.adam(learningRate);
    // const loss = (pred, label) => pred.sub(label).square().mean();

    // var loss_value = 0;

    // loss(f(train_x), train_y).data().then(function (value){
    //         loss_value=value[0]
    //      })

    // this.setState({
    //       running: true
    //     })

    //   var t = d3.timer(()=>{
    //     if (!this.state.running){
    //       return true;
    //     }
    //     {
    //       let loss_var = 0 ;
    //       optimizer.minimize(() => {      
    //         loss_var = loss(f(train_x), train_y);
    //         loss_var.data().then(function (value){
    //            loss_value=value[0]
    //         })
    //         return loss_var;
    //       })

    //       lineChart.addDataPoint([loss_value,loss_value]);
    //       i++;


    //       d3.select("#loss-train").text(loss_value);
    //       d3.select("#loss-test").text(loss_value);
    //       d3.select("#iter-number").text(i);


    
    //     }
        
    //     return false
    //     // return false
    //   }, 10); 
  }


  render() {
    return (
      <div>
      <div span={4} style={{float:"left", maxHeight:5}}>
          <Input placeholder='Search' style={{maxWidth:180,marginLeft:10}}></Input>
          <Button shape="circle" style={{marginLeft:20, marginRight:20}} icon="search" />
      </div>
      <Toolbar className={styles.toolbar}>
        <Command name="undo">
          <Tooltip title="撤销" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconUndo}`} />
          </Tooltip>
        </Command>
        <Command name="redo">
          <Tooltip title="重做" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconRedo}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="copy">
          <Tooltip title="复制" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconCopyO}`} />
          </Tooltip>
        </Command>
        <Command name="paste">
          <Tooltip title="粘贴" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconPasterO}`} />
          </Tooltip>
        </Command>
        <Command name="delete">
          <Tooltip title="删除" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconDeleteO}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="zoomIn">
          <Tooltip title="放大" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconZoomInO}`} />
          </Tooltip>
        </Command>
        <Command name="zoomOut">
          <Tooltip title="缩小" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconZoomOutO}`} />
          </Tooltip>
        </Command>
        <Command name="autoZoom">
          <Tooltip title="适应画布" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconFit}`} />
          </Tooltip>
        </Command>
        <Command name="resetZoom">
          <Tooltip title="实际尺寸" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconActualSizeO}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="toBack">
          <Tooltip title="层级后置" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconToBack}`} />
          </Tooltip>
        </Command>
        <Command name="toFront">
          <Tooltip title="层级前置" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconToFront}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="multiSelect">
          <Tooltip title="多选" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconSelect}`} />
          </Tooltip>
        </Command>
        <Command name="addGroup">
          <Tooltip title="成组" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconGroup}`} />
          </Tooltip>
        </Command>
        <Command name="unGroup">
          <Tooltip title="解组" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconUngroup}`} />
          </Tooltip>
        </Command>
        
        <Button className="" onClick={()=>this.handleLegal()}>isLegal</Button>
        <Button className={styles.runButton} size="small" onClick={()=>this.showDetail()}>run</Button>

        <Modal title="Basic Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>iter:
            <div id="iter-number"></div>
          </p>
          <p>train-loss:
            <div id="loss-train"></div>
          </p>
          {/* <p>test-loss:
            <div id="loss-test"></div>
          </p> */}

          <div id="linechart"></div>
          
          <div id="images">  </div>
          
          <Button type="primary" onClick={this.showLine}>start</Button>
          <span> </span>
          <Button type="primary" onClick={this.stopLine}>stop</Button>
        </Modal>

        <Button className={styles.buttonRight1} href='#'>用户</Button>
        <Button className={styles.buttonRight2} href='#'>退出</Button>
        {/* <Link to='/' className={styles.buttonRight2}>退出</Link>
              <Route exact={true}path='/' component={Home}></Route> */}

      </Toolbar>
      </div>
    );
  }
}

export default withPropsAPI(FlowToolbar);
