import Qiniu, {Auth, ImgOps, Conf, Rs, Rpc} from 'react-native-qiniu';
import moment from 'moment';
import {Toast} from 'antd-mobile';
Conf.ACCESS_KEY = 'ACCESS_KEY';
Conf.SECRET_KEY = 'SECRET_KEY';
Conf.UP_HOST = 'https://up.qbox.me';
class QiniuUpload {
    static uploadFile(qiniuFileObj) {
        const fileUrl = qiniuFileObj.fileUrl;
        const fileName = qiniuFileObj.fileName;
        const key = `${qiniuFileObj.qiniuUploadDirectory}/${moment(new Date()).format('YYYY-MM-DD')}/${fileName}`;
        const putPolicy = new Auth.PutPolicy2(
            {scope: `dashidai-private-prod:${key}`}
        );
        const uptoken = putPolicy.token();
        const formInput = {
            key: key
        };
        return Rpc.uploadFile(fileUrl, uptoken, formInput)
    }
}

export default QiniuUpload