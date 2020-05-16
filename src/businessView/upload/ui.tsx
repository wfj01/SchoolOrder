import { Icon, message, Upload } from 'antd';
import React from 'react';

function getBase64(img: Blob, callback: { (imageUrl: any): void; (arg0: string | ArrayBuffer | null): any; }) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
  console.log("imgimgimgimgimgimgimgimgimgimg:",img);
}

function beforeUpload(file: { type: string; size: number; }) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('你只能上传照片');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('照片大小只能2m');
  }
  return isJpgOrPng && isLt2M;
}

interface IAvatarState {
  imageUrl: any,
  loading: boolean,
}

export class Avatarview extends React.Component<any, IAvatarState>{

  constructor(props: any) {
    super(props);
    this.state = {
      imageUrl: "",
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);

  }

  public render() {

    const uploadButton = (
      <div>
        {this.state.loading ? <Icon type="loading" /> : <Icon type="plus" />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }

  private handleChange = (info:any) => {
    console.log("imageurl1111:",this.state.imageUrl);

    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: any) =>
        this.setState({
          imageUrl,
          loading: false,
        }
        ),
        );
        console.log("imageurl:",this.state.imageUrl);
    }
  };
}