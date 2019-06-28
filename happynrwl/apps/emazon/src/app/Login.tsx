import React from 'react';
import { Modal, Button } from 'antd';


function Login({isModalVisible}) {
  // showModal = () => {
  //   this.setState({
  //     visible: true
  //   });
  // };

  // handleOk = () => {
  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     this.setState({ loading: false, visible: false });
  //   }, 3000);
  // };

  // handleCancel = () => {
  //   this.setState({ visible: false });
  // };


  return  <Modal
  visible={isModalVisible}
  title="Title"
  // onOk={this.handleOk}
  // onCancel={this.handleCancel}
  footer={[
    <Button key="back" >
      Return
    </Button>,
    <Button
      key="submit"
      type="primary"
      //loading={loading}
     // onClick={this.handleOk}
    >
      Submit
    </Button>
  ]}
>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</Modal>
}

// export class Login extends React.Component {
//   static defaultProps = {
//     isModalVisible: false
//   }
//   state = {
//     loading: false,
//     visible: false
//   };



//   render() {
//     const { visible, loading } = this.state;
//     return (
       
//     );
//   }
// }

export default Login;
