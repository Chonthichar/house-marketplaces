import {
     Share
} from 'react-native';
 let shareImage = {
                title: caption,//string
                message: message,//string
                url:imageUrl,// eg.'http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg',

            };
            Share.open(shareImage).catch(err => console.log(err));